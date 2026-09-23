type SpecialtiesProps = {
    specialties: string[];
};

export default function Specialties({
    specialties,
}: SpecialtiesProps) {

    return (
        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

            <h2 className="text-xl font-semibold text-gray-900">
                Specialties
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">

                {specialties.map((item) => (
                    <span
                        key={item}
                        className="rounded-full border border-[#BC8664]/30 bg-[#BC8664]/5 px-4 py-2 text-sm text-gray-700"
                    >
                        {item}
                    </span>
                ))}

            </div>

        </section>
    );
}