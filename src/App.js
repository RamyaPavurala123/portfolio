

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Project from './project'; 
import Contact from './Contact';
import HireMe from './HireMe';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/HireMe" element={<HireMe/>} />
        <Route path="/*" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;

