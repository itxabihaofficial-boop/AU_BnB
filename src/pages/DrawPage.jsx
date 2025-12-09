import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shuffle, Users, Layers, Trophy, CheckCircle2, ArrowRight, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { teams } from '../data/teams';
import { challenges } from '../data/challenges';

const DrawPage = () => {
  const navigate = useNavigate();
  const [isDrawing, setIsDrawing] = useState(false);
  const [results, setResults] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // 1. SECURITY CHECK: Only Admin can view this
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'admin') {
      navigate('/login'); // Redirect unauthorized users
    } else {
      setIsAdmin(true);
    }
    
    // Check if draw already happened
    const existingDraw = localStorage.getItem('drawResults');
    if (existingDraw) {
        setResults(JSON.parse(existingDraw));
    }
  }, [navigate]);

  // 2. THE LOGIC
  const handleLuckyDraw = () => {
    setIsDrawing(true);
    
    setTimeout(() => {
      const shuffledChallenges = [...challenges].sort(() => 0.5 - Math.random());
      
      // Map teams to random challenges
      const assignments = teams.map((team, index) => {
        // Use modulo to cycle challenges if there are more teams than challenges
        const assignedChallenge = shuffledChallenges[index % shuffledChallenges.length];
        return {
          teamUsername: team.username, // Key to link with Team Dashboard
          teamName: team.name,
          members: team.members,
          challenge: assignedChallenge
        };
      });

      // 3. SAVE TO LOCAL STORAGE (This "Publishes" the result to teams)
      localStorage.setItem('drawResults', JSON.stringify(assignments));
      
      setResults(assignments);
      setIsDrawing(false);
    }, 2500);
  };

  const handleReset = () => {
      localStorage.removeItem('drawResults');
      setResults(null);
  };

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500 selection:text-white">
      {/* We don't necessarily need the public Navbar here, but can keep it if desired */}
      
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-20">
        
        {/* Admin Header */}
        <div className="flex items-center gap-2 mb-8 text-gray-500 hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/admin-dashboard')}>
            <ArrowRight className="rotate-180" size={20} /> Back to Dashboard
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-900/30 border border-red-500/30 text-red-400 text-sm mb-6">
            <Lock size={14} />
            <span>Admin Access Only</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Grand <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">Allocation</span>
          </h1>
          
          <p className="text-gray-400 text-lg">
            Clicking the button below will permanently assign challenges to all teams. 
            The results will immediately appear on their dashboards.
          </p>
        </div>

        {/* Action Area */}
        <div className="flex flex-col items-center justify-center gap-6 mb-16">
            {!results ? (
                <button
                onClick={handleLuckyDraw}
                disabled={isDrawing}
                className={`relative px-12 py-6 rounded-2xl font-bold text-2xl text-white shadow-2xl transition-all flex items-center gap-4
                    ${isDrawing ? 'bg-gray-800 cursor-wait opacity-80' : 'bg-gradient-to-r from-emerald-600 to-lime-600 hover:scale-105 hover:shadow-emerald-500/30'}`}
                >
                {isDrawing ? (
                    <><Shuffle className="animate-spin" size={30} /> Randomizing...</>
                ) : (
                    <><Shuffle size={30} /> Initialize Draw</>
                )}
                </button>
            ) : (
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/20 text-emerald-400 rounded-xl font-bold mb-4 border border-emerald-500/30">
                        <CheckCircle2 /> Draw Published Successfully
                    </div>
                    <div>
                        <button onClick={handleReset} className="text-sm text-gray-500 underline hover:text-red-400">Reset System</button>
                    </div>
                </div>
            )}
        </div>

        {/* Results List */}
        <AnimatePresence>
          {results && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {results.map((item, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.05 }}
                   className="bg-white/5 border border-white/10 rounded-2xl p-6 flex justify-between items-center"
                 >
                    <div>
                        <h3 className="font-bold text-white text-lg">{item.teamName}</h3>
                        <div className="text-xs text-gray-500 mt-1">{item.members.join(", ")}</div>
                    </div>
                    <div className="text-right">
                        <div className="text-xs font-bold text-lime-400 uppercase">Assigned</div>
                        <div className="text-sm text-gray-300 max-w-[200px] truncate">{item.challenge.title}</div>
                    </div>
                 </motion.div>
               ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DrawPage;