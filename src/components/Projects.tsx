"use client"

import React from 'react'
import Heading from './Heading'
import Card from './Card'
import '../app/styles/project.css'

const data = [
    {
        id:0,
        title:"Todo List",
        desc: "A React & Typescript based app for managing and organizing your taks efficiently",
        img: "/project-01.png",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id:1,
        title:"Countdown Timer",
        desc: "A Next.js and Typescript powered website to track time with an interactive countdown fearure",
        img: "/project-02.PNG",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
    },
    {
        id:2,
        title:"Weather Widget",
        desc: "A Next.js and Typescript based tool for fetching and displaying real-time weather data",
        img: "/project-03.png",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
    },
    {
        id:3,
        title:"Currency Converter Project",
        desc: "A Simple HTML and Typescript powered tool for converting currencies with real-time rates.",
        img: "/project-04.png",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
    {
        id:4,
        title:"Static Interactive Resume",
        desc:  "A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
        img: "/project-05.png",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
    {
        id:5,
        title:"Simple Calculator Project",
        desc:"A basic Html CSS and Typecript calculator for performing essential airthmetic opertions",
        img: "/project-06.png",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
]


const Projects = () => {
  return (
    <div id="projects" className='projects-container'>
      <Heading title='My Projects' />
      <div className='projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
