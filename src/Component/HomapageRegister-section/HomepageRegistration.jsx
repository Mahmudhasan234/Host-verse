import React from 'react';
import '../HomapageRegister-section/registrationCss.css'
const HomepageRegistration = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/K7GSYXd/bg-3.png')] bg-no-repeat bg-cover h-[500px]">

                <div className='text-center relative top-56'>
                    <h1 className='text-amber-600 text-4xl font-bold my-5'>2500+ People Trusted On Hostera</h1>
                    <h1 className='text-white text-4xl font-bold my-5'>Ready To Work With Hostera? <br /> <span className='mt-5'>Register Today</span></h1>

                    <button className='"transition bg-gradient-to-r  duration-300 from-red-500 to-amber-600 hover:-translate-y-1 hover:bg-gradient-to-r  hover:from-amber-600 hover:to-red-500  text-xl px-4 py-2 rounded-full text-white mt-5'> Get Start Now! </button>
                </div>
                <div className='relative top-60 p-10' >
                    <img className='moveObject scale-90' src="https://i.ibb.co/5F46K03/rocket.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomepageRegistration;