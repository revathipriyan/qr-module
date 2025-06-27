import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import GenerateQR from './GenerateQR'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/qr" element={<GenerateQR />} />
      </Routes>
    </Router>
  );
}

export default App;
