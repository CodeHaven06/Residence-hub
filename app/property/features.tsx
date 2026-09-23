"use client";

import { useState } from "react";
import {
ChevronDown,
ChevronUp,
CircleCheck,
} from "lucide-react";

const categories = {
"Interior Details": [
"Equipped Kitchen",
"Fireplace",
"Gym",
"Hot Bath",
"Laundry",
"Media Room",
],


"Outdoor Details": [
    "Back yard",
    "Basketball court",
    "Chair Accessible",
    "Garage Attached",
    "Pool",
    "Water",
],

Utilities: [
    "Central Air",
    "Electricity",
    "Heating",
    "Natural Gas",
    "Smoke detectors",
    "Ventilation",
],

Other: [
    "Elevator",
    "Washer and dryer",
    "WiFi",
],

};

export default function Features() {
const [open, setOpen] = useState(true);

return (
    <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

        <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between"
        >
            <h2 className="text-lg font-semibold text-gray-900">
                Features
            </h2>

            {open ? (
                <ChevronUp size={21} className="text-gray-500" />
            ) : (
                <ChevronDown size={21} className="text-gray-500" />
            )}
        </button>

        {open && (
            <div className="mt-7 grid grid-cols-1 gap-8 sm:grid-cols-2">

                {Object.entries(categories).map(
                    ([category, items]) => (
                        <div key={category}>

                            <h3 className="mb-4 text-sm font-semibold text-gray-900">
                                {category}
                            </h3>

                            <div className="space-y-3">
                                {items.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 text-sm text-gray-600"
                                    >
                                        <CircleCheck
                                            size={16}
                                            className="shrink-0 text-[#BC8664]"
                                            strokeWidth={2.5}
                                        />

                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    )
                )}

            </div>
        )}

    </section>
);
}