import React from 'react'
import { NavLink } from "react-router-dom"
import "../styles/NavBar.css"
import { FaUser } from 'react-icons/fa'
function NavBar(){

    return (

      <nav>
        <div className='header-title'>
          <h1>Moto-Leaze</h1>
        </div>
        <NavLink
          to='/about'
          className='nav-link'
          >About
        </NavLink>
        <NavLink 
          to='/'
          className='nav-link'
          >Home</NavLink>
        <NavLink
          to='/login'
          className='login-link'
          >Login<FaUser/>
        </NavLink>
        <div className='dropdown'>
          <p className='drop-btn'>Services</p>
          <div className='drop-content'>
            <a href='/bookings'>Book Vehicle</a>
            <a href='/vehicles'>Catalogue</a>
            <a href='/reviews'>Write Review</a>
          </div>
        </div>

      </nav>
       
          
        
    )
}

export default NavBar