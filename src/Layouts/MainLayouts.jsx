import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const MainLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen'>
          <NavBar></NavBar> 
          <div className='max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1'>
            <Outlet></Outlet> 
          </div>
          <Footer></Footer>
        </div>
    );
};

export default MainLayouts;