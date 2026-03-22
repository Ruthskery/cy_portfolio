import React from 'react'
import Image from 'next/image'

const skills = ['Python', 'TypeScript', 'Next.js', 'Node.js', 'Docker']

const organizations = [
  {
    name: 'Bicol IT Organization',
    image: '/organization/bitcolit.jpg',
    supporters: '150 friends are fans',
    action: 'Join Organization',
    alt: 'Bicol IT Organization',
  },
  {
    name: 'CCS Student Council',
    image: '/organization/ccs.jpg',
    supporters: '211 friends are fans',
    action: 'Follow Organization',
    alt: 'CCS Student Council',
  },
]

const events = [
  'Ship or Be Shipped 2025',
  'Caffeine AI Manila',
  'Called to Create',
  'Cursor Meetup Philippines',
]

const links = [
  { label: 'Invite friends to join Facebook.', href: 'https://www.facebook.com/' },
  { label: 'Find people you know who are already using Facebook.', href: 'https://www.linkedin.com/in/cyril-imperial/' },
]

function Card({
  title,
  action,
  children,
}: {
  title: string
  action?: string
  children: React.ReactNode
}) {
  return (
    <section className="border-b border-[#d8dfea] pb-2">
      <div className="flex justify-between text-[11px] font-bold text-[#333]">
        <p>{title}</p>
        {action ? (
          <p className="cursor-pointer text-[#3b5998] hover:underline">{action}</p>
        ) : null}
      </div>
      <div className="mt-2">{children}</div>
    </section>
  )
}

function RightNav() {
  return (
    <div className="flex flex-col gap-3 text-[11px]">
      <Card title="Requests" action="View all">
        <ul className="space-y-1 text-[#3b5998]">
          {skills.map((skill) => (
            <li key={skill} className="cursor-pointer hover:underline">
              {skill}
            </li>
          ))}
        </ul>
      </Card>

      <Card title="Suggestions" action="View all">
        <div className="grid gap-2">
          {organizations.map((organization) => (
            <div key={organization.name} className="grid grid-cols-[40px_1fr] gap-2">
              <Image
                src={organization.image}
                alt={organization.alt}
                width={40}
                height={40}
                className="h-10 w-10 border border-[#d8dfea] object-cover"
              />
              <div>
                <p className="font-bold text-[#3b5998]">{organization.name}</p>
                <p className="text-[10px] text-[#777]">{organization.supporters}</p>
                <p className="cursor-pointer text-[10px] text-[#3b5998] hover:underline">
                  {organization.action}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Events" action="View all">
        <ul className="space-y-1 text-[#3b5998]">
          {events.map((event) => (
            <li key={event} className="cursor-pointer hover:underline">
              {event}
            </li>
          ))}
        </ul>
      </Card>

      <Card title="Connect with friends">
        <ul className="space-y-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-[#3b5998] hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

export default RightNav
