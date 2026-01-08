import React from 'react';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const LandingPage = () => {
  return (
    <div className="bg-dark min-h-screen text-white">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="https://www.lynkit.in/static/media/Hardware.882306635f1433f8d862.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="block text-white mb-2">Orchestrating Efficiency</span>
            <span className="block text-primary">Better Visibility</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-200 mb-8 font-light">
             We track 50 million packets of goods everyday for some of the largest enterprises in the world.
          </p>
          <div className="flex justify-center gap-4">
             <button className="bg-primary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded shadow-lg transition-transform transform hover:scale-105">
               GET STARTED
             </button>
             <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-dark transition-all">
               LEARN MORE
             </button>
          </div>
        </div>
      </section>

      {/* Feature Highlights (Keeping some original content but styled) */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Our Solutions</h2>
            <h3 className="text-3xl font-bold text-white">Advanced Logistics Technology</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-dark p-8 rounded-lg shadow-xl border border-gray-800 hover:border-primary/50 transition-colors">
               <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 text-primary">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"></path></svg>
               </div>
               <h4 className="text-xl font-bold text-white mb-3">Analytics Dashboard</h4>
               <p className="text-gray-400 mb-4">Real-time insights into your supply chain operations.</p>
               <Link to="/dashboard" className="text-primary hover:text-white text-sm font-bold flex items-center">
                 View Dashboard <span className="ml-1">&rarr;</span>
               </Link>
             </div>

             <div className="bg-dark p-8 rounded-lg shadow-xl border border-gray-800 hover:border-primary/50 transition-colors">
               <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
               </div>
               <h4 className="text-xl font-bold text-white mb-3">Trip Tracking</h4>
               <p className="text-gray-400 mb-4">Detailed view of ongoing and completed trips.</p>
               <Link to="/trip-view" className="text-primary hover:text-white text-sm font-bold flex items-center">
                 Track Trips <span className="ml-1">&rarr;</span>
               </Link>
             </div>
             
             <div className="bg-dark p-8 rounded-lg shadow-xl border border-gray-800 hover:border-primary/50 transition-colors">
               <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 text-primary">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
               </div>
               <h4 className="text-xl font-bold text-white mb-3">Automation</h4>
               <p className="text-gray-400 mb-4">Automate your logistics workflows for maximum efficiency.</p>
               <a href="#" className="text-primary hover:text-white text-sm font-bold flex items-center">
                 Learn More <span className="ml-1">&rarr;</span>
               </a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
