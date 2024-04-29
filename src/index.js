
import { Auth0Provider } from '@auth0/auth0-react';


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Auth0Provider
    domain="dev-6wab4vzf2s3xvm7d.us.auth0.com"
    clientId="Da3qBL7pD7MOLXGbC7YMmpAXcDqbbIBN"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />

  </Auth0Provider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
