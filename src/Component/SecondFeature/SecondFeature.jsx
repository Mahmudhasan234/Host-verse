import React from 'react';
import './secondFeature.css'
const SecondFeature = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/9cSf7fM/bg-5.png')] bg-no-repeat bg-cover h-[1050px] mb-20">
                <div className='text-center relative top-20'>
                    <h1 className='text-2xl text-amber-600 mb-5'>Our Features</h1>
                    <h1 className='text-4xl font-bold text-white mb-5'>Our Features
                        Cost Effective, Great Quality</h1>
                    <h1 className='text-xl text-slate-200'>Here are some things that we think make us the perfect fit for you!</h1>
                </div>
                <div className='mt-44 ml-44  '>
                    <div className='background flex items-center justify-center gap-5 w-[550px] mb-5'>
                        <div>
                            <img className='h-20 w-44' src="https://i.ibb.co/1b2HYzN/s-13.png" alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl text-white font-bold mb-5 mt-5'>
                                Cheap Prices, Full Features</h1>
                            <h1 className='text-sm text-gray-200 font-semibold'>You can save money and still get the best hosting with full features, from autoinstall WordPress, complete cPanel, to free SSL</h1>
                        </div>
                    </div>
                    <div className='background flex justify-center items-center gap-5 w-[550px] mb-5'>
                        <div>  <img className='h-20 w-44' src="https://i.ibb.co/Gs55bCh/s-14.png" alt="" /></div>
                        <div>
                            <h1 className='text-2xl font-bold text-white mb-5 mt-5'>Always Online Website</h1>
                            <h1 className='text-sm text-gray-200 font-semibold'>99.98% server uptime guarantee allows your website to always be online so you don't have to worry about losing traffic and revenue</h1>
                        </div>
                    </div>
                    <div className='background flex justify-center items-center gap-5 w-[550px] mb-5'>
                        <div><img className='h-20 w-44' src="https://i.ibb.co/85z9yXG/s-15.png" alt="" /></div>
                        <div>
                            <h1 className='text-2xl text-white font-bold mb-5 mt-5'>Super Fast Hosting</h1>
                            <h1 className='text-sm text-gray-200 font-semibold'>Visitors don't like slow websites. With LiteSpeed ​​Web Server support, your website loading time will increase rapidly.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondFeature;