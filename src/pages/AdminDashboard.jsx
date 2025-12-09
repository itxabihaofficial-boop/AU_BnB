import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shuffle, ShieldCheck, LogOut } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-10 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-4xl w-full">
        <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
          <h1 className="text-4xl font-black">Admin <span className="text-red-500">Control Center</span></h1>
          <button onClick={handleLogout} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <LogOut size={18} /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: The Draw */}
          <div 
            onClick={() => navigate('/draw')}
            className="group cursor-pointer bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Shuffle size={100} />
            </div>
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Shuffle size={24} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Launch Lucky Draw</h2>
            <p className="text-gray-400 text-sm">Shuffle teams and assign random challenges. This will update the dashboard for all teams immediately.</p>
          </div>

          {/* Card 2: Status (Placeholder) */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl opacity-50 cursor-not-allowed">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
              <ShieldCheck size={24} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Monitor Submissions</h2>
            <p className="text-gray-400 text-sm">Feature coming soon. Track git repositories and submission status.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;