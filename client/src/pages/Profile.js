import React from "react";
import { useParams } from "react-router-dom";
import Login from "./Login";

const Profile = ( { users }) => {
    const params = useParams()
    
    const user = users.find(user => user.id === parseInt(params.id))
    
    if(!user) {
        return <Login/>
    }

    return (
        <div>
            <h2>Welcome {user.first_name}!</h2>
        </div>
    )
}

export default Profile;