import React, { useEffect } from 'react';
import gsap from 'gsap';

const Box = () => {
  useEffect(() => {
    gsap.from('.section', { opacity: 0, y: 50, duration: 1 });
    gsap.from('.page', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg w-full md:w-1/2">
      <img src='/footer-1.png'></img>
        <h2 className="text-2xl font-bold mb-4">Light Weight</h2>
        
        <p className="mb-4">
        Motion Art for Elementor is designed to be lightweight.
        </p>
        
      </div>
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg w-full md:w-1/2">
      <img src='/footer-2.png'></img>
        <h2 className="text-2xl font-bold mb-4">100% Responsive</h2>
        <p className="mb-4">
        Create a consistent visual experience across all devices.
        </p>
        
      </div>
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg w-full md:w-1/2">
      <img src='/footer-3.png'></img>
        <h2 className="text-2xl font-bold mb-4">User Friendly Interface</h2>
        <p className="mb-4">
        Ensure a smooth experience for both applicants and administrators.
        </p>
        
      </div>
      
      
    </div>
  );
}

export default Box;
