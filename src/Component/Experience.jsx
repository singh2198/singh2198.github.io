import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import nodejs from "../assets/node.png";
// import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experiance = () => {
  const projects = [
    {
      id: 1,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      climg:"skills-card-img",
      clname:"skills-card-name"
    },
    {
      id: 2,
      src: html,
      title: "html",
      style: "shadow-orange-500",
      climg:"skills-card-img",
      clname:"skills-card-name"
    },
    {
      id: 3,
      src: javascript,
      title: "javascript",
      style: "shadow-yellow-500",
      climg:"skills-card-img",
      clname:"skills-card-name"
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-500",
      climg:"skills-card-img",
      clname:"skills-card-name"
    },
    {
      id: 5,
      src: github,
      title: "Github",
      style: "shadow-red-500",
      climg:"skills-card-img",
      clname:"skills-card-name"
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-500",
      climg:"skills-card-img",
      clname:"skills-card-name"
    },
    {
      id: 7,
      src: nextjs,
      title: "Nextjs",
      style: "shadow-orange-500",
      climg:"skills-card-img",
      clname:"skills-card-name"
    },
    {
      id: 8,
      src: nodejs,
      title: "nodejs",
      style: "shadow-green-500",
      climg:"skills-card-img",
      clname:"skills-card-name"
    },
  ];

  return (
    <div
      id="skills"
      name="Skills"
      className="bg-gradient-to-b from-black to-gray-800 sm:w-full w-[127%] md:h-auto text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-10">
          <p className="text-4xl font-bold ">Skills</p>
          {/* <p className='py-6'></p> */}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-20 px-15 mx-10 grid-cols-2 sm:px-0  md:mx-20 mt-5 ">
        {projects.map(({ id, src, style, title,climg,clname }) => (

          <div class="skills-card">

          <div
            key={id}
            className={`shadow-lg  rounded-lg ${style} hover:cursor-pointer hover:scale-105 w-sm `}
          >

            <img  class={climg}  src={src} alt="dummy_img"   style={{width:"80px",marginLeft:"auto",marginRight:"auto"}} />
            <p class={clname}   style={{marginTop:"16px",textAlign:"center"}}>{title}</p>

          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiance;
