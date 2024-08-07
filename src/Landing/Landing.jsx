import Navbar from "./Navbar/Navbar";
import Navbar2 from "./Navbar/Navbar2";
import Hero from "./Hero/Hero";
import ProjectIcons from "./ProjectIcons/ProjectIcons";
import ProjectFeature1 from "./ProjectFeature1/ProjectFeature1";
import Hero2 from "./Hero/Hero2";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Footer from "../Footer/Footer";

export default function Landing() {
  return (
    <>
      <Hero2 />  
      {/* <Navbar2 />    */}
      <ProjectFeature1/>
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  );
}
