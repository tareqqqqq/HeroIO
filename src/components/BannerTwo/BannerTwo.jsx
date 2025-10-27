import React from 'react';

const BannerTwo = () => {
    return (
        <div style={{
    background: "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)"
  }} className='   md:h-[300px] text-center'>
          <div className='container m-auto text-center'>
             <h1 className='text-[40px] font-bold text-white md:pt-10'> Trusted by Millions, Built for You</h1> 
           <div className='grid grid-cols-3 gap-5 mt-5'>
            <div>
                <p className='md:text-[20px] text-white'>Total Downloads</p>
                <h1 className='md:text-[48px] font-bold text-white'> 29.6M</h1>
                <p className='text-[20px] text-white'>21% More Than last Month</p>
            </div>
            <div>
                <p className='md:text-[20px] text-white'>Total Reviews</p>
                <h1 className='md:text-[48px] font-bold text-white'> 906K</h1>
                <p className='text-[20px] text-white'>41% More Than last Month</p>
            </div>
            <div>
                <p className='md:text-[20px] text-white'>Active Apps</p>
                <h1 className='md:text-[48px] font-bold text-white'> 132+</h1>
                <p className='text-[20px] text-white'>31% More will Launch</p>
            </div>
           </div>
          </div>
        </div>
    );
};

export default BannerTwo;