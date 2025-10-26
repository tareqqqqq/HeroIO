import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const MainLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen'>
          <NavBar></NavBar> 
          <div className=' mx-auto w-full       '>
            <Outlet></Outlet> 
          </div>
          <Footer></Footer>
        </div>
    );
};

export default MainLayouts;