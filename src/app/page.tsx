'use client'
import React from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import Navbar from './components/navbar';
import Layout from './Layout/layout';
import Chatbot from './components/AIChat/Chatbot';
import Footer from './components/footer';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Layout />
      <Footer />

      <Chatbot />
    </ThemeProvider>
  );
}

export default App;
