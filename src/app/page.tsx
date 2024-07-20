"use client"
import Image from "next/image";
import Hero from './component/hero'
import Contact from "./component/contact";
import Project from "./component/project";
import About from "./component/about";
import Skill from "./component/skill";


export default function Home() {
  return (
   <div>
      <head>
      <title>Portfolio</title>
      <meta name="description" content="This is a custom description for my page." />
     </head>
    <Hero/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
   </div>
  );
}
