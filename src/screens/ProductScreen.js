import React, { useState} from 'react'

export const ProductScreen = (props) => {
        const [qty, setQty] = useState(1);
        const handleAddToCart = () => {
                props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
            }
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
        const prodId = props.match.params.id;
        return (
                <div>
                        <div className="details-image">
                                <img src={products[prodId - 1].image} alt="sd"></img>
                        </div>
                        <div className="details-info">
                    <ul>
                        <li>
                            <h4>{products[prodId - 1].title}</h4>
                        </li>
                        <li>
                            {products[prodId - 1].rating} Stars {products[prodId - 1].numReview}
                        </li>
                        <li>
                            <b>${products[prodId - 1].price}</b>
                        </li>
                        <li>
                            Description
                            <div>{products[prodId - 1].description}</div>
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                            Price: ${products[prodId - 1].price}
                        </li>
                        <li>
                            Status: {products[prodId - 1].countInStock > 0 ? products[prodId - 1].status : "Unavailable"}
                        </li>
                        <li>
                            Qty: <select value = {qty} onChange={(e) => {setQty(e.target.value)}}>
                                    {[...Array(products[prodId - 1].countInStock).keys()].map(x => 
                                    <option value = {x + 1} key = {x + 1}>{x + 1}</option> 
                                    )}
                                    
                                </select>
                        </li>
                        <li>
                            {products[prodId - 1].countInStock > 0 ? <button className="button primary" onClick={handleAddToCart}>Add to cart</button> 
                            : 
                            <div>Out of Stock</div>
                            }
                            
                        </li>
                    </ul>
                </div>
                </div>
        );
}