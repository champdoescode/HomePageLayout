import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Home/Navbar'
import Grid1 from './Home/Navbar/Grid1'
import Grid2 from './Home/Navbar/Grid2'
import Footer from './Home/Navbar/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Grid1/>
      <Grid2/>
      <Footer/>
    </>
  )
}

export default App
