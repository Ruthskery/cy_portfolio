import React from 'react'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiPython,
  SiMysql,
  SiNginx,
  SiXampp,
  SiGit,
  SiGithub,
  SiTrello,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiLaravel,
  SiDjango,
  SiDrizzle,
} from "react-icons/si";

function TechStack() {

     const techStack = [
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
    { name: "Python", icon: SiPython, color: "text-green-500" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    { name: "Drizzle", icon: SiDrizzle, color: "text-purple-500" },
    { name: "Nginx", icon: SiNginx, color: "text-green-600" },
    { name: "XAMPP", icon: SiXampp, color: "text-orange-600" },
    { name: "Git", icon: SiGit, color: "text-red-600" },
    { name: "GitHub", icon: SiGithub, color: "text-gray-800 dark:text-gray-200" },
    { name: "Trello", icon: SiTrello, color: "text-blue-400" },
    { name: "React.js", icon: SiReact, color: "text-cyan-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
    { name: "Django", icon: SiDjango, color: "text-green-700" },
  ];
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-4 py-16">
    <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h4 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Tech Stack Used
        </h4>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-cyan-500 rounded-full mx-auto mb-12"></div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {techStack.map(({ name, icon: Icon, color }) => (
            <div
            key={name}
            className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center transition transform hover:scale-105 hover:shadow-xl"
            >
            <Icon className={`text-4xl mb-3 transition-colors duration-300 group-hover:text-cyan-500 ${color}`} />
            <span className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200">
                {name}
            </span>
            </div>
        ))}
        </div>
    </div>
    </div>
  )
}

export default TechStack