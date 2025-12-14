import React from 'react';
import Link from 'next/link';
// import ToggleSwitch from '../../../components/toggleSwitch';
import { montserrat } from '../../../styles/font';
import { Search, ChevronDown  } from 'lucide-react';
import Image from 'next/image';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#3a599b] text-white p-2 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-2 sm:gap-3 md:gap-5 px-2 sm:px-4">
        
        {/* Left: Logo */}
        <div className={`${montserrat.className} text-xl sm:text-2xl md:text-3xl font-black`}>
          Roots
        </div>

        {/* Icons - Hidden on very small screens */}
        <div className="hidden sm:flex items-center gap-2 pt-3">
            <Image
              src="/nav/userNav.png"
              alt="Navigation User"
              width={20}
              height={20}
            />
            <Image
              src="/nav/messageNav.png"
              alt="Messages"
              width={20}
              height={20}
            />
            <Image
              src="/nav/globeNav.png"
              alt="Globe"
              width={20}
              height={20}
            />
        </div>

        {/* Search Bar - Responsive width */}
        <div className='flex-1 min-w-0 max-w-full sm:max-w-xs md:max-w-md lg:max-w-lg xl:pr-80'>
          <div className="flex items-center bg-white rounded-md px-2 sm:px-3 py-1 shadow-inner">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-black placeholder-gray-500 text-sm sm:text-base w-full min-w-0"
            />
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
          </div>
        </div>

        {/* Navigation Links - Hidden on small screens, shown on medium+ */}
        <div className="hidden md:flex items-center gap-3 lg:gap-5">
          {["Home", "Profile", "Account"].map((text, index) => (
            <Link
              key={index}
              href="/"
              className={`
                ${montserrat.className}
                text-xs sm:text-sm font-medium
                flex items-center gap-1
                whitespace-nowrap
              `}
            >
              {text}

              {text === "Account" && (
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 mt-[1px]" />
              )}
            </Link>
          ))}
        </div>

        {/* Toggle Switch */}
        {/* <ToggleSwitch /> */}
      </div>
    </nav>
  );
}

export default Navbar;
