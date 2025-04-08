import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Vehicles from '../pages/Vehicles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/vehicles")
    .then(response => response.json())
    .then(data => {
      setVehicles(data)
      console.log(data)
    })
  },[])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/vehicles" element={<Vehicles vehicles={vehicles}/>}/>
      </Routes>
    </Router>
  )
}

export default App;
