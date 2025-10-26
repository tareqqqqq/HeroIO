
import Hooks from '../../hooks/Hooks'
import ProductCard from '../../components/ProductCard/ProductCard';
import Banner from '../../components/Banner/Banner';
import BannerTwo from '../../components/BannerTwo/BannerTwo';

import logoImg from '../../assets/logo.png'

const Home = () => {
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

    return (
        <div className=' space-y-7'>
           <div>
             <Banner></Banner>
            <BannerTwo></BannerTwo>
           </div>
<div className='container m-auto'>
            <div className='text-center mt-5 '>
                <h1 className='text-[30px] font-bold'> Treanding App </h1>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
        <div className=' grid grid-cols-1 md:grid-cols-4 gap-5'>
            
            {
                featuredProducts.map((product)=><ProductCard product={product} key={product.id}></ProductCard> )
            }
        </div>
        </div>

        </div>
    );
};

export default Home;