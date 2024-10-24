import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import Admin from './Admin';
import Dashboard from './Dashboard';
import { AuthProvider } from './AuthContext'; 
import PrivateRoute from './PrivateRoute';  

function App() {
  return (
    // Move Router to wrap the entire app first, then wrap AuthProvider inside it
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected Routes */}
            <Route 
              path="/admin" 
              element={
                <PrivateRoute allowedTypes={['admin']}>
                  <Admin />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/buy-ticket" 
              element={
                <PrivateRoute allowedTypes={['standard']}>
                  <Dashboard />
                </PrivateRoute>
              } 
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
