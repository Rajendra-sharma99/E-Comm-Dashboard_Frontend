import React, { useState, useEffect } from "react";
import { json, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();   // use for redirect


    //  Check local storage for authentication on component mount 
    // if not sign then this will not allow for another work without sign in
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [navigate]); // Only re-run effect if navigate changes


    // Log in Function
    const handleLogin = async () => {
        console.log("email, password", email, password);
        let result = await fetch('https://e-comm-dashboard-backend-g4ol.onrender.com/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'content-type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);

        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate('/product');
        } else {
            alert("Please Enter correct Details");
        }

    }



    
    

    // const handleForgotPassword = async() => {

    // }




    return (
        // We have used css of registraion part
        <div className="register-top">
            <h1 className="register">Login</h1>
            Email : <input className="inputBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            Password : <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={handleLogin} className="signupbtn" style={{ marginTop: '10px' }} type="button">Login</button>
            {/* <button onClick={handleForgotPassword} className="signupbtn" style={{ marginTop: '10px' }} type="button">Forgot Password</button> */}
        </div>
    )
}
export default Login;