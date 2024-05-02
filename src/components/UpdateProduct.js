import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [categry, setCategry] = useState("");
    const [company, setCompany] = useState("");

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductsDetails();
    }, []);

      // This function will set data what ever is coming from products
    const getProductsDetails = async () => {
        try {
            const result = await fetch(`https://e-comm-dashboard-backend-g4ol.onrender.com/product/${params.id}`, {
                headers:{
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            const data = await result.json();

            setName(data.name);
            setPrice(data.price);
            setCategry(data.categry);
            setCompany(data.company);
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };


    // Product Update Function
    const UpdateProduct = async () => {
        try {
            const result = await fetch(`https://e-comm-dashboard-backend-g4ol.onrender.com/product/${params.id}`, {
                method: 'PUT', // or 'PATCH' depending on your backend configuration
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                },
                body: JSON.stringify({name, price, categry, company}),
            });
            
            // Optionally, handle successful update
            console.log('Product updated successfully');

            if (!result.ok) {
                throw new Error('Failed to add product');
            } else {
                alert("Product Sucessfully Added");
                navigate('/product'); // Navigate to the products page
            }


            const data = await result.json();
            console.log(data);

        } catch (error) {
            console.error('Error updating product:', error.message);
        }
    };

    return (
        <div className="register-top">
            <h1 className="register">Update Product</h1>
            Product Name : <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" />
            Product Price : <input className="inputBox" type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price" />
            Product Category : <input className="inputBox" type="text" value={categry} onChange={(e) => setCategry(e.target.value)} placeholder="Enter Product Category" />
            Product Company : <input className="inputBox" type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Product Company" />
            <button onClick={UpdateProduct} className="signupbtn" type="button" style={{ marginTop: '10px' }}>Update Product</button>
        </div>
    );
};

export default UpdateProduct;
