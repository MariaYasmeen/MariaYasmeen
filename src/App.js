import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Skills from './Pages/Skills';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/skills" element={<Skills />} />
    
          <Route path="/work" element={<Projects />} />
           
        </Routes>
      </BrowserRouter>
      
    </React.StrictMode>
  );
}

export default App;
