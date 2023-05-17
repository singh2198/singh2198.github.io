import React from "react";

const About = () => {
  return (
    <div className="sm:w-full w-[127%] bg-gradient-to-b from-gray-700 to-gray-800 text-white">
      <div id="about" className="about section" name="about">
        <div className=" flex flex-col justify-center mx-auto w-full h-full p-4 max-w-screen-lg">
          <div style={{ paddingBottom: "1px" }}>
            <h3
              // style={{
              //   fontSize: "2.25rem",
              //   lineHeight: "7.5rem",
              //   fontWeight: 700,
              //   color: "white",
              // }}
              className="text-3xl font-rig"
            >
              About{" "}
            </h3>
          </div>

          <div id="user-detail-intro">
            <p className="  text-gray-400  sm:py-3 w-full font- text-md">
              Aspiring Full Stack MERN Developer, enthusiastic to learn and
              explore new technologies, from last one year doing Reactjs
              ,Nextjs,Typescript in Frontend ,Nodejs ,Express,Mongodb in
              Backend.With 4 Major Projects ,2 solo and 2 Colaboration.
              Currently looking for a job opportunity in a technology-driven
              organization.
            </p>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
