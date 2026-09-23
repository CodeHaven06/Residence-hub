"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Why is it considered necessary to register Agreement for Sale?",
        answer:
            "The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration of an agreement for sale of an immovable property. By registering the agreement, it becomes a permanent public record.",
    },
    {
        question: "What is Carpet Area?",
        answer:
            "Carpet Area is the net usable floor area inside the apartment, excluding external walls, balconies and terraces.",
    },
    {
        question: "How can I qualify for exemptions on the Capital Gains Tax?",
        answer:
            "You may qualify by reinvesting the gains in another residential property, subject to applicable tax laws.",
    },
    {
        question: "Do I need to pay stamp duty if the property is transferred or is a gift?",
        answer:
            "Yes, stamp duty may still apply depending on your state regulations and the nature of the transfer.",
    },
    {
        question: "What are the documents a buyer would need from me?",
        answer:
            "Typically title deed, sale agreement, tax receipts, identity proof and property-related approvals are required.",
    },
    {
        question: "How soon would I receive a call from you after writing?",
        answer:
            "Our team usually contacts you within 24 working hours after receiving your enquiry.",
    },
];

export default function Questions() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section className="bg-[#F8F9FA] px-5 py-20 sm:px-8 md:px-12 lg:px-20 lg:py-28">
            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-medium text-gray-900 sm:text-4xl">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-5 text-base leading-7 text-gray-500">
                        You can use this guide to familiarize yourself with rules,
                        laws and other important information relating to your property.
                    </p>
                </div>

                {/* FAQ */}
                <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 lg:grid-cols-2">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={faq.question}
                                className="overflow-hidden rounded-lg border border-gray-200 bg-white"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggle(index)}
                                    className="flex w-full items-center justify-between gap-5 p-5 text-left"
                                >
                                    <span className="text-base font-semibold text-gray-900 md:text-lg">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        className={`h-5 w-5 shrink-0 text-gray-700 transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ${
                                        isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-5 pb-5 text-sm leading-7 text-gray-500 md:text-base">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}