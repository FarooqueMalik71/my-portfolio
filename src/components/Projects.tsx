import React from 'react'
import Heading from './Heading'
import { Card } from './Card'

const data = [
    {
        id: 0,
        title: "AI-Powered Task Manager",
        desc: "An intelligent task management application built with Agentic AI, featuring smart task categorization, priority suggestions, and automated workflow optimization using OpenAI APIs and LangChain.",
        img: "/todo-0.png",
        tags: ["Agentic AI", "OpenAI API", "React", "Node.js", "LangChain"],
        link: "https://todo-app-seven-psi-95.vercel.app/",
        isNew: true,
        category: "AI/ML"
    },
    {
        id: 1,
        title: "Smart Countdown Timer",
        desc: "An AI-enhanced countdown timer with intelligent time management features, built using JavaScript, HTML, and CSS with machine learning capabilities for optimal time tracking.",
        img: "/countdown-01.png",
        tags: ["JavaScript", "AI Integration", "HTML", "CSS"],
        link: "https://farooquestopwatch.vercel.app/",
        category: "Web App"
    },
    {
        id: 2,
        title: "Advanced Calculator",
        desc: "A responsive calculator app with AI-powered calculation suggestions and error detection, built using JavaScript, Node.js, HTML, and CSS for enhanced user experience.",
        img: "/calculator-02.png",
        tags: ["JavaScript", "AI Features", "HTML", "CSS"],
        link: "https://farooquecalculater.vercel.app/",
        category: "Web App"
    },
    {
        id: 3,
        title: "Interactive Resume Builder",
        desc: "A TypeScript-based interactive resume builder with AI-powered content suggestions and dynamic skill assessment, allowing users to showcase their expertise professionally.",
        img: "/rebuildResume-03.png",
        tags: ["TypeScript", "AI Integration", "HTML", "CSS"],
        link: "https://rebuild-resume.vercel.app/",
        category: "Web App"
    },
    {
        id: 4,
        title: "E-Commerce Platform",
        desc: "A comprehensive online shopping platform built using modern web technologies, featuring responsive design, user authentication, and AI-powered product recommendations.",
        img: "/webProject-04.png",
        tags: ["TypeScript", "React", "Node.js", "AI Features", "Bootstrap"],
        link: "https://malikweb.vercel.app/",
        category: "E-Commerce"
    },
    {
        id: 5,
        title: "Agentic AI Assistant",
        desc: "A sophisticated AI assistant built with Agentic AI principles, capable of autonomous task execution, intelligent decision making, and seamless integration with various APIs and services.",
        img: "/webProject-04.png", // You can replace this with an AI project image
        tags: ["Agentic AI", "OpenAI API", "LangChain", "Python", "React"],
        link: "#",
        isNew: true,
        category: "AI/ML"
    }
];

export const Projects = () => {
  return (
    <div id='projects' className='container pt-32 pb-20'>
        <Heading title='My Projects'/>
        
        {/* Project Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
            {['All', 'AI/ML', 'Web App', 'E-Commerce'].map((category, index) => (
                <button
                    key={category}
                    className="px-6 py-3 rounded-full bg-secondary/50 border border-accent/20 text-white hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
                >
                    {category}
                </button>
            ))}
        </div>

        {/* Projects Grid */}
        <div className='grid gap-8 xl:gap-0 xl:gap-y-8 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el, index) => (
                <div
                    key={el.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="w-full"
                >
                    <Card
                        title={el.title}
                        desc={el.desc}
                        img={el.img}
                        tags={el.tags}
                        link={el.link}
                        isNew={el.isNew}
                        category={el.category}
                    />
                </div>
            ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="800">
            <div className="bg-gradient-dark rounded-2xl p-8 border border-accent/20">
                <h3 className="text-3xl font-bold text-white mb-4">
                    Ready to Build Something Amazing?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    I'm always excited to work on new projects, especially those involving cutting-edge technologies like Agentic AI and modern web development.
                </p>
                <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-accent text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-accent/25"
                >
                    <span>Let's Collaborate</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
  )
}
