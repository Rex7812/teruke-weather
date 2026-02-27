import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App'; // Removed the .tsx extension for better compatibility
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
