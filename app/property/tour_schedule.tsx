"use client";

import { useState } from "react";
import {
ChevronDown,
ChevronUp,
} from "lucide-react";

export default function Tour_Schedule() {
const [open, setOpen] = useState(true);
const [selected, setSelected] = useState("In Person");


return (
    <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

        <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between"
        >
            <h2 className="text-lg font-semibold text-gray-900">
                Schedule a Tour
            </h2>

            {open ? (
                <ChevronUp size={21} className="text-gray-500" />
            ) : (
                <ChevronDown size={21} className="text-gray-500" />
            )}
        </button>

        {open && (
            <div className="mt-7 space-y-5">

                {/* Date / Time */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-600">
                        Preferred Date & Time
                    </label>

                    <input
                        type="datetime-local"
                        className="w-full rounded-lg border border-gray-200 bg-[#F8F9FA] p-3 text-sm outline-none focus:border-[#BC8664] focus:ring-2 focus:ring-[#BC8664]/20"
                    />
                </div>

                {/* Tour Type */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-600">
                        Tour Type
                    </label>

                    <div className="grid grid-cols-2 gap-3">

                        <button
                            type="button"
                            onClick={() => setSelected("In Person")}
                            className={`rounded-lg border py-3 text-sm transition ${
                                selected === "In Person"
                                    ? "border-[#BC8664] bg-[#BC8664]/5 text-[#BC8664]"
                                    : "border-gray-200 text-gray-500 hover:border-[#BC8664]"
                            }`}
                        >
                            🙍‍♂️ In Person
                        </button>

                        <button
                            type="button"
                            onClick={() => setSelected("Video Chat")}
                            className={`rounded-lg border py-3 text-sm transition ${
                                selected === "Video Chat"
                                    ? "border-[#BC8664] bg-[#BC8664]/5 text-[#BC8664]"
                                    : "border-gray-200 text-gray-500 hover:border-[#BC8664]"
                            }`}
                        >
                            📷 Video Chat
                        </button>

                    </div>
                </div>

                {/* Name */}
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-lg border border-gray-200 bg-[#F8F9FA] p-3 text-sm outline-none focus:border-[#BC8664]"
                />

                {/* Email */}
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-gray-200 bg-[#F8F9FA] p-3 text-sm outline-none focus:border-[#BC8664]"
                />

                {/* Phone */}
                <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full rounded-lg border border-gray-200 bg-[#F8F9FA] p-3 text-sm outline-none focus:border-[#BC8664]"
                />

                {/* Looking For */}
                <select
                    defaultValue=""
                    className="w-full cursor-pointer rounded-lg border border-gray-200 bg-[#F8F9FA] p-3 text-sm text-gray-600 outline-none focus:border-[#BC8664]"
                >
                    <option value="" disabled>
                        What are you looking to do?
                    </option>

                    <option>Buy a home</option>
                    <option>Sell a home</option>
                    <option>Rent a home</option>
                    <option>Invest in a property</option>
                    <option>Other</option>
                </select>

                {/* Message */}
                <textarea
                    rows={5}
                    placeholder="I would like to schedule a tour for this property..."
                    className="w-full resize-none rounded-lg border border-gray-200 bg-[#F8F9FA] p-3 text-sm outline-none focus:border-[#BC8664]"
                />

                {/* Button */}
                <button
                    type="button"
                    className="w-full rounded-lg border border-[#BC8664] bg-[#BC8664] py-3 font-medium text-white transition hover:bg-white hover:text-[#BC8664]"
                >
                    Send Request
                </button>

            </div>
        )}

    </section>
);
}