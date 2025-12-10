import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { Code2, TreeDeciduous, Sun, Cpu, Lock, User, ArrowLeft, Leaf } from 'lucide-react';
import { Code2, TreeDeciduous, Sun, Cpu, Lock as LockIcon, User, ArrowLeft, Leaf } from 'lucide-react';

// 1. IMPORT THE SHARED DATA
// import { teams } from '../data/teams'; 

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Background Configuration
  const backgroundIcons = [
    { Icon: Code2, x: "10%", y: "20%", delay: 0, color: "text-emerald-500/20" },
    { Icon: TreeDeciduous, x: "85%", y: "15%", delay: 2, color: "text-lime-500/20" },
    { Icon: Sun, x: "15%", y: "75%", delay: 4, color: "text-yellow-500/20" },
    { Icon: Cpu, x: "80%", y: "60%", delay: 1, color: "text-teal-500/20" },
  ];




  // inside Login.jsx
const handleLogin = async (e) => {
  e.preventDefault();
  setError('');
  setIsLoading(true);

  try {
    const response = await fetch('https://au-bnb-frontend.onrender.com//api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Save user info to session
      localStorage.setItem('user', JSON.stringify(data));
      
      if (data.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/team-dashboard');
      }
    } else {
      setError('Invalid credentials');
    }
  } catch (err) {
    setError('Server connection failed');
  } finally {
    setIsLoading(false);
  }
};

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   setError('');
  //   setIsLoading(true);

  //   setTimeout(() => {
  //     // 2. SEARCH IN THE IMPORTED TEAMS ARRAY
  //     // We look for a match in the 'teams' file we just updated
  //     const foundUser = teams.find(
  //       (user) => user.username === username && user.password === password
  //     );

  //     if (foundUser) {
  //       // Save user data (including name: 'Eco Warriors', etc.)
  //       // We map 'name' to 'teamName' to match what TeamDashboard expects, 
  //       // or we update TeamDashboard to use 'name'. 
  //       // Let's standardise the object we save:
  //       const sessionData = {
  //          teamName: foundUser.name, 
  //          members: foundUser.members,
  //          role: foundUser.role,
  //          username: foundUser.username
  //       };

  //       localStorage.setItem('user', JSON.stringify(sessionData));

  //       if (foundUser.role === 'admin') {
  //         navigate('/admin-dashboard');
  //       } else {
  //         navigate('/team-dashboard');
  //       }
  //     } else {
  //       setError('Invalid credentials. Access denied.');
  //       setIsLoading(false);
  //     }
  //   }, 1500);
  // };

  return (
    // ... REST OF YOUR JSX REMAINS EXACTLY THE SAME AS BEFORE ...
    // (I am omitting the long JSX return here to save space, 
    // just copy the return statement from the previous Login code I gave you)
    <div className="w-full min-h-screen bg-[#050505] text-white flex items-center justify-center relative overflow-hidden">
      {/* ... paste the rest of the visual code here ... */}
       <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2574&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div 
        className="absolute inset-0 z-0 opacity-100 mix-blend-soft-light pointer-events-none blur-[2px]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2670&auto=format&fit=crop')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      />

      {/* Floating Icons */}
      {backgroundIcons.map((item, index) => (
        <motion.div
          key={`icon-${index}`}
          className={`absolute z-0 ${item.color} pointer-events-none`}
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
        >
          <item.Icon size={64} strokeWidth={1.5} />
        </motion.div>
      ))}

      {/* Central Glow behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* =======================
          LOGIN CARD
         ======================= */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md p-1"
      >
        {/* Card Border Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-3xl blur-sm" />
        
        <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-emerald-900/20">
          
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            
            <div className="flex justify-center mb-4">
               <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-lime-500/20 rounded-2xl border border-emerald-500/30">
                 <Leaf className="w-8 h-8 text-emerald-400" />
               </div>
            </div>

            <h2 className="text-3xl font-black tracking-tight mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-lime-400 to-teal-400">
                Team Portal
              </span>
            </h2>
            <p className="text-gray-400 text-sm">Enter your assigned credentials to continue.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Username */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Username</label>
              <div className="relative group">
                <User className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-emerald-400 transition-colors w-5 h-5" />
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all"
                  placeholder="Enter Team ID"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Password</label>
              <div className="relative group">
                <LockIcon className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-emerald-400 transition-colors w-5 h-5" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="text-red-400 text-xs text-center bg-red-500/10 py-2 rounded-lg border border-red-500/20"
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
              className={`w-full py-4 rounded-xl font-bold text-white shadow-lg shadow-emerald-900/20 relative overflow-hidden group ${isLoading ? 'opacity-70 cursor-wait' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-lime-600 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center justify-center gap-2">
                 {isLoading ? 'Verifying...' : 'Access System'}
                 {!isLoading && <ArrowLeft className="w-4 h-4 rotate-180" />}
              </span>
            </motion.button>

          </form>

          {/* Footer Text */}
          <div className="mt-8 text-center">
             <p className="text-xs text-gray-600">
               Protected by <span className="text-emerald-500/60">AuBNB SecureAuth</span>. <br /> 
               Issues? Contact event organizers.
             </p>
          </div>

        </div>
      </motion.div>

    </div>
  );
};

export default Login;