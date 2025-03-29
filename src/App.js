// import logo from './logo.svg';
// import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Experience from './Component/Experience';
import Github from './Component/Github';
import Home from './Component/Home';
// import { BrowserRouter } from 'react-router-dom';

import Nav from './Component/Nav';
import Project from './Component/Project';
import SocialLinks from './Component/SocialLinks';
import WorkExperience from './Component/workexperiance';



function App() {
  return (
    <>
    
    <Nav/>
    <Home/>
    <WorkExperience/>
    {/* <About/> */}
    <Project/>
    <Experience/>
    {/* <Github/> */}
    <Contact/>

    {/* <SocialLinks/>  */}

    </>
  );
}

export default App;
