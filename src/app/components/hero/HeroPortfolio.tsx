'use client';

/* ============================================================
   Cyril Imperial — one-page chibi hero portfolio
   · transparent navbar that frosts on scroll + CV download
   · continuously-spinning chibi toy centered behind the content
   · story panels slide in from alternating sides on scroll
   · contact lifts the toy; AI mode splits the screen (toy left, Omen right)
   ============================================================ */
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ChibiStage, { type ChibiMode } from './ChibiStage';
import OmenChat from './OmenChat';
import { EXPERIENCE, LINKS, PROJECTS, STACK_GROUPS } from './data';
import { ArrowRight, DownloadIcon, ExternalLink, GitHubIcon, LinkedInIcon, Spark } from './icons';
import ter from '../../../../public/people/ter.jpg';

export default function HeroPortfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [aiActive, setAiActive] = useState(false);
  const [contactOwns, setContactOwns] = useState(false);
  const [seedQuery, setSeedQuery] = useState<string | null>(null);
  const [heroInput, setHeroInput] = useState('');

  const aiActiveRef = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const mode: ChibiMode = aiActive ? 'ai' : contactOwns ? 'contact' : 'hero';

  // keep a ref in sync for use inside observer callbacks
  useEffect(() => {
    aiActiveRef.current = aiActive;
  }, [aiActive]);

  // body classes drive the CSS scene transitions
  useEffect(() => {
    document.body.classList.toggle('ai-active', aiActive);
  }, [aiActive]);
  useEffect(() => {
    document.body.classList.toggle('contact-view', contactOwns && !aiActive);
  }, [contactOwns, aiActive]);

  // navbar frost on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // scroll-reveal panels + contact ownership
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !('IntersectionObserver' in window)) {
      root?.querySelectorAll('.story, .contact').forEach((s) => s.classList.add('in'));
      return;
    }
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.toggle('in', e.isIntersecting));
      },
      { threshold: 0.35 }
    );
    root.querySelectorAll('.story, .contact').forEach((s) => reveal.observe(s));

    const contactEl = root.querySelector('#contact');
    const contactIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (aiActiveRef.current) return;
          setContactOwns(e.isIntersecting && e.intersectionRatio > 0.55);
        });
      },
      { threshold: [0, 0.55, 1] }
    );
    if (contactEl) contactIO.observe(contactEl);

    return () => {
      reveal.disconnect();
      contactIO.disconnect();
    };
  }, []);

  // close AI on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAiActive(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const openAI = (initial?: string) => {
    setAiActive(true);
    if (initial && initial.trim()) setSeedQuery(initial.trim());
  };

  return (
    <div ref={rootRef}>
      <ChibiStage mode={mode} />
      <div
        className="floor-glow"
        style={{ opacity: contactOwns && !aiActive ? 0 : 1 }}
      />

      <nav className={scrolled ? 'scrolled' : undefined}>
        <a className="brand" href="#top">
          <span className="dot" />
          Cyril Imperial
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="cv-btn" href={LINKS.cv} download>
          <DownloadIcon />
          Download CV
        </a>
      </nav>

      <div className="page" id="top">
        {/* HERO */}
        <header className="hero">
          <div className="hero-top">
            <div className="eyebrow">Full-Stack Developer &amp; AI Engineer</div>
            <h1>
              Cyril <em>Imperial</em>
            </h1>
            <div className="hero-role">
              I build scalable, intelligent, data-driven web apps — and the occasional
              collectible.
            </div>
          </div>
          <div className="hero-bottom">
            <form
              className="ai-bar"
              onSubmit={(e) => {
                e.preventDefault();
                openAI(heroInput);
                setHeroInput('');
              }}
            >
              <Spark className="spark" />
              <input
                type="text"
                value={heroInput}
                onChange={(e) => setHeroInput(e.target.value)}
                onFocus={() => openAI()}
                placeholder="Ask my AI anything about me…"
                autoComplete="off"
              />
              <button className="ai-send" type="submit" aria-label="Ask">
                <ArrowRight />
              </button>
            </form>
            <div className="scroll-cue">
              <span className="bar" />
              Scroll to explore
            </div>
          </div>
        </header>

        {/* STORY */}
        <section className="story" data-side="right" id="intro">
          <div className="panel">
            <span className="eyebrow">01 — Introduction</span>
            <h2>An engineer who likes things that feel alive.</h2>
            <p>
              I&apos;m Cyril Christian Imperial, an aspiring Full-Stack Developer and AI
              Engineer driven by building scalable, intelligent, and data-driven web
              applications that solve real-world problems.
            </p>
            <p>
              I work at the intersection of modern web tech and artificial intelligence —
              turning ideas into smart, efficient, user-centric products.
            </p>
          </div>
        </section>

        <section className="story" data-side="left" id="about">
          <div className="panel">
            <span className="eyebrow">02 — About</span>
            <h2>What I care about.</h2>
            <p>
              I specialize in full-stack development with a strong focus on AI integration
              and prompt engineering. I like clear engineering thinking paired with
              thoughtful interface design.
            </p>
            <p>
              I keep learning, experimenting, and refining — so my work stays aligned with a
              fast-moving landscape, and stays practical for real users.
            </p>
          </div>
        </section>

        <section className="story" data-side="right" id="stack">
          <div className="panel">
            <span className="eyebrow">03 — Tech Stack</span>
            <h2>Tools I reach for.</h2>
            {STACK_GROUPS.map((g) => (
              <div className="stack-group" key={g.label}>
                <div className="lbl">{g.label}</div>
                <div className="chips">
                  {g.items.map((it) => (
                    <span key={it}>{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="story" data-side="left" id="work">
          <div className="panel">
            <span className="eyebrow">04 — Selected Work</span>
            <h2>Things I&apos;ve shipped.</h2>
            <div className="proj">
              {PROJECTS.map((p) => (
                <a key={p.title} href={p.href} target="_blank" rel="noreferrer">
                  <div className="ttl">
                    {p.title}
                    <ExternalLink />
                  </div>
                  <div className="meta">{p.meta}</div>
                  <div className="tags">{p.tags}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="story" data-side="right" id="experience">
          <div className="panel">
            <span className="eyebrow">05 — Experience</span>
            <h2>Where I&apos;ve been.</h2>
            <ul className="xp">
              {EXPERIENCE.map((x) => (
                <li key={x.role}>
                  <div className="role">{x.role}</div>
                  <div className="org">{x.org}</div>
                  <div className="when">{x.when}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="story" data-side="left" id="testimonial">
          <div className="panel">
            <span className="eyebrow">06 — Testimonial</span>
            <p className="quote">
              Cyril pairs genuine curiosity with follow-through — he ships, he tests, and he
              keeps the user in mind the whole way.
            </p>
            <div className="by">
              <Image className="av" src={ter} alt="" width={38} height={38} />
              <div>
                <div className="nm">Ter David</div>
                <div className="rl">Colleague &amp; collaborator</div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <div className="contact-card">
            <span className="eyebrow">07 — Contact</span>
            <h2>Let&apos;s build something.</h2>
            <p>
              Open to collaborating on AI, full-stack development and thoughtful web
              experiences.
            </p>
            <div className="contact-links">
              <a className="primary" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon />
                LinkedIn
              </a>
              <a href={LINKS.github} target="_blank" rel="noreferrer">
                <GitHubIcon />
                GitHub
              </a>
              <a href={LINKS.cv} download>
                <DownloadIcon />
                Download CV
              </a>
            </div>
            <div className="foot">© 2025 Cyril Christian Imperial · Built with three.js</div>
          </div>
        </section>
      </div>

      {/* AI MODE OVERLAY */}
      <div className="ai-overlay" aria-hidden={!aiActive}>
        <div className="ai-left">
          <div className="tagline">
            <div className="k">Ask away</div>
            <div className="t">
              Omen answers as Cyril&apos;s assistant — while the figure keeps spinning.
            </div>
          </div>
        </div>
        <OmenChat
          active={aiActive}
          seedQuery={seedQuery}
          onSeedConsumed={() => setSeedQuery(null)}
          onClose={() => setAiActive(false)}
        />
      </div>
    </div>
  );
}
