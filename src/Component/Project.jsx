import React from "react";
import algorithm_visulizer from "../assets/portfolio/algorithm_visulizer.jpg";
import monday from "../assets/portfolio/monday.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
// import Corosal from "./corosal";
// import { title } from "process";
// import { Link } from "react-router-dom";
// import { Link, Navigate } from "react-router-dom";
// import { Link as ReachLink } from "@reach/router"

const Project = () => {
  const projects = [
    {
      id: 1,
      src: algorithm_visulizer,
      title: "algorithum",
      github: "https://github.com/singh2198/Algorithm_visualizer",
      nitlify: "https://heroic-pudding-0c0a14.netlify.app/",
      discreption: "It Visulize the all sorting algo on display .",
      techstack: "Reactjs js HTML CSS",
    },
    {
      id: 2,
      src: monday,
      title: "monday",
      github:
        "https://github.com/singh2198/prompt-toothbrush-9795/tree/day-2/monday",
      nitlify: "https://phenomenal-druid-f85e5a.netlify.app/",
      discreption: "It Visulize the all sorting algo on display .",
      techstack: "Reactjs,js,HTML,CSS",
    },
    {
      id: 3,
      src: navbar,
      title: "algorithum",
      github: "",
      nitlify: "https://heroic-pudding-0c0a14.netlify.app/",
      discreption: "It Visulize the all sorting algo on display .",
      techstack: "Reactjs | js | HTML |CSS",
    },
    {
      id: 4,
      src: navbar,
      title: "algorithum",
      github: "",
      nitlify: "https://heroic-pudding-0c0a14.netlify.app/",
      discreption: "It Visulize the all sorting algo on display .",
      techstack: "Reactjs | js | HTML |CSS",
    },
    // {
    //   id: 5,
    //   src: navbar,
    //   title: "algorithum",
    //   github: "",
    //   nitlify: "https://heroic-pudding-0c0a14.netlify.app/",
    //   discreption: "It Visulize the all sorting algo on display .",
    //   techstack: "Reactjs | js | HTML |CSS",
    // },
    // {
    //   id: 6,
    //   src: navbar,
    //   title: "algorithum",
    //   github: "",
    //   nitlify: "https://heroic-pudding-0c0a14.netlify.app/",
    //   discreption: "It Visulize the all sorting algo on display .",
    //   techstack: "Reactjs | js | HTML |CSS",
    // },
  ];

  return (
    <div
      name="Project"
      className="bg-gradient-to-b from-gray-800 to-gray-900 w-full md:h-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold    ">Project</p>
          {/* <p className='py-6'>Check out some of my work right here</p> */}
        </div>
      </div>

      {/* <Corosal projects={projects} /> */}

      {/* corosel..... */}

      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0  md:mx-20">
        {projects.map(
          ({ id, src, github, nitlify, discreption, techstack, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 "
              />

              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={github} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={nitlify} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
              </div>

              <div className="grid justify-items-center">
                <h1>#{title}</h1>
                <div className=" m-4">
                  <p>{discreption}</p>
                </div>

                <div className="m-4">
                  <p>{techstack}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0  md:mx-20 '>
                {projects.map(({id,src,github,nitlify})=>(

                    <>
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                         <img src={src} 
                            alt=""
                          className='rounded-md duration-200 hover:scale-105'/> */}

      {/* button */}

      {/* <div className='flex items-center justify-center'>
                            <button
                            
                            className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            <a href={github} target="_blank" rel='noreferrer'>Code</a>
                            </button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            <a href={nitlify} target="_blank" rel='noreferrer'>Demo</a>
                            </button>
                        </div>

                    </div> */}

      {/* content...of project */}
      {/* <div style={{border:"1px solid red",width:"auto"}}>
                        <div>
                            <h1>Project</h1>
                            <p>Project Description....</p>
                        </div>

                        <div>
                            <ol>
                                <h3>Tech Stack</h3>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </ol>
                        </div>
                    </div>
                    </> */}

      {/* ))}  

            </div>  */}
    </div>
  );
};

export default Project;
