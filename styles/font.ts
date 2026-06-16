import { Bricolage_Grotesque, Space_Grotesk } from 'next/font/google';

// Display — the hero name, panel headings, the wordmark. Big and tight.
export const bricolage = Bricolage_Grotesque({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

// Body, UI and labels — calm, slightly technical, very legible.
export const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});
