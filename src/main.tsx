import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Check for required environment variables
const requiredEnvVars = [
  'VITE_INTERCOM_APP_ID',
  'VITE_GA_TRACKING_ID'
];

const missingEnvVars = requiredEnvVars.filter(
  (envVar) => !import.meta.env[envVar]
);

if (missingEnvVars.length > 0) {
  console.warn(
    'Missing environment variables:',
    missingEnvVars.join(', '),
    '\nSome features may be disabled.'
  );
}

// Error handling for root element
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

// Render the app with error boundary
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
