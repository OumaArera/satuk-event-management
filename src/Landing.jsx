import React from 'react';
import { useNavigate } from 'react-router-dom';
import satukLogo from './images/satuk_logo.png'; 
import tukLogo from './images/tuk_logo.png'; 

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  const handleBuyTicketClick = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4">
      <div className="text-center mb-8">
        <img src={satukLogo} alt="SATUK Logo" className="w-40 mx-auto mb-2" />
        <img src={tukLogo} alt="TUK Logo" className="w-40 mx-auto" />
        <h1 className="text-4xl font-bold mt-4">Welcome to SATUK AWARDS 2024</h1>
        <p className="text-lg mt-2 text-gray-700">Join us in celebrating excellence!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-8">
        {/* VIP Ticket Card */}
        <div className="bg-white rounded-lg shadow-lg p-4 relative">
          <h2 className="text-2xl font-semibold text-center mb-2">VIP Ticket</h2>
          <p className="text-xl text-center mb-4">KES 1000</p>
          <p className="text-center text-gray-600 mb-6">Limited Packs Available!</p>
          <div className="flex justify-center">
            <button
              onClick={handleBuyTicketClick}
              className="bg-blue-600 text-white py-2 px-4 rounded shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Buy
            </button>
          </div>
        </div>

        {/* Regular Ticket Card */}
        <div className="bg-white rounded-lg shadow-lg p-4 relative">
          <h2 className="text-2xl font-semibold text-center mb-2">Regular Ticket</h2>
          <p className="text-xl text-center mb-4">KES 200</p>
          <p className="text-center text-gray-600 mb-6">Limited Packs Available!</p>
          <div className="flex justify-center">
            <button
              onClick={handleBuyTicketClick}
              className="bg-blue-600 text-white py-2 px-4 rounded shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Buy
            </button>
          </div>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="flex justify-center">
        <button
          onClick={handleGetStartedClick}
          className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Landing;
