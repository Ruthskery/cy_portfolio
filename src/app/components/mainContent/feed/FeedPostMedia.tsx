import React from 'react'
import Image from 'next/image'
import type { FeedImage } from './types'

type FeedPostMediaProps = {
  images: FeedImage[]
}

function FeedPostMedia({ images }: FeedPostMediaProps) {
  if (images.length === 0) {
    return null
  }

  return (
    <div
      className={`mt-2 grid gap-1 ${
        images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
      }`}
    >
      {images.map((image) => (
        <div
          key={`${String(image.src)}-${image.alt}`}
          className={`overflow-hidden border border-[var(--feed-card-border)] bg-[var(--feed-card-strong)] ${
            image.width === 'wide' && images.length > 1 ? 'md:col-span-2' : ''
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export default FeedPostMedia
