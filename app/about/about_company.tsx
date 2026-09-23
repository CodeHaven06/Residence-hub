export default function AboutOurCompany() {
    const companyInfo = [
        {
            title: "Our Mission",
            text: "With over $2 Billion in sales, our agency is the industry's top luxury producer with over 27 years of experience in marketing Seattle's most prestigious waterfront properties.",
        },
        {
            title: "Our Vision",
            text: "Due to our unparalleled results, expertise and dedication, we rank amongst the Top 6 agencies in Seattle and our area. We are also elite members of Corcoran's Presidents Council.",
        },
        {
            title: "Our Values",
            text: "With years of experience, an impressive property portfolio, celebrity clientele, and unparalleled knowledge of the market and pedigree estates, our business is sophisticated and renowned.",
        },
        {
            title: "Our Resources",
            text: "Our experienced team provides clients with extensive market knowledge, professional guidance, valuable resources and personalized support throughout every real estate transaction.",
        },
    ];

    return (
        <section className="bg-white px-5 py-20 sm:px-8 md:px-12 lg:px-20 lg:py-28">
            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <p className="mb-3 text-sm font-medium tracking-[0.2em] text-[#BC8664]">
                        WHO WE ARE
                    </p>

                    <h2 className="mb-5 text-3xl font-medium text-gray-900 sm:text-4xl md:text-5xl">
                        About our company
                    </h2>

                    <p className="text-base leading-7 text-gray-500 md:text-lg">
                        Utilizing our exceptional experience and knowledge of the
                        luxury waterfront markets, we serve an extensive and elite
                        worldwide client base.
                    </p>
                </div>

                {/* Information */}
                <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
                    {companyInfo.map((item) => (
                        <div
                            key={item.title}
                            className="border-l-2 border-[#BC8664] pl-6"
                        >
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                {item.title}
                            </h3>

                            <p className="text-base leading-7 text-gray-600">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}