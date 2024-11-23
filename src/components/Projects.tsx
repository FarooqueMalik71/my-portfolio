import React from 'react'
import Heading from './Heading'
import { Card } from './Card'

const data = [
    {
 id: 0,
 title : "Todo List" ,
 desc: "A javaScript , HTML , CSS based App for managing and organizing your Tasks efficiently.",
 img :   "/todo-0.png",
 tags : ["javaScript","Node", "HTML","CSS"],
 link: "https://todo-app-seven-psi-95.vercel.app/",
    },



    {
        id: 1,
        title : "Countdown Timer" ,
        desc: "A javaScript , HTML , CSS based App Powered website to track Time with an interactive countdown feature. ",
        img :   "/countdown-01.png",
        tags : ["javaScript","Node", "HTML","CSS"],
        link: "https://farooquestopwatch.vercel.app/",
           },

  {
    id: 2,
    title : "Calculator" ,
    desc: "Responsive calculator app using JavaScript, Node.js, HTML, and CSS for basic arithmetic operations." ,
    img :   "/calculator-02.png",
    tags : ["javaScript","Node", "HTML","CSS"],
    link: "https://farooquecalculater.vercel.app/",
       },


       {
        id: 3,
        title : "Static Interactive Resume" ,
        desc: "A TypeScript-based  Interactive resume built with HTML , CSS allowing users to showcase their skills dynamically. ",
        img :   "/rebuildResume-03.png",
        tags : ["TypeScript","Node", "HTML","CSS"],
        link: "https://rebuild-resume.vercel.app/",
           },


           {
            id: 4,
            title : "Clothing Website" ,
            desc: "An online shopping clothing website built using JavaScript, HTML, and CSS, featuring stylish collections for men, women, and children. The site offers a user-friendly, responsive design, showcasing smooth navigation and attractive layouts, reflecting advanced web development skills.",
            img :   "/webProject-04.png",
            tags : ["TypeScript","Node", "HTML","CSS","Bootstrap"],
            link: "https://malikweb.vercel.app/",
               },


    ]
export const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card
            
            key={el.id}
            title={el.title}
            desc={el.desc}
            img= {el.img}
            tags= {el.tags}
            link ={el.link} 
            />))}
           
        </div>
    </div>


  )
}
