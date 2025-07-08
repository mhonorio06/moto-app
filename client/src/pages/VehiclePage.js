import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../styles/VehiclePage.css"

function VehiclePage(){

    const [vehicle, setVehicle] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    function bookClick(){
        navigate(`/bookings/${id}`)
    }
    useEffect(() => {
        fetch(`http://localhost:3000/vehicles/${id}`)
        .then(res => res.json())
        .then(data => {
            setVehicle(data)
            console.log(data)
        })
    }, [id])

    return (
        <div className="vehicle-info">
            <ul>
                <img src={vehicle.vehicle_img} className="img-details" alt={vehicle.id}/>
            </ul>
            <ul className="details">
                <span>
                <h1>{vehicle.make}</h1>
                <h1>{vehicle.model}</h1>
                <h5>{vehicle.year}</h5>
                </span>
            </ul>
            <button onClick={bookClick}className="book-btn">Book Now</button>
        </div>
    )
}

export default VehiclePage;