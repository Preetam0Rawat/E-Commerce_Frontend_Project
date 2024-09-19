//Diffrence Between Default Export and Named Export
import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { ShoppingCart} from 'phosphor-react';

export const Navbar = () => {
return <div className='navbar'>
          <div className='links'>      
              <Link to= "/"> shop</Link>
              <Link to= "/cart">
                <ShoppingCart size = {32}/>     
              </Link>
          </div>
       </div>
};
