import React, {useState} from 'react'
import Image from 'next/image'
import CommentSection from './comment5'

import aboutMe from '../../../../public/images/meNight.png'
import aboutMeDark from '../../../../public/images/meLight.png'
import aboutMeHoverDark from '../../../../public/images/ShymeLight.png'
import aboutMeHover from '../../../../public/images/ShymeNight.png'


import grad from '../../../../public/posts/grad.jpg'
import grad1 from '../../../../public/posts/grad1.jpg'

function Post5 ({ showComments = false }) {
        const [isHovered, setIsHovered] = useState(false)
    
  return (
    <div className="mt-4 w-full max-w-4xl grid grid-cols-[auto_1fr] gap-2 sm:gap-4">
        {/* Light mode */}
        <Image
          src={isHovered ? aboutMeHoverDark : aboutMeDark}
          alt="Profile picture"
          width={80}
          height={80}
          className="rounded-lg shadow-sm cursor-pointer dark:hidden w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

          {/* Dark mode */}
        <Image
          src={isHovered ? aboutMeHover : aboutMe}
          alt="Profile picture"
          width={80}
          height={80}
          className="rounded-lg shadow-sm cursor-pointer hidden dark:block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

        <div className="min-w-0">
            {/* Content */}
           <div className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-md leading-relaxed">
                    <span className="font-bold text-[#6d85b8]">
                    Cyril Christian Imperial
                    </span>{" "}
                    <span className="text-gray-600 text-xs sm:text-sm">
                    is feeling <span className="font-semibold">happy</span> 😊
                    </span>
                </p>

                <p className="text-black font-light dark:text-gray-300 text-sm sm:text-base">
                    Officially graduated! Thankful for the journey, lessons, and everyone who supported me. On to the next chapter 
                </p>

                {/* Images row */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <Image
                    src={grad}
                    alt="Graduation photo 1"
                    width={200}
                    height={100}
                    className="rounded-lg shadow-sm cursor-pointer dark:hidden w-full sm:w-auto max-w-xs sm:max-w-none"
                    />
                    <Image
                    src={grad1}
                    alt="Graduation photo 2"
                    width={200}
                    height={100}
                    className="rounded-lg shadow-sm cursor-pointer dark:hidden w-full sm:w-auto max-w-xs sm:max-w-none"
                    />
                </div>
            </div>


                {/* Actions */}
                <ul className="flex flex-wrap gap-3 sm:gap-6 mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600">
                    <li>July 9, 2025</li>
                    <li className="cursor-pointer hover:underline">Comment</li>
                    <li className="cursor-pointer hover:underline">Like</li>
                    <li className="cursor-pointer hover:underline">Share</li>
                </ul>

                {/* Comments */}
                {showComments && <CommentSection />}
        </div>

            <hr className="col-span-2 my-6 border-gray-300 dark:border-gray-700" />

    </div>
  );
}


export default Post5