import Image from "next/image"
import Link from "next/link"


export default function Latest_Listings() {
    return (
        <main className="bg-white rounded-lg px-4 pt-7 pb-4 mt-5 flex flex-col">
            <h1 className=" font-semibold">
                Latest Listings
            </h1>
            <div className="flex gap-3 bg-pink rounded-xl p-3">
                <div>
                    <Link href="/about">
                        <Image src="/images/listimg1.jpeg" alt="list_img1" width={110} height={100}
                            className="rounded-xl hover:brightness-110" />
                    </Link>
                </div>
 {/* 1st */}
                <div className="flex flex-col gap-1 justify-center">
                    <Link href="/about">
                        <h3 className="font-semibold hover:text-[#bc8664]">
                            Villa with Amazing View
                        </h3>
                    </Link>
                    <p className="text-[#bc8664] font-medium">
                        $5,500,000
                    </p>
                </div>
            </div>
 {/* 2nd */}
            <div className="flex gap-3 bg-pink rounded-xl p-3">
                <div>
                    <Link href="/about">
                        <Image src="/images/listimg2.jpeg" alt="list_img2" width={110} height={100}
                            className="rounded-xl hover:brightness-110" />
                    </Link>
                </div>
                <div className="flex flex-col gap-1 justify-center">
                    <Link href="/about">
                        <h3 className="font-semibold hover:text-[#bc8664]">
                            Townhouse for Sale
                        </h3>
                    </Link>
                    <p className="text-[#bc8664] font-medium">
                        $210,000
                    </p>
                </div>
            </div>
 {/* 3rd */}
            <div className="flex gap-3 bg-pink rounded-xl p-3">
                <div>
                    <Link href="/about">
                        <Image src="/images/listimg3.jpg" alt="list_img3" width={110} height={100}
                            className="rounded-xl hover:brightness-110" />
                    </Link>
                </div>
                <div className="flex flex-col gap-1 justify-center">
                    <Link href="/about">
                        <h3 className="font-semibold hover:text-[#bc8664]">
                            Townhouse for Rent
                        </h3>
                    </Link>
                    <p className="text-[#bc8664] font-medium">
                        $100/sq.ft.
                    </p>
                </div>
            </div>
        </main>
    )
}