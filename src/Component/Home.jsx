import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const Home = () => {
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

  return (
    <div
      id="home"
      name="home"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <h1 className="relative text-5xl sm:text-7xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Akash Singh
            </span>
          </h1>
        </div>

        <p className="text-xl sm:text-2xl text-gray-300 font-medium">
          Hey, I'm a full stack developer.
        </p>

        <div className="flex justify-center mt-8">
          <button
            onClick={resume}
            className="group relative inline-flex items-center space-x-2 px-8 py-3 overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <MdOutlineFileDownload size={24} className="text-white" />
            <span className="text-white font-semibold text-lg">Download Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
