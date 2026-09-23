import CompanyInfo from "./company_info";
import Contact_Me from "./contactme";
import ContactSidebar from "./contact_sidebar";

export default function Contact() {
return ( <main className="min-h-screen bg-[#F8F9FA]">

        {/* =====================================
            PAGE HEADER
        ====================================== */}
        <section className="px-5 pb-10 pt-14 sm:px-8 md:pt-20 lg:px-12">

            <div className="mx-auto max-w-7xl text-center">

                <p className="mb-3 text-sm font-medium tracking-[0.25em] text-[#BC8664]">
                    GET IN TOUCH
                </p>

                <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
                    Contact Us
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                    Have questions about a property or looking for your next
                    investment? Our team is here to help you find the right
                    opportunity.
                </p>

            </div>

        </section>


        {/* =====================================
            MAIN CONTACT SECTION
        ====================================== */}
        <section className="px-5 pb-16 sm:px-8 md:pb-20 lg:px-12">

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">

                {/* =================================
                    LEFT CONTENT
                ================================== */}
                <div className="flex flex-col gap-8">

                    {/* Company */}
                    <CompanyInfo />

                    {/* Contact Form */}
                    <Contact_Me />

                </div>


                {/* =================================
                    RIGHT SIDEBAR
                ================================== */}
                <div className="lg:sticky lg:top-6 lg:h-fit">

                    <ContactSidebar />

                </div>

            </div>

        </section>

    </main>
);
}