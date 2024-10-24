import React, { useState } from 'react';

const Dashboard = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [ticketType, setTicketType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    transactionCode: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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

  const validatePhone = (phone) => {
    const phoneRegex = /^(07|01|2547|2541)\d{8}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) {
      setErrorMessage('Invalid phone number. Must be in 07xxxxxxxx, 01xxxxxxxx, 2547xxxxxxxx, or 2541xxxxxxxx format.');
      return;
    }

    try {
      const response = await fetch('https://satuk.onrender.com/users/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: ticketType
        })
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage('Thank you! Our team will confirm the ticket shortly. You will be able to download the receipt.');
        setErrorMessage('');
      } else {
        setErrorMessage(data.message || 'Failed to submit ticket details.');
      }
    } catch (err) {
      setErrorMessage('An error occurred while submitting your ticket details.');
    }
  };

  return (
    <div className="dashboard">
      <h2 className="text-2xl font-bold text-center mb-8">Buy a Ticket</h2>
      <div className="tickets flex justify-center gap-8">
        <div className="card bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-bold">VIP Ticket</h3>
          <p>KES 1000</p>
          <button
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => handleBuyClick('VIP')}
          >
            Buy VIP Ticket
          </button>
        </div>
        <div className="card bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-bold">REGULAR Ticket</h3>
          <p>KES 200</p>
          <button
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => handleBuyClick('REGULAR')}
          >
            Buy REGULAR Ticket
          </button>
        </div>
      </div>

      {/* Overlay for payment form */}
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
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
              {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
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
  );
};

export default Dashboard;
