// Cursor.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  const smokeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      gsap.to(smokeRef.current, {
        duration: 1,
        x: event.clientX,
        y: event.clientY,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      <div
        ref={smokeRef}
        className="absolute w-screen h-screen bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-50"
        style={{
          boxShadow: '0 0 10px 10px rgba(255, 255, 255, 0.3)',
          filter: 'blur(200px)',
        }}
      />
    </div>
  );
};

export default Cursor;
