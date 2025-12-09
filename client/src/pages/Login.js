import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaUser, FaLock } from 'react-icons/fa'
import { Formik, Field, Form } from 'formik'
import "../styles/Login.css"
import * as yup  from "yup";

function Login(){

    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)

    const navigate = useNavigate()
    const { id } = useParams()
    

    const onSubmit = async(values, actions) => {
        
        try {
            setIsLoading(true)
            const response = await fetch("http://localhost:3000/login", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify(values, null, 2)
            })
            actions.resetForm()

            if(response.ok) {
                response.json()
                .then((data) => {
                    console.log(data)
                    setUser(data)
                    console.log(`/profile/${data.id}`)
                    navigate(`/profile/${data.id}`)

                    
                })
            }
            else {
                console.error("Login failed")
            }
        }
        catch (error) {
            console.error("Error occurred", error)
        }
    }

    return (
        <div className='background-image'>
            <div className='wrapper'>
                <h1>Login</h1>

                <Formik
                    initialValues={{ username: "", password: ""}}
                    validationSchema={yup.object().shape({
                        username: yup.string().required("Username must be entered"),
                        password : yup.string().required("password must be entered")
                    })}
                    onSubmit={onSubmit}
                    >
                        {({ isSubmitting }) => (

                    <Form>
                        <div className='input-box'>
                            <Field type="text" name="username" placeholder="Enter Username"/>
                            <FaUser className="icon"/>
                        </div>
                        <div className='input-box'>
                            <Field type="text" name="password" placeholder="Enter Password"/>
                            <FaLock className='icon'/>
                        </div>
                        <div className='remember-forgot'>
                            <label><input type="checkbox"/>Remember me</label>
                            <a href="#">Forgot password ?</a>
                        </div>

                        <button disabled={isSubmitting} type='submit'>{isLoading? "...Loading": "Login"}</button>
                        <div className='register-link'>
                            <p>No account? <a href="/register">Signup</a></p>
                        </div>
                    </Form>
                    )}
                </Formik>
                {/* <div className='input-box'>
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
                
                <button type='submit'>Login</button>
                <div className='register-link'>    
                    <p> No account? <a href='/register'>Sign Up</a> </p> */}
            </div>
        </div>
            
    )
}

export default Login;