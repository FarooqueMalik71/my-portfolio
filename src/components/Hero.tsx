import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'



export const Hero = () => {
    return (
        <div id='hero' className='min-h-screen bg-[url(/profile-pic.png)] bg-no-repeat bg-cover'
            style={{ backgroundSize: "40%", backgroundPosition: "left 100px top 100px" }}>
            <Navbar />

            <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
                <div className='hidden lg:block'></div>
                <div className='text-[65px] sm:text-[85px] font-bold leading-tight flex justify-center items-center'>
                    <div>
                        <p data-aos="zoom-in-up">I'm</p>
                        <p data-aos="zoom-in-up">Farooque</p>
                        <p data-aos="zoom-in-up">Malik</p>
                    </div>
                </div>
            </div>


            <div className='flex justify-center items-center space-x-4 m-20 ' data-aos="zoom-in-up">
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
        </div>



    )
}
