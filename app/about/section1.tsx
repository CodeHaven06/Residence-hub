import Image from "next/image";

export default function Section1() {
    return (
        <section className="relative h-[500px] w-full md:h-[600px] lg:h-[650px]">
            <Image
                src="/images/section1.jpg"
                alt="Our real estate team"
                fill
                priority
                className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
                <p className="mb-3 text-sm font-medium tracking-[0.25em] text-white md:text-base">
                    GET TO KNOW OUR TALENTED TEAM
                </p>

                <h1 className="text-4xl font-medium tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    MORE ABOUT US
                </h1>
            </div>
        </section>
    );
}