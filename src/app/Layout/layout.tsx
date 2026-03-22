'use client'
import React from 'react'
import Sidenav from '../components/sidenav'
import Main from '../components/main'
import Rightnav from '../components/rightnav'

function Layout() {
  return (
    <div className="min-h-screen px-3 py-3 sm:px-5 sm:py-4">
      <div
        className="
          mx-auto grid w-full max-w-[1220px] grid-cols-1 items-start gap-5
          md:grid-cols-[220px_1fr] md:gap-0 md:divide-x md:divide-[var(--feed-card-border)]
          lg:grid-cols-[220px_1fr_280px]
        "
      >
        
        {/* COLUMN 1 - Hidden on mobile, shown on md+ */}
        <div className="hidden md:block pr-4">
          <Sidenav />
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-3 px-1 sm:px-3 md:px-5">
          <Main />
        </div>

        {/* COLUMN 3 - Hidden on mobile and tablet, shown on lg+ */}
        <div className="hidden lg:block pl-4 text-left">
         <Rightnav />
        </div>

      </div>
    </div>
  )
}

export default Layout
