"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

const propertyTypes = [
  "Residential",
  "Apartments",
  "Single Homes",
  "Studios",
  "Condos",
  "Commercial",
  "Shops",
];

const saleTypes = ["For Rent", "For Sale"];

const propertyStatus = ["Active", "Pending", "Sold"];

export default function Select_Options() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [saleType, setSaleType] = useState("");
  const [status, setStatus] = useState("");

  const handleSearch = () => {
    console.log({
      location,
      type,
      saleType,
      status,
    });
  };

  return (
    <section className="bg-[#F8F9FA] px-5 pt-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">

        <div className="rounded-full bg-white p-2 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">

            {/* Location */}
            <div className="flex items-center px-5 py-3 md:py-2">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Search by location"
                className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-500"
              />
            </div>

            {/* Property Type */}
            <div className="px-5 py-3 md:py-2">
              <NativeSelect
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full border-0 bg-transparent text-sm text-gray-600 shadow-none outline-none"
              >
                <NativeSelectOption value="">
                  Property Type
                </NativeSelectOption>

                {propertyTypes.map((item) => (
                  <NativeSelectOption
                    key={item}
                    value={item.toLowerCase().replace(/\s+/g, "-")}
                  >
                    {item}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            </div>

            {/* Sell or Rent */}
            <div className="px-5 py-3 md:py-2">
              <NativeSelect
                value={saleType}
                onChange={(e) => setSaleType(e.target.value)}
                className="w-full border-0 bg-transparent text-sm text-gray-600 shadow-none outline-none"
              >
                <NativeSelectOption value="">
                  Sell or Rent
                </NativeSelectOption>

                {saleTypes.map((item) => (
                  <NativeSelectOption
                    key={item}
                    value={item.toLowerCase().replace(/\s+/g, "-")}
                  >
                    {item}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            </div>

            {/* Property Status + Search */}
            <div className="flex items-center gap-3 px-3 py-3 md:py-2">
              <NativeSelect
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="min-w-0 flex-1 border-0 bg-transparent text-sm text-gray-600 shadow-none outline-none"
              >
                <NativeSelectOption value="">
                  Property Status
                </NativeSelectOption>

                {propertyStatus.map((item) => (
                  <NativeSelectOption
                    key={item}
                    value={item.toLowerCase()}
                  >
                    {item}
                  </NativeSelectOption>
                ))}
              </NativeSelect>

              <button
                type="button"
                onClick={handleSearch}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6B3025] text-white transition hover:bg-[#BC8664]"
                aria-label="Search properties"
              >
                <Search size={18} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}