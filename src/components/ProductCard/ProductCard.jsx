import React from 'react';
import { Link } from 'react-router';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
// import reviewImg from '../../assets/icon-review.png'

const ProductCard = ({product}) => {
   console.log(product);
   const {title,downloads,image,ratingAvg,id
}= product

// companyName,description
    return (
       <Link to={`/productDetails/${id}`}>
        <div>
            
<div className="card bg-base-100  shadow-sm p-3 transform hover:scale-105">
  <figure>
    <img className='pt-2'
      src={image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {title}
      
    </h2>
   
    <div className=" flex justify-between">

      <div style={{ background:"rgba(241, 245, 232, 1)"}} className=' flex items-center p-2 gap-2 rounded-lg'>
        <img className='w-[20px] h-[20px]' src={downloadImg} alt="" />
        <h1 className='font-bold text-[20px]'>
          {downloads}
        </h1>
      </div>
      <div style={{ background:"rgba(241, 245, 232, 1)"}} className=' flex items-center p-2 gap-2 rounded-lg'>
        <img className='w-[20px] h-[20px]' src={ratingImg} alt="" />
        <h1 className='font-bold text-[20px]'>
          {ratingAvg}
        </h1>
      </div>
      
    </div>
  </div>
</div>



           

       </div>
        </Link>
    );
};

export default ProductCard;