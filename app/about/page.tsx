import Section1 from "./section1";
import AboutOurCompany from "./about_company";
import MeetOurTeam from "./meet_team";
import Testimonials from "./testimonials";
import Questions from "./questions";
import Team_stats from "./team_stats";  
import Email from "./email";



export default function About() {
    return (
        <main className="bg-white ">

            <Section1 />
            <AboutOurCompany />
            <MeetOurTeam/>
            <Testimonials/>
            <Questions/>
            <Team_stats/>
            <Email/>

        </main>
    );
}