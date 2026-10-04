import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { SECTIONS } from './data/menu';
import { validateMenu } from './data/validate';
import './styles.css';

if (import.meta.env.DEV) validateMenu(SECTIONS);

createRoot(document.getElementById('root')).render(<App />);
