"use client";

import {House, Building2, Home, Warehouse, Store, Hotel, Building,} from "lucide-react";

const categories = [
  { name: "For Sale", icon: House },
  { name: "For Rent", icon: Building2 },
  { name: "Residential", icon: Home },
  { name: "Apartments", icon: Building },
  { name: "Single Homes", icon: House },
  { name: "Studios", icon: Hotel },
  { name: "Condos", icon: Building2 },
  { name: "Commercial", icon: Warehouse },
  { name: "Shops", icon: Store },
];

export default function PropertyCategories() {
  return (
    <section className="bg-[#F8F9FA] px-5 py-12 lg:px-12">
      <div className="mx-auto max-w-5xl">

        <div className="grid grid-cols-5 lg:grid-cols-9 gap-y-5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                type="button"
                className="group flex flex-col items-center gap-2 text-center">
              
                <Icon
                  size={28}
                  strokeWidth={1.2}
                  className="text-gray-700 transition-colors duration-300 group-hover:text-[#BC8664]"/>
            
                <span className="text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-[#BC8664]">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}