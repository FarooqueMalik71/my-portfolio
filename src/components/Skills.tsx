import React from 'react'
import Heading from './Heading'


function Skills() {
  return (
    <div id='skills' className='container pt-32'>
      <Heading title='My Skills' />
      <div className='grid md:grid-cols-1 gap-20 items-center'>

        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 text-accent text-3xl sm:text-4xl place-items-center'>


            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">JavaScript</h2>

            </div>




            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>

            </div>




            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">Bootstrap</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>

            </div>


          </div>
        </div>



      </div>

      <div className='margin-1' data-aos="zoom-in-up">
        <h2 className='text-4xl md:text-5xl' data-aos="zoom-in-up">Technologies I work with</h2>
        <p className='text-gray-500 pt-2'>I am a front-end developer with expertise in HTML, CSS, and JavaScript, along with frameworks like React, Next.js, and Tailwind CSS. I specialize in crafting responsive, dynamic, and visually appealing web applications. My focus is on delivering high-quality, user-friendly interfaces that enhance user experience and meet modern web development standards.</p>
      </div>


    </div>
  )
}

export default Skills