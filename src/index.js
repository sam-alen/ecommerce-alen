import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import initFirebase from './helpers/config';

initFirebase();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

