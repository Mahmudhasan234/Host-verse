import React from 'react';
import {CgLogIn} from 'react-icons/cg'
const Navbar = () => {
    return (
        <div className='container mx-auto my-5'>
            <div className='flex justify-between items-center'>
                <h1 className='text-4xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500'>HostVerse</h1>
                <div className='flex justify-between items-center gap-10'>
                <nav>
                    <ul className='flex gap-10 text-2xl items-center font-semi'>
                        <li>Home</li>
                        <li>Pricing</li>
                        <li>Domain</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <button className='flex items-center gap-2 text-2xl bg-gradient-to-r from-red-500 to-amber-500 px-6 py-2 rounded-full text-white '>Sign up <CgLogIn className='w-10 h-10'></CgLogIn></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;