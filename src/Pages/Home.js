// src/Components/Layout.js
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Home = ({ children }) => {
  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ backgroundColor: 'black', padding: '17px' }}
    > 
      <div
        className="container d-flex flex-column justify-content-between"
        style={{
          background: 'linear-gradient(85deg,#02010a, #242423, #333533, #000000, #252422, rgb(121, 114, 114), #000000)',
          backgroundSize: '400% 400%',
          animation: 'gradient 44s ease infinite',
          borderRadius: '30px',
          padding: '10px',
          maxWidth: '100%',
          minHeight: '560px',
          margin: '0 auto',
          color: 'white',
          flexGrow: 1,  
        }}
      >
        <Navbar />
        <div style={{ flexGrow: 1 }}>{children}</div> 
        <Footer />
      </div>
    </div>
  );
};

export default Home;
