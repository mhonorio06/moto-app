import React from "react";
import "../styles/VehicleCard.css"

function VehicleCard( {vehicle} ){
    return (
            <div className="vehicle-wrapper">
                <div className="row"> 
                    <ul className="column">
                        <img src={vehicle.vehicle_img} alt="item-img"/>    
                        <span>
                            {vehicle.make} {vehicle.model} ({vehicle.year})
                        </span>
                    </ul>

                </div>
            </div>
    )
}

export default VehicleCard;