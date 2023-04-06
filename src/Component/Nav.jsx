import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
// import resume from "../assets/Akash-Singh-Resume.pdf";
// import resume from "";
// import Home from './Home';
import { Link } from "react-scroll";

const Nav = () => {
  const [navbar, setbar] = useState(false);
  // const resume = () => {};
  // console.log(resume);
  // console.log(navbar);

  // const handleresumebutton = () => {
  //   window.open(
  //     "https://drive.google.com/file/d/1IjOTS4_dS3rXx9T80Ppr4-NG_Vh2lmRV/view?usp=sharing",
  //     "_blank"
  //   );
  // };

  function resume() {
    window.open(
      "https://drive.google.com/file/d/10F8sgx3iLRN0Xf4mZwMU1hGUQnM6zoto/view?usp=sharing",
      "_blank"
    );
  }

  const Linkk = [
    { id: 1, link: "home", cl: "nav-link home" },
    { id: 2, link: "about", cl: "nav-link about" },
    { id: 4, link: "Skills", cl: "nav-link skills" },
    { id: 3, link: "Project", cl: "nav-link projects" },
    { id: 5, link: "Contact", cl: "nav-link contact" },
  ];

  return (
    <div id="nav-menu">
      <div className="flex justify-between items-center w-full h-20 px-4  text-white bg-black fixed">
        <div>
          {/* <p className='text-3xl text-white hover:cursor-pointer font-signature mx-2 mt-4'>Akash </p> */}
        </div>

        <div className=" hidden md:flex  ">
          {Linkk.map(({ id, link, cl }) => {
            return (
              <p
                key={id}
                // class={cl}
                style={{
                  paddingLeft: "0.75rem",
                  textTransform: "capitalize",
                  cursor: "pointer",
                  color: "grey",
                  paddingRight: "0.75rem",
                  transitionDuration: "100ms",
                  fontWeight: 500,
                  fontSize: "1.25rem",
                  lineHeight: "1.75rem",
                }}
                // className=" px-3 capitalize  duration-100 cursor-pointer text-gray-500 font-medium   text-xl"
              >
                <Link
                  // onClick={() => setbar(!navbar)}
                  to={link}
                  class={cl}
                  target="_blank"
                  rel="noreferrer"
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </p>
            );
          })}

          {/* <a
            // className=" duration-100 cursor-pointer text-gray-500 font-medium text-xl"
            
            href="Akash-Singh-Resume.pdf"
            download={true}
            target="_blank"
            rel="noreferrer"
            onClick={handleresumebutton}
            class="nav-link resume"
            id="resume-button-1"
          >
            Resume
          </a> */}
          <button id="resume-button-1" onClick={resume}>
            <a
              style={{
                transitionduration: "100ms",
                cursor: "pointer",
                color: "gray",
                fontWeight: "500",
                fontsize: "1.5rem",
                lineheight: "1.7rem",
                fontSize: "20px",
              }}
              id="resume-link-1"
              href="Akash-Singh-Resume.pdf"
              download="Akash-Singh-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              class="nav-link resume"
            >
              Resume
            </a>
          </button>
        </div>

        <div
          onClick={() => setbar(!navbar)}
          className="pr-4 cursor-pointer  z-10 text-gray-400 md:hidden mt-3"
        >
          {navbar ? (
            <FaTimes size={"30"}></FaTimes>
          ) : (
            <FaBars size={"30"}></FaBars>
          )}
        </div>

        {navbar && (
          <ul className="flex  flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-gray-400  bg-gradient-to-b from-black to-gray-800 ">
            {Linkk.map(({ id, link, cl }) => {
              return (
                <p
                  class={id}
                  // style={{paddingLeft:"1.5rem",paddingRight:"1.5rem",cursor:"pointer",paddingTop:"1.5rem",paddingBottom:"1.5rem",textTransform:"capitalize"}}
                  className="px-6 cursor-pointer py-6 text-gray-400 text-4xl capitalize hover:scale-95"
                >
                  <Link
                    onClick={() => setbar(!navbar)}
                    to={link}
                    smooth
                    duration={500}
                    id={cl}
                  >
                    {link}
                  </Link>
                </p>
              );
            })}
            {/* <a
              // className="px-6 cursor-pointer py-6 text-gray-400 text-4xl capitalize hover:scale-95"
              href="Akash-Singh-Resume.pdf"
              
              download={true}
              target="_blank"
              rel="noreferrer"
              onClick={handleresumebutton}
              class="nav-link resume"
              id="resume-button-1"
            >
              Resume
            </a> */}
            <button id="resume-button-1" onClick={resume}>
              <a
                style={{
                  transitionduration: "100ms",
                  cursor: "pointer",
                  color: "gray",
                  fontWeight: "500",
                  fontsize: "1.5rem",
                  lineheight: "1.7rem",
                  fontSize: "36px",
                }}
                id="resume-link-1"
                href="Akash-Singh-Resume.pdf"
                download="Akash-Singh-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                class="nav-link resume"
              >
                Resume
              </a>
            </button>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nav;
