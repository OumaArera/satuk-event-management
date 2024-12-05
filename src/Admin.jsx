import React, { useState, useContext, useEffect } from 'react';
import Nominees from './Nominees';
import Payments from './Payments';
import Tickets from './Tickets';
import Votes from './Votes';
import AuthContext from './AuthContext';
import backgroundImage from './images/background.jpg';

const Admin = () => {
  const { auth, setAuth } = useContext(AuthContext); 
  const [activeTab, setActiveTab] = useState('nominees'); // Initial tab set to 'Nominations'

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('userData');
    setAuth(null);
    window.location.href = '/'; // Redirect to home
  };

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Sidebar */}
      <div className="w-full md:w-1/5 bg-gray-900 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>

        {/* Welcome Message */}
        <p className="mb-6 text-lg">
          Welcome, <strong>{auth?.name || 'User'}</strong>!
        </p>
        
        {/* Sidebar Buttons */}
        <button
          onClick={() => setActiveTab('nominees')}
          className={`py-2 px-4 mb-4 rounded-lg transition ${
            activeTab === 'nominees' ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          Nominations
        </button>

        <button
          onClick={() => setActiveTab('payments')}
          className={`py-2 px-4 mb-4 rounded-lg transition ${
            activeTab === 'payments' ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          Payments
        </button>

        <button
          onClick={() => setActiveTab('tickets')}
          className={`py-2 px-4 mb-4 rounded-lg transition ${
            activeTab === 'tickets' ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          Tickets
        </button>

        <button
          onClick={() => setActiveTab('votes')}
          className={`py-2 px-4 mb-4 rounded-lg transition ${
            activeTab === 'votes' ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          Votes
        </button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 py-2 px-4 bg-red-500 hover:bg-red-600 rounded-lg transition"
        >
          Logout
        </button>
      </div>

      {/* Main Content Area */}
      <div className="w-full md:w-4/5 p-6 md:p-10 bg-white bg-opacity-90 rounded-lg shadow-lg">
        {activeTab === 'nominees' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Nominations</h2>
            <Nominees />
          </div>
        )}
        {activeTab === 'payments' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Payments</h2>
            <Payments />
          </div>
        )}
        {activeTab === 'tickets' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Tickets</h2>
            <Tickets />
          </div>
        )}
        {activeTab === 'votes' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Votes</h2>
            <Votes />
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
