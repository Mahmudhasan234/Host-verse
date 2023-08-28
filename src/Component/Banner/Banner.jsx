import React from 'react';
import {FaSearch, FaGlobeAmericas} from 'react-icons/fa';
const Banner = () => {
    return (
        <div className='flex gap-5 justify-center items-center'>
            <div className='ml-24'>
                <h1 className='text-4xl text-amber-500 font-semibold'>
                    SECURE AND GUARANTEED
                </h1>
                <h1 className='text-8xl font-bold text-blue-900'>
                    Hunt Your Domain!
                </h1>
                <h1 className='text-xl'>Buy or transfer your domain name today! Advanced control panel + FREE Whosis protection</h1>
               <div className=' mt-5 shadow-gray-500 shadow-[rgba(0,_0,_0,_0.24)_0px_10px_20px] px-4 rounded-full h-14 flex items-center justify-between  gap-3 '>
                <p className='flex items-center gap-5'><FaGlobeAmericas className='h-5 w-5'></FaGlobeAmericas>
               <input className='' placeholder='Search Your Domain Name' type="search" name="" id="" />
                </p>
               <button><FaSearch className='h-5 w-5'></FaSearch></button>
               </div>
            </div>
          <div>
          <img src="https://i.ibb.co/LtrmcDh/Untitled-design-4.png" alt="" />
          </div>
        </div>
    );
};

export default Banner;