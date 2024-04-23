import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    // Array of colors
    const colors = ["yellow", "lightblue", "lightgreen", "lightpink", "lavender"];

    // State to store the selected color
    const [backgroundColor, setBackgroundColor] = useState(colors[0]); // Initialize with the first color

    useEffect(() => {
        // Function to change color at regular intervals
        const interval = setInterval(() => {
            // Get a random color from the colors array
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            setBackgroundColor(randomColor);
        }, 1000); 

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this effect runs only once on component mount
    

    return (
        <div className="home-container">
            <h1>Welcome to E-comm Admit Dashboard</h1>
            <h2 className="center-text" style={{ backgroundColor: backgroundColor, padding: '10px', borderRadius: '5px' }}>
                For managing the products, you need to first sign up or log in then you can Enter the product management section.
            </h2>
            <img className="banner-image" src="https://res.cloudinary.com/sharma-rajendra/image/upload/v1713424545/E-Dashboard/ecommerce-website-design_slciqy.jpg" alt="Home Page Image" />
            {/* <button> <Link to="/product"  className="Home-btn"  style={{ textDecoration: 'none' }}>View Products</Link> </button> */}
            <h3></h3>
        </div>
    );
}

export default Home;
