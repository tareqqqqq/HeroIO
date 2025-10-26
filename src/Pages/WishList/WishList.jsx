import React, { useState } from 'react';
import { loadWishlist, removeFromWishlist } from '../../utilities/localStorages';
import { toast, ToastContainer } from 'react-toastify';


const parseDownloads = (val) => {
 

  const str = val.toString().toUpperCase().trim();

  
  if (str.endsWith("M")) return parseFloat(str); 
  

  return parseFloat(str) || 0;
};

const WishList = () => {
     const [wishlist, setWishlist] = useState(() => loadWishlist())
  const [sortOrder, setSortOrder] = useState('none')
       



      const sortedItem = (() => {
    if (sortOrder === 'price-asc') {
      
      return [...wishlist].sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads))
     
    } else if (sortOrder === 'price-desc') {
      return [...wishlist].sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads))
    } else {
      return wishlist
    }
  })()

     const handleRemove = id => {
    // remove from localstorage
    removeFromWishlist(id)
    // for ui instant update
    setWishlist(prev => prev.filter(p => p.id !== id))
   
    toast.success("Uninstalling")
  } 



  
    return (
        <div className='container m-auto'>
            <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>
          Installation{' '}
          <span className='text-sm text-gray-500'>
            ({sortedItem.length}) Products Found.
          </span>
        </h1>

        <label className='form-control w-full max-w-xs'>
          <select
            className='select select-bordered'
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value='none'>Sort by price</option>
            <option value='price-asc'>Low-&gt;High</option>
            <option value='price-desc'>High-&gt;Low</option>
          </select>
        </label>
      </div>

       <div className='space-y-3'>
        {sortedItem.map(p => (
          <div key={p.id} className='card card-side bg-base-100 shadow-2xl '>
            <figure>
              {/* <img
                className='w-40 h-28 object-cover'
                src={p.image}
                alt={p.name}/> */}

                <img className='w-40 h-28 object-cover' src={p.image}
                alt={p.name} />
            </figure>
            <div className='card-body'>
              <h3 className='card-title'>{p.companyName}</h3>
              <p className='text-base-content/70'>{p.downloads}</p>
              <div className='font-semibold'>{p.ratingAvg}</div>

            </div>
            <div className='pr-4 items-center text-center gap-3'>
              
              <button
                onClick={() => handleRemove(p.id)}
                className='btn bg-green-600 text-white font-bold mt-5'
              >
                Uninstall
              </button>
             
            </div>
          </div>
        ))}
      </div>
       <ToastContainer  position="top-center" />
        </div>
       

    );
};

export default WishList;