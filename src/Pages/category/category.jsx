import React, { useState } from 'react'
import { PRODUCTS } from "../../products"
import { Product } from '../shop/product';
import './category.css'

export const Category = () => {
  const categories = ["gadget", "men", "women", "children"];
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== value));
    }
  };

  const filteredProducts = selectedCategories.length === 0
    ? PRODUCTS
    : PRODUCTS.filter((product) => selectedCategories.includes(product.category));



  return (
    <>
      <div className='cat'>
        <div className='catTitle'>
          <h1> Search By Categories </h1>
        </div>


        {/* Category checkboxes */}
        <div className='catFilters'>
          <label>
            <input
              type="checkbox"
              value=""
              checked={selectedCategories.length === 0}
              onChange={() => setSelectedCategories([])}
            />
            All
          </label>
          {categories.map((cat) => (
            <label key={cat}>
              <input
                type="checkbox"
                value={cat}
                checked={selectedCategories.includes(cat)}
                onChange={handleCheckboxChange}
              />
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </label>
          ))}
        </div>



        <div className='catProducts'>
          {   filteredProducts.map((product) => (
              <Product key={product.id} data={product} />
          ))}
        </div>


      </div>
    </>
  )
};

