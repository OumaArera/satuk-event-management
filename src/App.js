import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Landing';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* Add other routes here */}
          <Route path="/login" element={<div>Login Page</div>} /> {/* Placeholder for the Login Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
