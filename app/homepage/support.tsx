"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    title: "Phone",
    value: "+1 840 841 25 69",
    icon: Phone,
  },
  {
    title: "Email",
    value: "support@example.com",
    icon: Mail,
  },
  {
    title: "Office Address",
    value: "123 Main Street, Denver, CO",
    icon: MapPin,
  },
];

export default function Support() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#F8F9FA] px-5 py-16 sm:px-8 md:py-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Left Side */}
        <div className="flex flex-col justify-center gap-10">
          <div>
            <p className="mb-2 text-sm font-medium tracking-[0.2em] text-[#BC8664]">
              SUPPORT
            </p>

            <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              In need of support?
              <br />
              Get in touch
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
              Our dedicated support team is available 24/7 to help you
              with any questions or concerns.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4 text-left"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      className="text-[#BC8664]"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side */}
        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Send us a message
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Fill out the form and our team will get back to you.
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Name
              </label>

              <input
                type="text"
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#BC8664]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#BC8664]"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Message
              </label>

              <textarea
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#BC8664]"
                placeholder="Write your message..."
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-gray-500">
              <input type="checkbox" required className="mt-1 accent-[#BC8664]" />
              <span>
                I agree to the processing of my personal data.
              </span>
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#BC8664] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              <Send size={17} />
              {submitted ? "Message Sent" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}