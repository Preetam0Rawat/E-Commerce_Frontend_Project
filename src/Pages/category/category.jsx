import React from 'react'
import {PRODUCTS} from "../../products"
import {Product} from  '../shop/product';
import './category.css'

export const Category = () => {
  return (
    <>
    <div className='cat'>
      <div className='catTitle'>
       <h1> This Feature Is yet to Be coded </h1>
      </div>
      <div className='catProducts'>
        {PRODUCTS.map((product) => (<Product data={product}/>))}
      </div>
    </div>
    </>
  )
};

