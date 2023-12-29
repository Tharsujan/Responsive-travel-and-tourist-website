import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assests/1.avif"
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";

function About(){
    return(
       <>
        <Navbar />
       <Hero
       cName="hero-mid"
       heroImg={AboutImg}
       title="About"
       
       btnClass="hide"

       />
       <Aboutus/>
       <Footer/>
       </> 
    )

}
export default About;