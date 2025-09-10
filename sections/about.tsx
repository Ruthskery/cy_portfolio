'use client'
import React from 'react'
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaGithub } from "react-icons/fa";

import aboutMe from '../public/images/aboutMe.jpg';

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Column - Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={aboutMe}
            alt="About Me"
            className="w-64 h-64 md:w-150 md:h-150 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-5xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            About
          </h2>

          {/* Name & Title */}
          <h3 className="text-2xl font-semibold text-gray-1500 dark:text-gray-200 mb-4">
            Cyril Imperial - Full Stack Developer
          </h3>

          {/* Description */}
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Hi! I’m Cyril Imperial, a passionate Full-Stack Developer. I enjoy building modern web applications using React, Next.js, and other technologies. My goal is to create responsive, efficient, and beautiful digital experiences.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-4 text-gray-1500 dark:text-gray-200 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='text-amber-300 hover:text-cyan-500'>
              <FaGithub />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About