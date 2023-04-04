import React from "react";
import akashimg from "../assets/akash-pic.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Image } from "@chakra-ui/react";

const Home = () => {
  function resume() {
    window.open(
      "https://drive.google.com/file/d/1IjOTS4_dS3rXx9T80Ppr4-NG_Vh2lmRV/view?usp=sharing",
      "_blank"
    );
  }

  return (
    <div
      id="home"
      name="home"
      className="   sm:h-107px md:h-screen sm:max-w-full w-[127%] bg-gradient-to-b from-black via-black to-gray-700"
    >
      <div className="  mx-auto max-w-6xl grid grid-flow-row items-center justify-cente  h-full px-4  lg:grid-flow-col">
        <div className="flex flex-col justify-center max-h-max mt-20 md:mt-20 md:m-10 ">
          <h1 className="text-4xl sm:text-7xl font-bold text-white ">
            I'm a Full Stack Developer
          </h1>
          <p
            id="user-detail-intro"
            className="text-gray-400 py-3 sm:py-3 max-w-2xl"
          >
            I am <span id="user-detail-name">Akash Singh </span>Full Stack
            Web Developer familiar with a wide range of programming utilities
            and languages ,Frameworks ,testing. Logical and results-driven
            Programmer dedicated to building and optimizing user-focused
            websites and application with creative mind .looking for a job
            opportunity in a technology-driven organization .
          </p>
          {/* <div  id="resume-button-2">
            <a
              href="Akash-Singh-Resume.pdf"
              download={true}
              target="_blank"
              rel="noreferrer"
              onClick={handleresumebutton}
              duration={500}
              id="resume-link-2"
              
            >
              Resume
              
            </a>
          </div> */}
          /
          <button id="resume-button-2" onClick={resume}>
            <a
              id="resume-link-2"
              href="Akash-Singh-Resume.pdf"
              download="Akash-Singh-Resume"
              target="_blank"
              rel="noreferrer"
              className=" group text-white w-fit px-6 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
            >
              Resume
              <span className="group-hover:rotate-90 duration-300 h-10">
                <MdOutlineKeyboardArrowRight size={30} className="ml-1 mt-1" />
              </span>
            </a>
          </button>
        </div>

        <div className=" h-[108%,127%] sm:h-[50%] md:top-10 ">
          <img
            src={akashimg}
            alt="img"
            class="home-img"
            style={{
              borderRadius: "9999px",
              height: "14rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          {/* className=".home-img rounded-full mx-auto w-lg h-48 md:h-[100%]  hover:cursor-pointer" */}
        </div>
      </div>
    </div>
  );
};

export default Home;
