import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ProfilePage from './components/ProfilePage'
import ViewCertificates from './components/ViewCertificates'
import { Outlet } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
  <div>
    
    <Navbar/>
    <Outlet/>
   
    {/* <Home/>
    <ProfilePage/>
    <ViewCertificates/> */}


  </div>
  )
}

export default App
