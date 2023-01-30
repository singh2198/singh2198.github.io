import React from "react";

const About = () => {
  return (
    <div
      id="about"
      class="about section"
      name="About Me"
      className="sm:w-full w-[127%] bg-gradient-to-b from-gray-700 to-gray-800 text-white"
    >
      <div className=" flex flex-col justify-center mx-auto w-full h-full p-4 max-w-screen-lg">
        <div className="pb-8">
          <h3 className="text-4xl font-bold   ">About Me</h3>
        </div>

        <p className=" mt-1 text-gray-400 py-0 sm:py-3 w-full">
          Aspiring Full Stack MERN Developer, enthusiastic to learn and explore
          new technologies Journey with Masai is awesome ,35 weeks of coding
          experiance and learn lots of things,Completed my 4 Major Projects 2
          solo and 2 Colaboration. Currently looking for a job opportunity in a
          technology-driven organization.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
