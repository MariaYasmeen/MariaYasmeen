import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Work from "./Pages/Work";
import Loader from "./Components/Loader.js";
import { motion, AnimatePresence } from "framer-motion";
import "./Components/cursor.js";
import "./Components/cursor.css";
import Hacks from "./Pages/Hacks.jsx";
import Contact from "./Pages/Contact.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);  

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}  
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}  
          >
            <BrowserRouter>
              <Home>
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/hackathons" element={<Hacks />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Home>
            </BrowserRouter>
          </motion.div>
        )}
      </AnimatePresence>
    </React.StrictMode>
  );
}

export default App;
