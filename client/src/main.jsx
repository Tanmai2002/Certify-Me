import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CertificateProvider } from './context/CertificateContext'
import { UserProvider } from './context/UserContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <UserProvider>
    <CertificateProvider>
  <App />
  </CertificateProvider>
  </UserProvider>

)
