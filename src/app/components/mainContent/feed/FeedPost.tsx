'use client'

import React, { useState } from 'react'
import type { FeedImage } from './types'
import FeedPostActions from './FeedPostActions'
import FeedPostHeader from './FeedPostHeader'
import FeedPostMedia from './FeedPostMedia'

type FeedPostProps = {
  date: string
  mood?: string
  children: React.ReactNode
  images?: FeedImage[]
  comments?: React.ReactNode
}

function FeedPost({ date, mood, children, images = [], comments }: FeedPostProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article className="mt-3 w-full max-w-5xl border border-[var(--feed-card-border)] bg-[var(--feed-card)] p-3">
      <div className="grid grid-cols-[68px_1fr] gap-3">
        <FeedPostHeader
          mood={mood}
          isHovered={isHovered}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

        <div className="col-start-2 min-w-0">
          <div className="space-y-3 text-[15px] leading-[1.55] text-[var(--feed-text)]">
            {children}
          </div>

          <FeedPostMedia images={images} />
          <FeedPostActions date={date} />

          {comments ? <div className="mt-2">{comments}</div> : null}
        </div>
      </div>
    </article>
  )
}

export default FeedPost
