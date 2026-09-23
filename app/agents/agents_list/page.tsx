import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { agentsList } from "../agents_data";
import Adv_Search from "@/app/adv_search/page";
import Latest_Listings from "@/app/latest_listings/page";

export default function Agents_List() {
    return (
        <main className="min-h-screen bg-[#F8F9FA] px-5 py-8 sm:px-8 md:py-12 lg:px-12">

            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">

                    <section>
                        <div className="mb-10">

                            <p className="mb-2 text-sm font-medium tracking-[0.2em] text-[#BC8664]">
                                OUR PROFESSIONALS
                            </p>
                            <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                                Agents List
                            </h1>

                            <div className="mt-5 max-w-4xl space-y-4">

                                <p className="text-sm leading-7 text-gray-600 sm:text-base">
                                    We like to think of ourselves as a small but
                                    perfectly formed lettings & management agency.
                                    Working with us, you get the exposure, knowledge
                                    and expertise you would expect from a large
                                    agent, but the service you will only receive
                                    from a smaller business built around 100%
                                    client and tenant focus.
                                </p>
                                <p className="text-sm leading-7 text-gray-600 sm:text-base">
                                    Whether you're looking for property for sale in
                                    New York area or property for rent, WP Residence
                                    makes searching easy. Use our unique geolocation
                                    mapping feature to find your ideal villa,
                                    townhouse or apartment and contact the owners
                                    directly. We will help you find your dream
                                    house in just a few seconds.
                                </p>

                            </div>
                        </div>


                        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">

                            {agentsList.map((agent) => (

                                <article
                                    key={agent.slug}
                                    className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                                
                                    <Link
                                        href={`/agents/agents_page/${agent.slug}`}
                                        className="block overflow-hidden">
                                    
                                        <Image
                                            src={agent.image}
                                            alt={agent.name}
                                            width={800}
                                            height={500}
                                            className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[320px]"/>
                                    </Link>

                                    <div className="flex items-center justify-between gap-4 p-5">

                                        <div className="min-w-0">
                                            <Link
                                                href={`/agents/agents_page/${agent.slug}`}>
                                            
                                                <h2 className="truncate text-lg font-semibold text-gray-900 transition-colors duration-300 hover:text-[#BC8664]">
                                                    {agent.name}
                                                </h2>
                                            </Link>

                                            <p className="mt-1 text-sm text-gray-500">
                                                {agent.designation}
                                            </p>
                                        </div>


                                        <Link
                                            href={`/agents/agents_page/${agent.slug}`}
                                            aria-label={`View ${agent.name}`}
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#BC8664] text-white transition-all duration-300 hover:bg-gray-900">
                            
                                            <ArrowRight size={19} />
                                        </Link>

                                    </div>
                                </article>

                            ))}
                        </div>
                    </section>


                    <aside className="lg:sticky lg:top-6 lg:h-fit">
                        <div className="flex flex-col gap-6">
                            <Adv_Search />
                            <Latest_Listings />
                        </div>
                    </aside>

                </div>
            </div>
        </main>
    );
}
