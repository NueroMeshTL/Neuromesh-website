import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'; // Make sure this is imported first for global styles
import App from './App';

// We also need to import the component files here to make sure they are available in the bundled application.
// In a real React project using a bundler (like Create React App), explicit imports for these local files are
// handled by the App.js import tree, but we'll ensure the entry point is clean.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

