import React from 'react';
import Link from 'next/link';
import ToggleSwitch from './toggleSwitch';
import { montserrat } from '../styles/font';


function Navbar() {
  return (
<nav className="sticky top-0 z-50 bg-white dark:bg-gray-400 text-black dark:text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
          <div className={`${montserrat.className} text-4xl font-black`}>Cyril<span className='text-[#FF0266]'>.</span></div>
        <div className="flex-1">
        </div>

       {/* Center: Nav Links */}
        <div className="flex-1 flex justify-center gap-10 text-xl">
          {["About", "Experience", "Works"].map((text, index) => (
            <Link
              key={index}
              href="/"
              className={`
                ${montserrat.className}
                text-xl font-black
                border-2 border-transparent
                rounded-md px-4 py-1
                transition duration-300
                hover:bg-[#FF0266]
              `}
            >
              {text}
            </Link>
          ))}
        </div>

        {/* Right: Button Placeholder */}
        <div className="flex-1 flex justify-end">
          <ToggleSwitch />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
