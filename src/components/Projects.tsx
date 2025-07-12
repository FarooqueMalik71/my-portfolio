import React from 'react'
import Heading from './Heading'
import { Card } from './Card'

const data = [
    {
        id: 0,
        title: "Next.js E-commerce Website",
        desc: "A fully responsive and dynamic e-commerce store built with Next.js, Tailwind CSS, and Sanity CMS. Features modern UI/UX, SSR & SSG performance, real-time CMS integration, and seamless multi-device compatibility.",
        img: "/ecomerce.png",
        tags: ["Next.js", "Tailwind CSS", "Sanity CMS", "Responsive", "Hackathon"],
        link: "https://hackathone-151725.vercel.app/",
        isNew: true,
        category: "E-Commerce"
    }, {
        id: 1,
        title: "Zakat Calculator App",
        desc: "An intelligent and user-friendly Zakat Calculator built with Python and Streamlit. It helps users calculate their zakat based on wealth, assets, and liabilities. Features PDF download, Urdu interface, and custom styling.",
        img: "/zakat.png", // 
        tags: ["Python", "Streamlit", "FPDF", "Finance", "Islamic App"],
        link: "https://zakat-calculator.streamlit.app/",
        isNew: true,
        category: "Finance / Utility"
    },
    {
        id: 2,
        title: "Fast Food Order App",
        desc: "A mobile-optimized food ordering web app built with Python and Streamlit. Users can explore menu items, add to cart, and send the final bill directly to WhatsApp with item-wise billing support.",
        img: "/fastfod.png", // 🔄 Replace this with your actual image path
        tags: ["Python", "Streamlit", "WhatsApp API", "Mobile Friendly", "Fast Food"],
        link: "https://food-express-com-pk.streamlit.app/",
        isNew: true,
        category: "Utility / Food"
    }
    ,
    {
        id: 3,
        title: "E-Commerce Platform",
        desc: "A comprehensive online shopping platform built using modern web technologies, featuring responsive design, user authentication, and AI-powered product recommendations.",
        img: "/webProject-04.png",
        tags: ["TypeScript", "React", "Node.js", "AI Features", "Bootstrap"],
        link: "https://malikweb.vercel.app/",
        category: "E-Commerce"
    },
    {
        id: 4,
        title: "Interactive Resume Builder",
        desc: "A TypeScript-based interactive resume builder with AI-powered content suggestions and dynamic skill assessment, allowing users to showcase their expertise professionally.",
        img: "/rebuildResume-03.png",
        tags: ["TypeScript", "AI Integration", "HTML", "CSS"],
        link: "https://rebuild-resume.vercel.app/",
        category: "Web App"
    }, {
        id: 5,
        title: "Personal Blog Website",
        desc: "A fully functional and responsive blog site powered by Sanity CMS. Includes About, Contact, and Comments sections. Built for easy content management, SEO optimization, and a smooth reading experience.",
        img: "/blog.png", // 🔄 Replace this with actual image path
        tags: ["Next.js", "Sanity CMS", "Blog", "Responsive", "Dynamic Content"],
        link: "https://blog-site-alpha-three.vercel.app/",
        isNew: true,
        category: "Content / Blog"
    }
    ,

    {
        id: 6,
        title: "Advanced Calculator",
        desc: "A responsive calculator app with AI-powered calculation suggestions and error detection, built using JavaScript, Node.js, HTML, and CSS for enhanced user experience.",
        img: "/calculator-02.png",
        tags: ["JavaScript", "AI Features", "HTML", "CSS"],
        link: "https://farooquecalculater.vercel.app/",
        category: "Web App"
    },


    {
        id: 7,
        title: "Agentic AI Assistant",
        desc: "A sophisticated AI assistant built with Agentic AI principles, capable of autonomous task execution, intelligent decision making, and seamless integration with various APIs and services.",
        img: "/image.png",
        tags: ["Agentic AI", "OpenAI API", "LangChain", "Python", "React"],
        link: "#",
        isNew: true,
        category: "AI/ML"

    }
    , {
        id: 8,
        title: "Smart Countdown Timer",
        desc: "An AI-enhanced countdown timer with intelligent time management features, built using JavaScript, HTML, and CSS with machine learning capabilities for optimal time tracking.",
        img: "/countdown-01.png",
        tags: ["JavaScript", "AI Integration", "HTML", "CSS"],
        link: "https://farooquestopwatch.vercel.app/",
        category: "Web App"
    },
    
    {
        id: 9,
        title: "AI-Powered Task Manager",
        desc: "An intelligent task management application built with Agentic AI, featuring smart task categorization, priority suggestions, and automated workflow optimization using OpenAI APIs and LangChain.",
        img: "/todo-0.png",
        tags: ["Agentic AI", "OpenAI API", "React", "Node.js", "LangChain"],
        link: "https://todo-app-seven-psi-95.vercel.app/",
        isNew: true,
        category: "AI/ML"
    }

];

export const Projects = () => {
    return (
        <div id='projects' className='container pt-32 pb-20'>
            <Heading title='My Projects' />

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
            <div className='grid gap-8 space-x-12 xl:gap-0 xl:gap-y-8 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
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
