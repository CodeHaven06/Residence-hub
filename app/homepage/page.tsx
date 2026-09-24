import Link from "next/link";
import Select_Options from "./selectoptions"
import Denver_Areas from "../footer/denver_footer"
import Support from "./support"
import Blog from "../blog/page";
import PropertyCategories from "./PropertyCategoriesIcons";
import PropertySection from "./property_section";
import TypeOfProperty from "./typeofproperty";
import DenverAgent from "./denver_agents";
import SellHome from "./sellhome";
import Agents_Review from "./agents_review";


export default function Homepage() {
  
  return (
    <main className="relative min-h-screen overflow-hidden">

      <div className="absolute inset-0 bg-[url('/images/bg_pattern.jpeg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-white/95" />

      <div className="relative z-10">
        <Select_Options />

        <div className="flex justify-center py-6">
          <Link
            href="/dashboard"
            className="rounded-xl bg-[#bc8664] px-6 py-3 font-semibold text-white shadow-md transition hover:bg-[#a96f50]"
          >
            Go to Management Dashboard →
          </Link>
        </div>

        <PropertyCategories/> 
        <PropertySection />
        <TypeOfProperty />
        <DenverAgent/>
        <SellHome/>
        <Blog />
        <Agents_Review/>
        <Support />
        <Denver_Areas />
      </div>

    </main>
  );
}