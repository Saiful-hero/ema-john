import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    // console.log(props.cart);
    // console.log(props);
    const cart = props.cart;
    // const total = cart.reduce((total,prd)=>total+prd.price,0);
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total >15){
        shipping=4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax = (total *.1).toFixed(2);
    const grandTotal = (total+shipping+Number(tax)).toFixed(2);
    return (
        <div>
            <h1>Order Summery</h1>
            <h4>Items Ordered:{cart.length}</h4>
            <p>Product Price:{total}</p>
            <p><small>Shipping Cost:{shipping}</small></p>
            <p><small>Tax:{tax}</small></p>
            <p>Total:{grandTotal}</p>
            <br />
            <Link to="/review">
                <button className='main-button'>Order Review</button>
            </Link>
        </div>
    );
};

export default Cart;