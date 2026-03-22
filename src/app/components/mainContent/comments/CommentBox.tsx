import React from 'react'
import Image from 'next/image'
import type { FeaturedComment } from '../feed/types'

type CommentBoxProps = {
  likesText: string
  featuredComment?: FeaturedComment
}

function CommentBox({ likesText, featuredComment }: CommentBoxProps) {
  return (
    <div className="mt-3 border border-[#d8dfea] bg-[#eceff7] px-3 py-2">
      <div className="text-[13px] text-gray-600">
        <p>{likesText}</p>
      </div>

      <hr className="-mx-3 my-2 border-t border-white/80" />

      {featuredComment ? (
        <div className="flex gap-3">
          <Image
            src={featuredComment.image}
            alt={featuredComment.name}
            width={40}
            height={40}
            className="h-10 w-10 flex-shrink-0 border border-[#d8dfea]"
          />

          <div className="min-w-0 flex-1">
            <p className="text-[12px] leading-[1.4]">
              <span className="font-bold text-[#6d85b8]">{featuredComment.name}</span>
              <span className="font-light text-black"> {featuredComment.message}</span>
            </p>
            <p className="mt-1 text-[11px] text-gray-500">{featuredComment.timestamp}</p>
          </div>
        </div>
      ) : null}

      <div className="mt-3 flex gap-2">
        <div className="flex w-full items-center border border-gray-300 bg-white px-3 py-2">
          <input
            type="text"
            placeholder="Write a comment..."
            className="w-full bg-transparent text-[13px] outline-none"
          />
        </div>
      </div>
    </div>
  )
}

export default CommentBox
