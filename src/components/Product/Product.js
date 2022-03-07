import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const {img, name, price, stock, seller} = props.product;
    return (    
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div >
            <h4 className='product-name'>{name}</h4>
            <br />
            <p><small>by:{seller}</small></p>
            <br />
            <p>${price}</p>
            <p><small>Only {stock} left in stock - Order Now</small></p>
            <button onClick={()=>props.handleAddProduct(props.product)} className='main-btn'><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;