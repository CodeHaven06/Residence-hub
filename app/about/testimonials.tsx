import Image from "next/image";
import { review } from "./reviews";

export default function Testimonials() {
    return (
        <section className="bg-white px-5 py-20 sm:px-8 md:px-12 lg:px-20 lg:py-28">
            <div className="mx-auto max-w-6xl">

                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <h2 className="text-3xl font-medium text-gray-900 sm:text-4xl">
                        Testimonials
                    </h2>

                    <p className="mt-5 text-base leading-7 text-gray-500 md:text-lg">
                        Publish the best of your client testimonials and let the
                        world know what a great agent or real estate agency you are.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            </div>
        </section>
    );
}