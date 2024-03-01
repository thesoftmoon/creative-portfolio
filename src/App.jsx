import React from 'react';
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/project/:elementId" element={<ProjectPage/>}/>
      </Routes>
  )
}

export default App