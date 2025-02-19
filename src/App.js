import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import About from './Pages/About';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Work from './Pages/Work';
import Hacks from './Pages/Hacks';
import "./Components/cursor.js";
import "./Components/cursor.css";


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
      <Home>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/hacks" element={<Hacks />} />
        </Routes>
        </Home>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
