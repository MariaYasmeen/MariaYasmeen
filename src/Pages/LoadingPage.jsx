import React from 'react';
import './Pages.css'; // Import the CSS file
import { motion } from 'framer-motion';


export default function LoadingPage() {
  return (
    <div className="loading-page">
      <motion.h4 
          initial={{ opacity: 0, y: 5 }}  // Start with text below and invisible
          animate={{ opacity: 1, y: 0 }}  // End with text at its final position and visible
          transition={{ duration: 0.6, ease: "easeOut" }}  // Smooth transition        
      className="loading-text">Maria Yasmeen Portfolio  <span style={{color:"grey"}}>  2024</span>
      </motion.h4>
    </div>
  );
}
