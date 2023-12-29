import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Trip from "../components/Trip"

function Home(){
    return(
       <>
       <Navbar />
       <Hero
       cName="hero"
       heroImg="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommunicateonline.me%2Fcategory%2Findustry-insights%2Fpost-details%2Fjeeps-nature-is-in-our-nature-campaign-transports-its-drivers-into-the-wild&psig=AOvVaw1pwynaRMPrgBkX3h0lBgoy&ust=1703765195149000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiQpZDKr4MDFQAAAAAdAAAAABAD"
       title="Your Journey Your Story"
       text="Choose Your Favourite Destination."
       buttonText="Travel Plan"
       url="/"
       btnClass="show"

       />
       <Destination/>
       <Trip />
       <Footer/>
       
       </> 
    );

}
export default Home;