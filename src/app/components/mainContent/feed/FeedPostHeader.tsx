'use client'

import React from 'react'
import Image from 'next/image'

import aboutMeDark from '../../../../../public/images/meLight.png'
import aboutMeHoverDark from '../../../../../public/images/ShymeLight.png'

type FeedPostHeaderProps = {
  mood?: string
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

function FeedPostHeader({
  mood,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: FeedPostHeaderProps) {
  return (
    <>
      <div className="row-span-2 pt-0.5">
        <Image
          src={isHovered ? aboutMeHoverDark : aboutMeDark}
          alt="Profile picture"
          width={56}
          height={56}
          className="h-14 w-14 cursor-pointer border border-[var(--feed-card-border)] object-cover shadow-sm"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </div>

      <div className="min-w-0 pt-0.5">
        <div className="flex flex-wrap items-baseline gap-x-1 gap-y-0.5 text-[14px] leading-5">
          <span className="font-bold text-[var(--feed-accent)]">
            Cyril Christian Imperial
          </span>
          {mood ? <span className="text-[13px] text-[var(--feed-muted)]">{mood}</span> : null}
        </div>
      </div>
    </>
  )
}

export default FeedPostHeader
