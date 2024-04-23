import React, { useState, useEffect } from "react";

const UserList = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUser();
    }, []);  

    const getUser = async () => {
        let result = await fetch('https://e-comm-dashboard-backend-g4ol.onrender.com/profile');
        result = await result.json();
        setUser(result);
    }
    
    return (
        <div className="product-list">
            <h1>Current User List</h1>

            <ul>
                <li>Serial No.</li>
                <li>Name</li>
                <li style={{ minWidth: '500px' }} >Email</li>
            </ul>

            {
                user.map((user, index) => (
                    <ul key={index}>
                        <li>{index + 1}</li>
                        <li>{user.name}</li>
                        <li style={{ minWidth: '500px' }} >{user.email}</li>
                        {/* <li><button  className="delete-button" onClick={() => DeleteProduct(product._id)}>Delete</button></li> */}
                    </ul>
                ))
            }

        </div>
    )
}
export default UserList;