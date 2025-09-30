'use client'
import React, { useEffect, useState } from 'react'
import RotatingText from '../components/RotatingText';


function Hero() {
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
    <div className="relative w-full" style={{ height: containerHeight }}>
        <div className="sticky top-0 flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 text-center overflow-hidden">
        {/* Floating Icon */}
          <div
            className="
              absolute p-3 rounded-full bg-blue-500 text-white shadow-lg
              top-4 right-4
              sm:top-6 sm:right-6
              md:top-8 md:right-8
              lg:top-10 lg:right-10
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          {/* Main Text */}
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
  )
}

export default Hero