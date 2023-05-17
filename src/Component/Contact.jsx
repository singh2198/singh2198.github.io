import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
// import { BsTwitter } from "react-icons/bs";
// import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  const links = [
    {
      id: 1,
      idd:"contact-linkedin",
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/akash-singh-7ba9a0190/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      idd:"contact-github",
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/singh2198",
    },
    {
      id: 3,
      idd:"contact-email",
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    // {
    //   id: 4,
    //   child: (
    //     <>
    //       <BsTwitter size={30} />
    //     </>
    //   ),
    //   href: "",
    // },
  ];

  return (
    <div
      id="contact"
      name="Contact"
      className="sm:w-full w-[127%] h-auto bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full mt-10">
        <div className="pb-8">
          <p className="text-3xl font-rig ">Contact</p>
          {/* <p className="py-6 text-center font-bold text-xl">
            Don't we Shy Contact me :
          </p> */}
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/c34c9ce4-ccc1-479c-8ca5-82a861a445ec"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
            <h2 id="contact-phone" className="text-center  text-gray-400">Contact :8755741512</h2>
            <h2 id="contact-email" className="text-center  text-gray-400">Email: 8755akash@gamil.com</h2>
          </form>
        </div>

        <div className="">
          {/* <h3 className="text-1xl">Contact Number :8755741512</h3> */}

          <ul className="flex flex-row justify-center">
            {links.map(({ id, child, href, style, download ,idd}) => (
              <li
                
                key={id}
                className={
                  "flex  items-center w-30 h-14 px-3  hover:rounded-md duration-300 "
                }
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white hover:scale-95 hover:cursor-pointer "
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                  id={idd}
                >
                  {child}
                </a>
              </li>
            ))}
            <button className="bg-gradient-to-r from-cyan-300 to-cyan-400 w-10 h-9 rounded-md hover:cursor-pointer hover:scale-95 mt-2  ">
              <Link to="home" smooth duration={500}>
                Up
              </Link>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
