import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import background from './images/test.jpg'; // Import your background image

const SIGNUP_URL = 'https://satuk.onrender.com/users/signup';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasLowercase: false,
    hasUppercase: false,
    hasNumber: false,
  });
  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  // Real-time validation for each password requirement
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    
    setPasswordValidation({
      minLength: value.length >= 6,
      hasLowercase: /[a-z]/.test(value),
      hasUppercase: /[A-Z]/.test(value),
      hasNumber: /\d/.test(value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isPasswordValid = Object.values(passwordValidation).every(Boolean);
    if (!isPasswordValid) {
      setError('Please meet all password requirements before submitting.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(SIGNUP_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/login');
      } else {
        setError(data.message || 'Signup failed.');
      }
    } catch (err) {
      setError('An error occurred during signup.');
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
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={handleNameChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={handleEmailChange}
              required
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
            <div className="mt-2 text-sm">
              <p className={passwordValidation.minLength ? 'text-green-500' : 'text-red-500'}>
                • At least 6 characters
              </p>
              <p className={passwordValidation.hasLowercase ? 'text-green-500' : 'text-red-500'}>
                • At least 1 lowercase letter
              </p>
              <p className={passwordValidation.hasUppercase ? 'text-green-500' : 'text-red-500'}>
                • At least 1 uppercase letter
              </p>
              <p className={passwordValidation.hasNumber ? 'text-green-500' : 'text-red-500'}>
                • At least 1 number
              </p>
            </div>
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={toggleShowPassword}
              className="mr-2"
              disabled={isSubmitting}
            />
            <label htmlFor="showPassword" className="text-gray-700">Show Password</label>
          </div>

          <button
            type="submit"
            className={`bg-blue-600 text-white py-3 px-4 rounded w-full hover:bg-blue-700 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </button>

          <p className="mt-4 text-center">
            Already have an account? <NavLink to="/login" className="text-blue-600 hover:underline">Login</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
