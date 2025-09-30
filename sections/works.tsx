import React from 'react'

function Works() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 py-12 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-800 dark:text-gray-200">
        Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Card 1 */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition">
          <div className="overflow-hidden">
            <img
              src="https://source.unsplash.com/600x400/?technology,web"
              alt="Work 1"
              className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Project One
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              A short description of the project goes here. Explains what it is and
              the tech used.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition">
          <div className="overflow-hidden">
            <img
              src="https://source.unsplash.com/600x400/?programming,code"
              alt="Work 2"
              className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Project Two
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Brief explanation about the project and its purpose in a few lines.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition">
          <div className="overflow-hidden">
            <img
              src="https://source.unsplash.com/600x400/?developer,design"
              alt="Work 3"
              className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Project Three
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Short description summarizing what the project is about and outcome.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works