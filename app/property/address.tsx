"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";

export default function Address() {
const [open, setOpen] = useState(true);

return (
    <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

        <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between"
        >
            <div className="flex items-center gap-3">
                <MapPin
                    size={20}
                    className="text-[#BC8664]"
                />

                <h2 className="text-lg font-semibold text-gray-900">
                    Address
                </h2>
            </div>

            {open ? (
                <ChevronUp size={21} className="text-gray-500" />
            ) : (
                <ChevronDown size={21} className="text-gray-500" />
            )}
        </button>

        {open && (
            <div className="mt-6 space-y-3 text-sm text-gray-600">

                <p>
                    <span className="font-semibold text-gray-800">
                        Address:
                    </span>{" "}
                    8367 W Flamingo Rd Suite 101
                </p>

                <p>
                    <span className="font-semibold text-gray-800">
                        City:
                    </span>{" "}
                    <span className="text-gray-600 hover:text-[#BC8664]">
                        Denver
                    </span>
                </p>

                <p>
                    <span className="font-semibold text-gray-800">
                        Area:
                    </span>{" "}
                    <span className="text-gray-600 hover:text-[#BC8664]">
                        Washington Park
                    </span>
                </p>

                <p>
                    <span className="font-semibold text-gray-800">
                        State/County:
                    </span>{" "}
                    Quebec
                </p>

                <p>
                    <span className="font-semibold text-gray-800">
                        Zip:
                    </span>{" "}
                    NV 89147
                </p>

                <p>
                    <span className="font-semibold text-gray-800">
                        Country:
                    </span>{" "}
                    United States
                </p>

                <button
                    type="button"
                    className="mt-3 rounded-lg bg-[#BC8664] px-4 py-2 text-sm font-medium text-white transition hover:bg-black"
                >
                    Open in Google Maps
                </button>

            </div>
        )}

    </section>
);
}