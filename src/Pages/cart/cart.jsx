import React, {useContext} from 'react'
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import {CartItem} from './cart_item'
import './cart.css'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const { cartItems, getTotalCartAmount , getQuantity} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  
  const navigate = useNavigate();
  return (
    <div className='cart'>
        <div>
          <h1>Total Item in Cart : {getQuantity()}</h1>
        </div>
        <div className='cartItems'>
           {PRODUCTS.map((product) => 
                          {if(cartItems[product.id] !== 0) {return <CartItem data = {product}/>}
                           else return null
                          }
                        ) 
           }
        </div>
        {totalAmount > 0 ?
        <div className='checkout'>
              <p>SubTotal : Rs {totalAmount}</p>
              <button onClick={() => navigate("/")}>Continue Shoppig</button>
              <button>Checkout</button>
        </div>
          : <h1>Your Cart Is Empty</h1>}
    </div>
  )
};

