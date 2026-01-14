import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Traditions from './pages/Traditions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/traditions" element={<Traditions />} />
      </Routes>
    </Router>
  );
}

export default App;
