import Image from "next/image";
import Link from "next/link";

export default function SellHome() {
  return (
    <section className="px-5 py-12 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl">
        

        <Image src="https://static.wixstatic.com/media/9b228e_d165cace4fd147859efc9af2319dece9~mv2.jpg/v1/fill/w_2500,h_1667,al_c/9b228e_d165cace4fd147859efc9af2319dece9~mv2.jpg"
          alt="Modern luxury home" fill className="object-fit"/>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex min-h-[430px] max-w-xl flex-col justify-center px-7 py-12 sm:px-12 lg:px-16">
          
          <h2 className="max-w-md text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Sell Your Home With Confidence
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
            Are you curious about the precise value of your home or its
            potential selling price? Benefit from our extensive expertise in
            the luxury home market.
          </p>

          <Link
            href="/contact"
            className="mt-8 w-fit rounded-md border border-white px-7 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-gray-900">
            Book a valuation
          </Link>

        </div>
      </div>
    </section>
  );
}