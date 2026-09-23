import Overview from "./overview";
import Description from "./description";
import Address from "./address";
import Detail from "./details";
import Features from "./features";
import Calculator from "./calculator";
import Tour_Schedule from "./tour_schedule";
import PropertySidebar from "./property_sidebar";
import Reviews from "../agents/agents_page/reviews";


export default function Property() {
return ( <main className="min-h-screen bg-[#F8F9FA] px-5 py-8 sm:px-8 md:py-12 lg:px-12">

        <div className="mx-auto max-w-7xl">

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_500px]">

                <div className="flex flex-col gap-7">
                    <Overview />
                    <Description />
                    <Address />
                    <Detail />
                    <Features />
                    <Calculator />
                    <Tour_Schedule />
                    <Reviews />
                </div>

                <div className="lg:sticky lg:top-6 lg:h-fit">
                    <PropertySidebar />
                </div>

            </div>
        </div>
    </main>
);
}