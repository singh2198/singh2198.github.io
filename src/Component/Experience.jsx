import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import nodejs from "../assets/node.png";
// import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import mongodb from "../assets/Mongodb.png"
import TS from "../assets/TS.png"

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
      style: "shadow-red-900",
      climg:"skills-card-img",
      clname:"skills-card-name"
    },
    {
      id: 6,
      src: TS,
      title: "TypeScript",
      style: "shadow-blue-500",
      climg:"skills-card-img",
      clname:"skills-card-name"
    },
    {
      id: 7,
      src: nextjs,
      title: "Nextjs",
      style: "shadow-orange-100",
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
    {
      id: 9,
      src: mongodb,
      title: "MongoDb",
      style: "shadow-green-500",
      climg:"skills-card-img",
      clname:"skills-card-name"
    },
    {
      id: 10,
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEX////q6uqgoaEZGhtzc3SSk5Ourq5hYmLHx8f09PVOTk+7u7vf39+DhITT09M3ODgiPZ4kAAAAxElEQVR4Ac2OMQgBARSGv6sDQfbSKaWsHsgV6vZS9lK3F9lL2ctsvcmm7GWfyF5XNhvTbef+yT7x1ft7/f3/6/HHOC3r1gnmQLhGamYjDj5U7ALk7UbD4tp4T2EA4EnDFeGMxQygdQWqEwp+OQsBkXrlAU76nAA4Y2mlB2drotVMDMHN5mtMwbMYVeQjNsEKkaJcm3wv10fcl4Dr8zgSnQB2L/RYKdrKA3LW0etun6yFCMwsyTK6qzrFu733xbQOeAk/4gMf6S1GJRc9sQAAAABJRU5ErkJggg==",
      title: "Express js",
      style: "shadow-red-100",
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
          <p className="text-3xl font-rig ">Skills</p>
          {/* <p className='py-6'></p> */}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-20 px-15 p-21px mx-10 grid-cols-2 sm:px-0  md:mx-20 mt-5 ">
        {projects.map(({ id, src, style, title,climg,clname }) => (

          <div class="skills-card ">
          <div
            key={id}
            className={`shadow-lg  rounded-lg ${style} hover:cursor-pointer hover:scale-105 md:w-32 `}
          >

            <img  class={climg}  src={src} alt="dummy_img"   style={{width:"80px",marginLeft:"auto",marginRight:"auto"}} />
            <p class={clname}   style={{marginTop:"16px",textAlign:"center",}}>{title}</p>

          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiance;
