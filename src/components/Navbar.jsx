import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpeg';

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* Image Logo */}
          <div className="relative w-10 h-10 overflow-hidden rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.8)] transition-all duration-300">
            <img 
              src={logo} 
              alt="AuBNB Logo" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Text Branding */}
          <span className="text-white font-bold text-2xl tracking-tight">
            Coding For<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400"> Climate</span>
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link to="/" className="text-white hover:text-emerald-400 transition-colors">Home</Link>
          <Link to="/teams" className="hover:text-emerald-400 transition-colors">Teams</Link>
          <Link to="/draw" className="hover:text-emerald-400 transition-colors">Lucky Draw</Link>
        </div>

        {/* Date / Action */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-emerald-500/80 font-mono text-sm">20 Nov 2025</span>
          
          {/* UPDATED: Changed button to Link pointing to /login */}
          <Link 
            to="/login"
            className="px-5 py-2 rounded-full border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-all text-sm font-semibold"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;