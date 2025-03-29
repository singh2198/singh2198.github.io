import React from "react";
import algorithm_visulizer from "../assets/portfolio/algorithm_visulizer.jpg";
import monday from "../assets/portfolio/monday.jpg";
import doorsteps from "../assets/portfolio/doorsteps.png"
import zee from "../assets/portfolio/zeemovieapp.png";
import youtube from "../assets/portfolio/ytapp.png";
import homedocar from "../assets/home-docar.png";
import typing from "../assets/portfolio/typing.png"
import { FaGithub } from "react-icons/fa";
import {TbFileCode}  from "react-icons/tb"
import {RxLink2} from "react-icons/rx"

const Project = () => {
  const projects = [
    {
      id: 1,
      src: doorsteps,
      title: "Nearbuy",
      github: "https://github.com/KaustubhN12/dizzy-stitch-9009",
      nitlify: "https://doorstep-iota.vercel.app/",
      discreption: "Nearbuy Clone is MERN Stack web application that allows you to buy voucher and coupons. It has a variety of categories.Based upson Location",
      techstack: "Reactjs, js, HTML, Chakra UI, Redux, MongoDB, Express, Nodejs",
    },
    {
      id: 2,
      src: homedocar,
      title: "E-commerce",
      github: "https://github.com/snehilagrahari/Home-Decor",
      nitlify: "https://home-decor-omega.vercel.app/",
      discreption: "Home Decor is an E-commerce website providing products ranging from daily groceries to flashy accessories.",
      techstack: "Reactjs, js, HTML, Chakra UI, Redux",
    },
    {
      id: 3,
      src: algorithm_visulizer,
      title: "Algorithm Visualizer",
      github: "https://github.com/singh2198/Algorithm_visualizer",
      nitlify: "https://heroic-pudding-0c0a14.netlify.app/",
      discreption: "It Visualize the Four sorting algorithm on display, How it work in background.",
      techstack: "Reactjs, js, HTML, CSS, Four Algorithm",
    },
    {
      id: 4,
      src: typing,
      title: "Speed Typing",
      github: "https://github.com/singh2198/typing_testing",
      nitlify: "https://chaabi-ny68.vercel.app/",
      discreption: "It Provide Typing Experiences, it check your typing speed with WPM, Average WPM and Accuracy and some additional feature is sound",
      techstack: "Reactjs, javascript, HTML, CSS",
    },
    {
      id: 5,
      src: youtube,
      title: "Youtube App",
      github: "https://github.com/singh2198/YT-app/tree/master/YT%20app",
      nitlify: "https://ubiquitous-swan-7471bb.netlify.app/",
      discreption: "Simple Youtube App with Search and video Playing functionality",
      techstack: "javascript, HTML, CSS",
    },
    {
      id: 6,
      src: zee,
      title: "Zee App",
      github: "https://github.com/singh2198/-screeching-idea-7572/tree/main/zee5",
      nitlify: "https://phenomenal-swan-bbd334.netlify.app/",
      discreption: "Online Movie App, Clone of Zee movie app every time you refresh the page image is change.",
      techstack: "Reactjs, js, HTML, CSS, external auth for authentication",
    },
  ];

  return (
    <div id="projects" name="Project" className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, src, title, github, nitlify, discreption, techstack }) => (
            <div
              key={id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-colors duration-300"
                  >
                    <FaGithub size={24} className="text-white" />
                  </a>
                  <a
                    href={nitlify}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-colors duration-300"
                  >
                    <RxLink2 size={24} className="text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-2">{title}</h3>
                <p className="text-gray-300 text-sm mb-4">{discreption}</p>
                <div className="flex flex-wrap gap-2">
                  {techstack.split(',').map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-blue-300 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
