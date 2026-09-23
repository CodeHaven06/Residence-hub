export default function Reviews() {
return ( <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Reviews
        </h2>

        <p className="mt-5 text-sm text-gray-600">
            No reviews found.
        </p>

        <div className="mt-5 rounded-lg bg-[#F8F9FA] p-4 text-sm text-gray-500">
            You need to log in in order to post a review.
        </div>

    </section>
);
}