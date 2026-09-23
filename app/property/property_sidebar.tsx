import Agent_Img from "../agents/agents_page/agent_img";
import Agents_Data from "../agents/agents_page/agents_data";
import Contact_Me from "../contact/contactme";

export default function PropertySidebar() {
return ( <aside className="space-y-6">

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <Agent_Img />

            <div className="p-6">
                <Agents_Data />
            </div>
        </div>

        <Contact_Me />

    </aside>
);
}