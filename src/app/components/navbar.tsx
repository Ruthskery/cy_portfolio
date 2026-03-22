import React from 'react'
import Link from 'next/link'
import { montserrat } from '../../../styles/font'
import { Search, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const navIcons = [
  { src: '/nav/userNav.png', alt: 'Navigation User' },
  { src: '/nav/messageNav.png', alt: 'Messages' },
  { src: '/nav/globeNav.png', alt: 'Globe' },
]

const navLinks = ['Home', 'Profile', 'Account']

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#133783] bg-[#3b5998] text-white">
      <div className="mx-auto flex h-11 w-full max-w-[1220px] items-center gap-3 px-3">
        <div
          className={`${montserrat.className} text-[23px] font-black leading-none tracking-[-0.05em]`}
        >
          Roots
        </div>

        <div className="hidden items-center gap-1 sm:flex">
          {navIcons.map((icon) => (
            <Image
              key={icon.src}
              src={icon.src}
              alt={icon.alt}
              width={16}
              height={16}
            />
          ))}
        </div>

        <div className="ml-2 hidden w-[320px] md:block">
          <div className="flex items-center border border-[#29447e] bg-white px-2 py-[2px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent text-[11px] text-black outline-none placeholder:text-[#90949c]"
            />
            <Search className="h-3 w-3 flex-shrink-0 text-[#90949c]" />
          </div>
        </div>

        <div className="ml-auto hidden items-center gap-4 md:flex">
          {navLinks.map((text) => (
            <Link
              key={text}
              href="/"
              className="flex items-center gap-1 text-[11px] font-bold text-white hover:underline"
            >
              {text}
              {text === 'Account' ? <ChevronDown className="mt-[1px] h-3 w-3" /> : null}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
