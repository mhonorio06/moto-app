import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm";

function BookingPage(){
    const [vehicle, setVehicle] = useState([])
    const {id} = useParams()
    useEffect(() => {
        fetch(`http://localhost:3000/vehicles/${id}`)
        .then(res => res.json())
        .then(data => {
            setVehicle(data)
            console.log(data)
        })
    },[id])
    return (
        <div>
            <img src={vehicle.vehicle_img} className="img-details" alt="booking_img"/>
            <BookingForm/>
        </div>
    )
}

export default BookingPage;