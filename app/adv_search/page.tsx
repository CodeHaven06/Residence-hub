"use client";
// import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
// import { Slider } from "@/components/ui/slider"



export default function Adv_Search() {
    const [radius, setRadius] = useState(1);
    const [price, setPrice] = useState([0, 10000000]);
    const [showOptions, setShowOptions] = useState(false);

    return (    
        <main className="bg-white rounded-lg px-7 py-7 flex flex-col gap-3">
            <h1 className=" font-semibold mb-2">
                Advanced Search
            </h1>

            <input type="text" placeholder="Location"
                className="border border-gray-300  rounded-lg px-4 py-2 placeholder:text-sm focus:bg-[#dee2e6] focus:outline-none" />

            <div>
                <label className="block text-black/50 text-md">
                    Radius: {radius} miles
                </label>

                <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={radius}
                    onChange={(e) => setRadius(parseInt(e.target.value))}
                    className="w-full accent-[#bc8664] "/>
            </div>

            <select
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-500 cursor-pointer">
                <option>Sell or Rent</option>
                <option> For Rent</option>
                <option>For Sale</option>
            </select>

            <select
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-500 cursor-pointer">
                <option>Bedrooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6+</option>
            </select>

            <select
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-500 cursor-pointer">
                <option>Listing Status</option>
                <option> Active</option>
                <option>open House</option>
            </select>

            <select
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-500 cursor-pointer">
                <option>Bathrooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6+</option>
            </select>

            <input type="text" placeholder="Keyword"
                className="border border-gray-300 rounded-lg px-4 py-2 placeholder:text-sm focus:bg-[#dee2e6] focus:outline-none" />

            <select
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-500 cursor-pointer">
                <option>Property Category</option>
                <option>Commercial</option>
                <option>- Office</option>
                <option>- Shop</option>
                <option>Residential</option>
                <option>- Apartment</option>
                <option>- Condo</option>
                <option>- Multi Family House</option>
                <option>- Single Family Home</option>
                <option>- Studio</option>
            </select>

            <div>
                <label className="block text-black/50 text-md">
                    Price range: ${price[0].toLocaleString()} to ${price[1].toLocaleString()}

                </label>
                {/* <Slider
                    range min={0} max={10000000} step={1000} value={price}
                    onChange={(value) => setPrice(value)} /> */}
            </div>

            <div className="text-[#bc8664] text-sm cursor-pointer font-medium">
                More Search Options
            </div>

            <div>
                <button className=" w-full bg-[#bc8664] text-white px-4 py-2 rounded-lg cursor-pointer
                 hover:bg-white hover:text-[#bc8664] border border-[#bc8664] transition-colors duration-300">
                    Search
                </button>
            </div>

        </main>
    );
} 