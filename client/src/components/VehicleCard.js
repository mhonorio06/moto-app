import React from "react";
import "../styles/VehicleCard.css"
import { useNavigate } from "react-router-dom";

function VehicleCard( {vehicle, id} ){
    const navigate = useNavigate()

    function handleBooking() {
        navigate(`/bookings/${id}`)
    }
    function handleClick(){
        navigate(`/vehicles/${id}`)
    }
    return (
            <div className="vehicles">
                <div className="row"> 
                    <ul className="column">
                        <img src={vehicle.vehicle_img} onClick={handleClick} alt="item-img"/>    
                        <span>
                            {vehicle.make} {vehicle.model} ({vehicle.year})
                        </span>
                        <span>
                            <button className='book-btn'onClick={handleBooking}>Book Now</button>
                        </span>
                    </ul>
                    

                </div>
            </div>
    )
}

export default VehicleCard;