import React from 'react'

type FeedPostActionsProps = {
  date: string
}

const actionLabels = ['Comment', 'Like', 'Share']

function FeedPostActions({ date }: FeedPostActionsProps) {
  return (
    <footer className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-[var(--feed-card-border)] pt-2 text-[12px] text-[var(--feed-muted)]">
      <span>{date}</span>
      {actionLabels.map((label) => (
        <React.Fragment key={label}>
          <span>&middot;</span>
          <button
            type="button"
            className="cursor-pointer hover:text-[var(--feed-accent)] hover:underline"
          >
            {label}
          </button>
        </React.Fragment>
      ))}
    </footer>
  )
}

export default FeedPostActions
