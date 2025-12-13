'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { UserRound } from 'lucide-react';


import profile1 from '../../../../public/images/meLight.png';

const FacebookMessage2010: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      {/* CHAT LAUNCHER BUTTON */}
        {!open && (
       <button
        onClick={() => setOpen(true)}
        className=" fixed bottom-4 right-4 bg-[#3b5998] text-white px-4 py-2 text-sm font-bold 
        border border-gray-400 shadow-md flex items-center gap-2 w-56 justify-start">
            {/* User Icon */}
            <UserRound className="w-4 h-4" />

            {/* Green online dot */}
            <span className="w-2 h-2 bg-green-500 rounded-full border border-white inline-block"
            aria-label="Online"/>

            {/* Text */}
            <span>Chat (6)</span>
        </button>
        )}

      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-0 right-0 md:right-4 w-full md:w-64 border border-gray-400 bg-white 
        text-sm shadow-md">
          {/* HEADER */}
          <div className="flex items-center justify-between bg-[#3b5998] text-white px-2 py-1">
            <div className="flex items-center gap-2">
              <Image
                src={profile1}
                alt="Profile"
                width={20}
                height={20}
                className="rounded-sm"
              />
              <span className="font-bold text-xs">
                Cyril Christian
              </span>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-xs font-bold hover:opacity-80"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* MESSAGES */}
          <div className="h-36 overflow-y-auto px-2 py-1">
            <p className="mb-1">
              <span className="font-bold">Cyril:</span> hey
            </p>
            <p className="mb-1">
              <span className="font-bold">You:</span> what’s up?
            </p>
          </div>

          {/* INPUT */}
          <div className="border-t border-gray-300 px-2 py-1">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full text-xs outline-none"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default FacebookMessage2010
