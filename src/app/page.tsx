"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";

import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh()
  }, []);

  
  return (
<<<<<<< HEAD
   <main className="bg-gradient-dark overflow-x-hidden min-h-screen">
=======
   <main className="bg-gradient-dark min-h-screen">
>>>>>>> a1a35bfcb8c6be3e677c5d49c1f139c2c871ae8a
    <Hero/>
    <Projects/>
    <Skills/>
    <About/>
    <Contact/>
   </main>
  );
}
