import type { FeedPostItem } from '../feed/types'

import CSI from '../../../../../public/posts/CSI.png'
import grad from '../../../../../public/posts/grad.jpg'
import grad1 from '../../../../../public/posts/grad1.jpg'

export const feedPosts: FeedPostItem[] = [
  {
    id: 'intro',
    date: '2 minutes ago',
    body: [
      "I'm an aspiring Full-Stack Developer and AI Engineer, driven by a passion for building scalable, intelligent, and data-driven web applications that solve real-world problems.",
      'I specialize in full-stack development using Python, PHP, JavaScript, React, and TypeScript, with a strong focus on AI integration and prompt engineering. I enjoy working at the intersection of modern web technologies and artificial intelligence, transforming ideas into smart, efficient, and user-centric solutions.',
    ],
    comment: {
      likesText: '15 people likes this',
    },
  },
  {
    id: 'csi',
    date: '2 minutes ago',
    body: [
      'Currently, I work as a Software Testing Engineer at CSI Interfusion, where I focus on software quality, reliability, and performance while working closely with development teams.',
      'I also use Azure DevOps for test management, CI/CD support, version control, and collaborative workflows that keep releases stable and traceable.',
    ],
    images: [{ src: CSI, alt: 'CSI Interfusion work snapshot', width: 'wide' }],
    comment: {
      likesText: '2 people likes this',
      featuredComment: {
        name: 'Ter David',
        image: '/people/ter.jpg',
        message: 'Congratulations!',
        timestamp: '2 minutes ago',
      },
    },
  },
  {
    id: 'goal',
    date: '2 minutes ago',
    body: [
      'My long-term goal is to grow as a Full-Stack and AI Engineer, contributing to products that push technology forward while staying practical for real users.',
      'I keep learning, experimenting, and refining my skills so my work stays aligned with a fast-moving engineering landscape.',
    ],
    comment: {
      likesText: '10 people likes this',
    },
  },
  {
    id: 'collaboration',
    date: '2 minutes ago',
    body: [
      "I'm open to collaborating on strong product work across AI, full-stack development, prompt engineering, and modern web experiences.",
      'The projects I enjoy most are the ones that combine clear engineering thinking with thoughtful interface design.',
    ],
    comment: {
      likesText: '5 people likes this',
    },
  },
  {
    id: 'graduation',
    date: 'July 9, 2025',
    mood: 'Feeling Happy',
    body: [
      "Officially graduated. I'm grateful for the full journey, the lessons that came with it, and the people who helped me get through each stage.",
      'Closing that chapter feels good, and it also makes the next one feel more real.',
    ],
    images: [
      { src: grad, alt: 'Graduation portrait' },
      { src: grad1, alt: 'Graduation celebration photo' },
    ],
    comment: {
      likesText: '35 people likes this',
    },
  },
  {
    id: 'ojt',
    date: 'June 13, 2025',
    mood: 'Feeling Satisfied',
    body: [
      'OJT officially completed last June 5, 2025.',
      "I'm grateful for my experience as a Website Developer Intern at Pru Life UK in Ortigas Center, Pasig from March to May 2025.",
      'During that time I designed and deployed a fully responsive branch website using mobile-first, cross-platform principles.',
    ],
    images: [
      { src: '/posts/prulydes.png', alt: 'PruLydes website preview', width: 'wide' },
      { src: '/posts/prulifegrad.jpg', alt: 'Pru Life UK completion photo' },
    ],
    link: {
      href: 'https://pru-lydes.vercel.app/',
      label: 'View PruLydes',
    },
    comment: {
      likesText: '35 people likes this',
    },
  },
]
