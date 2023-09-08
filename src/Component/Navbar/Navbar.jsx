import React from 'react';
import {CgLogIn} from 'react-icons/cg'
const Navbar = () => {
    return (
        <div className='container mx-auto my-5'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500'>HostVerse</h1>
                <div className='flex justify-between items-center gap-10'>
                <nav>
                    <ul className='flex gap-10 text-xl items-center font-semi'>
                        <li>Home</li>
                        <li>Pricing</li>
                        <li>Domain</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <button className='"transition bg-gradient-to-r  duration-300 from-red-500 to-amber-600 hover:-translate-y-1 hover:bg-gradient-to-r  hover:from-amber-600 hover:to-red-500  flex items-center justify-center gap-1 text-xl px-4 py-2 rounded-full text-white '>Sign up <CgLogIn className='w-5 h-5'></CgLogIn></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;