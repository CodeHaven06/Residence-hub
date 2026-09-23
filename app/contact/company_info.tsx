import Image from "next/image";
import {FaFacebookF, FaLinkedinIn, FaPinterestP, FaInstagram, FaXTwitter,} from "react-icons/fa6";

export default function CompanyInfo() {
    return (
        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

            <div>
                <p className="mb-2 text-sm font-medium tracking-[0.2em] text-[#BC8664]">
                    OUR OFFICE
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                    Company
                </h2>
                <p className="mt-4 text-sm leading-6 text-gray-500">
                    4710 Saint Ambroise St #305, Montreal,
                    Quebec H4C 2C7, Canada
                </p>
            </div>

            <div className="mt-6 flex items-center gap-4">
                <FaFacebookF className="cursor-pointer text-gray-500 transition-colors duration-300 hover:text-[#BC8664]" />
                <FaXTwitter className="cursor-pointer text-gray-500 transition-colors duration-300 hover:text-[#BC8664]" />
                <FaLinkedinIn className="cursor-pointer text-gray-500 transition-colors duration-300 hover:text-[#BC8664]" />
                <FaPinterestP className="cursor-pointer text-gray-500 transition-colors duration-300 hover:text-[#BC8664]" />
                <FaInstagram className="cursor-pointer text-gray-500 transition-colors duration-300 hover:text-[#BC8664]" />
            </div>

            <div className="mt-7 space-y-3 border-t border-gray-100 pt-6 text-sm">

                <div className="grid grid-cols-[75px_1fr] gap-2">
                    <span className="font-semibold text-gray-500">
                        Phone:
                    </span>

                    <span className="text-gray-800 hover:text-[#BC8664]">
                        +15144397662
                    </span>
                </div>

                <div className="grid grid-cols-[75px_1fr] gap-2">
                    <span className="font-semibold text-gray-500">
                        Mobile:
                    </span>

                    <span className="text-gray-800 hover:text-[#BC8664]">
                        +15144397663
                    </span>
                </div>

                <div className="grid grid-cols-[75px_1fr] gap-2">
                    <span className="font-semibold text-gray-500">
                        Email:
                    </span>

                    <span className="break-all text-gray-800 hover:text-[#BC8664]">
                        youremail@gmail.com
                    </span>
                </div>

            </div>

            <div className="mt-7 space-y-4 border-t border-gray-100 pt-6 text-sm leading-7 text-gray-600">

                <p>
                    Whether you're looking for property for sale or property
                    for rent, our platform makes searching easy. Use our unique
                    geolocation mapping feature to find your ideal villa,
                    townhouse or apartment and contact the owners directly.
                </p>

                <p>
                    We offer our clients a wealth of knowledge regarding all
                    aspects of purchasing or selling a home. Whether you are
                    searching for your dream home, exploring new real estate
                    developments, or selling your property, we would love the
                    opportunity to help.
                </p>

            </div>

            <div className="relative mt-7 overflow-hidden rounded-xl">
                <Image
                    src="/images/blog6.webp"
                    alt="Luxury property"
                    width={700}
                    height={450}
                    className="h-60 w-full object-cover transition duration-500 hover:scale-105"/>
            </div>

        </section>
    );
}