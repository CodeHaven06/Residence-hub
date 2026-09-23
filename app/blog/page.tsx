"use client";

import BlogCard from "./blog_card";
import BlogSidebar from "./blog_sidebar";

export default function Blog() {

const blogPosts = [
    {
        image: "/images/blog1.jpeg",
        h1: "Why Live in Denver",
        p: "New York County as a whole covers a total area of 33.77 square miles (87.5 km2), ...",
        date: "Published on March 4, 2016",
        link: "/latest_listings",
    },
    {
        image: "/images/blog2.jpeg",
        h1: "Why Move to Denver",
        p: "New York County as a whole covers a total area of 33.77 square miles (87.5 km2), ...",
        date: "Published on March 4, 2016",
        link: "/latest_listings",
    },
    {
        image: "/images/blog3.jpeg",
        h1: "Buying a Ranch in Denver",
        p: "New York County as a whole covers a total area of 33.77 square miles (87.5 km2), ...",
        date: "Published on May 28, 2014",
        link: "/latest_listings",
    },
    {
        image: "/images/blog4.jpg",
        h1: "The Perfect Land in Reno",
        p: "New York County as a whole covers a total area of 33.77 square miles (87.5 km2), ...",
        date: "Published on May 27, 2014",
        link: "/latest_listings",
    },
    {
        image: "/images/blog5.jpeg",
        h1: "Life in Denver",
        p: "A modern redrawing of the 1807 version of the Commissioner's Grid plan for Manhattan ...",
        date: "Published on May 27, 2014",
        link: "/latest_listings",
    },
    {
        image: "/images/blog6.webp",
        h1: "Real Estate Promotion",
        p: "New York County as a whole covers a total area of 33.77 square miles (87.5 km2), ...",
        date: "Published on May 27, 2014",
        link: "/latest_listings",
    },
];

return (
    <main className="min-h-screen bg-[#F8F9FA] px-5 py-12 sm:px-8 md:py-16 lg:px-12">

        <div className="mx-auto max-w-7xl">

            {/* =================================
                PAGE HEADER
            ================================== */}
            <section className="mb-12">

                <p className="mb-2 text-sm font-medium tracking-[0.2em] text-[#BC8664]">
                    OUR BLOG
                </p>

                <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
                    Blog List
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                    Discover useful insights, property guides and the latest
                    trends from the real estate world.
                </p>

            </section>


            {/* =================================
                MAIN CONTENT
            ================================== */}
            <section className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">

                {/* =================================
                    BLOG POSTS
                ================================== */}
                <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2">

                    {blogPosts.map((post) => (
                        <BlogCard
                            key={post.h1}
                            post={post}
                        />
                    ))}

                </div>


                {/* =================================
                    SIDEBAR
                ================================== */}
                <div className="lg:sticky lg:top-6 lg:h-fit">

                    <BlogSidebar />

                </div>

            </section>

        </div>

    </main>
);
}