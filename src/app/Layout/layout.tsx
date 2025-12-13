'use client'
import React from 'react'
import Sidenav from '../components/sidenav'
import Main from '../components/main'
import Rightnav from '../components/rightnav'

function Layout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4 py-12">
      <div
        className="
          max-w-6xl w-full
          min-h-screen
          grid grid-cols-1 md:grid-cols-[220px_1fr_260px]
          items-stretch
          md:divide-x md:divide-[#d8dfea]
        "
      >
        
        {/* COLUMN 1 */}
        <div className="pr-8">
          <Sidenav />
        </div>

        {/* COLUMN 2 */}
        <div className="px-8 flex flex-col gap-6">
          <Main />
        </div>

        {/* COLUMN 3 */}
        <div className="pl-8 flex flex-col text-center md:text-left">
         <Rightnav />
        </div>

      </div>
    </div>
  )
}

export default Layout
