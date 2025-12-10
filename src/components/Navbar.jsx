import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard } from 'lucide-react';
import logo from '../assets/images/logo.jpeg'; 

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Check login status whenever the URL changes
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [location]);

  // Determine dashboard link based on role
  const getDashboardLink = () => {
    if (!user) return '/login';
    return user.role === 'admin' ? '/admin-dashboard' : '/team-dashboard';
  };

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.8)] transition-all duration-300">
            <img 
              src={logo} 
              alt="AuBNB Logo" 
              className="w-full h-full object-cover" 
            />
          </div>
          <span className="text-white font-bold text-2xl tracking-tight hidden sm:block">
            Coding For<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400"> Climate</span>
          </span>
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link to="/" className={`hover:text-emerald-400 transition-colors ${location.pathname === '/' ? 'text-white' : ''}`}>Home</Link>
          <Link to="/teams" className={`hover:text-emerald-400 transition-colors ${location.pathname === '/teams' ? 'text-white' : ''}`}>Teams</Link>
          
          {/* CONDITIONAL RENDER: Only show Lucky Draw if user is ADMIN */}
          {user && user.role === 'admin' && (
            <Link to="/draw" className={`hover:text-emerald-400 transition-colors ${location.pathname === '/draw' ? 'text-white' : ''}`}>
              Assign Challenges
            </Link>
          )}
        </div>

        {/* Right Side: Dynamic Button */}
        <div className="flex items-center gap-4">
          <span className="hidden lg:block text-emerald-500/80 font-mono text-sm">10 Dec 2025</span>
          
          {user ? (
            <div className="flex items-center gap-4">
              {/* My Dashboard Button */}
              <Link 
                to={getDashboardLink()}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/20 transition-all transform hover:scale-105"
              >
                <LayoutDashboard size={16} />
                <span className="hidden sm:inline">My Dashboard</span>
              </Link>
            </div>
          ) : (
            /* Sign In Button */
            <Link 
              to="/login"
              className="px-5 py-2 rounded-full border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-all text-sm font-semibold"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;