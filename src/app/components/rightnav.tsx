import React from "react";
import Image from "next/image";

function RightNav() {
  return (
    <div className="flex flex-col gap-4 text-sm">

      {/* SKILLS */}
      <div className="border border-gray-300 bg-gray-50 p-3">
        <div className="flex justify-between font-bold text-gray-700">
          <p>Skills</p>
          <p className="text-blue-600 cursor-pointer hover:underline">View All</p>
        </div>

        <hr className="my-2 border-gray-300" />

        <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-gray-700">
          <li className="cursor-pointer hover:underline">C#</li>
          <li className="cursor-pointer hover:underline">Python</li>
          <li className="cursor-pointer hover:underline">TypeScript</li>
          <li className="cursor-pointer hover:underline">JavaScript</li>

          <li className="cursor-pointer hover:underline">Next.js</li>
          <li className="cursor-pointer hover:underline">FastAPI</li>
          <li className="cursor-pointer hover:underline">Laravel</li>
          <li className="cursor-pointer hover:underline">Express</li>
          <li className="cursor-pointer hover:underline">ORM</li>

          <li className="cursor-pointer hover:underline">Node.js</li>

          <li className="cursor-pointer hover:underline">SQL</li>
          <li className="cursor-pointer hover:underline">MySQL</li>

          <li className="cursor-pointer hover:underline">GitHub Actions</li>
          <li className="cursor-pointer hover:underline">Docker</li>
          <li className="cursor-pointer hover:underline">VPS Deployment</li>

          <li className="cursor-pointer hover:underline">VS Code</li>
          <li className="cursor-pointer hover:underline">Postman</li>
          <li className="cursor-pointer hover:underline">Git</li>
          <li className="cursor-pointer hover:underline">GitHub</li>

          <li className="cursor-pointer hover:underline">Linux</li>
          <li className="cursor-pointer hover:underline">Ubuntu</li>
          <li className="cursor-pointer hover:underline">Agile & Scrum</li>
          <li className="cursor-pointer hover:underline">SDLC</li>
        </ul>
      </div>

      {/* ORGANIZATIONS */}
      <div className="border border-gray-300 bg-gray-50 p-3">
        <div className="flex justify-between font-bold text-gray-700">
          <p>Organizations</p>
          <p className="text-blue-600 cursor-pointer hover:underline">View All</p>
        </div>

        <hr className="my-2 border-gray-300" />

        <div className="grid grid-cols-[auto_1fr] gap-2">
          <Image
            src='/organization/bitcolit.jpg'
            alt="BICOL IT ORG"
            width={40}
            height={40}
            className="rounded"
          />

          <div>
            <p className="font-semibold text-gray-800">
              Bicol IT Organization
            </p>
            <p className="text-xs text-gray-500">
              150 friends are fans
            </p>
            <p className="text-blue-600 cursor-pointer hover:underline text-xs">
              Join Organization
            </p>
          </div>

          <Image
            src='/organization/ccs.jpg'
            alt="CCS ORG"
            width={40}
            height={40}
            className="rounded"
          />

          <div>
            <p className="font-semibold text-xs text-gray-800">
              College of Computer Studies - Student Council
            </p>
            <p className="text-xs text-gray-500">
              211 friends are fans
            </p>
            <p className="text-blue-600 cursor-pointer hover:underline text-xs">
              Follow Organization
            </p>
          </div>
        </div>
      </div>

      {/* EVENTS */}
      <div className="border border-gray-300 bg-gray-50 p-3">
        <div className="flex justify-between font-bold text-gray-700">
          <p>Events Attended</p>
          <p className="text-blue-600 cursor-pointer hover:underline">View All</p>
        </div>

        <hr className="my-2 border-gray-300" />

        <ul className="space-y-1">
          <li className="cursor-pointer hover:underline">Ship or Be Shipped 2025</li>
          <li className="cursor-pointer hover:underline">Caffeine AI Manila</li>
          <li className="cursor-pointer hover:underline">Called to Create</li>
          <li className="cursor-pointer hover:underline">Cursor Meetup Philippines</li>
          <li className="cursor-pointer hover:underline">Crypto Vision Conference 2025</li>
          <li className="cursor-pointer hover:underline">Base Batches: Global Buildathon</li>
          <li className="cursor-pointer hover:underline">Bicol Blockchain Conference 2024</li>
          <li className="cursor-pointer hover:underline">Bicol IT Conference 2024</li>
          <li className="cursor-pointer hover:underline">Bicol Co-Hack 2025</li>
        </ul>
      </div>

      {/* CONNECT */}
      <div className="border border-gray-300 bg-gray-50 p-3">
        <div className="font-bold text-gray-700">
          Get Connected
        </div>

        <hr className="my-2 border-gray-300" />

        <ul className="space-y-1">
          <li>
            <a
              href="https://github.com/Ruthskery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Connect GitHub
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/cyril-imperial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Connect LinkedIn
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/Cyril.Christian.Imperial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Connect Facebook
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/ruthsimperial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Connect Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@codewithruths"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Connect Tiktok
            </a>
          </li>
          <li>
            <a
              href="https://x.com/ITprutss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Connect X
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default RightNav;
