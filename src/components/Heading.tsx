import React from 'react'

interface propsType {
    title: string;
}

const Heading: React.FC<propsType> = ({ title }) => {
    return (
        <div className='text-center mb-16' data-aos="fade-up">
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
                {title}
            </h2>
<<<<<<< HEAD
            <div className="w-28 mt-2 h-1 bg-gradient-accent mx-auto rounded-full"></div>
=======
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
>>>>>>> a1a35bfcb8c6be3e677c5d49c1f139c2c871ae8a
        </div>
    )
}

export default Heading