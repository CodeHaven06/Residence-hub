"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Navbar() {
    const [Open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    

    return (
        <nav className="w-full bg-zinc-900 md:bg-white shadow-md py-2 px-5 flex justify-between items-center">

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-xl text-orange-300 hover:text-white outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "X" : "☰"}
            </button>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 absolute top-14 left-0 w-full bg-zinc-900 z-50 ${
                    isOpen ? "max-h-[600px] mt-0" : "max-h-0"
                }`}
            >
                <ul className="flex flex-col gap-3 font-medium text-white px-6 py-5">

                    <li>
                        <Link
                            href="/homepage"
                            className="hover:text-orange-300 transition"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/property"
                            className="hover:text-orange-300 transition"
                        >
                            Properties
                        </Link>
                    </li>

                    {/* Management */}
                    <li>
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => setOpen(!Open)}
                        >
                            <span className="hover:text-orange-300 transition">
                                Management
                            </span>

                            {Open ? (
                                <ChevronUp size={20} />
                            ) : (
                                <ChevronDown size={20} />
                            )}
                        </div>

                        {Open && (
                            <div className="ml-4 mt-3 flex flex-col gap-3 border-l border-orange-300 pl-4">

                                <Link
                                    href="/dashboard"
                                    className="hover:text-orange-300"
                                >
                                    Dashboard
                                </Link>

                                <Link
                                    href="/properties"
                                    className="hover:text-orange-300"
                                >
                                    Property Management
                                </Link>

                                <Link
                                    href="/maintenance"
                                    className="hover:text-orange-300"
                                >
                                    Maintenance
                                </Link>

                                <Link
                                    href="/amenities"
                                    className="hover:text-orange-300"
                                >
                                    Amenities & Booking
                                </Link>

                            </div>
                        )}
                    </li>

                    {/* Agents */}
                    <li>
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            <Link
                                href="/agents/agents_list"
                                className="hover:text-orange-300 transition"
                            >
                                Agents
                            </Link>
                        </div>
                    </li>

                    <li>
                        <Link
                            href="/about"
                            className="hover:text-orange-300 transition"
                        >
                            About
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/blog"
                            className="hover:text-orange-300 transition"
                        >
                            Blog
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/contact"
                            className="hover:text-orange-300 transition"
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Logo */}
            <div className="flex flex-col leading-none m-0">
                <span className="text-orange-300 font-semibold text-xl">
                    WP
                </span>

                <span className="font-semibold text-xl md:text-black text-white">
                    RESIDENCE
                </span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-2 font-medium text-black py-7">

                <li>
                    <Link
                        href="/homepage"
                        className="hover:text-white transition hover:bg-amber-600 rounded-xl py-2 px-3"
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        href="/property"
                        className="hover:text-white transition hover:bg-amber-600 rounded-xl py-2 px-3"
                    >
                        Properties
                    </Link>
                </li>

                {/* Agents */}
                <li className="relative">
                    <div
                        className="flex items-center gap-1 cursor-pointer hover:text-white hover:bg-amber-600 rounded-xl py-2 px-3"
                        onClick={() => setOpen(!Open)}
                    >
                        <span>Agents</span>

                        {Open ? (
                            <ChevronUp size={17} />
                        ) : (
                            <ChevronDown size={17} />
                        )}
                    </div>

                    {Open && (
                        <div className="absolute top-12 left-0 z-50 w-40 rounded-xl bg-white shadow-lg border border-gray-100 p-2">

                            <Link
                                href="/agents/agents_list"
                                className="block rounded-lg px-3 py-2 text-sm hover:bg-orange-100"
                            >
                                Agents List
                            </Link>

                            <Link
                                href="/agents/agents_page"
                                className="block rounded-lg px-3 py-2 text-sm hover:bg-orange-100"
                            >
                                Agents Page
                            </Link>

                        </div>
                    )}
                </li>

                <li>
                    <Link
                        href="/about"
                        className="hover:text-white transition hover:bg-amber-600 rounded-xl py-2 px-3"
                    >
                        About
                    </Link>
                </li>

                <li>
                    <Link
                        href="/blog"
                        className="hover:text-white transition hover:bg-amber-600 rounded-xl py-2 px-3"
                    >
                        Blog
                    </Link>
                </li>

                <li>
                    <Link
                        href="/contact"
                        className="hover:text-white transition hover:bg-amber-600 rounded-xl py-2 px-3"
                    >
                        Contact
                    </Link>
                </li>

                {/* Management Dropdown */}
                <li className="relative">
                    <div
                        className="flex items-center gap-1 cursor-pointer hover:text-white hover:bg-amber-600 rounded-xl py-2 px-3"
                        onClick={() => setOpen(!Open)}
                    >
                        <span>Manage</span>

                        {Open ? (
                            <ChevronUp size={17} />
                        ) : (
                            <ChevronDown size={17} />
                        )}
                    </div>

                    {Open && (
                        <div className="absolute right-0 top-12 z-50 w-52 rounded-xl bg-white shadow-lg border border-gray-100 p-2">

                            <Link
                                href="/dashboard"
                                className="block rounded-lg px-3 py-2 text-sm hover:bg-orange-100"
                            >
                                Dashboard
                            </Link>

                            <Link
                                href="/properties"
                                className="block rounded-lg px-3 py-2 text-sm hover:bg-orange-100"
                            >
                                Property Management
                            </Link>

                            <Link
                                href="/maintenance"
                                className="block rounded-lg px-3 py-2 text-sm hover:bg-orange-100"
                            >
                                Maintenance
                            </Link>

                            <Link
                                href="/amenities"
                                className="block rounded-lg px-3 py-2 text-sm hover:bg-orange-100"
                            >
                                Amenities & Booking
                            </Link>

                        </div>
                    )}
                </li>

            </ul>

            {/* User Icon */}
            <div className="bg-gray-500 hover:bg-white rounded-full h-7 w-7 flex items-center justify-center">
                <Image
                    src="https://www.svgrepo.com/show/24594/add-a-contact-on-phone-interface-symbol-of-a-user-with-a-plus-sign.svg"
                    alt="User"
                    width={17}
                    height={17}
                />
            </div>

        </nav>
    );
}