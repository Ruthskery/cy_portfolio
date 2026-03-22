'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import aboutMeDark from '../../../public/images/meLight.png'
import aboutMeHoverDark from '../../../public/images/ShymeLight.png'

type NavItem = {
  label: string
  icon: string
  alt: string
  dividerBefore?: boolean
}

type Friend = {
  name: string
  image: string
}

const primaryNavItems: NavItem[] = [
  { label: 'News Feed', icon: '/icons/news.png', alt: 'News Feed' },
  { label: 'Messages', icon: '/icons/messages.png', alt: 'Messages' },
  { label: 'Events', icon: '/icons/calendar.png', alt: 'Events' },
  { label: 'Photos', icon: '/icons/photos.png', alt: 'Photos' },
  { label: 'Friends', icon: '/icons/friends.png', alt: 'Friends' },
  {
    label: 'Applications',
    icon: '/icons/application.png',
    alt: 'Applications',
    dividerBefore: true,
  },
  { label: 'Games', icon: '/icons/games.png', alt: 'Games' },
  { label: 'Ads and Pages', icon: '/icons/ads.png', alt: 'Ads and Pages' },
  { label: 'Marketplace', icon: '/icons/marketplace.png', alt: 'Marketplace' },
]

const quickLinks: NavItem[] = [
  {
    label: 'Ninja Saga',
    icon: '/icons/ninjasaga.png',
    alt: 'Ninja Saga',
    dividerBefore: true,
  },
  { label: 'Farmville', icon: '/icons/farmville.png', alt: 'Farmville' },
]

const onlineFriends: Friend[] = [
  { name: 'Dwight Aquino', image: '/people/dwight.jpg' },
  { name: 'Dave Trinares', image: '/people/dave.jpg' },
  { name: 'Ter David', image: '/people/ter.jpg' },
  { name: 'Art Gian Juan', image: '/people/art.jpg' },
  { name: 'Byrl Lim', image: '/people/bryl.jpg' },
  { name: 'Boss Rod', image: '/people/rod.jpg' },
  { name: 'Ismael Jerusalem', image: '/people/ismael.jpg' },
]

const navItemClass =
  'flex items-center gap-2 px-1 py-[3px] text-[11px] text-[#3b5998] hover:bg-[#f5f6f7]'

function Divider() {
  return <li className="my-2 border-t border-[#d8dfea]" />
}

function IconNavItem({ item }: { item: NavItem }) {
  return (
    <li className={navItemClass}>
      <Image src={item.icon} alt={item.alt} width={16} height={16} />
      <span>{item.label}</span>
    </li>
  )
}

function FriendItem({ friend }: { friend: Friend }) {
  return (
    <li className={`${navItemClass} justify-between gap-2 text-[#444]`}>
      <div className="flex items-center gap-2">
        <Image src={friend.image} alt={friend.name} width={16} height={16} />
        <span className="truncate">{friend.name}</span>
      </div>
      <span className="inline-block h-2 w-2 border border-white bg-green-500" />
    </li>
  )
}

function Sidenav() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <nav className="mx-auto w-full max-w-[220px] md:mx-0">
      <div className="mb-3 flex items-center gap-2 px-1">
        <Image
          src={isHovered ? aboutMeHoverDark : aboutMeDark}
          alt="Profile picture"
          width={64}
          height={64}
          className="cursor-pointer border border-[#d8dfea] shadow-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

        <div className="flex flex-col leading-tight">
          <span className="text-[13px] font-bold text-[#3b5998]">
            Cyril Imperial
          </span>
          <a
            href="/cv/Imperial_CV.pdf"
            download
            className="text-left text-[11px] text-[#777] hover:underline"
          >
            View my info
          </a>
        </div>
      </div>

      <ul className="space-y-[2px]">
        {primaryNavItems.map((item) => (
          <React.Fragment key={item.label}>
            {item.dividerBefore ? <Divider /> : null}
            <IconNavItem item={item} />
          </React.Fragment>
        ))}

        {quickLinks.map((item) => (
          <React.Fragment key={item.label}>
            {item.dividerBefore ? <Divider /> : null}
            <IconNavItem item={item} />
          </React.Fragment>
        ))}

        <li className="px-1 py-[3px] text-[11px] text-[#777] hover:bg-[#f5f6f7]">
          More
        </li>

        <Divider />

        <li className="px-1 py-1 text-[10px] font-bold text-[#777]">
          Friends Online
        </li>

        {onlineFriends.map((friend) => (
          <FriendItem key={friend.name} friend={friend} />
        ))}
      </ul>
    </nav>
  )
}

export default Sidenav
