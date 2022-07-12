import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import DriftPage from './components/DriftPage';
import ForzaPage from './components/ForzaPage';
import HomePage from './components/HomePage';
import TimeAttackPage from './components/TimeAttackPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <React.Fragment>
          <Route path="/" end element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </React.Fragment>
      </Routes>
    </BrowserRouter>
  );
}