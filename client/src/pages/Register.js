import React from "react";
import { useFormik } from "formik"
import { basicSchema } from "../schemas";
import '../styles/Register.css'

function onSubmit(values, actions) {
    console.log("submitted")
    console.log(values)
    console.log(actions)
    actions.resetForm()

}
function Register() {

    const {values, errors, touched, isSubmitting, handleChange, handleSubmit} = useFormik({
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
            <h1> Moto-Leaze</h1>
        <form onSubmit={handleSubmit}>
            <div className="reg-input">
                <label htmlFor="first_name">First Name</label>
                <input id="first_name" type="text" value= {values.first_name} 
                onChange={handleChange} placeholder="Enter first name..." 
                className={errors.first_name && touched.first_name? "input-error" : ""}
                autoComplete="off"
                />
                {errors.first_name && touched.first_name && 
                <p className="error-message">{errors.first_name}</p>}
               
            </div>
            <div className="reg-input">
                <label htmlFor="last_name">Last Name</label>
                <input id="last_name" type="text" value={values.last_name} placeholder="Enter last name..."
                onChange={handleChange} 
                className={errors.last_name && touched.last_name? "input-error" : ""}
                autoComplete="off"
                />
                {errors.last_name && touched.last_name && 
                <p className="error-message">{errors.last_name}</p>}
            </div>
            <div className="reg-input">
                <label htmlFor="dob">Date of Birth</label>
                <input id="dob" type="date" value={values.dob}
                onChange={handleChange} 
                className={errors.dob && touched.dob? "input-error" : ""}
                />
                {errors.dob && touched.dob && 
                <p className="error-message">{errors.dob}</p>}
            </div>
            <div className="reg-input">
                <label htmlFor="address">Home Address</label>
                <input id="address" type="text" value={values.address}
                onChange={handleChange} placeholder="Enter Home Address"
                className={errors.address && touched.address? "input-error" : ""}
                autoComplete="off"
                />
                {errors.address && touched.address && 
                <p className="error-message">{errors.address}</p>}

            </div>
            <div className="reg-input">
                <label htmlFor="city">City</label>
                <input id="city" type="text" value={values.city}
                onChange={handleChange} placeholder="Enter City"
                className={errors.city && touched.city? "input-error" : ""}
                autoComplete="off"
                />
                {errors.city && touched.city && 
                <p className="error-message">{errors.city}</p>}

            </div>
            <div className="reg-input">
                <label htmlFor="state">State</label>
                <input id="state" type="text" value={values.state}
                onChange={handleChange} placeholder="Enter State"
                className={errors.state && touched.state? "input-error" : ""}
                autoComplete="off"
                />
                {errors.state && touched.state && 
                <p className="error-message">{errors.state}</p>}

            </div>
            <div className="reg-input">
                <label htmlFor="zipcode">Zipcode</label>
                <input id="zipcode" type="text" value={values.zipcode}
                onChange={handleChange} placeholder="Enter Zipcode"
                className={errors.zipcode? "input-error" : ""}
                autocomplete="off"
                />
                {errors.zipcode && touched.zipcode && 
                <p className="error-message">{errors.zipcode}</p>}

            </div>
            <div className="reg-input">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={values.password}
                onChange={handleChange} placeholder="Enter Password"
                className={errors.password && touched.password? "input-error" : ""}
                autoComplete="off"
                />
                {errors.password && touched.password && 
                <p className="error-message">{errors.password}</p>}

            </div>

            <button disabled={isSubmitting} type="submit">Create User</button>
        </form >
        </div>
        </div>
    )
}

export default Register;