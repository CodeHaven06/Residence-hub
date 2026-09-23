"use client";

import { useState } from "react";
import {
ChevronDown,
ChevronUp,
} from "lucide-react";

import DoughnutChart from "./doughnut";

export default function Calculator() {
const [open, setOpen] = useState(true);

return (
    <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

        <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between">
        
            <h2 className="text-lg font-semibold text-gray-900">
                Calculator
            </h2>

            {open ? (
                <ChevronUp size={21} className="text-gray-500" />
            ) : (
                <ChevronDown size={21} className="text-gray-500" />
            )}
        </button>

        {open && (
            <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">

                {/* Chart */}
                <div className="flex items-center justify-center">
                    <DoughnutChart />
                </div>

                {/* Inputs */}
                <div className="space-y-4">

                    <div>
                        <p className="text-sm text-gray-500">
                            Principal and Interest
                        </p>

                        <p className="mt-1 font-medium text-gray-900">
                            $2.13
                        </p>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">
                            Property Tax
                        </label>

                        <input
                            type="number"
                            placeholder="0.6875"
                            className="mt-1.5 w-full rounded-lg border border-gray-200 bg-[#F8F9FA] p-3 outline-none focus:border-[#BC8664]"/>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">
                            Private Mortgage Insurance (PMI)
                        </label>

                        <input
                            type="number"
                            placeholder="0"
                            className="mt-1.5 w-full rounded-lg border border-gray-200 bg-[#F8F9FA] p-3 outline-none focus:border-[#BC8664]"/>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">
                            Monthly HOA Fees
                        </label>

                        <input
                            type="number"
                            placeholder="0"
                            className="mt-1.5 w-full rounded-lg border border-gray-200 bg-[#F8F9FA] p-3 outline-none focus:border-[#BC8664]"/>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">
                            Total Amount
                        </label>

                        <input
                            type="number"
                            defaultValue={555}
                            className="mt-1.5 w-full rounded-lg border border-gray-200 bg-[#F8F9FA] p-3 outline-none focus:border-[#BC8664]"/>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">
                            Down Payment
                        </label>

                        <input
                            type="number"
                            defaultValue={110}
                            className="mt-1.5 w-full rounded-lg border border-gray-200 bg-[#F8F9FA] p-3 outline-none focus:border-[#BC8664]"/>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">
                            Loan Terms (Years)
                        </label>

                        <input
                            type="number"
                            defaultValue={30}
                            className="mt-1.5 w-full rounded-lg border border-gray-200 bg-[#F8F9FA] p-3 outline-none focus:border-[#BC8664]"/>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">
                            Interest
                        </label>

                        <input
                            type="number"
                            defaultValue={4.125}
                            className="mt-1.5 w-full rounded-lg border border-gray-200 bg-[#F8F9FA] p-3 outline-none focus:border-[#BC8664]"/>
                    </div>

                </div>

            </div>
        )}

    </section>
);
}