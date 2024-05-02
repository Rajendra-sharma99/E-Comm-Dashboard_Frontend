import { useAuth0 } from '@auth0/auth0-react';

import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();   // use for redirect

    // For Auth0 
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
    console.log("current user", user);

    // Auth 0 acces copy
    if (isAuthenticated) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate('/product');
    }

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/product');
        }
    }, [navigate]);

    const handleLogin = async () => {
        try {
            let result = await fetch('https://e-comm-dashboard-backend-g4ol.onrender.com/login', {
                method: 'post',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();

            // if (result.name) {
            //     localStorage.setItem("user", JSON.stringify(result));
            //     navigate('/product');
            // } else {
            //     alert("Please Enter correct Details");
            // }

            if (result.auth) {
                localStorage.setItem("user", JSON.stringify(result.user));
                localStorage.setItem("token", JSON.stringify(result.auth));
                navigate('/product');

            } else {
                alert("Please Enter correct Details");
            }


        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="register-top">
            <h1 className="register">Login</h1>
            Email : <input className="inputBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            Password : <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={handleLogin} className="signupbtn" style={{ marginTop: '10px' }} type="button">Login</button>

            {isAuthenticated && <h3>Hello {user.name} </h3>}
            {isAuthenticated ? (
                <button onClick={logout}> Log out </button>
            ) : (
                <button onClick={() => loginWithRedirect()} className="signupbtn" style={{ marginTop: '10px' }} type="button">Login through Gmail</button>
            )}

        </div>
    );
};

export default Login;
