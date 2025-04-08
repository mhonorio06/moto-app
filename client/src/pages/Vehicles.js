import React, { useState } from 'react';
import VehicleCard from '../components/VehicleCard';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

function Vehicles( {vehicles} ){
    const [search, setSearch] = useState("")
    
    const items = vehicles.filter(v => {
        return search.toLowerCase() === "" ? v : v.make.toLowerCase().includes(search)
    }).map(v => {
        return (
            <VehicleCard key={v.id}
                         vehicle = {v}/>
        )
    })

    
    return (
        <div className='vehicles'>
            <NavBar/>
            <SearchBar vehicles={vehicles} setSearch={setSearch}/>
            {items}
        </div>
    )
}

export default Vehicles;