import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'



export const Hero = () => {
    return (
        <>
            <div id='hero' className='min-h-screen bg-slate-900'>
                <Navbar />

                <div className='container mx-auto grid sm:grid-cols-1 lg:grid-cols-2 h-[calc(111vh-7.1875rem)] items-center px-4'>
                    {/* Profile Picture Section */}
                    <div
                        className=' relative w-full h-full flex justify-center items-center'
                    >
                        {/* Profile Picture */}
                        <img
                            src="/profile-pic.png"
                            alt="Profile"
                            className=" lg:block md:w-[80%] bg-no-repeat bg-cover rounded-full shadow-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div className='text-center lg:text-left text-[2.5rem] sm:text-[3.125rem] md:text-[4.0625rem] font-bold leading-tight'>
                        <div>
                            <p data-aos="zoom-in-up">I'm</p>
                            <p data-aos="zoom-in-up">Farooque</p>
                            <p data-aos="zoom-in-up">Malik</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center pt-8 space-x-4 m-20 ' data-aos="zoom-in-up">
                <Link href="https://my-resume-phi-snowy.vercel.app/">
                    <button className="px-2 py-2 bg-black text-white text-lg font-bold rounded-lg border-2 border-accent-500 relative overflow-hidden group">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 accent-in-out animate-light-travel"></span>
                        <span className="relative">Download Resume</span>
                    </button>
                </Link>

                <Link href="#contact">
                    <button className="px-2 py-2 bg-black text-white text-lg font-bold rounded-lg border-2 border-accent-500 relative overflow-hidden group">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 accent-in-out animate-light-travel"></span>
                        <span className="relative">Hire Me</span>
                    </button>
                </Link>
            </div>
       
        </>


    )
}
