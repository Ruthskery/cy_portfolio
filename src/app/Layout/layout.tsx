'use client'
import React from 'react'
import Sidenav from '../components/sidenav'
import Main from '../components/main'
import Rightnav from '../components/rightnav'

function Layout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-2 sm:px-4 py-6 sm:py-12">
      <div
        className="
          max-w-6xl w-full
          min-h-screen
          grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[220px_1fr_260px]
          items-stretch gap-4 md:gap-0
          md:divide-x md:divide-[#d8dfea]
        "
      >
        
        {/* COLUMN 1 - Hidden on mobile, shown on md+ */}
        <div className="hidden md:block pr-4 lg:pr-8">
          <Sidenav />
        </div>

        {/* COLUMN 2 */}
        <div className="px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col gap-4 sm:gap-6">
          <Main />
        </div>

        {/* COLUMN 3 - Hidden on mobile and tablet, shown on lg+ */}
        <div className="hidden lg:block pl-4 lg:pl-8 flex flex-col text-center md:text-left">
         <Rightnav />
        </div>

      </div>
    </div>
  )
}

export default Layout
