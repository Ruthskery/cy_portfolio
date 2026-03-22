'use client'
import React from 'react';
import Navbar from './components/navbar';
import Layout from './Layout/layout';
import Chatbot from './components/AIChat/Chatbot';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar />
      <Layout />
      <Footer />

      <Chatbot />
    </>
  );
}

export default App;
