// src/pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="h-screen bg-yellow-100 flex items-center justify-center text-center">
      <div className="text-gray-800">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="mt-4 text-lg">You can reach me at: <a href="mailto:your-email@example.com" className="text-blue-500">your-email@example.com</a></p>
      </div>
    </div>
  );
};

export default Contact;

