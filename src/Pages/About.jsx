
import React, {useState, useEffect} from 'react';
import Header from "../Components/Header";
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import LoadingPage from './LoadingPage';
import MyFlexibleLayout from './MyFlexibleLayout ';
const LOADING_SCREEN_KEY = 'showLoadingScreen';

function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check sessionStorage to determine if the loading screen should be shown
    const loadingScreenShown = sessionStorage.getItem(LOADING_SCREEN_KEY);

    if (!loadingScreenShown) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem(LOADING_SCREEN_KEY, 'true'); 
      }, 2000);

      return () => clearTimeout(timer); 
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
     <Helmet>
        <title>About - Maria Yasmeen</title>
        <meta name="description" content="Crafting code to bring my ideas to life as a Developer and designer from Islamabad." />
      </Helmet>
      {isLoading ? <LoadingPage /> : 
      <>
     <MyFlexibleLayout />
      </>
      }
   
    </>
  )
}

export default About;
