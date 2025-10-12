import React from 'react';

const BannerTwo = () => {
    return (
        <div style={{
    background: "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)"
  }} className=' w-full  md:h-[300px] text-center'>
           <h1 className='text-[40px] font-bold text-white'> Trusted by Millions, Built for You</h1> 
           <div className='grid grid-cols-3 gap-5 mt-5'>
            <div>
                <p className='text-[20px] text-white'>Total Downloads</p>
                <h1 className='md:text-[48px] font-bold text-white'> 29.6M</h1>
                <p className='text-[20px] text-white'>21% More Than last Month</p>
            </div>
            <div>
                <p className='text-[20px] text-white'>Total Downloads</p>
                <h1 className='md:text-[48px] font-bold text-white'> 29.6M</h1>
                <p className='text-[20px] text-white'>21% More Than last Month</p>
            </div>
            <div>
                <p className='text-[20px] text-white'>Total Downloads</p>
                <h1 className='md:text-[48px] font-bold text-white'> 29.6M</h1>
                <p className='text-[20px] text-white'>21% More Than last Month</p>
            </div>
           </div>
        </div>
    );
};

export default BannerTwo;