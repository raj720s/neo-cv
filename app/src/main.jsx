import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorBound from './components/Boundary/ErrorBound.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-yo6mpiumxuqzc72t.us.auth0.com"
    clientId="BoS0L8sZK8ibgr11YotYpM2fXs9nEDe6"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  // authorizationParams={{
  //   redirect_uri: 'http://localhost:5173/user/dashboard'
  // }}
  >

    <ErrorBound>
      <App />
    </ErrorBound>
  </Auth0Provider>
)
