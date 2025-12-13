import React, {useState} from 'react'
import Image from 'next/image'
import CommentSection from './comment6'

import aboutMe from '../../../../public/images/meNight.png'
import aboutMeDark from '../../../../public/images/meLight.png'
import aboutMeHoverDark from '../../../../public/images/ShymeLight.png'
import aboutMeHover from '../../../../public/images/ShymeNight.png'

function Post6 ({ showComments = false }) {
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
                    </span>{" "}
                    <span className="text-gray-600 text-sm">
                    is feeling <span className="font-semibold">Satisfied</span> 😊
                    </span>
                </p>

                <p className="text-black font-light dark:text-gray-300">
                OJT officially completed last June 5, 2025!
                </p>
                <p className="text-black font-light dark:text-gray-300">
                Grateful for my experience as a Website Developer Intern at Pru Life UK (Ortigas Center, Pasig) from March–May 2025.
                </p>               
                <p className="text-black font-light dark:text-gray-300">
                Proud to have designed and deployed a fully responsive official branch website and applied mobile-first, cross-platform design.
                Thankful for the learning, mentorship, and real-world exposure                
                </p>
                <p className="text-black font-light dark:text-gray-300">
                    <a
                        href="https://pru-lydes.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1877f2] hover:underline"
                    >
                        PruLydes
                    </a>
                    </p>

                {/* Images row */}
                <div className="flex gap-4">
                    <Image
                    src="/posts/prulydes.png"
                    alt="Pru Life UK photo 1"
                    width={300}
                    height={100}
                    className="rounded-lg shadow-sm cursor-pointer dark:hidden"
                    />
                    <Image
                    src="/posts/prulifegrad.jpg"
                    alt="Pru Life UK photo 2"
                    width={200}
                    height={100}
                    className="rounded-lg shadow-sm cursor-pointer dark:hidden"
                    />
                </div>
            </div>


                {/* Actions */}
                <ul className="flex gap-6 mt-3 text-sm text-gray-600">
                    <li>June 13, 2025</li>
                    <li className="cursor-pointer hover:underline">Comment</li>
                    <li className="cursor-pointer hover:underline">Like</li>
                    <li className="cursor-pointer hover:underline">Share</li>
                </ul>

                {/* Comments */}
                {showComments && <CommentSection />}
        </div>

            {/* <hr className="col-span-2 my-6 border-gray-300 dark:border-gray-700" /> */}

    </div>
  );
}


export default Post6