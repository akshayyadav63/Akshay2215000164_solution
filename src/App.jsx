import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import TripView from './pages/TripView';

import LynkitNavbar from './components/LynkitNavbar';

function App() {
  return (
    <Router>
      <div className="font-sans text-slate-900">
        <LynkitNavbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<AnalyticsDashboard />} />
          <Route path="/trip-view" element={<TripView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
