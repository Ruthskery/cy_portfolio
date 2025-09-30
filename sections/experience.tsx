import React from 'react'

function Experience() {
  return (
    <div className="min-h-[50vh] bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center px-6 py-12">
  <h2 className="text-4xl font-bold mb-10 text-gray-800 dark:text-gray-200">
    Experience
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
    {/* Experience 1 */}
    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        Website Developer Intern
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        PRU Life UK • Mar 2025 – May 2025
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
        <li>Developed and deployed a responsive branch website.</li>
        <li>Optimized performance and UI/UX.</li>
        <li>Ensured functionality and brand consistency.</li>
      </ul>
    </div>

    {/* Experience 2 */}
    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        Student Aide – IT Support
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        Information Communication Technology Unit • Dec 2022 – Dec 2024
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
        <li>Supported 50+ staff with hardware/software troubleshooting.</li>
        <li>Configured networks and maintained system reliability.</li>
        <li>Managed IT assets and streamlined documentation.</li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default Experience