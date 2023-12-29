import d1 from "../assests/d1.jpg"
import d2 from "../assests/d2.jpg"
import s1 from "../assests/s1.jpg"
import s2 from "../assests/s2.jpg"

import DestinationData from "./DestinationData"
import "./DestinationStyles.css"
const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
          <DestinationData
          className="first-des"
          heading="Dunhinda Falls, Badulla"
          text="Dunhinda Falls is a waterfall located about 5 kilometres from Badulla in the lower central hills of Sri Lanka. The waterfall, which is 64 metres high, gets its name from the smoky dew drops spray, which surrounds the area at the foot of the waterfall. The fall is created by the Badulu Oya which flows through Badulla"
          img1={d1}
          img2={d2}
          />  
           <DestinationData
           className="first-des-reverse"
          heading="Sigiriya, Anuradhpura"
          text="Sigiriya was designated as a world heritage site in 1982. Sigiriya is famous for it's palace ruins on top of a massive 200 meter high rock surrounded by the remains of an extensive network of gardens, reservoirs and other structures. The rock itself is a lava plug left over from an ancient long extinct volcano."
          img1={s1}
          img2={s2}
          />  
         
        </div>

    )
}

export default Destination