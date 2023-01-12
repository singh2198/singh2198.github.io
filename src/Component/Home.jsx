import React from 'react';
import akashimg from "../assets/img_port1.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
import { Link } from 'react-scroll';


const Home = () => {
    return (
        <div  name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-700'>

            <div className='     mx-auto max-w-5xl grid grid-flow-row items-center justify-cente  h-full px-4  md:grid-flow-col'>
                    <div className='flex flex-col justify-center max-h-max mt-20 lg:mt-0'>

                        <h1 className= 'text-4xl sm:text-7xl font-bold text-white '>I'm a Full Stack Developer</h1>
                        <p className="text-gray-400 py-3 sm:py-3 max-w-md">
                            Hy  i am Full Stack Web Developer i complete my Btech in (IT) , i have hand on practice on React.js in frondend
                            and node.js in backend .I love to work on web application using technologies like
                            React, Tailwind ,Typescript. Currently looking for a job opportunity in a
                            technology-driven organization.
                            </p>


                        {/*  Porfolio  Buttton  */}
                        <div>
                            <Link to="project" smooth duration={500} 
                            className=' group text-white w-fit px-6 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ' >Project
                            <span className='group-hover:rotate-90 duration-300 h-10'>
                                <MdOutlineKeyboardArrowRight size={30}  className='ml-1 mt-1'/>
                            </span>
                            </Link>
                        </div>

                    </div>


                        <div className=' h-3/4 sm:h-1/2 '>

                        <img src={akashimg}
                        alt="img" className="rounded-full mx-auto w-lg h-56  hover:cursor-pointer"/>
                        </div>

            </div>

            

        </div>
    );
}

export default Home;
