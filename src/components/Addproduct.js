import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [categry, setCategry] = useState("");
    const [company, setCompany] = useState("");
    const navigate = useNavigate();

    const handleAddProduct = async () => {
        try {
            console.log(name, price, categry, company);

            if (!name || !price || !categry || !company) {
                alert("Please fill in all the fields because all are compulsory fields");
                return;
            }
            
            const userId = JSON.parse(localStorage.getItem('user'))._id;
            // console.log(userId._id);

            const result = await fetch('https://e-comm-dashboard-backend-g4ol.onrender.com/add-product', {
                method: 'POST',
                body: JSON.stringify({ name, price, categry, company, userId }),
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                },
            });

            if (!result.ok) {
                throw new Error('Failed to add product');
            } else {
                alert("Product Sucessfully Added");
            }

            const data = await result.json();
            console.log(data);

            navigate('/product'); // Navigate to the products page
        } catch (error) {
            console.error('Error during data collection:', error);
        }
    }

    
    return (
        <div className="register-top">
            <h1 className="register">AddProduct</h1>
            Product Name : <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" />
            Product Price : <input className="inputBox" type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price" />
            Product Category : <input className="inputBox" type="text" value={categry} onChange={(e) => setCategry(e.target.value)} placeholder="Enter Product Category" />
            Product Company : <input className="inputBox" type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Product Company" />
            <button onClick={handleAddProduct} className="signupbtn" type="button" style={{ marginTop: '10px' }} >Add Product</button>
        </div>
    )
}

export default AddProduct;
