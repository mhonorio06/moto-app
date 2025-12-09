import React, { useState, useEffect } from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Vehicles from '../pages/Vehicles';
import VehiclePage from '../pages/VehiclePage';
import Profile from '../pages/Profile';
import BookingPage from '../pages/BookingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  const [vehicles, setVehicles] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/customers")
    .then((res) => {
      if(res.ok){
        res.json()
        .then((data) => {
          setUsers(data)
        })
      }
    })
  },[])
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
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/vehicles" element={<Vehicles vehicles={vehicles}/>}/>
        <Route path="/vehicles/:id" element={<VehiclePage vehicles={vehicles}/>}/>
        <Route path="/bookings/:id" element={<BookingPage vehicles={vehicles}/>}/>
        <Route path="/profile/:id" element={<Profile users={users}/>}/>
      </Routes>
    </Router>
  )
}

export default App;
