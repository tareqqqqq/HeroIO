
import Hooks from '../../hooks/Hooks'
import ProductCard from '../../components/ProductCard/ProductCard';
import Banner from '../../components/Banner/Banner';
import BannerTwo from '../../components/BannerTwo/BannerTwo';

import logoImg from '../../assets/logo.png'
import {  useNavigate } from 'react-router';

const Home = () => {
  const navigate=useNavigate()
    const {products,loading}= Hooks()
    console.log(products);
     const featuredProducts = products.slice(0, 8)
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

const handleNavigate=()=>{
  navigate("/products")
}

    return (
        <div className=' space-y-7 bg-gray-100'>
           <div>
             <Banner></Banner>
            <BannerTwo></BannerTwo>
           </div>
<div className='container m-auto'>
            <div className='text-center mt-5 '>
                <h1 className='md:text-[40px] font-bold'> Treanding App </h1>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
        <div className=' grid grid-cols-1 md:grid-cols-4 gap-5'>
            
            {
                featuredProducts.map((product)=><ProductCard product={product} key={product.id}></ProductCard> )
            }
        </div>
        </div>
        <div className='container m-auto text-center mt-10 p-4 '>
          <button className='text-center btn text-2xl font-bold p-7 bg-blue-700 text-white rounded-2xl' onClick={handleNavigate}>Show All </button>
        </div>

        </div>
    );
};

export default Home;