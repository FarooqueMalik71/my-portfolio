import React from 'react'
import Heading from './Heading'

const About = () => {
  return (
    <div id='about' className='container pt-32 pb-20'>
      <Heading title='About Me'/>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
        {/* Text Content */}
        <div className="space-y-6" data-aos="fade-right">
          <div className="bg-gradient-dark rounded-2xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-accent bg-clip-text text-transparent">
              My Journey
            </h3>
            <p className='text-gray-300 leading-relaxed'>
              I am a passionate student at <span className="text-accent font-semibold">GIAIC</span>, pursuing cutting-edge courses in 
              <span className="text-accent font-semibold"> Artificial Intelligence</span>, <span className="text-accent font-semibold">Web 3.0</span>, and the 
              <span className="text-accent font-semibold"> Metaverse</span>. My journey in technology is driven by an insatiable curiosity 
              and a strong desire to create impactful solutions that shape the future.
            </p>
          </div>

          <div className="bg-gradient-dark rounded-2xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-accent bg-clip-text text-transparent">
              AI & Emerging Technologies
            </h3>
            <p className='text-gray-300 leading-relaxed'>
              Recently, I've expanded my expertise into <span className="text-accent font-semibold">Agentic AI</span> and modern AI frameworks. 
              I specialize in building intelligent applications using <span className="text-accent font-semibold">OpenAI APIs</span>, 
<<<<<<< HEAD
                combining traditional web development 
=======
              <span className="text-accent font-semibold"> LangChain</span>, and machine learning concepts, combining traditional web development 
>>>>>>> a1a35bfcb8c6be3e677c5d49c1f139c2c871ae8a
              with cutting-edge AI capabilities.
            </p>
          </div>
        </div>

        {/* Skills & Interests */}
        <div className="space-y-6" data-aos="fade-left">
          <div className="bg-gradient-dark rounded-2xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-accent bg-clip-text text-transparent">
              What I Do
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Full Stack Development</h4>
                  <p className="text-gray-400 text-sm">Building responsive web applications with modern technologies</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-accent2 to-accent6 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">AI Integration</h4>
                  <p className="text-gray-400 text-sm">Implementing intelligent features using Agentic AI principles</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-accent4 to-accent10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Innovation</h4>
                  <p className="text-gray-400 text-sm">Exploring Web 3.0, blockchain, and emerging technologies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-dark rounded-2xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-accent bg-clip-text text-transparent">
              My Goals
            </h3>
            <p className='text-gray-300 leading-relaxed'>
              I thrive on challenges that push my limits and am dedicated to personal growth. My goal is to contribute meaningfully 
              to the tech community and make a positive difference through innovation and creativity. I'm always excited to learn 
              new technologies and collaborate on groundbreaking projects.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16" data-aos="fade-up">
        <div className="bg-gradient-dark rounded-2xl p-8 border border-accent/20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Let's Build the Future Together
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you're looking for a skilled developer or want to collaborate on innovative AI projects, 
            I'm always open to new opportunities and exciting challenges.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-accent text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-accent/25"
          >
            <span>Get In Touch</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About