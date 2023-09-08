import React from 'react';
import { FaServer } from 'react-icons/fa'
import { MdSupportAgent } from 'react-icons/md'
import { BiMaleFemale } from 'react-icons/bi'
import { GiReceiveMoney } from 'react-icons/gi'
const FeatureSection = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/nDQgL9w/bg-13.png')]  h-[1000px]">
                <div className='container mx-auto gap-10 flex items-center justify-center'>
                   <div>
                   <div className='flex gap-5 p-10 '>
                        <div className='relative top-32'>
                            <div className='p-10 shadow-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow  bg-white mb-5 text-center  rounded-3xl h-80 w-72 '>
                                <h1><FaServer className='absolute inset-5 group-hover:translate-y-[-200%] transition-all duration-500 container mx-auto h-10 w-10 text-amber-500 my-5'></FaServer></h1>
                                <div className='mt-16 group-hover:translate-y-[-20%] duration-500'>
                                    <h1 className='text-amber-500 text-xl font-bold mb-2' >Secure Servers</h1>
                                    <h1 className='font-bold mb-10'>Guard Your Data with Our Impenetrable Servers, Your Information's Sanctuary of Security.</h1>
                                </div>

                            </div>
                            <div className='p-10 shadow-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow  bg-white mb-5 text-center  rounded-3xl h-80 w-72 '>
                                <h1><BiMaleFemale className='absolute inset-5 group-hover:translate-y-[-200%] transition-all duration-500 container mx-auto h-10 w-10 text-amber-500 my-5'></BiMaleFemale></h1>
                                <div className='mt-16 group-hover:translate-y-[-20%] duration-500'>
                                    <h1 className='text-amber-500 text-xl font-bold'>Website for Everyone</h1>
                                    <h1 className='font-bold mb-10'>Simplicity Meets Power Seamlessly Manage Your Hosting with Our Intuitive and Accessible Interface.
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='relative top-48'>
                            <div className='p-10 shadow-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow  bg-white mb-5 text-center  rounded-3xl h-80 w-72 '>
                                <h1><MdSupportAgent className='absolute inset-5 group-hover:translate-y-[-200%] transition-all duration-500 container mx-auto h-10 w-10 text-amber-500 my-5'></MdSupportAgent></h1>
                                <div className='mt-16 group-hover:translate-y-[-20%] duration-500'>
                                    <h1 className='text-amber-500 text-xl font-bold my-5'>24/7 Support</h1>
                                    <h1 className='font-bold mb-10'>Day or Night, Trust Our Support Team to Resolve Your Concerns Swiftly and Effectively.
                                    </h1>
                                </div>
                            </div>
                            <div className='p-10 shadow-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow  bg-white mb-5 text-center  rounded-3xl h-80 w-72'>
                                <h1><GiReceiveMoney className='absolute inset-5 group-hover:translate-y-[-200%] transition-all duration-500 container mx-auto h-10 w-10 text-amber-500 my-5'></GiReceiveMoney></h1>
                                <div className='mt-16 group-hover:translate-y-[-20%] duration-500'>
                                    <h1 className='text-amber-500 text-xl font-bold'>100% Money Back Guarantee </h1>
                                    <h1 className='font-bold mb-10'>Experience Peace of Mind with Our 30-Day Money-Back Guarantee - No Questions Asked.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>

                    <div className='relative top-36'>
                        <h1 className='text-2xl text-amber-500 mb-4 font-bold'>
                        What Makes Us So Great?
                        </h1>
                        <h1 className='text-6xl mb-4 font-bold text-sky-950'>
                        Our Features
                        </h1>
                        <h1 className='text-xl text-justify'>Here are some things that we think make us the perfect fit for you!We stand by our hosting and our customer service! We offer an unconditional Money Back Guarantee and an Uptime Guarantee for every hosting plan we offer</h1>
                        <button className='"transition bg-gradient-to-r  duration-300 from-red-500 to-amber-600 hover:-translate-y-1 hover:bg-gradient-to-r  hover:from-amber-600 hover:to-red-500  flex items-center justify-center gap-1 text-xl px-4 py-3 rounded-full text-white mt-5'>Get Started at only $3.95/mo</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeatureSection;