import React from 'react'
import Image from 'next/image'

function Comment() {
  return (
    <div className="mt-4 p-2 sm:p-4 border border-gray-200 rounded-xl bg-[#eceff7] shadow-sm">

    {/* ROW 1 */}
      <div className="text-xs sm:text-sm text-gray-600">
        <p>2 people likes this</p>
      </div>

    <hr className="-mx-2 sm:-mx-4 my-2 sm:my-3 border-t-4 border-white/80" />

    {/* ROW 2*/}
      <div className="flex gap-2 sm:gap-3">
        <Image
          src="/people/ter.jpg"
          alt="Ter David"
          width={60}
          height={60}
          className="rounded-lg shadow-sm w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0"
        />

        <div className="min-w-0 flex-1">
          <p className="text-xs sm:text-sm leading-relaxed">
            <span className="font-bold text-[#6d85b8]">
             Ter David
            </span>
            <span className="text-black font-light">
              {" "}
             Congratulations!
            </span>
          </p>
          <p className="mt-1 text-xs text-gray-500">2 minutes ago</p>
        </div>
      </div>

      {/* Comment Input */}
      <div className="mt-3 sm:mt-4 flex gap-2 sm:gap-3">
        <div className="flex items-center w-full bg-white rounded-md border border-gray-300 px-2 sm:px-4 py-1.5 sm:py-2 shadow-inner">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none text-xs sm:text-sm w-full"
          />
        </div>
      </div>
    </div>
  );
}


export default Comment