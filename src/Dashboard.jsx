import React, { useState, useEffect, useContext } from 'react';
import backgroundImage from './images/background.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';
import MyTickets from './MyTickets';

const Dashboard = () => {
  const { auth, setAuth } = useContext(AuthContext); 
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [ticketType, setTicketType] = useState('');
  const [activeTab, setActiveTab] = useState('buyTickets'); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    transactionCode: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate(); 

  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    const userData = localStorage.getItem('userData');
    if (storedAccessToken) setToken(storedAccessToken);
    if (userData) setUserId(JSON.parse(userData).id);
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setFormData({ ...formData, name: userData.name, email: userData.email });
    }
  }, []);

  const handleBuyClick = (type) => {
    setTicketType(type);
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
    setFormData({ name: '', email: '', phone: '', transactionCode: '' });
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTransactionCodeChange = (e) => {
    const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    setFormData({ ...formData, transactionCode: value });
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^(07|01|2547|2541)\d{8}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!token) return;
    setLoading(true);
    if (!validatePhone(formData.phone)) {
      setErrorMessage(
        'Invalid phone number. Must be in 07xxxxxxxx, 01xxxxxxxx, 2547xxxxxxxx, or 2541xxxxxxxx format.'
      );
      return;
    }

    try {
      const response = await fetch('https://satuk.onrender.com/users/ticket', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json', 
          Authorization: `Bearer ${token}`, },
        body: JSON.stringify({
          ...formData,
          type: ticketType,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          transactionCode: '',
        })
        setSuccessMessage(
          'Thank you! Our team will confirm the ticket shortly. You will be able to download the receipt.'
        );
        setTimeout(() => setSuccessMessage(""), 10000);
        setErrorMessage('');
      } else {
        setErrorMessage(data.message || 'Failed to submit ticket details.');
      }
    } catch (err) {
      setErrorMessage('An error occurred while submitting your ticket details.');
    } finally{
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userData'); // Clear user data
    setAuth(null); // Clear auth context
    history('/'); // Redirect to home page
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
      <div className="w-full md:w-1/5 bg-gray-800 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <p className="mb-6 text-lg">Welcome, {auth?.name || 'Guest'}!</p>
        
        {/* Button to switch to My Tickets */}
        <button
          onClick={() => setActiveTab('myTickets')}
          className={`py-2 px-4 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600 transition duration-300 mb-4 ${
            activeTab === 'myTickets' ? 'bg-blue-700' : ''
          }`}
        >
          My Tickets
        </button>

        {/* Button to switch to Buy Ticket */}
        <button
          onClick={() => setActiveTab('buyTickets')}
          className={`py-2 px-4 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 transition duration-300 ${
            activeTab === 'buyTickets' ? 'bg-green-700' : ''
          }`}
        >
          Buy Ticket
        </button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 py-2 px-4 bg-red-500 text-white rounded-lg text-center hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>

      {/* Main content */}
      <div className="w-full md:w-4/5 p-6 md:p-10">
        {activeTab === 'buyTickets' ? (
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Buy a Ticket</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="card bg-white shadow-lg p-6 rounded-lg flex-1">
                <h3 className="text-xl font-bold">VIP Ticket</h3>
                <p>KES 1000</p>
                <button
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                  onClick={() => handleBuyClick('VIP')}
                >
                  Buy 
                </button>
              </div>
              <div className="card bg-white shadow-lg p-6 rounded-lg flex-1">
                <h3 className="text-xl font-bold">REGULAR Ticket</h3>
                <p>KES 200</p>
                <button
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                  onClick={() => handleBuyClick('STANDARD')}
                >
                  Buy 
                </button>
              </div>
            </div>
          </div>
        ) : (
          <MyTickets /> // Render MyTickets component when activeTab is 'myTickets'
        )}

        {/* Overlay */}
        {overlayVisible && (
          <div className="overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="form-container bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-lg font-bold mb-4">Pay via POCHI LA BIASHARA</h3>
              <p>Pay to: <strong>0714747636</strong></p>
              <p>Name: <strong>ALEX NABANGI WANYONYI</strong></p>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Your Name (for Ticket)</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Phone (used to pay)</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Transaction Code</label>
                  <input
                    type="text"
                    name="transactionCode"
                    value={formData.transactionCode}
                    onChange={handleTransactionCodeChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                  >
                    {loading ? "Sending ..." : "Submit"}
                  </button>
                  <button
                    type="button"
                    className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
                    onClick={closeOverlay}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
