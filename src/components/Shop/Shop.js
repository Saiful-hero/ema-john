// import React from 'react';
import React, { useState } from 'react';
import fakeData from '../../fakeData'
import { addToDb,getDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
  
   const first10 = fakeData.slice(0,10);
   const [products, setProducts]  = useState(first10);
   const [cart, setCart] = useState([]);

   const handleAddProduct = (product) =>{
        // console.log("I'm clicked", product);
        const newCart =[...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDb(product.id,count);
   }
   
     return(
        <div className='shop-container'>
            <div className="product-container">
         
                {
                    products.map(product => <Product product={product} handleAddProduct={handleAddProduct} showAddToCart={true} key= {product.key}></Product>)
                }
            
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        
     </div>
     )
}   


export default Shop;

