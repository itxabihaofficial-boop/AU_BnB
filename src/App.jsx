import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <--- 1. Import Footer
import Hero from './components/Hero';
import TeamsPage from './pages/TeamsPage';
import DrawPage from './pages/DrawPage';

function App() {
  return (
    // Added flex-col to ensure footer sticks to bottom if page is short
    <div className="w-full min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      {/* This div grows to fill space, pushing footer down */}
      <div className="flex-grow"> 
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/draw" element={<DrawPage />} />
        </Routes>
      </div>

      <Footer /> {/* <--- 2. Add Footer here */}
    </div>
  );
}

export default App;