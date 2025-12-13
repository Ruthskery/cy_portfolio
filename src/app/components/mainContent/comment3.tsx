import React from 'react'

function Comment3() {
  return (
    <div className="mt-4 p-4 border border-gray-200 rounded-xl bg-[#eceff7] shadow-sm">

    {/* ROW 1 */}
      <div className="text-sm text-gray-600">
        <p>10 people likes this</p>

        <hr className="-mx-4 my-3 border-t-4 border-white/80" />

        {/* Comment Input */}
        <div className="mt-4 flex gap-3">
            <div className="flex items-center w-full bg-white rounded-md border border-gray-300 px-4 py-2 shadow-inner">
            <input
                type="text"
                placeholder="Write a comment..."
                className="bg-transparent outline-none text-sm w-full"
            />
            </div>
        </div>
      </div>
    </div>
  );
}


export default Comment3