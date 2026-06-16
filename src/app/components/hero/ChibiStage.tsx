'use client';

/* ============================================================
   Cyril Imperial — chibi "designer toy" figure
   A Pop-Mart-style vinyl collectible: oversized round head with a
   printed photo face, a glossy charcoal "suit" body, little arms,
   on a coral turntable base. Spins continuously; can shrink and
   slide left for AI mode. Ported from the design handoff (three.js).
   ============================================================ */
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type ChibiMode = 'hero' | 'contact' | 'ai';

export default function ChibiStage({ mode }: { mode: ChibiMode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const setModeRef = useRef<(m: ChibiMode) => void>(() => {});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ACCENT = 0xff5a3c;
    const SUIT = 0x1a1c22;
    const SHIRT = 0xf2eee6;
    const VINYL = 0xeaddc6;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.96;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 1.15, 16.5);
    camera.lookAt(0, 0.12, 0);

    /* ---------- lighting: bright product studio ---------- */
    scene.add(new THREE.HemisphereLight(0xffffff, 0xece2d2, 0.8));
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(1.6, 8.4, 3.8);
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
    fill.position.set(-5, 1.5, 3);
    scene.add(fill);
    const rim = new THREE.DirectionalLight(0xff8a6b, 0.8); // warm coral rim
    rim.position.set(-3, 4, -6);
    scene.add(rim);

    /* ---------- the figure ---------- */
    const figure = new THREE.Group();
    scene.add(figure);

    const HEAD_R = 1.22;
    const HEAD_Y = 1.82;

    // HEAD — big vinyl sphere
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(HEAD_R, 64, 64),
      new THREE.MeshStandardMaterial({ color: VINYL, roughness: 0.52, metalness: 0.0 })
    );
    head.scale.set(1.04, 1.0, 1.02);
    head.position.y = HEAD_Y;
    head.castShadow = true;
    head.receiveShadow = true;
    figure.add(head);

    // FACE — printed photo on the front (sphere cap conforming to head)
    const faceCap = new THREE.Mesh(
      new THREE.SphereGeometry(
        HEAD_R * 1.012,
        64,
        64,
        Math.PI * 0.5 - Math.PI * 0.31,
        Math.PI * 0.62, // phi: front arc (~111°, centered on +z)
        1.02,
        1.06 // theta: front band centered on equator
      ),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.5,
        metalness: 0.0,
        transparent: true,
      })
    );
    faceCap.scale.set(1.04, 1.0, 1.02);
    faceCap.position.y = HEAD_Y;
    faceCap.rotation.y = 0; // sphere cap front already faces +z given phiStart
    figure.add(faceCap);

    // crop the face out of the portrait into a square canvas texture
    const loader = new THREE.TextureLoader();
    loader.load('/portrait.jpg', (tex) => {
      const img = tex.image as HTMLImageElement;
      const S = 1024;
      const cv = document.createElement('canvas');
      cv.width = S;
      cv.height = S;
      const cx = cv.getContext('2d');
      if (!cx) return;
      cx.fillStyle = '#eaddc6';
      cx.fillRect(0, 0, S, S);
      // crop region of the source photo (hair + face), tuned to portrait.jpg
      const iw = img.width;
      const ih = img.height;
      const sx = iw * 0.3;
      const sy = ih * 0.02;
      const sw = iw * 0.32;
      const sh = ih * 0.345;
      cx.drawImage(img, sx, sy, sw, sh, 0, 0, S, S);
      const ftex = new THREE.CanvasTexture(cv);
      ftex.colorSpace = THREE.SRGBColorSpace;
      ftex.minFilter = THREE.LinearFilter;
      ftex.magFilter = THREE.LinearFilter;
      ftex.generateMipmaps = false;
      // sphere-cap UVs run across the segment; nudge so the face sits centered
      const mat = faceCap.material as THREE.MeshStandardMaterial;
      mat.map = ftex;
      mat.color.set(0xffffff);
      mat.needsUpdate = true;
      renderer.render(scene, camera);
    });

    // HAIR hint — a thin dark crescent capping the very top/back of the head
    const hair = new THREE.Mesh(
      new THREE.SphereGeometry(HEAD_R * 1.03, 48, 48, 0, Math.PI * 2, 0, Math.PI * 0.34),
      new THREE.MeshStandardMaterial({ color: 0x17181d, roughness: 0.55 })
    );
    hair.scale.set(1.04, 1.0, 1.02);
    hair.position.y = HEAD_Y;
    hair.rotation.x = -0.18; // tip back slightly
    figure.add(hair);

    // BODY — smooth vinyl "suit" via lathe profile
    function latheBody() {
      const pts: THREE.Vector2[] = [];
      pts.push(new THREE.Vector2(0.001, -1.05));
      pts.push(new THREE.Vector2(0.55, -1.05));
      pts.push(new THREE.Vector2(0.74, -0.8));
      pts.push(new THREE.Vector2(0.82, -0.35));
      pts.push(new THREE.Vector2(0.83, 0.1));
      pts.push(new THREE.Vector2(0.74, 0.42));
      pts.push(new THREE.Vector2(0.5, 0.6));
      pts.push(new THREE.Vector2(0.28, 0.66));
      pts.push(new THREE.Vector2(0.001, 0.68));
      return new THREE.LatheGeometry(pts, 64);
    }
    const body = new THREE.Mesh(
      latheBody(),
      new THREE.MeshStandardMaterial({ color: SUIT, roughness: 0.36, metalness: 0.05 })
    );
    body.castShadow = true;
    body.receiveShadow = true;
    figure.add(body);

    // SHIRT — a small light wedge at the chest (front)
    const shirt = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 32, Math.PI * 0.5 - 0.5, 1.0, Math.PI * 0.5 - 0.4, 0.95),
      new THREE.MeshStandardMaterial({ color: SHIRT, roughness: 0.6 })
    );
    shirt.position.set(0, -0.05, 0.42);
    shirt.scale.set(0.9, 1.05, 0.7);
    figure.add(shirt);

    // ARMS — two stubby vinyl ellipsoids at the sides
    function arm(sign: number) {
      const a = new THREE.Mesh(
        new THREE.SphereGeometry(0.26, 32, 32),
        new THREE.MeshStandardMaterial({ color: SUIT, roughness: 0.42 })
      );
      a.scale.set(0.8, 1.5, 0.8);
      a.position.set(sign * 0.86, -0.25, 0.12);
      a.rotation.z = sign * 0.32;
      a.castShadow = true;
      figure.add(a);
    }
    arm(-1);
    arm(1);

    // BASE — coral turntable disc
    const base = new THREE.Group();
    const disc = new THREE.Mesh(
      new THREE.CylinderGeometry(1.12, 1.2, 0.22, 64),
      new THREE.MeshStandardMaterial({ color: ACCENT, roughness: 0.35, metalness: 0.05 })
    );
    disc.castShadow = true;
    disc.receiveShadow = true;
    const discTop = new THREE.Mesh(
      new THREE.CylinderGeometry(1.06, 1.06, 0.04, 64),
      new THREE.MeshStandardMaterial({ color: 0xff7a5e, roughness: 0.3 })
    );
    discTop.position.y = 0.12;
    base.add(disc);
    base.add(discTop);
    base.position.y = -1.18;
    figure.add(base);

    // raise whole figure so it visually centers around y≈0
    figure.position.y = -0.15;

    /* ---------- soft contact shadow ---------- */
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(24, 24),
      new THREE.ShadowMaterial({ opacity: 0.16 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2.6;
    ground.receiveShadow = true;
    scene.add(ground);

    /* ---------- mode: hero (center) <-> ai (small, left) <-> contact (lifted) ---------- */
    const HERO_Y = -1.15;
    let targetX = 0;
    let curX = 0;
    let targetScale = 1;
    let curScale = 1;
    let targetY = HERO_Y;
    let curY = HERO_Y;
    let currentMode: ChibiMode = 'hero';

    function computeTargets() {
      const w = window.innerWidth;
      if (currentMode === 'ai') {
        if (w < 820) {
          targetX = 0;
          targetY = HERO_Y + 0.7;
          targetScale = 0.52;
        } // mobile: top band
        else {
          targetX = -2.9;
          targetY = HERO_Y + 0.55;
          targetScale = 0.72;
        } // desktop: left
      } else if (currentMode === 'contact') {
        targetX = 0;
        targetY = HERO_Y + 2.0;
        targetScale = 0.74; // lift up, contact below
      } else {
        targetX = 0;
        targetY = HERO_Y;
        targetScale = 1;
      }
    }
    setModeRef.current = (m: ChibiMode) => {
      currentMode = m;
      computeTargets();
    };

    /* ---------- render loop: continuous spin ---------- */
    const clock = new THREE.Clock();
    const SPIN = 0.55; // rad/sec
    let raf = 0;
    function animate() {
      raf = requestAnimationFrame(animate);
      const dt = clock.getDelta();
      const t = clock.elapsedTime;
      figure.rotation.y += dt * SPIN;
      curX += (targetX - curX) * 0.08;
      curScale += (targetScale - curScale) * 0.08;
      curY += (targetY - curY) * 0.08;
      figure.position.x = curX;
      figure.position.y = curY + Math.sin(t * 1.3) * 0.04; // gentle float
      figure.scale.setScalar(curScale);
      const goTarget = currentMode === 'hero' ? 0.16 : 0.05;
      const gm = ground.material as THREE.ShadowMaterial;
      gm.opacity += (goTarget - gm.opacity) * 0.08;
      renderer.render(scene, camera);
    }

    function resize() {
      const w = canvas!.clientWidth;
      const h = canvas!.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      computeTargets();
    }
    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        const m = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(m)) m.forEach((mm) => mm.dispose());
        else if (m) m.dispose();
      });
      renderer.dispose();
      setModeRef.current = () => {};
    };
  }, []);

  // drive figure pose from the React-owned mode
  useEffect(() => {
    setModeRef.current(mode);
  }, [mode]);

  return <canvas id="stage" ref={canvasRef} />;
}
