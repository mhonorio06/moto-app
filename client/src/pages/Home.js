import React from "react";
import "../styles/Home.css";
import NavBar from "../components/NavBar";

function Home() {
       return (
    
       
        <> 
            <NavBar/>
               <div className='welcome-text'>
                    <h1>"Drive in Excellence... "</h1>
                    <h1>"Arrive in Style"</h1>
                </div>
                <div className='welcome-img'>
                <img src="https://blog.remove-bg.ai/wp-content/uploads/2024/03/background-car-editing-photo.png" alt="car-photo"/>
                </div>
        </>

        
       )
      }
 
        
        

export default Home;