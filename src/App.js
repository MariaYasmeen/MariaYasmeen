import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectDetails from './Pages/ProjectDetails';
import Projects from './Pages/Projects';
import About from './Pages/About';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectName" element={<ProjectDetails />} />
           
        </Routes>
      </BrowserRouter>
      
    </React.StrictMode>
  );
}

export default App;
