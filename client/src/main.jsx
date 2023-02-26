import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CertificateProvider } from './context/CertificateContext'
import { UserProvider } from './context/UserContext'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home'
import ViewCertificates from './components/ViewCertificates'
import ProfilePage from './components/ProfilePage'
// import './App.css'
const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>,
    children:[
      {
        
          path: "/",
          element: <Home/>,
          
        },
        {
          path:"/view-certificate",
          element:<ViewCertificates/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        }

      
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <UserProvider>
    <CertificateProvider>
    <RouterProvider router={router} />
  </CertificateProvider>
  </UserProvider>

)
