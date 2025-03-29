import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
// import { BsTwitter } from "react-icons/bs";
// import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  const links = [
    {
      id: 1,
      idd: "contact-linkedin",
      child: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/akash-singh-7ba9a0190/",
      label: "LinkedIn"
    },
    {
      id: 2,
      idd: "contact-github",
      child: <FaGithub size={24} />,
      href: "https://github.com/singh2198",
      label: "GitHub"
    },
    {
      id: 3,
      idd: "contact-email",
      child: <HiOutlineMail size={24} />,
      href: "mailto:8755akash@gmail.com",
      label: "Email"
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
      className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8 sm:py-12 px-2 sm:px-4 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Get In Touch
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-300">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300">
            <form
              action="https://getform.io/f/c34c9ce4-ccc1-479c-8ca5-82a861a445ec"
              method="POST"
              className="space-y-3 sm:space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2.5 sm:p-3 bg-gray-700 rounded-lg border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 text-sm sm:text-base"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-2.5 sm:p-3 bg-gray-700 rounded-lg border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 text-sm sm:text-base"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-2.5 sm:p-3 bg-gray-700 rounded-lg border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 text-sm sm:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-3 sm:mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-gray-300">
                    <a 
                      href="mailto:8755akash@gmail.com?subject=Portfolio Contact" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                    >
                      <HiOutlineMail size={18} className="text-blue-400" />
                      <span>8755akash@gmail.com</span>
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+91 8755741512</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-3 sm:mb-4">
                  Connect With Me
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  {links.map(({ id, child, href, idd, label }) => (
                    <a
                      key={id}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      id={idd}
                      className="group flex items-center space-x-2 bg-gray-700 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-gray-600 transition-all duration-300"
                    >
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {child}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <Link
            to="home"
            smooth
            duration={500}
            className="group flex items-center space-x-2 bg-gray-700 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-gray-600 transition-all duration-300"
          >
            <MdOutlineKeyboardArrowUp size={18} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
            <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
              Back to Top
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
