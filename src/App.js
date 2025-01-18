import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Project from "./components/Project";
import Contac from "./components/Contac";
 

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800 bg-gray-100">
        <Navbar />
        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Das" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contac" element={<Contac />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;