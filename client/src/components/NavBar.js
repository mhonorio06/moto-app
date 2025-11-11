import React from 'react'
import { NavLink } from "react-router-dom"
import "../styles/NavBar.css"
import { FaUser } from 'react-icons/fa'
function NavBar(){

    return (

      <nav>
        <NavLink 
          to='/'
          className='nav-link'
          >Home</NavLink>
        <NavLink
          to='/about'
          className='nav-link'
          >About
        </NavLink>
        <NavLink
          to='/login'
          className='nav-link'
          >Login
        </NavLink>
        <NavLink
          to='/vehicles'
          className='vehicles'>Catalogue
        </NavLink>
        <div className='dropdown'>
          <button className='drop-btn'>Services</button>
          <div className='dropdown-content'>
            <a href='/bookings'><img src="https://easywayrentacar.com/fotos/blogs/foto-1610564892.jpg" width="400" height="400"/></a>
            <p>Book Vehicle</p>
            <a href='/reviews'><img src="https://speakerhub.com/sites/default/files/styles/skillcamp_lead_full/public/how_to_properly_write_a_review_of_a_speech.png?itok=uM0YCA_p" width="400" height="400"/></a>
            <p>Write Review</p>
          </div>
        </div>

      </nav>
       
          
        
    )
}

export default NavBar