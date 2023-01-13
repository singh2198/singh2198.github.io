import React from "react";
import github1 from "../assets/github1.png";
import github2 from "../assets/github2.png";

function Github() {
  return (
    <>
      <div className="bg-gradient-to-b from-black to-gray-800 w-full md:h-full text-white grid justify-items-center">
        {/* <h2 className="text-4xl inline text-start">Github </h2> */}
        <img
          src={github1}
          alt="dummy_img"
          className="w-[100%] sm:w-[80%] p-10"
        />
        <img
          src={github2}
          alt="dummy_img_github"
          // width={"40%"}
          className="w-[60%] sm:w-[70%] p-10"
          style={{ padding: "3rem" }}
        />
      </div>
    </>
  );
}

export default Github;
