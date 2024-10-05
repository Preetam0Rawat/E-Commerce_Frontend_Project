import React from 'react'
import {PRODUCTS} from "../../products"
import {Product} from  './product';
import {Carousel} from  '../../Components/carousel';
import './shop.css'

export const Shop = () => {
  return (
    <>
    <Carousel/>
    <div className='shop'>
      <div className='products'>
        {PRODUCTS.map((product) => (<Product data={product}/>))}
      </div>
    </div>
    </>
  )
};

