import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div id="container">
      <h1>Dessian's React Router App</h1>
      <div id="navbar"> 
     
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link> 
      <Link to="/home">Home</Link></div>
      <div id="main-section">
  <Routes>
        <Route path="/blue" element={<Blue />} /> {/* Replace with Blue component */}
        <Route path="/red" element={<Red />} /> {/* Replace with Red component */}
        <Route path="/home" element={<Home />} /> {/* Replace with Home component */}


  </Routes>
</div>
    </div>
    </>
  )
}

export default App
