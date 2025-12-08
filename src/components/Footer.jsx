import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpeg';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-2">
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
                    <br />
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Empowering the next generation of developers to build sustainable tech solutions for a greener future. Join the movement towards SDG 13.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/teams" className="hover:text-emerald-400 transition-colors">View Teams</Link></li>
              <li><Link to="/draw" className="hover:text-emerald-400 transition-colors">Lucky Draw</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-600/50 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-content-center items-center gap-4 text-sm text-gray-500">
          <p>© 2025 Air University Bits & Bytes Society. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;