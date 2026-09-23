import Image from "next/image"
import Link from "next/link"
import { review } from "../about/reviews"


export default function Agents_Review() {
    return (
        <section className="bg-[#F8F9FA] px-5 py-16 sm:px-8 lg:px-12">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

                <div className="flex flex-col gap-4">
                    <h1 className="text-xl font-medium">
                        What our clients say about our services after they buy or sell a home with our agency
                    </h1>
                    <p className="font-medium text-gray-700">
                        Founded in 2012, Denver Real Estate Group is a locally and female owned, residential real estate agency with offices throughout our state area.
                    </p>

                    <div className="flex gap-8">
                        <div className="flex flex-wrap gap-3 pt-2">
                            <Link
                                href="/about"
                                className="rounded-lg bg-[#BC8664] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
                                About Us
                            </Link>

                            <Link
                                href="/agents/agents_list"
                                className="rounded-lg border-2 border-[#BC8664] px-6 py-3 text-sm font-medium text-gray-900 transition-colors duration-300 hover:bg-[#BC8664] hover:text-white">
                                Our Agents
                            </Link>
                        </div>

                    </div>
                </div>

                {review.map((review) => (
                    <div
                        key={review.name}
                        className="rounded-xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div className="flex items-center gap-4">
                            <Image
                                src={review.image}
                                alt={review.name}
                                width={55}
                                height={55}
                                className="h-14 w-14 rounded-full object-cover" />
                            <div>
                                <h3 className="font-semibold text-gray-900">
                                    {review.name}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    {review.role}
                                </p>
                            </div>
                        </div>

                        <p className="mt-6 text-sm leading-7 text-gray-600">
                            {review.text}
                        </p>

                        <div className="mt-5 text-sm tracking-widest">
                            ⭐⭐⭐⭐⭐
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}