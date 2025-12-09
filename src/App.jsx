import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import TeamsPage from './pages/TeamsPage';
import DrawPage from './pages/DrawPage';
import TeamDashboard from './pages/TeamDashboard';
import Login from './pages/Login'; 

// 2. Placeholder Components for Dashboards 
// (You can move these to their own files in /pages later)
// const TeamDashboard = () => (
//   <div className="p-20 text-center">
//     <h1 className="text-3xl font-bold text-green-400">Team Dashboard</h1>
//     <p>Success! You are logged in as a Team.</p>
//   </div>
// );

// const AdminDashboard = () => (
//   <div className="p-20 text-center">
//     <h1 className="text-3xl font-bold text-red-500">Admin Dashboard</h1>
//     <p>Restricted Area. Admin access granted.</p>
//   </div>
// );

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow"> 
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Hero />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/draw" element={<DrawPage />} />

          {/* Authentication Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes (Targets for Login Redirect) */}
          <Route path="/team-dashboard" element={<TeamDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;