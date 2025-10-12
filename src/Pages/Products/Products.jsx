import React, { useState } from 'react';
import Hooks from '../../hooks/Hooks'

import ProductCardAgain from '../../components/ProductCardAgain/ProductCardAgain';
import logoImg from '../../assets/logo.png'

const Products = () => {
    const {products,loading}= Hooks()
     const [search, setSearch] = useState('')
      const term = search.trim().toLowerCase()


      if (loading) {
        return (
          <p className="text-center text-[60px] font-extrabold mt-10 text-black">
            L
            <span className="inline-block">
              <img
                src={logoImg}
                alt="logo"
                className="w-10 h-10 inline-block animate-spin"
              />
            </span>
            ading...
          </p>
        );
      }


       
      const searchedProducts = term

      
    ? products.filter(product =>
         product.title.toLocaleLowerCase().includes(term)
      )
    : products
    return (
        <div>
          <div className='text-center my-10'>
                <h1 className='text-[30px] font-bold'> Treanding App </h1>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>
          All Products{' '}
          <span className='text-sm text-gray-500'>
            ({searchedProducts.length}) Products Found.
          </span>
        </h1>
        <label className='input'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            placeholder='Search Products'
          />
        </label>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                    
                    {
                        searchedProducts.map((product)=><ProductCardAgain product={product} key={product.id}></ProductCardAgain> )
                    }
                </div>
      

        </div>
        
    );
};

export default Products;