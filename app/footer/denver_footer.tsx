export default function Denver_Areas() {
    const areas = [
        [
            "Arvada Real Estate",
            "Capitol Hill Real Estate",
            "Central Park Real Estate",
            "Cherry Creek Real Estate",
            "Denver Real Estate",
        ],
        [
            "Bellaria Real Estate",
            "Dwell Nona Real Estate",
            "Carriage Hill Real Estate",
            "Cloverlawn Real Estate",
            "Forests Hils Real Estate",
        ],
        [
            "Fontana Real Estate",
            "Isleworth Real Estate",
            "Keenes Pointe Real Estate",
            "Lakeshore Real Estate",
            "Lakeview Park Real Estate",
        ],
        [
            "Apopka Real Estate",
            "Belle Isle Real Estate",
            "Ocoee Real Estate",
            "Orlando Real Estate",
            "Windermere Real Estate",
        ],
    ];

    return (
        <section className="bg-black px-5 py-10 sm:px-8 md:px-12 lg:px-16">

            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <h2 className="mb-8 text-sm font-medium tracking-[0.2em] text-white/80 sm:text-base">
                    DENVER AREAS
                </h2>

                {/* Areas */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {areas.map((column, columnIndex) => (
                        <ul
                            key={columnIndex}
                            className="space-y-3 text-sm text-white/50"
                        >
                            {column.map((area) => (
                                <li
                                    key={area}
                                    className="group flex items-start gap-2 transition-colors duration-200 hover:text-[#BC8664]"
                                >
                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40 transition-colors group-hover:bg-[#BC8664]" />

                                    <span className="cursor-pointer">
                                        {area}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ))}

                </div>

            </div>

        </section>
    );
}