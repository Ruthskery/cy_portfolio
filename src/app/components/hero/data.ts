/* Content for the chibi hero portfolio — first-person, warm, grounded.
   Sentence case body; uppercase only for the small letter-spaced eyebrows. */

export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/cyril-imperial/',
  github: 'https://github.com/Ruthskery',
  cv: '/cv/Imperial_CV.pdf',
};

export const STACK_GROUPS: { label: string; items: string[] }[] = [
  { label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'PHP'] },
  {
    label: 'Frameworks & Runtime',
    items: ['React', 'Next.js', 'Node.js', 'FastAPI', 'Laravel'],
  },
  {
    label: 'Platform & AI',
    items: ['Docker', 'Azure DevOps', 'PostgreSQL', 'AI Integration', 'Prompt Engineering'],
  },
];

export const PROJECTS: {
  title: string;
  href: string;
  meta: string;
  tags: string;
}[] = [
  {
    title: 'PruLydes — Pru Life UK branch site',
    href: 'https://pru-lydes.vercel.app/',
    meta: 'A fully responsive, mobile-first branch website designed & deployed during my internship.',
    tags: 'Next.js · Responsive · Cross-platform',
  },
  {
    title: 'Budget Management Dashboard',
    href: 'https://github.com/Ruthskery/budget-management-frontend',
    meta: 'A modern dashboard with dark/light mode, charts, transactions and analytics — Next.js + FastAPI + MySQL.',
    tags: 'Next.js · TypeScript · FastAPI',
  },
  {
    title: 'More on GitHub',
    href: 'https://github.com/Ruthskery',
    meta: 'CRUD apps, REST APIs, Raspberry-Pi experiments and more — explore the full repo list.',
    tags: '@Ruthskery',
  },
];

export const EXPERIENCE: { role: string; org: string; when: string }[] = [
  {
    role: 'Software Testing Engineer',
    org: 'CSI Interfusion',
    when: 'Present · Azure DevOps, CI/CD, test management',
  },
  {
    role: 'Website Developer Intern',
    org: 'Pru Life UK — Ortigas Center, Pasig',
    when: 'March – May 2025 · Built & deployed a responsive branch site',
  },
  {
    role: 'Graduated',
    org: "Bachelor's Degree, Computer Science",
    when: 'July 2025',
  },
];

export const AI_SUGGESTIONS: { q: string; label: string }[] = [
  { q: "What is Cyril's tech stack?", label: 'His tech stack?' },
  { q: 'What does Cyril do at CSI Interfusion?', label: 'Current role?' },
  { q: 'Is Cyril open to work?', label: 'Open to work?' },
];
