import React from "react";
import { useFormik } from "formik"
import '../styles/Register.css'

function Register() {

    const formik = useFormik({
    initialValues: {
        first_name : "",
        last_name : "",
        password : "",
        dob : "",
        address : "",
        city : "",
        state : "",
        zipcode : "",
    }
})
    return(
        <div className="registration-page">
        <div className="wrapper">
            <div className="app-icon"> 
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-czRW6VaPHICiCYdzPCYl5PLurkqjecWy7A&s" alt="logo"/>
            </div>
            <h1> Moto-Leaze</h1>
        <form>
            <div className="reg-input">
                <label htmlFor="first_name">First Name</label>
                <input id="first_name" type="text" value= {formik.values.first_name} 
                onChange={formik.handleChange} placeholder="Enter first name..." />
            </div>
            <div className="reg-input">
                <label htmlFor="last_name">Last Name</label>
                <input id="last_name" type="text" value={formik.values.last_name} placeholder="Enter last name..."
                onChange={formik.handleChange} />
            </div>
            <div className="reg-input">
                <label htmlFor="dob">Date of Birth</label>
                <input id="dob" type="date" value={formik.values.dob}
                onChange={formik.handleChange} />
            </div>
            <div className="reg-input">
                <label htmlFor="address">Home Address</label>
                <input id="address" type="text" value={formik.values.address}
                onChange={formik.handleChange} placeholder="Enter Home Address"/>
            </div>
            <div className="reg-input">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={formik.values.password}
                onChange={formik.handleChange} placeholder="Enter Password"/>
            </div>

            <button type="submit">Create User</button>
        </form >
        </div>
        </div>
    )
}

export default Register;