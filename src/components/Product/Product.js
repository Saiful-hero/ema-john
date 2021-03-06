import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props.product);
    const {img, name, price, stock, seller, key} = props.product;
    return (    
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div >
            <h4 className='product-name'> <Link to={"/product/"+key}>{name}</Link></h4>
            <br />
            <p><small>by:{seller}</small></p>
            <br />
            <p>${price}</p>
            <p><small>Only {stock} left in stock - Order Now</small></p>
            { props.showAddToCart== true && <button 
                onClick={()=>props.handleAddProduct(props.product)} 
                className='main-btn'>
                <FontAwesomeIcon icon={faShoppingCart} /> add to cart
            </button>}
            </div>
            
        </div>
    );
};

export default Product;