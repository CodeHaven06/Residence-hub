import Agent_Img from "./agent_img";
import Agents_Data from "./agents_data";
// import Specialties from "./specialties";
import About_Agent from "./aboutagent"; 
import Contact_Me from "@/app/contact/contactme";
import My_Listings from "./my_listings";
import Reviews from "./reviews";
import Adv_Search from "@/app/adv_search/page";
import Latest_Listings from "@/app/latest_listings/page";



export default function Agents_Page(){
    return(
        <main className="pb-7 bg-purple-100 px-3">
            <Agent_Img/>
            <Agents_Data/>
            {/* <Specialties/> */}
            <About_Agent/>
            <Contact_Me/>
            <My_Listings/>
            <Reviews/>
            <Adv_Search/>
            <Latest_Listings/>
        </main>
    )
}