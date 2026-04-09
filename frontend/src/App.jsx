import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Splash from './pages/Splash';
import Selection from './pages/Selection';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Academics from './pages/Academics';
import Campus from './pages/Campus';
import Placements from './pages/Placements';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
