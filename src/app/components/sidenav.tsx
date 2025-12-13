'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import aboutMe from '../../../public/images/meNight.png'
import aboutMeDark from '../../../public/images/meLight.png'
import aboutMeHoverDark from '../../../public/images/ShymeLight.png'
import aboutMeHover from '../../../public/images/ShymeNight.png'

function Sidenav() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <nav className="w-full max-w-[220px]">

      {/* ================= PROFILE ================= */}
      <div className="flex items-center gap-3 mb-4 px-2">
        {/* Light mode */}
        <Image
          src={isHovered ? aboutMeHoverDark : aboutMeDark}
          alt="Profile picture"
          width={56}
          height={56}
          className="rounded-lg shadow-sm cursor-pointer dark:hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

        {/* Dark mode */}
        <Image
          src={isHovered ? aboutMeHover : aboutMe}
          alt="Profile picture"
          width={56}
          height={56}
          className="rounded-lg shadow-sm cursor-pointer hidden dark:block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-[#1c1e21] dark:text-gray-200">
            Cyril Imperial
          </span>
          <a
            href="/cv/Imperial_CV.pdf"
            download
            className="text-xs text-[#1877f2] hover:underline text-left"
          >
            Download my CV
          </a>
        </div>
      </div>

      {/* ================= MENU ================= */}

        {/* MAIN */}
        <ul className="space-y-1">
          <li className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-md hover:bg-[#f5f6f7]">
            <Image
              src="/icons/news.png"
              alt="News Feed"
              width={30}
              height={30}
            />
            <span>News Feed</span>
          </li>

          <li className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-md hover:bg-[#f5f6f7]">
            <Image
              src="/icons/messages.png"
              alt="Messages"
              width={30}
              height={30}
            />
            <span>Messages</span>
          </li>

          <li className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-md hover:bg-[#f5f6f7]">
            <Image
              src="/icons/calendar.png"
              alt="Events"
              width={30}
              height={30}
            />
            <span>Events</span>
          </li>

          <li className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-md hover:bg-[#f5f6f7]">
            <Image
              src="/icons/photos.png"
              alt="Photos"
              width={30}
              height={30}
            />
            <span>Photos</span>
          </li>

           <li className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-md hover:bg-[#f5f6f7]">
            <Image
              src="/icons/friends.png"
              alt="Friends"
              width={30}
              height={30}
            />
            <span>Friends</span>
          </li>

          {/* DIVIDER */}
          <li className="my-2 border-t border-[#d8dfea]" />

          <li className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-md hover:bg-[#f5f6f7]">
            <Image
              src="/icons/application.png"
              alt="Applications"
              width={30}
              height={30}
            />
            <span>Applications</span>
          </li>

          <li className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-md hover:bg-[#f5f6f7]">
            <Image
              src="/icons/games.png"
              alt="Games"
              width={30}
              height={30}
            />
            <span>Games</span>
          </li>

          <li className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-md hover:bg-[#f5f6f7]">
            <Image
              src="/icons/ads.png"
              alt="Ads and Pages"
              width={30}
              height={30}
            />
            <span>Ads and Pages</span>
          </li>

          <li className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-md hover:bg-[#f5f6f7]">
            <Image
              src="/icons/marketplace.png"
              alt="Maketplace"
              width={30}
              height={30}
            />
            <span>Maketplace</span>
          </li>

           {/* DIVIDER */}
          <li className="my-2 border-t border-[#d8dfea]" />

        

          <li className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-sm text-[#1c1e21] hover:bg-[#f5f6f7]">
            <Image
              src="/icons/ninjasaga.png"
              alt="Ninja Saga"
              width={30}
              height={30}
            />
            <span>Ninja Saga</span>
          </li>

          <li className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-sm text-[#1c1e21] hover:bg-[#f5f6f7]">
            <Image
              src="/icons/farmville.png"
              alt="Farmville"
              width={30}
              height={30}
            />
            <span>Farmville</span>
          </li>

          <li className="px-2 py-1 rounded cursor-pointer text-sm text-[#1c1e21] hover:bg-[#f5f6f7]">
            More
          </li>

          {/* DIVIDER */}
          <li className="my-2 border-t border-[#d8dfea]" />

          <li className="px-2 py-1 text-xs font-semibold uppercase text-gray-500">
            Friends Online
          </li>

          <li className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-sm text-[#1c1e21] hover:bg-[#f5f6f7]">
            <Image
              src="/people/dwight.jpg"
              alt="Dwight Aquino"
              width={30}
              height={30}
            />
            <span>Dwight Aquino</span>

            {/* Green online dot */}
            <span className="w-2 h-2 bg-green-500 rounded-full border border-white inline-block"
            aria-label="Online"/>
          </li>

          <li className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-sm text-[#1c1e21] hover:bg-[#f5f6f7]">
            <Image
              src="/people/dave.jpg"
              alt="Dave Triñanes"
              width={30}
              height={30}
            />
            <span>Dave Triñanes</span>

            {/* Green online dot */}
            <span className="w-2 h-2 bg-green-500 rounded-full border border-white inline-block"
            aria-label="Online"/>
          </li>

          <li className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-sm text-[#1c1e21] hover:bg-[#f5f6f7]">
            <Image
              src="/people/ter.jpg"
              alt="Ter David"
              width={30}
              height={30}
            />
            <span>Ter David</span>

            {/* Green online dot */}
            <span className="w-2 h-2 bg-green-500 rounded-full border border-white inline-block"
            aria-label="Online"/>
          </li>

          <li className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-sm text-[#1c1e21] hover:bg-[#f5f6f7]">
            <Image
              src="/people/art.jpg"
              alt="Art Gian Juan"
              width={30}
              height={30}
            />
            <span>Art Gian Juan</span>

            {/* Green online dot */}
            <span className="w-2 h-2 bg-green-500 rounded-full border border-white inline-block"
            aria-label="Online"/>
          </li>

          <li className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-sm text-[#1c1e21] hover:bg-[#f5f6f7]">
            <Image
              src="/people/bryl.jpg"
              alt="Byrl Lim"
              width={30}
              height={30}
            />
            <span>Byrl Lim</span>

            {/* Green online dot */}
            <span className="w-2 h-2 bg-green-500 rounded-full border border-white inline-block"
            aria-label="Online"/>
          </li>

          <li className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-sm text-[#1c1e21] hover:bg-[#f5f6f7]">
            <Image
              src="/people/rod.jpg"
              alt="Boss Rod"
              width={30}
              height={30}
            />
            <span>Boss Rod</span>

            {/* Green online dot */}
            <span className="w-2 h-2 bg-green-500 rounded-full border border-white inline-block"
            aria-label="Online"/>
          </li>

          <li className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-sm text-[#1c1e21] hover:bg-[#f5f6f7]">
            <Image
              src="/people/ismael.jpg"
              alt="Ismael Jerusalem"
              width={30}
              height={30}
            />
            <span>Ismael Jerusalem</span>
            
            {/* Green online dot */}
            <span className="w-2 h-2 bg-green-500 rounded-full border border-white inline-block"
            aria-label="Online"/>
          </li>

        </ul>

    </nav>
  )
}

export default Sidenav
