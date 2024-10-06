import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExoplanetViewer from './components/ExoplanetViewer';
import PlanetDetail from './components/PlanetDetail';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="App bg-[#121212] text-[#E0E0E0] font-exo">
        <Routes>
          <Route path="/" element={<ExoplanetViewer />} />
          <Route path="/planet/:planetName" element={<PlanetDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
