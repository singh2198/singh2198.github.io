import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [navbar, setbar] = useState(false);

  function resume(e) {
    if (e && e.preventDefault) e.preventDefault();
    // 1. Open view page in a new tab
    window.open(
      "https://drive.google.com/file/d/1Yxcx9QRQNj9e8BKh2-c3qCnyN3cyx3w2/view?usp=sharing",
      "_blank"
    );
    // 2. Trigger automatic download of the file
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1Yxcx9QRQNj9e8BKh2-c3qCnyN3cyx3w2/view?usp=sharing";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const navLinks = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: "About" },
    { id: 3, link: "skills", label: "Skills" },
    { id: 4, link: "projects", label: "Projects" },
    { id: 5, link: "contact", label: "Contact" },
    { id: 6, link: "resume", label: "Resume" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Akash Singh
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map(({ id, link, label }) => {
                if (link === "resume") {
                  return (
                    <button
                      key={id}
                      onClick={resume}
                      className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer bg-transparent border-none"
                    >
                      {label}
                    </button>
                  );
                }
                return (
                  <Link
                    key={id}
                    to={link}
                    smooth
                    duration={500}
                    className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer"
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setbar(!navbar)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {navbar ? (
                <FaTimes size={24} />
              ) : (
                <FaBars size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {navbar && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-gray-900 to-black">
            {navLinks.map(({ id, link, label }) => {
              if (link === "resume") {
                return (
                  <button
                    key={id}
                    onClick={(e) => {
                      resume(e);
                      setbar(false);
                    }}
                    className="w-full text-left text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 cursor-pointer bg-transparent border-none"
                  >
                    {label}
                  </button>
                );
              }
              return (
                <Link
                  key={id}
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setbar(!navbar)}
                  className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 cursor-pointer"
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
