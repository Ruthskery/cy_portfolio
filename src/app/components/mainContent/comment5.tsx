import React from 'react'

function Comment5() {
  return (
    <div className="mt-4 p-2 sm:p-4 border border-gray-200 rounded-xl bg-[#eceff7] shadow-sm">

    {/* ROW 1 */}
      <div className="text-xs sm:text-sm text-gray-600">
        <p>35 people likes this</p>

        <hr className="-mx-2 sm:-mx-4 my-2 sm:my-3 border-t-4 border-white/80" />

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
    </div>
  );
}


export default Comment5