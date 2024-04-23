import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    // Log out Function
    const logout = () => {
        const confirmLogout = window.confirm("Are you sure do you want to Logout from This Page?");
        if (confirmLogout) {
            localStorage.clear();
            navigate('/');
        }
    }

    return (
        <div className="nav-container">
            {auth ? 
                <ul className="nav-ul">
                    {/* <li> <Link to="/">Home</Link></li> */}
                    <li> <Link to="/product">Products</Link> </li>
                    <li> <Link to="/add">Add-Products</Link> </li>
                    <li> <Link to="/update">Update & Delete</Link> </li>
                    {/* <li> <Link to="/delete">Update & Delete</Link> </li> */}
                    <li> <Link to="/profile">User-Profile-List</Link></li> 

                    <li><Link onClick={logout} to="/">Logout ({JSON.parse(auth).name})</Link></li>
                </ul>
                :
                <ul className="nav-ul nav-right">
                    <li> <Link to="/">Home</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
    )
}

export default Nav;
