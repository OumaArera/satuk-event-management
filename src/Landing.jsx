import React from 'react';
import { useNavigate } from 'react-router-dom';
import satukLogo from './images/satuk_logo.jpeg'; 
import tukLogo from './images/tuk_logo.jpeg'; 
import background from './images/test.jpg';

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  const handleBuyTicketClick = () => {
    navigate('/login');
  };

  return (
    <div 
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center mb-8 text-white">
        {/* Logo Container */}
        <div className="flex justify-center items-center space-x-6 mb-6">
          {/* SATUK Logo */}
          <img 
            src={satukLogo} 
            alt="SATUK Logo" 
            className="w-40 h-40 rounded-full animate-pulse" 
          />
          {/* TUK Logo */}
          <img 
            src={tukLogo} 
            alt="TUK Logo" 
            className="w-40 h-40 rounded-full animate-pulse" 
          />
        </div>

        <h1 className="text-5xl font-extrabold mt-4 drop-shadow-md">Welcome to SATUK AWARDS 2024</h1>
        <p className="text-lg mt-2 text-gray-300 drop-shadow-sm">Join us in celebrating excellence!</p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-8">
        {/* VIP Ticket Card */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform duration-500">
          <h2 className="text-2xl font-semibold text-center mb-2 text-gray-900">VIP Ticket</h2>
          <p className="text-xl text-center mb-4 text-gray-700">KES 1000</p>
          <p className="text-center text-gray-500 mb-6">Limited Packs Available!</p>
          <div className="flex justify-center">
            <button
              onClick={handleBuyTicketClick}
              className="bg-blue-600 text-white py-2 px-4 rounded shadow-lg hover:bg-blue-700 hover:scale-110 transform transition-transform duration-300"
            >
              Buy
            </button>
          </div>
        </div>

        {/* Regular Ticket Card */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform duration-500">
          <h2 className="text-2xl font-semibold text-center mb-2 text-gray-900">Regular Ticket</h2>
          <p className="text-xl text-center mb-4 text-gray-700">KES 200</p>
          <p className="text-center text-gray-500 mb-6">Limited Packs Available!</p>
          <div className="flex justify-center">
            <button
              onClick={handleBuyTicketClick}
              className="bg-blue-600 text-white py-2 px-4 rounded shadow-lg hover:bg-blue-700 hover:scale-110 transform transition-transform duration-300"
            >
              Buy
            </button>
          </div>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="relative z-10 flex justify-center">
        <button
          onClick={handleGetStartedClick}
          className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transform hover:scale-110 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Landing;
