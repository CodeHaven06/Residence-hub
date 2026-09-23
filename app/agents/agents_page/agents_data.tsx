import {
FiPhone,
FiSmartphone,
FiMail,
FiGlobe,
} from "react-icons/fi";

export default function Agents_Data() {
const agent = {
name: "Maria Barlow",
designation: "Sales Executive",
phone: "(305) 555-4555",
mobile: "(305) 555-4555",
mail: "[maria@domain.com](mailto:maria@domain.com)",
website: "website.com",
member: "Keller Williams Realty",
};

return (
    <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

        {/* Name */}
        <div>
            <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                {agent.name}
            </h1>

            <p className="mt-1 text-sm capitalize text-[#BC8664]">
                {agent.designation}
            </p>
        </div>

        {/* Contact Details */}
        <div className="mt-7 grid grid-cols-1 gap-4 border-t border-gray-100 pt-6 sm:grid-cols-2">

            <div className="flex items-center gap-3">
                <FiPhone className="text-[#BC8664]" size={18} />

                <span className="text-sm text-gray-600">
                    {agent.phone}
                </span>
            </div>

            <div className="flex items-center gap-3">
                <FiSmartphone className="text-[#BC8664]" size={18} />

                <span className="text-sm text-gray-600">
                    {agent.mobile}
                </span>
            </div>

            <div className="flex items-center gap-3">
                <FiMail className="text-[#BC8664]" size={18} />

                <span className="break-all text-sm text-gray-600">
                    {agent.mail}
                </span>
            </div>

            <div className="flex items-center gap-3">
                <FiGlobe className="text-[#BC8664]" size={18} />

                <span className="text-sm text-gray-600">
                    {agent.website}
                </span>
            </div>

        </div>

        {/* Member */}
        <div className="mt-6 border-t border-gray-100 pt-5 text-sm">

            <span className="font-semibold text-gray-700">
                Member of:
            </span>

            <span className="ml-2 text-gray-500">
                {agent.member}
            </span>

        </div>

    </section>
);
}