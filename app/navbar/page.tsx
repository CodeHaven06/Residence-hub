"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
// // import Agents from "../agents/page";
// import Agents_Page from "../agents/agents_page/page_agent";
// import Agents_List from "../agents/agents_list";




export default function Navbar() {
    const [Open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-zinc-900 md:bg-white shadow-md py-2 px-5 flex justify-between items-center">

            <button className="md:hidden text-xl text-orange-300 hover:text-white outline-none "
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "X" : "☰"}
            </button>
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 mt-4" : "max-h-0"
                    }`}>

                <ul className="flex flex-col gap-3 font-medium text-white pb-2">

                    <li >
                        <Link href="/homepage" className="hover:text-white transition">
                            Home
                        </Link>
                    </li>

                    {/* <li>
                        <Link href="" className="hover:text-white transition">
                            Demos
                        </Link>
                    </li> */}

                    <li>
                        <Link href="/property" className="hover:text-white transition">
                            Properties
                        </Link>
                    </li>

                    <li>
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => setOpen(!Open)}>
                            <span className="hover:text-white transition">
                                Agents
                            </span>

                            {Open ? (
                                <ChevronUp size={20} />
                            ) : (
                                <ChevronDown size={20} />
                            )}
                        </div>

                        {Open && (
                            <div className="ml-4 mt-2 flex flex-col gap-2">
                                <Link href="/agents/agents_list" className="hover:text-orange-300">
                                    Agents List
                                </Link>

                                <Link href="/agents/agents_page" className="hover:text-orange-300">
                                    Agents Page
                                </Link>
                            </div>
                        )}
                    </li>

                    <li>
                        <Link href="/about" className="hover:text-white transition">
                            About
                        </Link>
                    </li>

                    <li>
                        <Link href="/blog" className="hover:text-white transition">
                            Blog
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact" className="hover:text-white transition">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col leading-none m-0">
                <span className="text-orange-300 font-semibold text-xl">WP</span>
                <span className="font-semibold text-xl md:text-black text-white">RESIDENCE</span>
            </div>

            {/* https://denver.wpresidence.net/wp-content/uploads/2023/08/mont_white.png */}

            <ul className="hidden md:flex items-center gap-4 text font-medium text-black py-7">
                <li>
                    <Link href="/homepage" className="hover:text-white transition hover:bg-amber-600 rounded-xl py-2 px-3">
                        Home
                    </Link>
                </li>

               

                <li>
                    <Link href="/property" className="hover:text-white transition hover:bg-amber-600 rounded-xl py-2 px-3">
                        Properties
                    </Link>
                </li>

                <li >
                    <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => setOpen(!Open)}>
                            <span className="hover:text-white transition">
                                Agents
                            </span>

                            {Open ? (
                                <ChevronUp size={20} />
                            ) : (
                                <ChevronDown size={20} />
                            )}
                        </div>

                        {Open && (
                            <div className="ml-4 mt-2 flex flex-col gap-2">
                                <Link href="../agents/agents_list" className="hover:text-orange-300">
                                    Agents List
                                </Link>

                                <Link href="../agents/agents_page" className="hover:text-orange-300">
                                    Agents Page
                                </Link>
                            </div>
                        )}
                </li>

                <li>
                    <Link href="/about" className="hover:text-white transition hover:bg-amber-600 rounded-xl py-2 px-3">
                        About
                    </Link>
                </li>

                <li>
                    <Link href="/blog" className="hover:text-white transition hover:bg-amber-600 rounded-xl py-2 px-3">
                        Blog
                    </Link>
                </li>

                <li>
                    <Link href="/contact" className="hover:text-white transition hover:bg-amber-600 rounded-xl py-2 px-3">
                        Contact Us
                    </Link>
                </li>
            </ul>
            <div className=" bg-gray-500 hover:bg-white rounded-full h-5 w-5 flex items-center justify-center">
                <Image src="https://www.svgrepo.com/show/24594/add-a-contact-on-phone-interface-symbol-of-a-user-with-a-plus-sign.svg"
                    alt="Logo" width={15} height={15} />
            </div>

            <div className="lg:hidden  bg-orange-300 hover:bg-white rounded-full h-5 w-5 flex items-center justify-center">
                <Image src="https://www.svgrepo.com/show/24594/add-a-contact-on-phone-interface-symbol-of-a-user-with-a-plus-sign.svg"
                    alt="Logo" width={15} height={15} />
            </div>

        </nav>
    );
}
