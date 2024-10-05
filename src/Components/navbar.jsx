import React, {useContext} from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { ShoppingCart} from 'phosphor-react';
import { ShopContext } from '../context/shop-context';


export const Navbar = () => {
      
  const  {getQuantity} = useContext(ShopContext);

return <div className='navbar'>
          <div className='logo'>Buybye</div>
          <div className='links'>      
          <Link to= "/"> shop</Link>
          <Link to= "/category"> category </Link>
          <Link to= "/cart" className="cart-link">
          <div className='cart'>
                <ShoppingCart size = {32}/>
                {getQuantity() > 0 && (<span className='cart-count'>{getQuantity()}</span>)}     
          </div>
          </Link>
          </div>
       </div>
};
