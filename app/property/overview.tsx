export default function Overview() {
const overview = [
{ icon: "📅", label: "Updated On", value: "August 16, 2023" },
{ icon: "🛏️", label: "Bedrooms", value: "3 Bedrooms" },
{ icon: "🛁", label: "Bathrooms", value: "2.5 Bathrooms" },
{ icon: "🚗", label: "Garage", value: "1 Garage" },
{ icon: "📏", label: "Property Size", value: "1,300 sq.ft." },
{ icon: "🏠", label: "Year Built", value: "2015" },
];

return (
    <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

        <h2 className="text-xl font-semibold text-gray-900">
            Overview
        </h2>

        <div className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {overview.map((item) => (
                <div
                    key={item.label}
                    className="text-center"
                >
                    <div className="text-2xl">
                        {item.icon}
                    </div>

                    <p className="mt-2 text-xs text-gray-500">
                        {item.label}
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-800">
                        {item.value}
                    </p>
                </div>
            ))}
        </div>

    </section>
);
}