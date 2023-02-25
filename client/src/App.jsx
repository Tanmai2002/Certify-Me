import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    
    <Navbar/>
    <Home/>

  </div>
  )
}

export default App
