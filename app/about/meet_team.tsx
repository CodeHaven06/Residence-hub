import Image from "next/image";

const team = [
    {
        image: "/images/person1.webp",
        name: "Maria Barlow",
        role: "Sales Executive",
    },
    {
        image: "/images/person2.webp",
        name: "Jane Suttherland",
        role: "Real Estate Broker",
    },
    {
        image: "/images/person3.webp",
        name: "Eric Long",
        role: "Sales Agent",
    },
];

export default function MeetOurTeam() {
    return (
        <section className="bg-[#F8F9FA] px-5 py-20 sm:px-8 md:px-12 lg:px-20 lg:py-28">
            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <span className="text-sm font-medium tracking-[0.2em] text-[#BC8664]">
                        OUR AGENTS
                    </span>

                    <h2 className="mt-3 text-3xl font-medium text-gray-900 sm:text-4xl md:text-5xl">
                        Meet our team
                    </h2>

                    <p className="mt-5 text-base leading-7 text-gray-500 md:text-lg">
                        If you want the best care possible for your real estate
                        needs, our certified professionals are here to help.
                    </p>
                </div>

                {/* Team */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {team.map((member) => (
                        <div key={member.name} className="group">
                            <div className="relative overflow-hidden rounded-2xl">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={500}
                                    height={500}
                                    className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="mt-5">
                                <h3 className="text-xl font-medium text-gray-900 transition group-hover:text-[#BC8664]">
                                    {member.name}
                                </h3>

                                <p className="mt-1 text-sm capitalize text-gray-500">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}