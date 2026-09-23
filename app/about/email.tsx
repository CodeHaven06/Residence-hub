"use client";

import Image from "next/image";
import { FormEvent } from "react";

export default function Email() {
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();

alert("Thank you! Your enquiry has been submitted.");
};

return (
    <section className="bg-[#F8F9FA] px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl bg-white shadow-sm lg:grid-cols-2">

            <div className="relative min-h-[350px] lg:min-h-[650px]">
                <Image
                    src="/images/building.jpg"
                    alt="Luxury real estate building"
                    fill
                    className="object-cover"/>
            </div>

            <div className="p-7 sm:p-10 lg:p-14">
                <p className="mb-3 text-sm font-medium tracking-[0.2em] text-[#BC8664]">
                    CONTACT US
                </p>

                <h2 className="text-3xl font-medium leading-tight text-gray-900 sm:text-4xl">
                    Get in touch with us to plan your next transaction
                </h2>

                <p className="mt-5 text-base leading-7 text-gray-500">
                    Our experts and developers would love to contribute their
                    expertise and insights and help you today.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5">

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="firstName"
                                className="mb-2 block text-sm font-medium text-gray-600">
                                First name
                            </label>

                            <input
                                id="firstName"
                                type="text"
                                placeholder="First Name"
                                required
                                className="w-full rounded-md bg-[#F8F9FA] px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-[#BC8664]/40"/>
                        </div>

                        <div>
                            <label
                                htmlFor="lastName"
                                className="mb-2 block text-sm font-medium text-gray-600">
                                Last name
                            </label>

                            <input
                                id="lastName"
                                type="text"
                                placeholder="Last Name"
                                required
                                className="w-full rounded-md bg-[#F8F9FA] px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-[#BC8664]/40"/>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-gray-600">
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                required
                                className="w-full rounded-md bg-[#F8F9FA] px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-[#BC8664]/40"/>
                        </div>

                        <div>
                            <label
                                htmlFor="mobile"
                                className="mb-2 block text-sm font-medium text-gray-600">
                                Mobile
                            </label>

                            <input
                                id="mobile"
                                type="tel"
                                placeholder="Mobile"
                                required
                                className="w-full rounded-md bg-[#F8F9FA] px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-[#BC8664]/40"/>
                        </div>
                    </div>


                    <div>
                        <label
                            htmlFor="message"
                            className="mb-2 block text-sm font-medium text-gray-600">
                            Message
                        </label>

                        <textarea
                            id="message"
                            rows={5}
                            placeholder="Message"
                            required
                            className="w-full resize-none rounded-md bg-[#F8F9FA] px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-[#BC8664]/40"/>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-md bg-[#BC8664] py-3.5 font-medium text-white transition duration-300 hover:bg-black">
                        Send Email
                    </button>

                </form>
            </div>
        </div>
    </section>
);
}