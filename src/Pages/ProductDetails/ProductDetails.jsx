import React, { useState } from 'react';
import { useParams } from 'react-router';
import Hooks from '../../hooks/Hooks';
import { updateList } from '../../utilities/localStorages';
import { ArrowDownToLine, Star, ThumbsUp } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import logoImg from '../../assets/logo.png'
import errorImg from '../../assets/App-Error.png'
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import reviewsImg from '../../assets/icon-review.png'






const ProductDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const { products, loading, error } = Hooks();
  const [installed, setInstalled] = useState(false);

  // loading & error handle
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

  if (error) {
    return <p className="text-center mt-10 text-red-500">Error: {error.message}</p>;
  }
  const singleData = products.find(book => book.id === bookId);
  
  const { companyName, downloads, ratingAvg, description, image, size, reviews, ratings,title } = singleData || {};
  if (!singleData) {
    return (
      <div className="flex flex-col items-center justify-center  text-center bg-base-100 my-5">


        <figure>
          <img className='mx-auto' src={errorImg} alt="" />
        </figure>

      </div>
    );
  }




  const handleMarkAsRead = singleData => {

    toast.success("Installed Successfully!");

    updateList(singleData)
  }
  return (
    <div className="container m-auto my-5">








      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt="Movie"
              className='p-2 object-cover' />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">{title}</h2>
            <p className='text-xl'><span>Developed by</span> {companyName}</p>
            <div className='grid grid-cols-3 gap-5 mt-5' >
              <div>
                {/* <h1> <ArrowDownToLine />
                </h1> */}
                <img src={downloadImg} alt="" />
                <h1 className='font-bold text-3xl'>Downloads</h1>
                <h1 className='font-bold text-xl'>{downloads}</h1>

              </div>
              <div>
                 <img src={ratingImg} alt="" />
                {/* <h1> <Star />
                </h1> */}
                <h1 className='font-bold text-3xl'>Rating</h1>


                <h1 className='font-bold text-xl'>{ratingAvg}</h1>


              </div>
              <div>
                 <img src={reviewsImg} alt="" />
                {/* <h1> <ThumbsUp />
                </h1> */}
                <h1 className='font-bold text-3xl'>Reviews</h1>
                <h1 className='font-bold text-xl'>{reviews}</h1>

              </div>
            </div>
            <div className="card-actions ">
              <button onClick={() => {
                handleMarkAsRead(singleData);
                setInstalled(true);
              }} className="btn btn-accent m-2"
                disabled={installed} >{installed ? "Installed" : `Install Now (${size})`} </button>

            </div>
          </div>
        </div>
        <div className="my-10">
        <h2 className="text-3xl font-bold mb-4 ">App Analytics Chart</h2>

        {/* Parent div e height & width set kora holo */}
        <div className="w-full h-[500px]">
         
           <BarChart width={1000} height={500} data={ratings} layout="vertical">
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" reversed />
        <Bar dataKey="count" barSize={30} fill="#8884d8" />
      </BarChart>
          
        </div>
      </div>
        <div className='my-2'>
          <h1 className='text-[30px] font-bold'> Description</h1>
          <h1>{description}</h1>
        </div>
      </div>


      
     
    </div>
  );
};

export default ProductDetails;