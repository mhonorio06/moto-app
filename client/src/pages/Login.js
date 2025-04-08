import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import "../styles/Login.css"
function Login(){

    return (
        <div className='background-image'>
            <div className='wrapper'>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text' placeholder='username' required/>
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='password' required />
                    <FaLock className='icon'/>
                </div>
                <div className='remember-forgot'>
                    <label><input type='checkbox'/> Remember me</label>
                    <a href='#'>Forgot Password</a>
                </div>

                <button type='submit'> Login </button>
                
                <div className='register-link'>    
                    <p>No account? <a href='/register'>Sign Up</a></p>
                </div>
            </div>
        </div>
            
    )
}

export default Login;