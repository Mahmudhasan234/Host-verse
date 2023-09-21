import React from 'react';

const StopWastingTIme = () => {
    return (
        <div>
            <div className='container mx-auto my-44 flex flex-row-reverse gap-5 justify-center items-center'>
                <div >
                    <h1 className='text-xl text-amber-500 mb-4 font-semibold'>
                        Stop Wasting Time
                    </h1>
                    <h1 className='text-6xl mb-4 font-bold text-sky-950'>
                        Need Some Help?
                    </h1>
                    <h1 className='text-lg text-sky-950 opacity-80'>Whether you’re stuck or just want some tips on where to start, hit up our experts anytime.</h1>
                    <div className='flex items-center gap-5 mt-10 '>
                    <div className='flex justify-center items-center gap-5 w-72 p-5 shadow-2xl '>
                        <div>  <img src="https://i.ibb.co/BGL6cyT/s-19.png" alt="" /></div>
                        <div>
                            <h1 className='text-2xl font-bold text-[#33406a]'>Live Chat</h1>
                            <h1 className='text-sm text-[#33406a] font-semibold'>Anything I can help you with?</h1>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-5 w-72 p-5 shadow-2xl rounded'>
                        <div><img src="https://i.ibb.co/YyQ1pDt/s-20.png" alt="" /></div>
                        <div>
                            <h1 className='text-2xl text-[#33406a] font-bold'>Send Ticket
                            </h1>
                            <h1 className='text-sm text-[#33406a] font-semibold'>Anything I can help you with?</h1>
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/M6BN7C4/bge-1.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default StopWastingTIme;