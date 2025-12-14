import React from "react";  
import { Newspaper } from "lucide-react";
import Post from "./mainContent/post";
import Post2 from "./mainContent/post2";
import Post3 from "./mainContent/post3";
import Post4 from "./mainContent/post4";
import Post5 from "./mainContent/post5";
import Post6 from "./mainContent/post6";

function Main() {
  return (
    <div>
      {/* Header */}
      <ul className="flex flex-col sm:flex-row items-start sm:items-center w-full gap-2 sm:gap-0">
        <li className="flex items-center gap-2">
          <Newspaper className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xl sm:text-2xl font-bold">About</span>
        </li>

        <li className="ml-auto flex gap-2 text-sm sm:text-base">
          <span>Top News</span>
          <span className="text-gray-400">•</span>
          <span>Most Recent</span>
        </li>
      </ul>

      {/* Post Input */}
      <div className="mt-4 max-w-4xl w-full">
        <div className="flex items-center bg-white border border-black rounded-md px-3 sm:px-5 py-1 shadow-inner">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="bg-transparent outline-none w-full text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Posts */}
      <Post showComments/>
      <Post2 showComments />
      <Post3 showComments/>
      <Post4 showComments/>
      <Post5 showComments/>
      <Post6 showComments/>
    </div>
  );
}


export default Main;
