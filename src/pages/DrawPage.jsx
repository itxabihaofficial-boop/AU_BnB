import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shuffle, Users, Layers, Zap, CheckCircle2, Trophy, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { teams } from '../data/teams';
import { challenges } from '../data/challenges';

const DrawPage = () => {
  const navigate = useNavigate();
  const [isDrawing, setIsDrawing] = useState(false);
  const [results, setResults] = useState(null);

  // --- The Randomization Logic ---
  const handleLuckyDraw = () => {
    setIsDrawing(true);
    
    // Simulate a delay for the "shuffling" effect
    setTimeout(() => {
      // 1. Create a copy of teams to avoid mutating original data
      const shuffledTeams = [...teams];
      
      // 2. Assign a random challenge to each team
      const assignments = shuffledTeams.map(team => {
        const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
        return {
          ...team,
          assignedChallenge: randomChallenge
        };
      });

      setResults(assignments);
      setIsDrawing(false);
    }, 2000); // 2 second suspense delay
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500 selection:text-white font-sans">
      <Navbar />

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-sm mb-6"
          >
            <Trophy size={14} />
            <span>Grand Allocation Event</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-black mb-6"
          >
            Lucky Draw & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">Challenge Assignment</span>
          </motion.h1>
          
          <p className="text-gray-400 text-lg">
            Randomize the fate of our innovators. Assign each team a unique problem statement to solve for the planet.
          </p>
        </div>

        {/* --- Overview Card (Stats) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md mb-12 relative overflow-hidden"
        >
          {/* Decorative Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            
            {/* Stats */}
            <div className="flex gap-12">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-gray-400 mb-2">
                  <Users size={18} />
                  <span className="text-sm font-bold uppercase tracking-wider">Teams</span>
                </div>
                <span className="text-5xl font-black text-white">{teams.length}</span>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-gray-400 mb-2">
                  <Layers size={18} />
                  <span className="text-sm font-bold uppercase tracking-wider">Challenges</span>
                </div>
                <span className="text-5xl font-black text-emerald-400">{challenges.length}</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex flex-col items-center gap-4">
               {!results ? (
                 <button
                   onClick={handleLuckyDraw}
                   disabled={isDrawing}
                   className={`relative px-10 py-5 rounded-2xl font-bold text-lg text-white shadow-xl transition-all
                     ${isDrawing 
                       ? 'bg-gray-800 cursor-wait opacity-80' 
                       : 'bg-gradient-to-r from-emerald-600 to-lime-600 hover:scale-105 hover:shadow-emerald-500/30'
                     }`}
                 >
                   {isDrawing ? (
                     <span className="flex items-center gap-3 animate-pulse">
                       <Shuffle className="animate-spin" /> Allocating...
                     </span>
                   ) : (
                     <span className="flex items-center gap-3">
                       <Shuffle /> Perform Lucky Draw
                     </span>
                   )}
                 </button>
               ) : (
                 <button 
                    onClick={() => setResults(null)} // Reset
                    className="text-gray-400 hover:text-white text-sm underline underline-offset-4"
                 >
                   Reset Allocation
                 </button>
               )}
            </div>
          </div>
        </motion.div>

        {/* --- Results Expansion Section --- */}
        <AnimatePresence>
          {results && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
               <div className="flex items-center justify-center gap-2 mb-8 text-emerald-400 font-bold tracking-widest uppercase text-sm">
                  <CheckCircle2 size={16} /> Allocation Complete
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {results.map((item, index) => (
                   <motion.div
                     key={item.id}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.1 }}
                     className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                   >
                     {/* Connecting Line Visual */}
                     <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10">
                        <ArrowRight size={24} />
                     </div>

                     <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-start md:items-center relative z-10">
                        
                        {/* Team Side */}
                        <div className="flex-1">
                           <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">{item.name}</h3>
                           <div className="flex flex-wrap gap-2 mt-2">
                              {item.members.map((m, i) => (
                                <span key={i} className="text-xs text-gray-500 bg-black/30 px-2 py-1 rounded border border-white/5">{m}</span>
                              ))}
                           </div>
                        </div>

                        {/* Challenge Side */}
                        <div className="flex-1 md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 mt-4 md:mt-0">
                           <span className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-1 block">Assigned Challenge</span>
                           <h4 className="text-lg font-bold text-white leading-tight mb-2">{item.assignedChallenge.title}</h4>
                           <p className="text-sm text-gray-400 line-clamp-2">{item.assignedChallenge.detail}</p>
                        </div>

                     </div>
                   </motion.div>
                 ))}
               </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default DrawPage;