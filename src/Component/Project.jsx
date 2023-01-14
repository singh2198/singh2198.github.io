import React from "react";
import algorithm_visulizer from "../assets/portfolio/algorithm_visulizer.jpg";
import monday from "../assets/portfolio/monday.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
import zee from "../assets/portfolio/zeemovieapp.png";
import youtube from "../assets/portfolio/ytapp.png";
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
      title: " Algorithum Visulizer",
      github: "https://github.com/singh2198/Algorithm_visualizer",
      nitlify: "https://heroic-pudding-0c0a14.netlify.app/",
      discreption:
        "It Visulize the Four sorting algorithm on display ,How it work in backgrond .",
      techstack: "Reactjs ,js ,HTML ,CSS ,Four Algorithum",
    },
    {
      id: 2,
      src: monday,
      title: "Monday  ",
      github:
        "https://github.com/singh2198/prompt-toothbrush-9795/tree/day-2/monday",
      nitlify: "https://phenomenal-druid-f85e5a.netlify.app/",
      discreption:
        "Monday.com is a cloud-based platform that allows users to create their own applications and project management software.",
      techstack: "Reactjs ,js ,HTML ,CSS ,Localhost",
    },
    {
      id: 3,
      src: zee,
      title: "Zee App ",
      github:
        "https://github.com/singh2198/-screeching-idea-7572/tree/main/zee5",
      nitlify: "https://phenomenal-swan-bbd334.netlify.app/",
      discreption:
        "Online Movie App ,Clone of Zee movie app every time you refresh the page image is change .",
      techstack: "Reactjs | js | HTML |CSS | external auth for authentication",
    },
    {
      id: 4,
      src: youtube,
      title: "Youtbe App",
      github: "https://github.com/singh2198/YT-app/tree/master/YT%20app",
      nitlify: "https://yt-app-sigma.vercel.app/",
      discreption:
        "Simple Youtube App with Search and video Playing functionality",
      techstack: " js | HTML |CSS",
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

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-15 mx-7 sm:px-0 w-[80%] md:mx-20">
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
                    <button className="  bg-gradient-to-r from-cyan-500 to-blue-500 w-20 rounded-md ">
                      <p>Code</p>
                    </button>
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={nitlify} target="_blank" rel="noreferrer">
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 w-20 rounded-md ">
                      <p>Demo</p>
                    </button>
                  </a>
                </button>
              </div>

              <div className="">
                <div className="flex justify-center">
                  <h1 className="text-xl text-center bg-gradient-to-r from-cyan-500 to-blue-500  w-[66%]  font-light   rounded-md">
                    {title}
                  </h1>
                </div>
                <div className=" m-4">
                  <p className="text-gray-500  text-md hover:text-xl hover:cursor-pointer hover:text-cyan-400 hover:duration-700 hover:scale-95">
                    {discreption}
                  </p>
                </div>

                <div className="m-4 text-gray-500 text-sm text-center hover:cursor-pointer hover:duration-1000 hover:text-xl hover:text-cyan-400 font-thin hover:scale-95">
                  <p>Tech Stack:-{techstack}</p>
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
