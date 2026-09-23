import Image from "next/image";
import Link from "next/link";

type BlogPost = {
image: string;
h1: string;
p: string;
date: string;
link: string;
};

export default function BlogCard({ post }: { post: BlogPost }) {
return ( <article className="group">

        {/* Image */}
        <Link href={post.link}>
            <div className="relative overflow-hidden rounded-xl">
                <Image
                    src={post.image}
                    alt={post.h1}
                    width={800}
                    height={500}
                    className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>
        </Link>

        <div className="pt-4">

            <Link href={post.link}>
                <h2 className="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#BC8664]">
                    {post.h1}
                </h2>
            </Link>

            <p className="mt-3 text-sm leading-6 text-gray-600">
                {post.p}
            </p>

            <p className="mt-3 text-xs text-gray-500">
                {post.date}
            </p>

        </div>

    </article>
);
}