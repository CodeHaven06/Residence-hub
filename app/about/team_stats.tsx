export default function TeamStats() {
const stats = [
{
number: "3,420",
text: "Inventory who are committed to their management tasks",
},
{
number: "2.73%",
text: "Average mortgage rate paid by buyers who use our services",
},
{
number: "5,378",
text: "Sales closed are committed to their management tasks",
},
];

return (
    <section className="bg-white px-5 py-20 sm:px-8 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-6xl">
            {/* Heading */}
            <div className="mx-auto mb-14 max-w-3xl text-center">
                <h2 className="text-3xl font-medium text-gray-900 sm:text-4xl">
                    Our team stats
                </h2>

                <p className="mt-5 text-base leading-7 text-gray-500 md:text-lg">
                    Despite well over $1 billion in combined sales, however,
                    the team strives to maintain an air of humility and discretion.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
                {stats.map((stat) => (
                    <div
                        key={stat.number}
                        className="text-center"
                    >
                        <h3 className="text-5xl font-medium text-[#BC8664] md:text-6xl">
                            {stat.number}
                        </h3>

                        <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-gray-600 md:text-base">
                            {stat.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
}