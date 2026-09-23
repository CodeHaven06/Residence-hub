"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const details = [
["Property ID", "21703"],
["Price", "$120,000"],
["Property Size", "250 sq.ft"],
["Property Lot Size", "600 sq.ft"],
["Rooms", "3"],
["Bedrooms", "5"],
["Bathrooms", "3"],
["Custom ID", "174"],
["Year Built", "2000"],
["Garage Size", "1 car"],
["Basement", "Cement"],
];

export default function Detail() {
const [open, setOpen] = useState(true);

return (
    <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

        <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between"
        >
            <h2 className="text-lg font-semibold text-gray-900">
                Details
            </h2>

            {open ? (
                <ChevronUp size={21} className="text-gray-500" />
            ) : (
                <ChevronDown size={21} className="text-gray-500" />
            )}
        </button>

        {open && (
            <div className="mt-6 grid grid-cols-1 gap-y-3 text-sm sm:grid-cols-2">

                {details.map(([label, value]) => (
                    <div
                        key={label}
                        className="flex justify-between gap-4 border-b border-gray-100 pb-2 pr-4"
                    >
                        <span className="text-gray-500">
                            {label}
                        </span>

                        <span className="text-right font-medium text-gray-800">
                            {value}
                        </span>
                    </div>
                ))}

            </div>
        )}

    </section>
);
}