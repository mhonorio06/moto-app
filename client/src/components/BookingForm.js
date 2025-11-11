import React from "react";
import { useFormik } from "formik";

function BookingForm(){

    const formik = useFormik({
        initialValues: {
            check_in : "",
            check_out : "",
            start_date : "",
            end_date : ""
        }
        
    })
    return (
        <div className="booking-form">
            <div className="form-wrapper">

            <ul className="start">
            <label htmlFor="start-date">Start Date</label>
            <input id="start" type="date" value={formik.values.start_date}
            onChange={formik.handleChange} />
            <input id="check-in" type="time" value={formik.values.check_in}/>
            </ul>


            <ul>
            <label htmlFor="end-date">End Date</label>
            <input id="end" type="date" value={formik.values.end_date}
            onChange={formik.handleChange} />
            <input id="check-out" type="time" value={formik.values.check_out}/>
            </ul>
            <button type="submit"> Complete Booking </button>
            </div>
        </div>
    )
}

export default BookingForm;