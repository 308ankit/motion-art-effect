import React, { useEffect } from 'react';
import gsap from 'gsap';

const Box = () => {
  useEffect(() => {
    gsap.from('.section', { opacity: 0, y: 50, duration: 1 });
    gsap.from('.page', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className=" p-6 bg-gray-800 rounded-lg shadow-lg w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Apply On Section</h2>
        <p className="mb-4">
          Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.
        </p>
        <img src='/head-1.png'></img>
      </div>
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Apply On Page</h2>
        <p className="mb-4">
          Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.
        </p>
        <img src='/head2.png'></img>
      </div>
      
    </div>
  );
}

export default Box;
