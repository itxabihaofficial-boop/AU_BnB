import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, User, LogOut, ShieldCheck, Trophy, Terminal, FileText, Cpu, AlertTriangle, LockIcon } from 'lucide-react';

const TeamDashboard = () => {
  const navigate = useNavigate();
  const [teamData, setTeamData] = useState(null);
  const [assignedChallenge, setAssignedChallenge] = useState(null);

  // 1. Check Auth & Load Challenge Data
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login'); 
      return;
    }
    const parsedUser = JSON.parse(storedUser);
    setTeamData(parsedUser);

    // 2. CHECK FOR DRAW RESULTS
    const allDrawResults = localStorage.getItem('drawResults');
    if (allDrawResults) {
        const parsedResults = JSON.parse(allDrawResults);
        // Find the challenge specifically for this logged-in team
        const myResult = parsedResults.find(r => r.teamUsername === parsedUser.username);
        if (myResult) {
            setAssignedChallenge(myResult.challenge);
        }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!teamData) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 px-6 pb-12 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-emerald-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-white/10 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-3 text-emerald-400 mb-2 font-mono text-sm tracking-wider uppercase">
              <Terminal size={16} /> Team Dashboard
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight">
              Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">{teamData.teamName}</span>
            </h1>
          </div>
          <button onClick={handleLogout} className="px-6 py-2 rounded-full border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors text-sm font-bold">
            Logout
          </button>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* --- LEFT COLUMN (Members) --- */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            
            {/* Team Members Card */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400"><Users size={20} /></div>
                 <h2 className="text-xl font-bold">Team Members</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teamData.members?.map((member, index) => (
                   <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-xs">
                        <User size={14} />
                      </div>
                      <span className="font-medium text-gray-200">{member}</span>
                   </div>
                ))}
              </div>
            </div>

            {/* Status & Score Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0A0A0A] border border-emerald-500/30 rounded-3xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><ShieldCheck size={64} /></div>
                    <h3 className="text-emerald-400 font-bold mb-1 flex items-center gap-2"><ShieldCheck size={18}/> Status: Active</h3>
                    <p className="text-xs text-gray-400">Your team is registered for the hackathon.</p>
                </div>
                <div className="bg-[#0A0A0A] border border-lime-500/30 rounded-3xl p-6 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 opacity-10"><Trophy size={64} /></div>
                    <h3 className="text-lime-400 font-bold mb-1 flex items-center gap-2"><Trophy size={18}/> Current Score</h3>
                    <p className="text-xs text-gray-400">Submission Pending...</p>
                </div>
            </div>

            {/* --- CHALLENGE CONTAINER (Dynamic) --- */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden min-h-[300px]"
            >
               {assignedChallenge ? (
                   // --- STATE A: Challenge Assigned ---
                   <div className="relative z-10">
                       <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                             <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><Cpu size={20} /></div>
                             <h2 className="text-2xl font-black text-white">Assigned Challenge</h2>
                          </div>
                          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20 uppercase tracking-widest">
                            Active Mission
                          </span>
                       </div>

                       <div className="mb-6">
                           <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
                               {assignedChallenge.title}
                           </h3>
                           <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-purple-500 pl-4 bg-white/5 py-4 pr-4 rounded-r-lg">
                               {assignedChallenge.intro}
                           </p>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                           <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                               <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-3">Requirements</h4>
                               <p className="text-sm text-gray-400 leading-6">{assignedChallenge.req}</p>
                           </div>
                           <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                               <h4 className="text-sm font-bold text-lime-400 uppercase tracking-wider mb-3">Expected Output</h4>
                               <p className="text-sm text-gray-400 leading-6">{assignedChallenge.output}</p>
                           </div>
                       </div>
                   </div>
               ) : (
                   // --- STATE B: Waiting for Admin ---
                   <div className="h-full flex flex-col items-center justify-center text-center py-12 opacity-50">
                       <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-4 animate-pulse">
                           <LockIcon size={32} className="text-gray-500" />
                       </div>
                       <h3 className="text-xl font-bold text-gray-300 mb-2">Awaiting Allocation</h3>
                       <p className="text-sm text-gray-500 max-w-sm">
                           The Admin has not performed the Lucky Draw yet. Your challenge will appear here automatically once the event begins.
                       </p>
                   </div>
               )}
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN (Guidelines & ID) --- */}
          <div className="col-span-1 space-y-6">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 h-fit sticky top-24">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                <FileText size={20} className="text-gray-400"/> Project Guidelines
              </h3>
              <ul className="space-y-4">
                {[
                  "Ensure all team members are present.",
                  "Submit your repo link before 5 PM.",
                  "Use the 'Coding for Climate' theme.",
                  "Respect the SDG 13 objectives."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-400 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Team ID</div>
                <div className="font-mono text-emerald-400 bg-emerald-900/10 px-4 py-3 rounded-xl border border-emerald-500/20 inline-block w-full text-center text-lg">
                  {teamData.username}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TeamDashboard;