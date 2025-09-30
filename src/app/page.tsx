'use client'
import React from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import Navbar from '../../components/navbar';
import About from '../../sections/about';
import Experience from '../../sections/experience';
import Works from '../../sections/works';
import Hero from '../../sections/hero';
import TechStack from '../../sections/techstack';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Works />
    </ThemeProvider>
  );
}

export default App;
