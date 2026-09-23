import { Heart, BedDouble, Bath, Ruler } from "lucide-react";
import { properties } from "./property_data";

export default function PropertySection() {
  return (
    <section className="px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <p className="text-sm font-medium tracking-[0.2em] text-[#BC8664]">
            OUR PROPERTIES
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-gray-900">
            Featured Properties
          </h2>
        </div>
        

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((property) => (
            <div
              key={property.title}
              className="overflow-hidden rounded-xl bg-white shadow-sm">
              <div className="relative h-50 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  
                  className="object-cover transition duration-500 hover:scale-105"/>

                {property.featured && (
                  <span className="absolute left-3 top-3 rounded bg-[#BC8664] px-3 py-1 text-xs font-medium text-white">
                    Featured
                  </span>
                )}

                <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90">
                  <Heart size={17} className="text-gray-600" />
                </button>
              </div>


              <div className="">
                <p className=" text-gray-500">
                  {property.type} · {property.status}
                </p>

                <h3 className="mt-2 text-base text-lg font-semibold text-gray-900">
                  {property.title}
                </h3>

                <p className="mt-3 font-medium text-[#BC8664]">
                  {property.price}
                </p>

                <div className="mt-4 flex items-center gap-4 border-t border-gray-100  text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <BedDouble size={15} />
                    {property.bedrooms}
                  </span>

                  <span className="flex items-center gap-1">
                    <Bath size={15} />
                    {property.bathrooms}
                  </span>

                  <span className="flex items-center gap-1">
                    <Ruler size={15} />
                    {property.size}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}