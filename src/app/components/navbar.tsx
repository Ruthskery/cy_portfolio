import React from 'react';
import Link from 'next/link';
// import ToggleSwitch from '../../../components/toggleSwitch';
import { montserrat } from '../../../styles/font';
import { Search, ChevronDown  } from 'lucide-react';
import Image from 'next/image';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#3a599b] text-white p-2 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-center sm:justify-center items-center gap-2 sm:gap-3 md:gap-5 px-2 sm:px-4">
        
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

        {/* Search Bar - Original desktop design with pr-80, responsive on mobile */}
        <div className='w-full sm:w-auto sm:pr-80'>
          <div className="flex items-center bg-white rounded-md px-2 sm:px-3 py-1 shadow-inner gap-30">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-black placeholder-gray-500 text-sm sm:text-base w-full"
            />
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
          </div>
        </div>

        {/* Navigation Links - Hidden on small screens, shown on medium+ */}
        <div className="hidden md:flex items-center gap-5">
          {["Home", "Profile", "Account"].map((text, index) => (
            <Link
              key={index}
              href="/"
              className={`
                ${montserrat.className}
                text-sm font-medium
                flex items-center gap-1
              `}
            >
              {text}

              {text === "Account" && (
                <ChevronDown className="w-4 h-4 mt-[1px]" />
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
