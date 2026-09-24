'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

export type ChibiMode = 'hero' | 'contact' | 'ai';

const MODEL_PATH = '/models/cyril-stylized-portrait.obj';
const MATERIAL_PATH = '/models/cyril-stylized-portrait.mtl';

export default function ChibiStage({ mode }: { mode: ChibiMode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const setModeRef = useRef<(m: ChibiMode) => void>(() => {});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const stageCanvas = canvas;

    const renderer = new THREE.WebGLRenderer({
      canvas: stageCanvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 1.05, 15.8);
    camera.lookAt(0, 0.25, 0);

    scene.add(new THREE.HemisphereLight(0xffffff, 0xece2d2, 0.82));

    const key = new THREE.DirectionalLight(0xffffff, 1.18);
    key.position.set(2.2, 7.4, 4.4);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 30;
    key.shadow.camera.left = -7;
    key.shadow.camera.right = 7;
    key.shadow.camera.top = 7;
    key.shadow.camera.bottom = -7;
    key.shadow.bias = -0.0004;
    key.shadow.radius = 7;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xfff2e8, 0.5);
    fill.position.set(-5, 1.6, 3.2);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0xff8a6b, 0.86);
    rim.position.set(-3.4, 4.4, -6);
    scene.add(rim);

    const figure = new THREE.Group();
    scene.add(figure);

    const modelRoot = new THREE.Group();
    modelRoot.rotation.y = Math.PI;
    modelRoot.scale.setScalar(1.42);
    modelRoot.position.y = -1.82;
    figure.add(modelRoot);

    const placeholder = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.56, 1.7, 8, 24),
      new THREE.MeshStandardMaterial({
        color: 0x1a1c22,
        roughness: 0.42,
        metalness: 0.04,
      })
    );
    placeholder.position.y = 0.3;
    placeholder.castShadow = true;
    placeholder.receiveShadow = true;
    modelRoot.add(placeholder);

    const base = new THREE.Group();
    const disc = new THREE.Mesh(
      new THREE.CylinderGeometry(1.22, 1.32, 0.22, 64),
      new THREE.MeshStandardMaterial({
        color: 0xff5a3c,
        roughness: 0.35,
        metalness: 0.05,
      })
    );
    disc.castShadow = true;
    disc.receiveShadow = true;
    const discTop = new THREE.Mesh(
      new THREE.CylinderGeometry(1.12, 1.12, 0.04, 64),
      new THREE.MeshStandardMaterial({ color: 0xff7a5e, roughness: 0.3 })
    );
    discTop.position.y = 0.12;
    base.add(disc, discTop);
    base.position.y = -1.9;
    figure.add(base);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(24, 24),
      new THREE.ShadowMaterial({ opacity: 0.16 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2.6;
    ground.receiveShadow = true;
    scene.add(ground);

    const managedObjects: THREE.Object3D[] = [figure, ground];
    let cancelled = false;
    const mtlLoader = new MTLLoader();
    mtlLoader.setResourcePath('/models/');
    mtlLoader.load(MATERIAL_PATH, (materials) => {
      if (cancelled) return;
      materials.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(MODEL_PATH, (object) => {
        if (cancelled) {
          disposeObject(object);
          return;
        }
        placeholder.removeFromParent();
        placeholder.geometry.dispose();
        disposeMaterial(placeholder.material);

        object.traverse((child) => {
          const mesh = child as THREE.Mesh;
          if (!mesh.isMesh) return;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          mesh.geometry.computeVertexNormals();

          const material = mesh.material;
          if (Array.isArray(material)) {
            material.forEach(tuneMaterial);
          } else {
            tuneMaterial(material);
          }
        });

        modelRoot.add(object);
        renderer.render(scene, camera);
      });
    });

    const HERO_Y = -1.05;
    let targetX = 0;
    let curX = 0;
    let targetScale = 1;
    let curScale = 1;
    let targetY = HERO_Y;
    let curY = HERO_Y;
    let currentMode: ChibiMode = 'hero';

    function computeTargets() {
      const width = window.innerWidth;
      if (currentMode === 'ai') {
        if (width < 820) {
          targetX = 0;
          targetY = HERO_Y + 0.65;
          targetScale = 0.54;
        } else {
          targetX = -2.9;
          targetY = HERO_Y + 0.5;
          targetScale = 0.72;
        }
      } else if (currentMode === 'contact') {
        targetX = 0;
        targetY = HERO_Y + 2;
        targetScale = 0.74;
      } else {
        targetX = 0;
        targetY = HERO_Y;
        targetScale = 1;
      }
    }

    setModeRef.current = (nextMode: ChibiMode) => {
      currentMode = nextMode;
      computeTargets();
    };

    const clock = new THREE.Clock();
    const spin = 0.55;
    let raf = 0;

    function animate() {
      raf = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.elapsedTime;

      figure.rotation.y += delta * spin;
      curX += (targetX - curX) * 0.08;
      curScale += (targetScale - curScale) * 0.08;
      curY += (targetY - curY) * 0.08;

      figure.position.x = curX;
      figure.position.y = curY + Math.sin(elapsed * 1.3) * 0.04;
      figure.scale.setScalar(curScale);

      const groundTarget = currentMode === 'hero' ? 0.16 : 0.05;
      const groundMaterial = ground.material as THREE.ShadowMaterial;
      groundMaterial.opacity += (groundTarget - groundMaterial.opacity) * 0.08;

      renderer.render(scene, camera);
    }

    function resize() {
      const width = stageCanvas.clientWidth;
      const height = stageCanvas.clientHeight;
      if (!width || !height) return;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      computeTargets();
    }

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      managedObjects.forEach(disposeObject);
      renderer.dispose();
      setModeRef.current = () => {};
    };
  }, []);

  useEffect(() => {
    setModeRef.current(mode);
  }, [mode]);

  return <canvas id="stage" ref={canvasRef} />;
}

function tuneMaterial(material: THREE.Material) {
  if (!(material instanceof THREE.MeshStandardMaterial)) return;

  material.roughness = Math.max(material.roughness, 0.34);
  material.metalness = Math.min(material.metalness, 0.08);
  material.needsUpdate = true;
}

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (mesh.geometry) mesh.geometry.dispose();

    const material = mesh.material as THREE.Material | THREE.Material[] | undefined;
    disposeMaterial(material);
  });
}

function disposeMaterial(material: THREE.Material | THREE.Material[] | undefined) {
  if (!material) return;

  if (Array.isArray(material)) {
    material.forEach(disposeMaterial);
    return;
  }

  material.dispose();
}
