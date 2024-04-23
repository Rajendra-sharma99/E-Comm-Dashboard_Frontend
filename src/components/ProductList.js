import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);


    const getProducts = async () => {
        let result = await fetch('https://e-comm-dashboard-backend-g4ol.onrender.com/products');
        result = await result.json();
        setProducts(result);
    }
    // console.log("products", products);

    const DeleteProduct = async (id) => {
        // Display a confirmation dialog before deleting the product
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");

        if (confirmDelete) {
            try {
                let result = await fetch(`https://e-comm-dashboard-backend-g4ol.onrender.com/product/${id}`, {
                    method: "DELETE"
                });
                result = await result.json();
                if (result) {
                    alert("Record is Sucessfully Deleted");
                    getProducts(); // Show Updated List
                }
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }

    }

    const searchProduct = async (Event) => {
        console.log(Event.target.value);

        let key = Event.target.value;
        if (key) {
            let result = await fetch(`https://e-comm-dashboard-backend-g4ol.onrender.com/search/${key}`);
            result = await result.json();
            if (result) {
                setProducts(result);
            }
        } else {
            getProducts();
        }
    }



    return (
        <div className="product-list">
            <h1>Product List</h1>

            Enter Search Details :
            <input
                className="search-product"
                type="text"
                placeholder="Enter Details Whatever you want to Search"
                onChange={searchProduct}
            />

            <ul>
                <li>Serial No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Categry</li>
                <li>Company</li>
                <li>Delete Product</li>
                <li>Update Product</li>
            </ul>

            {
               products.length > 0 ? products.map((product, index) => (
                    <ul key={index}>
                        <li>{index + 1}</li>
                        <li>{product.name}</li>
                        <li>{product.price}</li>
                        <li>{product.categry}</li>
                        <li>{product.company}</li>
                        <li><button className="operation-button" onClick={() => DeleteProduct(product._id)}>Delete</button></li>
                        <li>
                            <button className="operation-button">
                                <Link to={"/update/" + product._id}>Update</Link>
                            </button>
                        </li>


                    </ul>
                ))
                : <h1>Enter Details Result Not Found</h1>
            }

        </div>
    )
}
export default ProductList;