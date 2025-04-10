"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "BASIC",
    monthly: "$149.99",
    yearly: "$1490.99",
    info: "One Time Payment",
    features: [
      "1 domain name", "Secure and working website", "Professional Design", "Responsive Design",
      "Up to 2 Custom Web Pages", "Optimized Layout", "Simple Contact", "Basic SEO"
    ]
  },
  {
    name: "STANDARD",
    monthly: "$299.99",
    yearly: "$2490.99",
    info: "One Time Payment",
    features: [
      "Basic Plan+", "Unique Design", "Advanced Features", "Enhanced SEO",
      "Periodic Reports", "Up to 4 Custom Web Pages", "Priority Support"
    ]
  },
  {
    name: "PREMIUM",
    monthly: "$599.99+",
    yearly: "$5490.99+",
    info: "One Time Payment (Tailored for Large Projects)",
    features: [
      "Basic Plan+", "Standard Plan+", "Targeted Marketing", "In-depth Analysis",
      "Up to 6 Custom Web Pages", "24/7 Support", "Customized Features"
    ],
    note: "For large-scale or complex projects, pricing may vary based on specific requirements."
  },
];


const PricingPlans = () => {
  const [selected, setSelected] = useState("STANDARD");
  const [hovered, setHovered] = useState(null);
  const [yearly, setYearly] = useState(false);

  return (
    <section className="flex flex-col items-center py-16 bg-[#0F0E17] min-h-screen">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-2 relative inline-block"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-[var(--primary-color)]">Choose </span>Your Plan
        <span className="absolute left-0 bottom-[-5px] w-full h-[4px] bg-[var(--primary-color)] rounded-md" />
      </motion.h2>

      <motion.p
        className="text-[var(--primary-color)] font-semibold text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        (Save 10% for yearly)
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center items-center gap-4 my-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center space-x-3">
          <span className={`text-white font-medium ${!yearly ? "text-[var(--primary-color)]" : "text-gray-400"}`}>Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={yearly} onChange={() => setYearly(!yearly)} />
            <div className="w-12 h-6 bg-gray-600 rounded-full peer-checked:bg-[var(--primary-color)] peer transition-all" />
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-6 transition-all" />
          </label>
          <span className={`text-white font-medium ${yearly ? "text-[var(--primary-color)]" : "text-gray-400"}`}>Yearly</span>
        </div>
        <select
          className="p-3 rounded-lg text-white bg-[#1A1A1A] border border-[var(--primary-color)] outline-none"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {plans.map((p, i) => <option key={i} value={p.name}>{p.name}</option>)}
        </select>
      </motion.div>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 px-4 w-full max-w-6xl md:max-w-[100vw]">
        {plans.map((p, i) => {
          const isSel = selected === p.name;
          return (
            <motion.article
              key={i}
              className={`highlight-effect p-6 rounded-xl border bg-[#1a1b25] shadow-md transition-all w-full sm:max-w-[85%] md:max-w-[90%] lg:max-w-sm 
                ${isSel ? "border-[var(--primary-color)] scale-105 shadow-[var(--primary-color)]/80" : "border-white/15"}`}
              onMouseEnter={() => setHovered(p.name)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ scale: hovered === p.name ? 1.08 : isSel && !hovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-[var(--primary-color)] text-center">{p.name}</h3>
              <p className="text-sm text-gray-400 text-center">{p.info}</p>
              <p className="text-4xl font-bold text-[var(--primary-color)] mt-3 text-center">{yearly ? p.yearly : p.monthly}</p>
              <ul className="mt-4 text-white space-y-2 text-base">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center">
                    <Check size={18} className="text-[var(--primary-color)] mr-2" />{f}
                  </li>
                ))}
              </ul>
              {p.note && <p className="mt-2 text-xs text-gray-400 text-center">{p.note}</p>}

              <Link
                href={{
                  pathname: "/contact",
                  query: { plan: p.name.charAt(0) + p.name.slice(1).toLowerCase() }
                }}
                className={`mt-4 block text-center w-full py-2.5 rounded-lg text-white font-semibold transition-all duration-300 transform 
                  ${isSel ? "bg-[var(--primary-color)] hover:bg-[#5a33e6]" : "bg-gray-600 hover:bg-[var(--primary-color)] hover:scale-105"}`}
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </motion.article>
          );
        })}
      </div>

      <motion.p
        className="mt-6 text-xs text-gray-400 text-center px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        *Prices may vary for large or complex projects. Contact us for a personalized quote.
      </motion.p>

    </section>
  );
};

export default PricingPlans;
