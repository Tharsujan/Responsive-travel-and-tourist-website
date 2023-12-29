import "./TripStyles.css";
import TripData  from "./TripData";
import Trip1 from "../assests/j1.jpeg"
import Trip2 from "../assests/c1.jpeg"
import Trip3 from "../assests/b1.jpeg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Trip to Jaffna"
                text="Jaffna is a city on the northern tip of Sri Lanka. Nallur Kandaswamy is a huge Hindu temple with golden arches and an ornate gopuram tower. By the coast, star-shaped Jaffna Fort was built by the Portuguese in the 17th century and later occupied by the Dutch and British. Jaffna Public Library is a symbol of the city’s post-war regeneration. Jaffna Archaeological Museum has Dutch cannons and pre-colonial artifacts"
                />
                 <TripData
                image={Trip2}
                heading="Trip to Colombo"
                text="Colombo is the executive and judicial capital and largest city of Sri Lanka by population. According to the Brookings Institution, the Colombo metropolitan area has a population of 5.6 million, and 752,993 in the Municipality. It is the financial centre of the island and a tourist destination."
                />
                <TripData
                image={Trip3}
                heading="Trip to Badulla"
                text="Badulla is the capital and the largest city of Uva Province situated in the lower central hills of Sri Lanka. It is the capital city of Uva Province and the Badulla District."
                />
            </div>
        </div>
    )
}
 export default Trip;