<<<<<<< HEAD
import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';

export const Hero = () => {
    return (
        <div className="w-full overflow-x-hidden bg-gradient-dark relative pt-[72px] min-h-screen">
            {/* Background Circles */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute -top-32 -right-20 w-60 h-60 bg-gradient-accent rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-float"></div>
                <div className="absolute -bottom-32 -left-20 w-60 h-60 bg-gradient-to-r from-accent2 to-accent9 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-accent4 to-accent7 rounded-full mix-blend-multiply filter blur-2xl opacity-5 animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            <Navbar />

            {/* Hero Content */}
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-8 min-h-[80vh] relative z-10">
                {/* Text Section */}
                <div className="w-full text-center lg:text-left text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold leading-tight flex-1 space-y-2">
                    <p data-aos="fade-down" data-aos-delay="200" className="text-gray-300">I'm</p>
                    <div className="relative">
                        <h1 data-aos="fade-down" data-aos-delay="400" className="bg-gradient-accent bg-clip-text text-transparent animate-gradient">Farooque</h1>
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-accent rounded-full animate-pulse-slow"></div>
=======
import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'

export const Hero = () => {
    return (
        <>
            <div id='hero' className='min-h-screen bg-gradient-dark relative overflow-hidden pt-20'>
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-accent2 to-accent9 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent4 to-accent7 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{animationDelay: '4s'}}></div>
                </div>

                <Navbar />

                <div className='container mx-auto grid sm:grid-cols-1 lg:grid-cols-2 h-[calc(100vh-5rem)] items-center px-4 relative z-10'>
                    {/* Profile Picture Section */}
                    <div className='relative w-full h-full flex justify-center items-center'>
                        {/* Profile Picture with glow effect */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-accent rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-glow"></div>
                            <img
                                src="/profile-pic.png"
                                alt="Profile"
                                className="relative lg:block md:w-[80%] bg-no-repeat bg-cover rounded-full shadow-2xl border-4 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 animate-float"
                            />
                        </div>
                    </div>

                    {/* Text Section with typewriter effect */}
                    <div className='text-center lg:text-left text-[2.5rem] sm:text-[3.125rem] md:text-[4.0625rem] font-bold leading-tight'>
                        <div className="space-y-2">
                            <p data-aos="fade-down" data-aos-delay="200" className="text-gray-300">
                                I'm
                            </p>
                            <div className="relative">
                                <h1 data-aos="fade-down" data-aos-delay="400" className="bg-gradient-accent bg-clip-text text-transparent animate-gradient">
                                    Farooque
                                </h1>
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-accent rounded-full animate-pulse-slow"></div>
                            </div>
                            <h1 data-aos="fade-down" data-aos-delay="600" className="text-white">
                                Malik
                            </h1>
                            <div data-aos="fade-up" data-aos-delay="800" className="mt-4">
                                <p className="text-xl md:text-2xl text-gray-400 font-normal">
                                    Full Stack Developer & AI Enthusiast
                                </p>
                                <p className="text-lg md:text-xl text-accent font-medium mt-2">
                                    Crafting Digital Experiences with Modern Technologies
                                </p>
                            </div>
                        </div>
>>>>>>> a1a35bfcb8c6be3e677c5d49c1f139c2c871ae8a
                    </div>
                    <h1 data-aos="fade-down" data-aos-delay="600" className="text-white">Malik</h1>
                    <div data-aos="fade-up" data-aos-delay="800" className="mt-4">
                        <p className="text-xl md:text-2xl text-gray-400 font-normal">Full Stack Developer & AI Enthusiast</p>
                        <p className="text-lg md:text-xl text-accent font-medium mt-2">Crafting Digital Experiences with Modern Technologies</p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full flex justify-center items-center flex-1 mb-8 lg:mb-0">
                    <img
                        src="/profile-pic.png"
                        alt="Profile"
                        className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-full border-4 border-accent/30 shadow-xl bg-white/10 transition-all duration-300 hover:shadow-2xl"
                    />
                </div>
            </div>

<<<<<<< HEAD
            {/* CTA Buttons */}
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-wrap justify-center items-center gap-6 relative z-10" data-aos="fade-up" data-aos-delay="1000">

                {/* Download Resume Button */}
                <Link href="/myResume.pdf" target="_blank" download>
                    <button className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-105">
                        {/* Background Glow on Hover */}
                        <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></span>

                        {/* Button Content */}
                        <span className="relative z-10 flex items-center gap-2">
                            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0120 9v11a2 2 0 01-2 2z" />
=======
            {/* Enhanced CTA Buttons */}
            <div className='flex justify-center items-center pt-8 space-x-6 m-20 relative z-10' data-aos="fade-up" data-aos-delay="1000">
                <Link href="https://my-resume-phi-snowy.vercel.app/">
                    <button className="group relative px-8 py-4 bg-gradient-accent text-white text-lg font-bold rounded-xl border-2 border-accent/50 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/25">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <span className="relative flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
>>>>>>> a1a35bfcb8c6be3e677c5d49c1f139c2c871ae8a
                            </svg>
                            Download Resume
                        </span>
                    </button>
                </Link>

                {/* Hire Me Button */}
                <Link href="#contact">
<<<<<<< HEAD
                    <button className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-slate-100 text-blue-600 font-semibold text-lg border-2 border-blue-500 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white shadow-md hover:scale-105">
                        {/* Glass hover effect */}
                        <span className="absolute inset-0 bg-blue-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></span>

                        {/* Button Content */}
                        <span className="relative z-10 flex items-center gap-2">
                            <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
=======
                    <button className="group relative px-8 py-4 bg-transparent text-accent text-lg font-bold rounded-xl border-2 border-accent overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-white hover:shadow-2xl hover:shadow-accent/25">
                        <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
>>>>>>> a1a35bfcb8c6be3e677c5d49c1f139c2c871ae8a
                            </svg>
                            Hire Me
                        </span>
                    </button>
                </Link>
            </div>
<<<<<<< HEAD


        </div>
    );
};
=======
        </>
    )
}
>>>>>>> a1a35bfcb8c6be3e677c5d49c1f139c2c871ae8a
