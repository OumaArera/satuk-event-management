import React, { useState, useContext } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import background from './images/test.jpg'; 
import AuthContext from './AuthContext'; 

const LOGIN_URL='https://satuk.onrender.com/users/login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission
  const { setAuth } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email.');
      return;
    }

    setIsSubmitting(true); // Start form submission
    setError(''); // Clear previous errors

    try {
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        const decodedToken = jwtDecode(data.token);
        const userDetails = {
          id: decodedToken.id,
          email: decodedToken.email,
          name: decodedToken.name,
          type: decodedToken.type
        };
        Object.entries(userDetails).forEach(([key, value]) => console.log(`${key} : ${value}`));
        console.log('Token', data.token);
        
        setAuth(userDetails); 
        localStorage.setItem("userData", JSON.stringify(userDetails));
        localStorage.setItem("accessToken", data.token);

        if (userDetails.type === 'admin') {
            navigate('/admin');
          } else if (userDetails.type === 'standard') {
            navigate('/buy-ticket');
          } else {
            setError('Unknown user type');
          }
      } else {
        setError(data.message || 'Login failed.');
      }
    } catch (err) {
      setError('An error occurred during login.');
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <div 
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={handleEmailChange}
              required
              disabled={isSubmitting} // Disable input during submission
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={handlePasswordChange}
              required
              disabled={isSubmitting} // Disable input during submission
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={toggleShowPassword}
              className="mr-2"
            />
            <label htmlFor="showPassword" className="text-gray-700">Show Password</label>
          </div>

          <button
            type="submit"
            className={`bg-blue-600 text-white py-3 px-4 rounded w-full hover:bg-blue-700 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting} // Disable button during submission
          >
            {isSubmitting ? 'Sending...' : 'Login'}
          </button>

          <p className="mt-4 text-center">
            Don't have an account? <NavLink to="/signup" className="text-blue-600 hover:underline">Sign Up</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
