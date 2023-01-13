import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
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
    },
    {
      id: 2,
      src: html,
      title: "html",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: javascript,
      title: "javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: github,
      title: "Github",
      style: "shadow-red-500",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-500",
    },
    {
      id: 1,
      src: nextjs,
      title: "Nextjs",
      style: "shadow-orange-500",
    },
  ];

  return (
    <div
      name="Skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-auto text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-10">
          <p className="text-4xl font-bold ">Experiance</p>
          {/* <p className='py-6'></p> */}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-20 px-15 mx-10 grid-cols-2 sm:px-0  md:mx-20 mt-5 ">
        {projects.map(({ id, src, style, title }) => (
          <div
            key={id}
            className={`shadow-lg  rounded-lg ${style} hover:cursor-pointer hover:scale-105 w-sm `}
          >
            {/* <img src={src} 
                            alt=""
                          className={`rounded-md duration-200 hover:scale-105 ${style}`}/> */}

            <img src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-4 text-center ">{title}</p>

            {/* <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                Demo
                            </button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                Code
                            </button>
                        </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiance;
