import React from "react";


const About = () => {
  return (
    
    <div className="sm:w-full w-[127%] bg-gradient-to-b from-gray-700 to-gray-800 text-white ">
    <div
      id="about"
      className="about section"
      name="about"
    >
      
      <div  className=" flex flex-col justify-center mx-auto w-full h-full p-4 max-w-screen-lg"  >
        <div style={{paddingBottom:"8px"}}  >
          <h3  style={{fontSize:"2.25rem",lineHeight:"2.5rem", fontWeight:700,color:"white"}}  >About </h3>
        </div>

        <div id="user-detail-intro">
        <p className=" mt-1 text-gray-400 py-0 sm:py-3 w-full" >
          Aspiring Full Stack MERN Developer, enthusiastic to learn and explore
          new technologies Journey with Masai is awesome ,35 weeks of coding
          experiance and learn Frontend ,Backend ,NodeJS .Completed my 4 Major Projects 2
          solo and 2 Colaboration. Currently looking for a job opportunity in a
          technology-driven organization.
        </p>
        </div>

        <br />
      </div>
    </div>

    </div>
  
  );
};

export default About;
