import type { Metadata, Viewport } from "next";
import "./globals.css";
import { bricolage, spaceGrotesk } from "../../styles/font";

export const metadata: Metadata = {
  title: "Cyril Imperial — Full-Stack Developer & AI Engineer",
  keywords: [
    "Cyril Imperial",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "CSS", 
    "HTML",
    "Web Design",
    "UI/UX",
    "Full Stack Developer",
    "Frontend Developer",],
  authors: [{ name: "Cyril Imperial" }],
  creator: "Cyril Imperial",
  description:
    "Cyril Christian Imperial — aspiring Full-Stack Developer & AI Engineer building scalable, intelligent, data-driven web apps.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
