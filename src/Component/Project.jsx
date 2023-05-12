import React from "react";
import algorithm_visulizer from "../assets/portfolio/algorithm_visulizer.jpg";
import monday from "../assets/portfolio/monday.jpg";
import doorsteps from "../assets/portfolio/doorsteps.png"
import zee from "../assets/portfolio/zeemovieapp.png";
import youtube from "../assets/portfolio/ytapp.png";
import homedocar from "../assets/home-docar.png";
import { FaGithub } from "react-icons/fa";
import {TbFileCode}  from "react-icons/tb"

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
      techstack: "Reactjs, js, HTML ,CSS ,Four Algorithum",
      clt: "project-title",
      cld: "project-description",
      cltech: "project-tech-stack",
      clgit: "project-github-link",
      cldep: "project-deployed-link",
      clp: "project-card",
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
      clt: "project-title",
      cld: "project-description",
      cltech: "project-tech-stack",
      clgit: "project-github-link",
      cldep: "project-deployed-link",
      clp: "project-card",
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
      techstack: "Reactjs ,js ,HTML ,CSS ,external auth for authentication",
      clt: "project-title",
      cld: "project-description",
      cltech: "project-tech-stack",
      clgit: "project-github-link",
      cldep: "project-deployed-link",
      clp: "project-card",
    },
    {
      id: 4,
      src: youtube,
      title: "Youtbe App",
      github: "https://github.com/singh2198/YT-app/tree/master/YT%20app",
      nitlify: "https://ubiquitous-swan-7471bb.netlify.app/",
      discreption:
        "Simple Youtube App with Search and video Playing functionality",
      techstack: " javascript , HTML ,CSS",
      clt: "project-title",
      cld: "project-description",
      cltech: "project-tech-stack",
      clgit: "project-github-link",
      cldep: "project-deployed-link",
      clp: "project-card",
    },
    {
      id: 5,
      src: homedocar,
      title: "E-commerce ",
      github: "https://github.com/snehilagrahari/Home-Decor",
      nitlify: "https://home-decor-omega.vercel.app/",
      discreption:
        "Home Decor is an E-commerce website providing products ranging from daily groceries to flashy accessories.",
      techstack: "Reactjs , js , HTML , Chakra UI , Redux",
      clt: "project-title",
      cld: "project-description",
      cltech: "project-tech-stack",
      clgit: "project-github-link",
      cldep: "project-deployed-link",
      clp: "project-card",
    },
    {
      id: 6,
      src: doorsteps,
      title: "Nearbuy ",
      github: "https://github.com/KaustubhN12/dizzy-stitch-9009",
      nitlify: "https://doorstep-iota.vercel.app/",
      discreption:
        "Nearbuy Clone is MERN Stack web application that allows you to buy voucher and coupons. It has a variety of categories.Based upson Location",
      techstack: "Reactjs , js , HTML , Chakra UI , Redux , MongoDB , Express , Nodejs",
      clt: "project-title",
      cld: "project-description",
      cltech: "project-tech-stack",
      clgit: "project-github-link",
      cldep: "project-deployed-link",
      clp: "project-card",
    }
    
  ];

  return (
    
    <div
      id="projects"
      name="Project"
      className="bg-gradient-to-b from-gray-800 to-gray-900 sm:w-full w-[127%] md:h-full text-white "
    >
      <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl lime-height:3 font-bold" >Project</p>
          {/* <p className='py-6'>Check out some of my work right here</p> */}
        </div>
      </div>

      

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-15  sm:px-0 w-[90%]  m-auto">
        
        {projects.map(
          ({
            id,
            src,
            github,
            nitlify,
            discreption,
            techstack,
            title,
            cld,
            cldep,
            clgit,
            clp,
            clt,
            cltech,
          }) => (


            <div
              class={clp}
              key={id}
              style={{border:'1px solid grey',borderRadius:'10px' ,padding:'10px'}}
              // className="shadow-md shadow-gray-600 rounded-lg w-[98%] sm:w-[100%] "
            >
              
              <img
                src={src}
                alt=""
                // width={'100%'}
                className="rounded-md duration-200 hover:scale-105 "
              />

              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a
                    href={github}
                    
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div style={{display:'flex', justifyContent:'center'}}>
                      {/* <p class={clgit}>Code</p> */}
                      <TbFileCode size={30} class={clgit}  ></TbFileCode>
                    </div>
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a
                    href={nitlify}
                    target="_blank"
                    rel="noreferrer"
                    
                  >
                    <div className="  ">
                      {/* <p class={cldep}>Demo</p> */}
                      <FaGithub class={cldep} size={30}></FaGithub>
                    </div>
                  </a>
                </button>
              </div>

              <div className="">
                <div className="flex justify-center">
                  <h1
                    
                    className="text-xl text-center bg-gradient-to-r from-cyan-500 to-blue-500  w-[66%]  font-light   rounded-md"
                  >
                    <h3 class={clt}>{title}</h3>  
                  </h1>
                </div>
                <div className=" m-4">
                  <p
                    // class={cld}
                    className="text-gray-500  text-md  hover:cursor-pointer hover:text-cyan-400 hover:duration-700 hover:scale-95"
                  >
                    <p class={cld}>{discreption}</p>
                  </p>
                </div>

                <div className="m-4 text-gray-500 text-sm text-start hover:cursor-pointer hover:duration-1000  hover:text-cyan-400 font-thin hover:scale-95">
                  <p class={cltech}>Tech Stack:-{techstack}</p>
                </div>
              </div>
            </div>


          
          )
        )}
      </div>
    </div>
  );
};

export default Project;
