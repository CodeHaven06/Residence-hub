import Adv_Search from "../adv_search/page";
import Latest_Listings from "../latest_listings/page";

export default function ContactSidebar() {
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