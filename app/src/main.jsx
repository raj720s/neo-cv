import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorBound from './components/Boundary/ErrorBound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <ErrorBound>

    <App />
  </ErrorBound>

  // </React.StrictMode>,
)
