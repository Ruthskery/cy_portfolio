import React from 'react'

const languages = [
  'English (US)',
  'Espanol',
  'Portugues (Brasil)',
  'Francais (France)',
  'Deutsch',
  'Italiano',
  'Arabic',
  'Chinese (Simplified)',
]

const footerLinks = [
  'Mobile',
  'Find Friends',
  'Badges',
  'Careers',
  'About',
  'Advertising',
  'Developers',
  'Privacy',
  'Terms',
  'Help',
]

function Footer() {
  return (
    <footer className="m-4 px-2 text-center text-xs text-[#737373] sm:m-6 sm:px-4 md:m-10">
      <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
        {languages.map((language, index) => (
          <a
            key={language}
            className={index === 0 ? 'cursor-pointer text-[#385898] hover:underline' : 'cursor-pointer hover:underline'}
          >
            {language}
          </a>
        ))}
        <span>{'>'}</span>
      </div>

      <hr className="mx-auto my-2 max-w-4xl border-gray-300" />

      <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
        <span>Facebook 2010</span>
        {footerLinks.map((link) => (
          <React.Fragment key={link}>
            <span>&middot;</span>
            <a className="cursor-pointer text-[#385898] hover:underline">{link}</a>
          </React.Fragment>
        ))}
      </div>

      <div className="mt-2">
        <span className="text-gray-400">
          Copyright 2025 Cyril Christian Imperial. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
