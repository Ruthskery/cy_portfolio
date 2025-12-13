import React, {useState} from 'react'
import Image from 'next/image'
import CommentSection from './comment'

import aboutMe from '../../../../public/images/meNight.png'
import aboutMeDark from '../../../../public/images/meLight.png'
import aboutMeHoverDark from '../../../../public/images/ShymeLight.png'
import aboutMeHover from '../../../../public/images/ShymeNight.png'


import CSI from '../../../../public/posts/CSI.png'

function Post2 ({ showComments = false }) {
        const [isHovered, setIsHovered] = useState(false)
    
  return (
    <div className="mt-4 w-full max-w-4xl grid grid-cols-[auto_1fr] gap-4">
        {/* Light mode */}
        <Image
          src={isHovered ? aboutMeHoverDark : aboutMeDark}
          alt="Profile picture"
          width={80}
          height={80}
          className="rounded-lg shadow-sm cursor-pointer dark:hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

          {/* Dark mode */}
        <Image
          src={isHovered ? aboutMeHover : aboutMe}
          alt="Profile picture"
          width={80}
          height={80}
          className="rounded-lg shadow-sm cursor-pointer hidden dark:block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

        <div>
            {/* Content */}
            <div className="space-y-3">
                <p className="text-md leading-relaxed">
                <span className="font-bold text-[#6d85b8]">
                    Cyril Christian Imperial
                </span>
                </p>

                <p className="text-black font-light dark:text-gray-300">
                Currently, I work as a Software Testing Engineer at CSI Interfusion, where I ensure software quality, reliability, and performance while collaborating closely with development teams. I’m also adept in Azure DevOps, using it for test management, CI/CD pipelines, version control, and collaborative workflows that support high-quality software delivery.
                </p>

                <Image
                    src={CSI}
                    alt="Profile picture"
                    width={200}
                    height={100}
                    className="rounded-lg shadow-sm cursor-pointer dark:hidden"
                />
            </div>

            {/* Actions */}
            <ul className="flex gap-6 mt-3 text-sm text-gray-600">
                <li>2 minutes ago</li>
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


export default Post2