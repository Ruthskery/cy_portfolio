import type { StaticImageData } from 'next/image'

export type FeedImage = {
  src: string | StaticImageData
  alt: string
  width?: 'wide' | 'standard'
}

export type FeaturedComment = {
  name: string
  image: string
  message: string
  timestamp: string
}

export type FeedPostItem = {
  id: string
  date: string
  mood?: string
  body: string[]
  images?: FeedImage[]
  link?: {
    href: string
    label: string
  }
  comment: {
    likesText: string
    featuredComment?: FeaturedComment
  }
}
