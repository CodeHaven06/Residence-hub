import Image from "next/image";
import {
FaFacebookF,
FaXTwitter,
FaLinkedinIn,
FaPinterestP,
FaInstagram,
FaYoutube,
FaTelegram,
FaVimeoV,
FaTiktok,
} from "react-icons/fa6";

export default function Agent_Img() {
const social = [
FaFacebookF,
FaXTwitter,
FaLinkedinIn,
FaPinterestP,
FaInstagram,
FaYoutube,
FaTelegram,
FaVimeoV,
FaTiktok,
];

return (
    <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
        <div className="relative">
 
            <div className="overflow-hidden rounded-xl">
                <Image
                    src="/images/person2.webp"
                    alt="Maria Barlow"
                    width={700}
                    height={700}
                    className="h-[400px] w-full object-cover sm:h-[500px]"
                />
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-xl bg-white px-5 py-3 shadow-lg sm:px-7">
                <div className="flex flex-wrap justify-center gap-3 text-gray-500 sm:gap-4">

                    {social.map((Icon, index) => (
                        <Icon
                            key={index}
                            size={16}
                            className="cursor-pointer transition-colors duration-300 hover:text-[#BC8664]"
                        />
                    ))}

                </div>
            </div>

        </div>
    </section>
);
}