import React from "react";
import githubstats from"../assets/githubstats.png"
import githubstreakstats from "../assets/githubstreakstats.png"

import github1 from "../assets/github1.png";
// import github2 from "../assets/github2.png";

function Github() {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-800 to-black sm:w-full w-[127%] md:h-full text-white grid justify-items-center">
        {/* <h2 className="text-4xl inline text-start">Github </h2> */}
        <img
          class="react-activity-calendar"
          src={github1}
          alt="dummy_img"
        
          className="w-[100%] sm:w-[80%] p-10"
        />
        <img
          src={"https://github-readme-stats.vercel.app/api?username=singh2198"}
          alt="dummy_img_github"
          id="github-stats-card"
          // width={"40%"}
          className="w-[60%] sm:w-[50%] p-10"
          // style={{ padding: "3rem" }}
        />
        <img
          src={"https://github-readme-streak-stats.herokuapp.com/?user=singh2198"}
          alt="dummy_img_github"
          
          id="github-streak-stats"
          // width={"40%"}
          className="w-[60%] sm:w-[50%] p-10"
          // style={{ padding: "3rem" }}
        />
        <img
          src={"https://github-readme-stats.vercel.app/api/top-langs/?username=singh2198"}
          alt="dummy_img_github"
          id="github-top-langs"
          // width={"40%"}
          className="w-[50%] sm:w-[40%] p-10"
          style={{ padding: "3rem" }}
        />
      </div>
    </>
  );
}

export default Github;
