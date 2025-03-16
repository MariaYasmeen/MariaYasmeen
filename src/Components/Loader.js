import React from 'react';
import { motion } from 'framer-motion'; 

export default function Loader() {
  return (
    <div className="loading" style={{backgroundColor:"black"}}>
      <motion.h4 
        initial={{ opacity: 0, y: 10 }}  
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.6, ease: "easeOut" }} 
        className="loading-text"
      >
        Maria Yasmeen Portfolio <span className="year">2025</span>
      </motion.h4>
    </div>
  );
}
