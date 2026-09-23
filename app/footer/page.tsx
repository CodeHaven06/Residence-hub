import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    const icons = [
        { image: "/images/facebook.png", alt: "facebook" },
        { image: "/images/WhatsApp.png", alt: "WhatsApp" },
        { image: "/images/telegram.png", alt: "telegram" },
        { image: "/images/tiktok.png", alt: "tiktok" },
        { image: "/images/twitter.png", alt: "twitter" },
        { image: "/images/linkedin.png", alt: "linkedin" },
        { image: "/images/line.png", alt: "line" },
        { image: "/images/wechat.png", alt: "wechat" }
    ];
    return (
        <main className="bg-black">
            <div className="max-w-7xl mx-auto px-6 py-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="flex flex-col gap-1.5">
                        <h1 className="text-lg text-white font-medium">
                            WP RESIDENCE
                        </h1>
                        <p className="text-white/50 ">
                            WP RESIDENCE is committed to delivering a high level of expertise, customer service, and attention to detail to the marketing and sales of luxury real estate, and rental properties.
                        </p>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <h1 className="text-lg text-white font-medium">
                            CONTACT
                        </h1>
                        <p className="text-white/50 ">
                            3755 Commercial St SE Salem
                        </p>
                        <p className="text-white/50 cursor-pointer hover:text-[#bc8664]">
                            (305) 555-4446
                        </p>
                        <Link href="">
                            <p className="text-white/50 hover:text-[#bc8664]">
                                youremails@gmail.com
                            </p>
                        </Link>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <h1 className="text-lg text-white font-medium">
                            QUICK LINKS
                        </h1>
                        <p className="text-white/50 hover:text-[#bc8664] cursor-pointer">
                            About
                        </p>
                        <p className="text-white/50 hover:text-[#bc8664] cursor-pointer">
                            Site Map
                        </p>
                        <p className="text-white/50 hover:text-[#bc8664] cursor-pointer">
                            Support Center
                        </p>
                        <p className="text-white/50 hover:text-[#bc8664] cursor-pointer">
                            Terms Conditions
                        </p>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <h1 className="text-lg text-white font-medium">
                            SOCIAL LINKS:
                        </h1>
                        <div className="flex flex-wrap gap-2.5 bg-pink">
                            {icons.map((icon) => (
                                <div key={icon.image} className="w-10 h-10 bg-[#bc8664] rounded-lg flex items-center justify-center hover:bg-[#a97556] transition">
                                    <Image src={icon.image} alt={icon.alt} width={22} height={22}
                                        className="object-contain" />
                                </div>

                            ))}
                        </div>
                    </div>

                </div>


                <div className="mt-8 pt-6 flex flex-col sm:flex-row justify-between gap-4">
                    <p className="text-white/50">
                        Copyright All rights reserved.
                    </p>

                    <p className="text-white/50">
                        Terms of Service Privacy Policy
                    </p>
                </div>

            </div>
            {/* <div className="col-span-1 md:col-span-4 flex flex-col gap-2 pt-8 md:flex-row md:justify-between"> */}
        </main>
    )
}       