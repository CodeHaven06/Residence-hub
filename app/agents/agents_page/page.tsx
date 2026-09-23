import Agent_Img from "./agent_img";
import Agents_Data from "./agents_data";
import About_Agent from "./aboutagent";
import Contact_Me from "@/app/contact/contactme";
import My_Listings from "./my_listings";
import Reviews from "./reviews";
import AgentSidebar from "./agent_sidebar";

export default function Agents_Page() {
return ( <main className="min-h-screen bg-[#F8F9FA] px-5 py-8 sm:px-8 md:py-12 lg:px-12">

        <div className="mx-auto max-w-7xl">

            <section className="mb-10">

                <p className="mb-2 text-sm font-medium tracking-[0.2em] text-[#BC8664]">
                    OUR PROFESSIONAL
                </p>

                <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                    Meet Our Agent
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                    Get to know our experienced real estate professional
                    and explore their expertise, listings and services.
                </p>

            </section>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_350px]">

                <div className="flex flex-col gap-7">
                    <Agent_Img />
                    <Agents_Data />

                    <About_Agent />
                    <My_Listings />
                    <Reviews />
                    <Contact_Me />
                </div>

                <div className="lg:sticky lg:top-6 lg:h-fit">

                    <AgentSidebar />

                </div>
            </div>
        </div>
    </main>
);
}