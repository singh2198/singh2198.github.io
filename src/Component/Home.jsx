import React from "react";
import akashimg from "../assets/akash-pic.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Typewriter from "typewriter-effect";

const Home = () => {
  function resume() {
    window.open(
      "https://drive.google.com/file/d/1NYxO9S2DSZ9t-qm5m8DL7rd63Ctekk02/view?usp=sharing",
      "_blank"
    );
  }

  return (
    <div
      id="home"
      name="home"
      className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto mt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Hi, I'm Akash
                </span>
                <br />
                <Typewriter
                  options={{
                    strings: ["Full Stack Developer", "MERN Developer"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "text-blue-400",
                    cursorClassName: "text-purple-500",
                  }}
                />
              </h1>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Frontend Developer with two years of experience building enterprise applications in a product-based startup. 
                Proficient in modern frontend frameworks, including Angular and ReactJS.
                Experienced in implementing Keycloak authentication and working with FTL (Freemarker Template Language). 
                Skilled in collaborating with cross-functional teams to develop scalable, user-centric solutions.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button
                onClick={resume}
                className="group relative inline-flex items-center px-8 py-3 overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="text-white font-semibold text-lg">Download Resume</span>
                <span className="group-hover:rotate-90 duration-300 ml-2">
                  <MdOutlineKeyboardArrowRight size={24} />
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src={akashimg}
                alt="Akash Singh"
                className="relative rounded-full w-64 h-64 object-cover border-4 border-gray-700 shadow-2xl hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
