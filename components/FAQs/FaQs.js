"use client";

import { useState, useCallback } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";


const faqs = [
  {
    question: "What services does BeingxBot provide?",
    answer:
      "We provide Web Design, Development, SEO, Hosting, and Digital Marketing — all tailored to your business needs.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Depending on complexity, it can take anywhere from 7 to 21 days. We ensure quality over speed, always.",
  },
  {
    question: "Will my website be mobile-friendly and responsive?",
    answer:
      "Absolutely. Every website we build is designed to work flawlessly on mobile, tablet, and desktop devices.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes, we can! Whether your current site looks outdated or needs new features, we can give it a fresh, modern upgrade that performs better.",
  },
  {
    question: "Can I update or manage my website after it's launched?",
    answer:
      "Yes! You’ll have full access, and we also provide maintenance and support plans if you want us to manage it for you.",
  },
  {
    question: "Do you offer SEO and digital marketing services?",
    answer:
      "Yes, we offer complete SEO services to boost your visibility, along with digital marketing strategies to grow your brand online.",
  },
  {
    question: "How do I get started with BeingxBot?",
    answer:
      "Just reach out through our contact form or WhatsApp. We'll schedule a quick call to understand your vision and kick things off.",
  },
];


export default function FaqsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = useCallback(
    (index) => {
      setOpenIndex(openIndex === index ? null : index);
    },
    [openIndex]
  );

  return (
    <section className="px-2 pt-28 pb-20 bg-[#0F0E17] text-white font-poppins">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--primary-color)]">
            Frequently <span className="text-white">Asked Questions</span>
          </h1>
          
        </div>

        <div className="space-y-4">
        {faqs.map((faq, index) => (
           <motion.div
           key={index}
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`transition-all duration-300 rounded-xl p-[2px] 
              ${openIndex === index
                ? "bg-gradient-to-br from-[#633BFF]/60 to-[#4C25D9]/30 shadow-xl"
                : "bg-[#2d2a3c]"
              }`}
          >
              <div className="rounded-xl bg-[#1E1E2E]/70">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-2 md:px-6 py-5 text-left text-base md:text-lg font-medium group"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`p-2 rounded-full transition-all duration-300 shadow-md 
                        ${openIndex === index
                          ? "bg-[#633BFF]/20 text-[var(--primary-color)] shadow-[#633BFF])40]"
                          : "bg-[#2d2a3c] text-gray-400"
                        }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </span>
                    <span
                      className={`transition-colors font-semibold ${openIndex === index ? "text-[#E1E1FF]" : "text-white"}`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-6 h-6 flex-shrink-0 rounded-full transition-all duration-300 shadow-md 
    bg-[#2A2A3C] text-gray-400
    ${openIndex === index
                        ? "rotate-180 text-[var(--primary-color)] bg-[#633BFF]/20 animate-pulse"
                        : ""
                      }`}
                  />

                </button>

                <div
                  className={`relative px-6 text-sm md:text-base text-gray-400 transition-all duration-500 ease-in-out leading-relaxed tracking-wide
    ${openIndex === index
                      ? "max-h-[300px] opacity-100 scale-100 mt-[-20px] pt-5 pb-5"
                      : "max-h-0 opacity-0 scale-95 mt-0"
                    } overflow-hidden`}
                >
                  <div className="md:px-4">
                    {faq.answer}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 mb-2">Still have questions?</p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-[#633BFF] hover:from-indigo-600 hover:to-indigo-700 text-white rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
