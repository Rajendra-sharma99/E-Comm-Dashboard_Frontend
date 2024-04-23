import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const [error, setError] = useState(""); // State for error message

    const navigate = useNavigate();   // use for redirect

    //  Check local storage for authentication on component mount 
    // if not sign then this will not allow for another work without sign in
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [navigate]); // Only re-run effect if navigate changes

    const collectData = async () => {
        try {

            if (!name || !email || !password || !confirmPassword) {
                alert("Please fill all the fields")
                // setError("Please fill in all the fields because all are compulsory field");
                return;
            }

            if (password.length < 8) {
                alert("Password length should be 8 or greter than 8")
                // setError("Password Length should be Greter than 8");
                return;
            }

            const lowercaseRegex = /[a-z]/;
            if (!lowercaseRegex.test(password)) {
                alert("Password should contain at least one lowercase letter");
                return;
            }

            const uppercaseRegex = /[A-Z]/;
            if (!uppercaseRegex.test(password)) {
                alert("Password should contain at least one uppercase letter");
                return;
            }

            const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
            if (!specialCharRegex.test(password)) {
                alert("Password should contain at least one special character");
                return;
            }

            if (password !== confirmPassword) {
                alert("Password and confirm password must match")
                // setError("Password and confirm password must match");
                return;
            }


            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter Email Address in Valid format")
                // setError("Please enter a valid email address");
                return;
            }
            

            let result = await fetch('https://e-comm-dashboard-backend-g4ol.onrender.com/register', {
                method: 'post',
                body: JSON.stringify({ name, email, password, confirmPassword }),
                headers: {
                    'content-type': 'application/json'
                },
            });


            if (!result.ok) {
                alert("This Email ID has allready Exist In DataBase");
                throw new Error('Failed to add product');
            } else {
                alert("Sign-Up Sucessfully Compleated");
            }
            result = await result.json();
            console.log(result);

            // once thw sign has done then data will save in localstorgae and no need to again signup
            localStorage.setItem("user", JSON.stringify(result));
            if (result) {
                navigate('/');
            }

        } catch (error) {
            console.error('Error during data collection:', error);
        }
    };




    return (
        <div className="register-top">
            <h1 className="register">Register</h1>
            Name : <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            Email: <input className="inputBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            Password : <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            confirm Password : <input className="inputBox" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
            <button onClick={collectData} className="signupbtn" type="button" style={{ marginTop: '10px' }} >Sign Up</button>

            {/* {error && <p>{error}</p>} */}

        </div>
    )
}
export default SignUp;
