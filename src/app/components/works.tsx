'use client'
import React from 'react'
import Image from 'next/image';

import prulydes from '../../../public/work/prulydes.png';
import prolock from '../../../public/work/prolock.jpg';
import applicationtracker from '../../../public/work/attendancetracker.png'

function Works() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 py-12 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-800 dark:text-gray-200">
        Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Card 1 */}
        <a
          href="https://github.com/yourusername/PruLydesPortfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition block"
        >
          <div className="overflow-hidden">
            <Image
              src={prulydes}
              alt="Pru Lydes"
              className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Pru Lydes Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              A personal portfolio website for a branch manager at Pru Life UK to showcase career and achievements.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full dark:bg-blue-900 dark:text-blue-200">
                Next.js
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full dark:bg-green-900 dark:text-green-200">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full dark:bg-yellow-900 dark:text-yellow-200">
                TypeScript
              </span>
            </div>
          </div>
        </a>

        {/* Card 2 */}
        <a
          href="https://github.com/Ruthskery/Prolock"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition block"
        >
          <div className="overflow-hidden">
            <Image
              src={prolock}
              alt="Prolock"
              className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Prolock: Fingerprint Door Lock and Attendance Tracking
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Smart fingerprint and RFID-based system for secure door access and attendance tracking in IT labs.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full dark:bg-red-900 dark:text-red-200">
                Raspberry Pi 4
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full dark:bg-blue-900 dark:text-blue-200">
                Python
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full dark:bg-green-900 dark:text-green-200">
                Laravel
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full dark:bg-yellow-900 dark:text-yellow-200">
                Tkinter
              </span>
            </div>
          </div>
        </a>

        {/* Card 3 */}
        <a
          href="https://github.com/Ruthskery/ApplicationTracker"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition block"
        >
          <div className="overflow-hidden">
            <Image
              src={applicationtracker}
              alt="Attendance Tracker"
              className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Application Tracker
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              A CRUD web app to organize and monitor job applications efficiently.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full dark:bg-blue-900 dark:text-blue-200">
                Next.js
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full dark:bg-green-900 dark:text-green-200">
                FastAPI
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full dark:bg-orange-900 dark:text-orange-200">
                MySQL
              </span>
              <span className="px-3 py-1 bg-violet-100 text-violet-700 text-xs font-medium rounded-full dark:bg-violet-900 dark:text-violet-200">
                Postman
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Works
