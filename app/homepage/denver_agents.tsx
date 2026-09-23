import Image from "next/image";
import Link from "next/link";
import { agentsList } from "../agents/agents_data";

export default function DenverAgent() {
    return (
        <section className="px-5 py-14 sm:px-8 lg:px-12">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">


                <div className="flex flex-col justify-center">
                    <h1 className="mb-3 text-2xl font-medium tracking-[0.2em] text-[#BC8664]">
                        DENVER RESIDENCE
                    </h1>

                    <h2 className="text-3xl font-semibold leading-tight text-gray-900">
                        Denver Residence are the brightest and fastest growing real estate
                        brokerage firm in Denver
                    </h2>

                    <div className="mt-6 space-y-4 font-medium text-lg leading-7 text-gray-500">
                        <p>
                            Founded in 2012, Residence Real Estate Group is a locally and
                            female owned, residential real estate agency with offices
                            throughout Quebec area.
                        </p>

                        <p>
                            Our mission is to bring a more personalized approach to the home
                            buying and selling process and we're committed to the
                            communities we serve.
                        </p>

                        <p>
                            Helping you achieve your real estate goals is my top priority.
                            When we work together, it is about YOU.
                        </p>
                    </div>

                    <div className="flex gap-8 p-8">
                        <button className=" bg-[#bc8664] text-white px-6 py-3 rounded-lg cursor-pointer">
                            About Us
                        </button>
                        <button className="text-black px-6 py-3 rounded-lg cursor-pointer
                            hover:bg-[#bc8664] hover:text-white border border-2 border-[#bc8664] transition-colors duration-300">
                            Our Agents
                        </button>

                    </div>
                </div>


                <div className="grid grid-cols-2 gap-5">
                    {agentsList.map((agent) => (

                        <Link key={agent.slug}
                            href={`/agents/agents_page/${agent.slug}`}
                            className="group overflow-hidden rounded-xl bg-white shadow-sm">

                            <div className="overflow-hidden">
                                <Image src={agent.image} alt={agent.name}
                                    width={800}
                                    height={500}
                                    className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>

                            <div className="p-4">
                                <h2 className="text-base font-semibold text-gray-900">
                                    {agent.name}
                                </h2>
                            </div>
                        </Link>

                    ))}
                </div>

            </div>
        </section>
    );
}