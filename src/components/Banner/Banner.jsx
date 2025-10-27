import React from 'react';
import mobileImg from '../../assets/hero.png'
const Banner = () => {
    return (
        <div  className="text-center space-y-5 container m-auto">
          <h1 className='font-bold text-[50px]  '>We Build <br /> <span className='text-blue-600'>Productive</span> Apps </h1> 
          <p className='text-black'>At <strong>HERO.IO</strong> , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact</p> 
          <div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
  {/* Google Play Button */}
  <a
    href="https://play.google.com/store"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-md  transition-all duration-300 flex items-center gap-2"
  >
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx6g33I-kP1ZveiVsCwlPhyupkrwqoSccrmw&s"
      alt="Google Play"
      className="w-6 h-6"
    />
    Google Play
  </a>

  {/* App Store Button */}
  <a
    href="https://www.apple.com/app-store/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-black text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
      alt="App Store"
      className="w-6 h-6"
    />
    App Store
  </a>
</div>
          </div>

          <img className='mx-auto' src={mobileImg} alt="" />
        </div>
    );
};

export default Banner;