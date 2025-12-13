'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa"
import { Users, Newspaper, MessagesSquare, Calendar, Images, AppWindow, Dices, NotebookText, ShoppingCart } from 'lucide-react';

import aboutMe from '../../../public/images/meNight.png'
import aboutMeDark from '../../../public/images/meLight.png'
import aboutMeHoverDark from '../../../public/images/ShymeLight.png'
import aboutMeHover from '../../../public/images/ShymeNight.png'

function About() {

  const [isHovered, setIsHovered] = useState(false)

  const MenuItem = ({ icon: Icon, label }: { icon: React.ComponentType<{ className: string }>; label: string }) => (
    <li className="flex items-center gap-2 py-1 cursor-pointer hover:text-[#0f2044]">
      <Icon className="w-4 h-4 text-[#0f2044] transition" />
      <span>{label}</span>
    </li>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

        {/* COLUMN 1 — IMAGE */}
        <div className="flex flex-col gap-6 border-r-1 w-[80%]">
          {/* Image + Name Row */}
          <div className="flex items-center gap-4">

            {/* Light mode image */}
            <Image
              src={isHovered ? aboutMeHoverDark : aboutMeDark}
              alt="About Me"
              className="w-34 h-34 object-cover rounded-xl shadow-lg dark:hidden cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />

            {/* Dark mode image */}
            <Image
              src={isHovered ? aboutMeHover : aboutMe}
              alt="About Me"
              className="w-34 h-34 object-cover rounded-xl shadow-lg hidden dark:block cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />

            {/* NAME + EDIT PROFILE */}
            <div className="flex flex-col ">

              <span className="text-sm text-left font-bold text-gray-800 dark:text-gray-200">
                Cyril Imperial
              </span>

              <button className="text-sm  text-left text-blue-600 dark:text-blue-400 hover:underline">
                Download my CV
              </button>
            </div>
            
          </div>

        <ul className="flex flex-col w-full text-2xl text-gray-800 dark:text-gray-200">

          {/* TITLE */}
          <li className="flex items-center gap-2 py-1 font-bold">
            <Newspaper className="w-4 h-4 text-[#0f2044]" />
            <span>News Feed</span>
          </li>

          <div className="font-normal">

            <MenuItem icon={MessagesSquare} label="Messages" />
            <MenuItem icon={Calendar} label="Events" />
            <MenuItem icon={Images} label="Photos" />
            <MenuItem icon={Users} label="Friends" />

            {/* LINE SEPARATOR */}
            <li className="w-[30%] border-t border-gray-400 dark:border-gray-600 my-2"></li>

            <MenuItem icon={AppWindow} label="Applications" />
            <MenuItem icon={Dices} label="Games" />
            <MenuItem icon={NotebookText} label="Ads and Pages" />
            <MenuItem icon={ShoppingCart} label="Marketplace" />
            <MenuItem icon={Users} label="Ninja Saga" />

            <li className="py-1 pl-6">Wild Ones</li>
            <li className="py-1 pl-6">More</li>

            {/* LINE SEPARATOR */}
            <li className="w-[30%] border-t border-gray-400 dark:border-gray-600 my-2"></li>

            <li className="py-1 font-semibold">Friends Online</li>
          </div>
        </ul>

        </div>

        {/* COLUMN 2 — TITLE + NAME + INTRO */}
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            About
          </h2>

          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Cyril Christian B. Imperial
          </h3>

          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I’m a fresh graduate of <span className="font-semibold">Bachelor of Science in Information Technology</span>.
            Actively seeking opportunities to kickstart my career.
          </p>
        </div>

        {/* COLUMN 3 — SKILLS + CV + SOCIALS */}
        <div className="flex flex-col text-center md:text-left">

          {/* Skills / Interests */}
          <ul className="grid grid-cols-1 gap-3 text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-6">
            <li>React, Next.js, Laravel & full-stack tools</li>
            <li>Passionate about Python & C#</li>
            <li>Love exploring machine learning & AI</li>
            <li>Tinkering with Raspberry Pi & IoT</li>
            <li>Cryptocurrency trading & investing</li>
            <li>Enjoy gaming & building PCs</li>
          </ul>

          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Hire me, please? 🙏
          </p>

          {/* CV + Social Icons */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-center md:justify-start items-center gap-5">

            {/* CV Button */}
            <a
              href="https://drive.google.com/file/d/1ux-YQX0Hk42eDIL6_uP9kgVLUrvdz0dg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg 
              shadow-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
            >
              Download CV
            </a>

            {/* Social Icons */}
            <div className="flex gap-5 text-3xl sm:text-4xl text-gray-800 dark:text-gray-200">
              <a href="https://www.facebook.com/Cyril.Christian.Imperial" target="_blank"><FaFacebookF /></a>
              <a href="https://www.instagram.com/ruthsimperial/" target="_blank"><FaInstagram /></a>
              <a href="https://www.tiktok.com/@codewithruths?lang=en" target="_blank"><FaTiktok /></a>
              <a href="https://github.com/Ruthskery/" target="_blank"><FaGithub /></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
