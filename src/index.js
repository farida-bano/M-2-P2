// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import Tailwind CSS
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router for routing

// Create a root element and render the App component inside the Router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
