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
import ftl from "../assets/ftl.png"
import microfrontend from "../assets/microfrontend.png"
import scss from "../assets/scss.png"


const Experience = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          id: 1,
          src: html,
          title: "HTML5",
          color: "from-orange-400 to-orange-600",
          hoverColor: "hover:from-orange-500 hover:to-orange-700"
        },
        {
          id: 2,
          src: css,
          title: "CSS3",
          color: "from-blue-400 to-blue-600",
          hoverColor: "hover:from-blue-500 hover:to-blue-700"
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          color: "from-yellow-400 to-yellow-600",
          hoverColor: "hover:from-yellow-500 hover:to-yellow-700"
        },
        {
          id: 4,
          src: reactImage,
          title: "React.js",
          color: "from-blue-400 to-blue-600",
          hoverColor: "hover:from-blue-500 hover:to-blue-700"
        },
        {
          id: 5,
          src: "https://angular.io/assets/images/logos/angular/angular.svg",
          title: "Angular",
          color: "from-red-400 to-red-600",
          hoverColor: "hover:from-red-500 hover:to-red-700"
        },
        {
          id: 6,
          src: "https://material-ui.com/static/logo.png",
          title: "Material UI",
          color: "from-blue-400 to-blue-600",
          hoverColor: "hover:from-blue-500 hover:to-blue-700"
        },
        {
          id: 7,
          src: scss,
          title: "SCSS",
          color: "from-pink-400 to-pink-600",
          hoverColor: "hover:from-pink-500 hover:to-pink-700"
        }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        {
          id: 8,
          src: nodejs,
          title: "Node.js",
          color: "from-green-400 to-green-600",
          hoverColor: "hover:from-green-500 hover:to-green-700"
        },
        {
          id: 9,
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEX////q6uqgoaEZGhtzc3SSk5Ourq5hYmLHx8f09PVOTk+7u7vf39+DhITT09M3ODgiPZ4kAAAAxElEQVR4Ac2OMQgBARSGv6sDQfbSKaWsHsgV6vZS9lK3F9lL2ctsvcmm7GWfyF5XNhvTbef+yT7x1ft7/f3/6/HHOC3r1gnmQLhGamYjDj5U7ALk7UbD4tp4T2EA4EnDFeGMxQygdQWqEwp+OQsBkXrlAU76nAA4Y2mlB2drotVMDMHN5mtMwbMYVeQjNsEKkaJcm3wv10fcl4Dr8zgSnQB2L/RYKdrKA3LW0etun6yFCMwsyTK6qzrFu733xbQOeAk/4gMf6S1GJRc9sQAAAABJRU5ErkJggg==",
          title: "Express.js",
          color: "from-gray-700 to-gray-900",
          hoverColor: "hover:from-gray-800 hover:to-gray-900"
        },
        {
          id: 10,
          src: ftl,
          title: "FTL",
          color: "from-purple-400 to-purple-600",
          hoverColor: "hover:from-purple-500 hover:to-purple-700"
        }
      ]
    },
    {
      title: "Databases",
      skills: [
        {
          id: 11,
          src: mongodb,
          title: "MongoDB",
          color: "from-green-400 to-green-600",
          hoverColor: "hover:from-green-500 hover:to-green-700"
        },
        {
          id: 12,
          src: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
          title: "MySQL",
          color: "from-blue-400 to-blue-600",
          hoverColor: "hover:from-blue-500 hover:to-blue-700"
        }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        {
          id: 13,
          src: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
          title: "Docker",
          color: "from-blue-400 to-blue-600",
          hoverColor: "hover:from-blue-500 hover:to-blue-700"
        },
        {
          id: 14,
          src: github,
          title: "GitHub",
          color: "from-gray-700 to-gray-900",
          hoverColor: "hover:from-gray-800 hover:to-gray-900"
        }
      ]
    },
    {
      title: "Others",
      skills: [
        {
          id: 15,
          src: TS,
          title: "TypeScript",
          color: "from-blue-400 to-blue-600",
          hoverColor: "hover:from-blue-500 hover:to-blue-700"
        },
        // {
        //   id: 16,
        //   src: nextjs,
        //   title: "Next.js",
        //   color: "from-gray-700 to-gray-900",
        //   hoverColor: "hover:from-gray-800 hover:to-gray-900"
        // },
        {
          id: 17,
          src: microfrontend,
          title: "Micro Frontend",
          color: "from-indigo-400 to-indigo-600",
          hoverColor: "hover:from-indigo-500 hover:to-indigo-700"
        }
      ]
    }
  ];

  return (
    <div id="skills" name="Skills" className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8 sm:py-12 px-2 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-3 sm:p-4 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-3 sm:mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map(({ id, src, title, color, hoverColor }) => (
                  <div
                    key={id}
                    className="group flex items-center space-x-1.5 sm:space-x-2 bg-gray-700 rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 hover:bg-gray-600 transition-all duration-300"
                  >
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br ${color} ${hoverColor} p-0.5 sm:p-1 transition-all duration-300`}>
                      <div className="w-full h-full bg-gray-700 rounded-full flex items-center justify-center">
                        <img
                          src={src}
                          alt={title}
                          className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-[10px] sm:text-xs font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                      {title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
