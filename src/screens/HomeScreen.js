import React from 'react'
import {Link} from 'react-router-dom'
export const HomeScreen = (props) => {
    let products = [{
        id: "1",
        image: "/images/jacket.jpg",
        brand: "nike",
        name: "Dope nike jacket",
        price: 30.0, 
        rating: 4.0, 
        numReviews: 342, 
        category: "pants", 
        countInStock: 12341, 
        description: "nice"
    },
    {
        id: "2",
        image: "/images/jacket.jpg",
        brand: "nike",
        name: "Dope nike jacket",
        price: 30.0, 
        rating: 4.0, 
        numReviews: 342, 
        category: "pants", 
        countInStock: 12341, 
        description: "nice"
    },
    {
        id: "3",
        image: "/images/jacket.jpg",
        brand: "nike",
        name: "Dope nike jacket",
        price: 30.0, 
        rating: 4.0, 
        numReviews: 342, 
        category: "pants", 
        countInStock: 12341, 
        description: "nice"
    }

]
        return (
            <div>
        <ul className="products">
                    {products.map((product) => (
                        <li key={product._id} >
                            <div className = "product" >
                                <Link to={"/product/" + product.id}> 
                                    <img className ="product-image" src = {product.image} alt = {product.title}></img>
                                </Link>
                                <div className = "product-name">
                                    <Link to={"/product/" + product.id}> {product.name} </Link>
                                </div>
                                
                                <div className = "product-brand"> {product.brand} </div> 
                                <div className ="product-price">
                                    <div> ${product.price}</div>
                                    
                                </div>
                                <div className = "product-rating"> {product.rating} Stars {product.numReview} </div>
                            </div>
                        </li>
                ))}
                </ul>
    </div>
        );
}