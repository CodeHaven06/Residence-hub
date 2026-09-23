import Adv_Search from "@/app/adv_search/page";
import Latest_Listings from "@/app/latest_listings/page";

export default function AgentSidebar() {
return ( <aside className="space-y-6">

        <div className="rounded-2xl bg-white p-5 shadow-sm">
            <Adv_Search />
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
            <Latest_Listings />
        </div>

    </aside>
);
}