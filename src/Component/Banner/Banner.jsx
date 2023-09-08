import React from 'react';
import {FaSearch, FaGlobeAmericas} from 'react-icons/fa';
const Banner = () => {
    return (
        <div>
        <div className='flex gap-5 justify-center items-center'>
            <div className='ml-24'>
                <h1 className='text-2xl text-amber-500 mb-4 font-bold'>
                    SECURE AND GUARANTEED
                </h1>
                <h1 className='text-6xl mb-4 font-bold text-sky-950'>
                    Hunt Your Domain!
                </h1>
                <h1 className='text-lg'>Buy or transfer your domain name today! Advanced control panel + FREE Whosis protection</h1>
               <div className=' mt-5 shadow-gray-300 shadow-[rgba(0,_0,_0,_0.24)_0px_12px_20px] px-10 rounded-full h-14 flex items-center justify-between  gap-3 '>
                <p className='flex items-center gap-5'><FaGlobeAmericas className='h-5 w-5'></FaGlobeAmericas>
               <input className='outline-none w-96' placeholder='Search Your Domain Name' type="" name="" id="" />
                </p>
               <button><FaSearch className='h-5 w-5'></FaSearch></button>
               </div>
            </div>
          <div>
          <img src="https://i.ibb.co/LtrmcDh/Untitled-design-4.png" alt="" />
          </div>
        </div>
          <div className='flex items-center gap-5 ml-24'>
            <p className="px-5 py-4 hover:bg-amber-200 shadow-2xl hover:translate-x-1 transition-all ease-in-out rounded-2xl text-center font-bold"> .com <br /> <span className='text-red-500'>$2.99/mo</span></p>
            <p className="px-5 py-4 hover:bg-amber-200 shadow-2xl hover:translate-x-1 transition-all ease-in-out rounded-2xl text-center font-bold"> .com <br /> <span className='text-red-500'>$2.99/mo</span></p>
            <p className="px-5 py-4 hover:bg-amber-200 shadow-2xl hover:translate-x-1 transition-all ease-in-out rounded-2xl text-center font-bold"> .com <br /> <span className='text-red-500'>$2.99/mo</span></p>
            <p className="px-5 py-4 hover:bg-amber-200 shadow-2xl hover:translate-x-1 transition-all ease-in-out rounded-2xl text-center font-bold"> .com <br /> <span className='text-red-500'>$2.99/mo</span></p>
            <p className="px-5 py-4 hover:bg-amber-200 shadow-2xl hover:translate-x-1 transition-all ease-in-out rounded-2xl text-center font-bold"> .com <br /> <span className='text-red-500'>$2.99/mo</span></p>
          </div>
        </div>
    );
};

export default Banner;