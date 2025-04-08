import React from "react";
import { FaSearch } from "react-icons/fa";
import '../styles/SearchBar.css';

function SearchBar({search, setSearch}){

    function handleSearchChange(search){
        setSearch(search.target.value)
    }
    
    return (
        <div className="search-background">
        <div className="search">
            <input type="text" value={search} onChange={(e) => handleSearchChange(e)} placeholder="Search..."/>
            <p><FaSearch className="icon"/></p>
            
        </div>
        </div>
    )
}

export default SearchBar;