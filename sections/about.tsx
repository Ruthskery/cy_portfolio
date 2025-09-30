'use client'
import React from 'react'
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaGithub } from "react-icons/fa";

import aboutMe from '../public/images/aboutMe.jpg';

function About() {
  return (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4 py-12">
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Left Column - Image */}
      <div className="flex justify-center md:justify-end">
        <Image
          src={aboutMe}
          alt="About Me"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Right Column - Content */}
      <div className="flex flex-col justify-center text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          About
        </h2>

        {/* Name & Title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Cyril Christian B. Imperial
        </h3>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          I’m a fresh graduate of <span className="font-semibold">Bachelor of Science in Information Technology</span> and an aspiring <span className="font-semibold">Associate Full-Stack Developer</span>. Currently unemployed 😔 but actively seeking opportunities to kickstart my career.
        </p>

        {/* Skills / Interests in 3 Columns */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-6">
          <li className="flex items-start gap-2">
            React, Next.js, Laravel & other full-stack tools
          </li>
          <li className="flex items-start gap-2">
            Passionate about Python & C# 
          </li>
          <li className="flex items-start gap-2">
            Love exploring Machine learning & AI
          </li>
          <li className="flex items-start gap-2">
            Love tinkering with Raspberry Pi & IoT
          </li>
          <li className="flex items-start gap-2">
            Do Cyptocurrency trading & investing
          </li>
          <li className="flex items-start gap-2">
            Enjoy gaming & building PCs
          </li>
        </ul>

        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Hire me, please? 🙏
        </p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start gap-5 text-gray-800 dark:text-gray-200 text-3xl sm:text-4xl mb-8">
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
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-cyan-500"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>  
  </div>
  )
}

export default About