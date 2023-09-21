import React from 'react';
import '../SecuritySection/securitySecttioncss.css'
const SecuritySection = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/sWxfb1p/bg-7.png')] bg-no-repeat bg-cover h-[900px] mb-20">
                <div className='text-center mt-28'>
                    <h1 className='text-2xl text-amber-500 mb-5'>Website Security</h1>
                    <h1 className='text-5xl font-bold text-sky-950 mb-5'>On Every Step</h1>
                    <h1 className='text-xl text-sky-900'>Learn more about how hostera protects your website and the <br /> technologies we use</h1>
                </div>
                <div>
                    
                    <div className='mt-10 ml-44  '>
                        <div className='p-8 bg-gray-100 w-[550px] custom-css mb-5'>
                            <h1 className='text-4xl font-bold mb-5 mt-5'>DNS and DDoS Protection</h1>
                            <h1 className='text-xl mb-10 text-sky-900 font-semibold'>We stop DDoS-attacks with extreme
                                precision</h1>
                        </div>
                        <div className='p-8 bg-gray-100 w-[550px] custom-css mb-5'>
                            <h1 className='text-4xl font-bold mb-5 mt-5'>DNS and DDoS Protection</h1>
                            <h1 className='text-xl mb-10 text-sky-900 font-semibold'>We stop DDoS-attacks with extreme
                                precision</h1>
                        </div>
                        <div className='p-8 bg-gray-100 w-[550px] custom-css mb-5'>
                            <h1 className='text-4xl font-bold mb-5 mt-5'>DNS and DDoS Protection</h1>
                            <h1 className='text-xl mb-10 text-sky-900 font-semibold'>We stop DDoS-attacks with extreme
                                precision</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SecuritySection;