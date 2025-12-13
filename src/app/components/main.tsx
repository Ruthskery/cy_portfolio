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
      <ul className="flex items-center w-full">
        <li className="flex items-center gap-2">
          <Newspaper className="w-5 h-5" />
          <span className="text-2xl font-bold">About</span>
        </li>

        <li className="ml-auto flex gap-2">
          <span>Top News</span>
          <span className="text-gray-400">•</span>
          <span>Most Recent</span>
        </li>
      </ul>

      {/* Post Input */}
      <div className="mt-4 max-w-4xl">
        <div className="flex items-center bg-white border border-black rounded-md px-5 py-1 shadow-inner">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="bg-transparent outline-none w-full"
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
