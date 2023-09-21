import React from 'react';
import { FiSend } from 'react-icons/fi';
const Footer = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/2S0QmNN/footer-bg.png')] bg-no-repeat bg-cover h-[800px]">
                <div className='relative top-32 container mx-auto'>
                    <div className='flex justify-between items-center gap-5 '>
                        <div>
                            <h1 className='text-4xl mb-4 font-bold text-white'>
                                Ready. Set. Go for
                                <br />
                                the Best Web Hosting Experience!
                            </h1>
                            <h1 className='text-xl text-white text-justify'>
                                We’re confident you’ll be 100% satisfied or your money back.
                            </h1>
                        </div>
                        <button className='"transition bg-gradient-to-r  duration-300 from-red-500 to-amber-600 hover:-translate-y-1 hover:bg-gradient-to-r  hover:from-amber-600 hover:to-red-500  flex items-center justify-center gap-1 text-xl px-4 py-3 rounded-full text-white mt-5'>Get Started at only $3.95/mo</button>
                    </div>
                    <div className='flex  justify-evenly items-center mt-20'>
                        <div>
                            <h1 className='text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500'>HostVerse</h1>
                            <h1 className='text-white mt-2'>Subscribe to our newsletter to get special offers</h1>
                            <div className=' mt-5 bg-white shadow-gray-300 px-10 rounded-full h-14 w-96 flex items-center justify-between  gap-3`'>
                                <p>
                                    <input className='outline-none' placeholder='Enter Your Email Address ' type="" name="" id="" />
                                </p>
                                <button><FiSend className='h-10 w-10 p-3 relative left-8 bg-amber-600 text-white rounded-full '></FiSend></button>
                            </div>
                            <img className='w-96 mt-2 opacity-90' src="https://i.ibb.co/Tt8XDpM/removal-ai-7134b3ee-2492-422f-a0c7-336b8b70baa1.png" alt="" />
                        </div>
                        <div className='flex gap-20'>
                            <div className='text-white text-2xl flex flex-col gap-5'>
                            <h1>OUR SERVICES</h1>
                            <ul className='flex flex-col'>

                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'> Web Hosting
                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'>Reseller Hosting
                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'>VPS Hosting
                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'>Cloud Hosting
                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'>Email Marketing
                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'>Domains
                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'>Affiliate Marketing
                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'>SSL Certificates
                                </li>
                            </ul>
                        </div>
                        <div className='text-white text-2xl flex flex-col gap-5'>
                            <h1>COMPANY INFO</h1>
                            <ul className='flex flex-col'>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'> About

                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'>  Affiliate Program

                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'> Blog

                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'>  Legal Information

                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'> Client Reviews

                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'> Privacy Policy

                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'>Careers

                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'>Partners
                                </li>
                            </ul>
                        </div>
                        <div className='text-white text-2xl flex flex-col gap-5'>
                            <h1>SUPPORT</h1>
                            <ul className='flex flex-col'>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'> Help centre
                                    
                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'>FAQ
                                 
                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'>   Guide
                                   
                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'> Contact
                                    
                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'>Community
                                   
                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'> Report Abuse
                                   
                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'> Service Status 
                                </li>
                                <li className='hover:text-amber-600 hover:translate-x-2 cursor-pointer duration-200 text-base mb-5'>
                                </li>
                            </ul>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;