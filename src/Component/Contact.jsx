import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsTwitter } from "react-icons/bs";
// import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  const links = [
    {
      id: 1,
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
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/singh2198",
    },
    {
      id: 3,
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
      name="Contact"
      className="w-full h-auto bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full mt-10">
        <div className="pb-8">
          <p className="text-4xl font-bold ">Contact</p>
          <p className="py-6 text-center font-bold text-xl">
            Don't we Shy Contact me :
          </p>
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
          </form>
        </div>

        <div className="">
          {/* <h3 className="text-1xl">Contact Number :8755741512</h3> */}

          <ul className="flex flex-row justify-center">
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={
                  "flex  items-center w-30 h-14 px-3  hover:rounded-md duration-300 "
                }
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
