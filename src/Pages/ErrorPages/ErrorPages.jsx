import React from 'react';

import errorImgPage from '../../assets/error-404.png'
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';


const ErrorPages = () => {
   
    return (
        <div>
            <NavBar/>
 <div className="flex flex-col items-center justify-center  text-center bg-base-100 my-5">
            
      
      <figure>
        <img className='mx-auto' src={errorImgPage} alt="" />
      </figure>
      
        </div>
        <Footer/> 
        </div>
       
    );
};

export default ErrorPages;