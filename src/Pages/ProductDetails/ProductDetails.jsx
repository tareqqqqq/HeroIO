import React, { useState } from 'react';
import { useParams } from 'react-router';
import Hooks from '../../hooks/Hooks';
import { updateList } from '../../utilities/localStorages';
import { ArrowDownToLine, Star, ThumbsUp } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import logoImg from '../../assets/logo.png'
import errorImg from '../../assets/App-Error.png'






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
  
  const { companyName, downloads, ratingAvg, description, image, size, reviews, ratings } = singleData || {};
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
    <div className="container m-auto">








      <div>
        <div className="card card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src={image}
              alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{companyName}</h2>
            <p>Developed by productive.io</p>
            <div className='grid grid-cols-3 gap-5 mt-5' >
              <div>
                <h1> <ArrowDownToLine />
                </h1>
                <h1>Downloads</h1>
                <h1>{downloads}</h1>

              </div>
              <div>
                <h1> <Star />
                </h1>
                <h1>Rating</h1>


                <h1>{ratingAvg}</h1>


              </div>
              <div>
                <h1> <ThumbsUp />
                </h1>
                <h1>Reviews</h1>
                <h1>{reviews}</h1>

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
        <h2 className="text-2xl font-bold mb-4 text-center">App Analytics Chart</h2>

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