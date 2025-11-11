import React from "react";
import { useFormik } from "formik"
import { basicSchema } from "../schemas";
import '../styles/Register.css'

function Register() {

    function onSubmit(){
        console.log("Submitted")
    }

    const {values, errors, handleChange} = useFormik({
    initialValues: {
        first_name : "",
        last_name : "",
        password : "",
        dob : "",
        address : "",
        city : "",
        state : "",
        zipcode : "",
    },
    validationSchema: basicSchema, onSubmit,
    });
    console.log(errors);
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
                <input id="first_name" type="text" value= {values.first_name} 
                onChange={handleChange} placeholder="Enter first name..." />
            </div>
            <div className="reg-input">
                <label htmlFor="last_name">Last Name</label>
                <input id="last_name" type="text" value={values.last_name} placeholder="Enter last name..."
                onChange={handleChange} />
            </div>
            <div className="reg-input">
                <label htmlFor="dob">Date of Birth</label>
                <input id="dob" type="date" value={values.dob}
                onChange={handleChange} />
            </div>
            <div className="reg-input">
                <label htmlFor="address">Home Address</label>
                <input id="address" type="text" value={values.address}
                onChange={handleChange} placeholder="Enter Home Address"/>
            </div>
            <div className="reg-input">
                <label htmlFor="city">City</label>
                <input id="city" type="text" value={values.city}
                onChange={handleChange} placeholder="Enter City"/>
            </div>
            <div className="reg-input">
                <label htmlFor="state">State</label>
                <input id="state" type="text" value={values.state}
                onChange={handleChange} placeholder="Enter State"/>
            </div>
            <div className="reg-input">
                <label htmlFor="zipcode">Zipcode</label>
                <input id="zipcode" type="text" value={values.zipcode}
                onChange={handleChange} placeholder="Enter Zipcode"/>
            </div>
            <div className="reg-input">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={values.password}
                onChange={handleChange} placeholder="Enter Password"/>
            </div>

            <button type="submit">Create User</button>
        </form >
        </div>
        </div>
    )
}

export default Register;