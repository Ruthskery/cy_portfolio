'use client'
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import Navbar from '../../components/navbar';
import About from '../../sections/about';
import Experience from '../../sections/experience';
import RotatingText from '../../components/RotatingText';

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  const maxOffset = 1500; // your desired horizontal scroll distance

  useEffect(() => {
    // Only runs on client
    setViewportHeight(window.innerHeight);

    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const horizontalOffset = Math.min(offsetY, maxOffset);
  const containerHeight = maxOffset + viewportHeight; // safe because viewportHeight is 0 on SSR

  return (
    <ThemeProvider>
      <Navbar />
      <div className="relative w-full" style={{ height: containerHeight }}>
        <div className="sticky top-0 flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 text-center overflow-hidden">
          <p
            className="text-8xl font-black text-gray-800 dark:text-gray-200 mb-2 flex flex-wrap items-center justify-center"
            style={{ transform: `translateX(${horizontalOffset}px)` }}
          >     
          <RotatingText
            texts={['Hello', 'Kumusta', 'Bonjour', 'Hola', 'Ciao']}
            mainClassName="px-2 sm:px-2 md:px-3 text-gray-800 dark:text-gray-200 overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg inline-block"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />{" "}
          , I am
        </p>

          <h1 className="text-9xl font-black text-gray-800 dark:text-gray-200 mb-2">
            CYRIL IMPERIAL
          </h1>

          <p
            className="text-8xl font-black text-gray-800 dark:text-gray-200 mt-2"
            style={{ transform: `translateX(${-horizontalOffset}px)` }}
          >
            Full-Stack Developer
          </p>
        </div>
      </div>

      <About />
      <Experience />
    </ThemeProvider>
  );
}

export default App;
