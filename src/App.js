import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DriftPage from './components/DriftPage';
import ForzaPage from './components/ForzaPage';
import HomePage from './components/HomePage';
import TimeAttackPage from './components/TimeAttackPage';

function App() {
  return (
      <Routes>
          <Route path="/" end element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
      </Routes>
  );
}

export default App;