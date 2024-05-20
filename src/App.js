import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Header from './Header';
import Ratings from './Ratings';
import Box from './Box';
import Footer from './Footer';
import './App.css';
import Cursor from './Cursor';

const App = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, { duration: 1, opacity: 0, y: -50 });
  }, []);

  return (
    
    <div className="min-h-screen bg-black text-white">
      <Cursor />
      <Header />
      
      <div className="flex flex-col items-center justify-center text-center py-20">
      <span className="text-gradient text-lg sm:text-2xl mb-6">Transform Your</span>
      <span className="text-gradient text-lg sm:text-2xl mb-6">Website</span>
      
        <h1 className="text-4xl sm:text-5xl font-bold mb-4" ref={titleRef}>
          Attract Your Visitors Attention With Colorful <br />
          <span className="text-gradient">Motion Art Effect</span>
        </h1>
        <p className="text-lg sm:text-2xl mb-6">
          Unleash the power of creativity with Motion Art for Elementor - your
          ultimate solution for seamlessly integrating captivating animations into
          your website.
        </p>
        <p className="text-lg sm:text-2xl mb-6">
          Trusted by thousands of users around the world
        </p>
        <Ratings />
        <p className="text-lg sm:text-2xl mb-6">
        Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </p>
        <span>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</span>
        <button className="purchase-button mt-8">
          <span>Purchase From Envato</span>
        </button>
        <img src="/logo-star.png" alt="Logo" className="h-55 mr-55" />
        <p className="text-lg sm:text-2xl mb-6">Apply On Any Section Or Enable For Whole Page</p>
      </div>
      <Box /> <br></br>
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Supported by All Popular Browsers</h2>
        <p className="mb-4">
        Rest assured, Motion Art is designed to be compatible with all major web browsers.
        </p>
        <img src='/supported.png'></img>
       
      </div><br></br>
      <h2 className="text-2xl font-bold mb-4">An All-Round Plugin With Powerful Features</h2>
        <p className="mb-4">
        Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
        </p>
        <Footer />
        <div className="App">
      
    </div>
    
    <div className=" bottom-0 w-full bg-gradient-to-r from-orange-500 via-purple-500 to-purple-700 text-white p-4 flex justify-between items-center">
      <div>© 2023 Copywrite. All rights reserved by QodeMatrix</div>
      <div className="flex space-x-4">
        <a href="#documentation" className="hover:underline">Documentation</a>
        <a href="#support" className="hover:underline">Support</a>
      </div>
    </div>
    
    </div>
    
        
    
  );
};

export default App;
