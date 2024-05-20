// src/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
        <span className="text-xl font-semibold">envato<span className="text-green-500">market</span></span>
      </div>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        Buy now
      </button>
    </header>
  );
};

export default Header;
