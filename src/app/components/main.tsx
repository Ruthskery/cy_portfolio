import React from 'react'
import { Newspaper } from 'lucide-react'
import { montserrat } from '../../../styles/font'
import FeedPost from './mainContent/feed/FeedPost'
import CommentBox from './mainContent/comments/CommentBox'
import { feedPosts } from './mainContent/data/feedPosts'

function Main() {
  return (
    <div>
      <ul className="flex w-full flex-col items-start gap-1 border-b border-[var(--feed-card-border)] pb-2 sm:flex-row sm:items-center sm:gap-0">
        <li className="flex items-center gap-1">
          <Newspaper className="h-4 w-4 text-[var(--feed-text)]" />
          <span
            className={`${montserrat.className} text-[18px] font-bold text-[var(--feed-text)]`}
          >
            News Feed
          </span>
        </li>

        <li className="ml-auto flex gap-2 text-[13px] text-[var(--feed-muted)]">
          <span>Top News</span>
          <span>&middot;</span>
          <span>Most Recent</span>
        </li>
      </ul>

      <div className="mt-3 w-full max-w-5xl">
        <div className="flex items-center border border-[var(--feed-border-dark)] bg-[var(--feed-card)] px-3 py-2">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="w-full bg-transparent text-[14px] text-[var(--feed-text)] outline-none placeholder:text-[#999]"
          />
        </div>
      </div>

      {feedPosts.map((post) => (
        <FeedPost
          key={post.id}
          date={post.date}
          mood={post.mood}
          images={post.images}
          comments={
            <CommentBox
              likesText={post.comment.likesText}
              featuredComment={post.comment.featuredComment}
            />
          }
        >
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {post.link ? (
            <p>
              <a
                href={post.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--feed-accent)] underline decoration-[var(--feed-accent)]/40 underline-offset-4 transition-colors hover:text-[var(--feed-accent-strong)]"
              >
                {post.link.label}
              </a>
            </p>
          ) : null}
        </FeedPost>
      ))}
    </div>
  )
}

export default Main
