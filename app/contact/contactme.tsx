"use client";

import { FormEvent } from "react";

export default function Contact_Me() {

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");
};

return (
    <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

        <div className="mb-7">
            <p className="mb-2 text-sm font-medium tracking-[0.2em] text-[#BC8664]">
                SEND US A MESSAGE
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Contact Me
            </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

            <div>
                <label htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-600">              
                    Name
                </label>

                <input id="name" type="text" placeholder="Your Name" required
                    className="w-full rounded-lg border border-gray-200 bg-[#F8F9FA] px-4 py-3 text-sm outline-none transition focus:border-[#BC8664] focus:ring-2 focus:ring-[#BC8664]/20"/>
                
            </div>

            <div>
                <label htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-600">
                    Email
                </label>

                <input id="email" type="email" placeholder="Your Email" required
                    className="w-full rounded-lg border border-gray-200 bg-[#F8F9FA] px-4 py-3 text-sm outline-none transition focus:border-[#BC8664] focus:ring-2 focus:ring-[#BC8664]/20"/>
            </div>

            <div>
                <label htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-600">
                    Phone
                </label>

                <input id="phone" type="tel" placeholder="Your Phone Number" required
                    className="w-full rounded-lg border border-gray-200 bg-[#F8F9FA] px-4 py-3 text-sm outline-none transition focus:border-[#BC8664] focus:ring-2 focus:ring-[#BC8664]/20"/>
            </div>

            <div>
                <label
                    htmlFor="property"
                    className="mb-2 block text-sm font-medium text-gray-600">
                
                    I am interested in
                </label>

                <select id="property" defaultValue="" required
                    className="w-full cursor-pointer rounded-lg border border-gray-200 bg-[#F8F9FA] px-4 py-3 text-sm text-gray-600 outline-none transition focus:border-[#BC8664] focus:ring-2 focus:ring-[#BC8664]/20">
                
                    <option value="" disabled>
                        What are you looking to do?
                    </option>

                    <option value="buy">
                        Buy a home
                    </option>

                    <option value="sell">
                        Sell a home
                    </option>

                    <option value="rent">
                        Rent a home
                    </option>

                    <option value="invest">
                        Invest in a property
                    </option>

                    <option value="other">
                        Other
                    </option>
                </select>
            </div>

            <div>
                <label htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-600">
                
                    Message
                </label>

                <textarea id="message" rows={7} placeholder="Write your message..." required
                    className="w-full resize-none rounded-lg border border-gray-200 bg-[#F8F9FA] px-4 py-3 text-sm outline-none transition focus:border-[#BC8664] focus:ring-2 focus:ring-[#BC8664]/20"/>
                
            </div>

            <button
                type="submit"
                className="w-full rounded-lg border border-[#BC8664] bg-[#BC8664] px-4 py-3 font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#BC8664]">
                Send Message
            </button>

        </form>

    </section>
);
}