import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
    {
        title: "Basic",
        price: "$149.99",
        yearlyPrice: "$1490.99",
        details: "One Time Payment",
        features: [
            "1 domain name",
            "Secure and working website",
            "Professional Design",
            "Responsive Design",
            "Up to 2 Custom Web Pages",
            "Optimized Layout",
            "Simple Contact",
            "Basic SEO",
        ],
        color: "bg-gray-200",
        popular: false,
    },
    {
        title: "Standard",
        price: "$299.99",
        yearlyPrice: "$2490.99",
        details: "One Time Payment",
        features: [
            "Basic Plan+",
            "Unique Design",
            "Advanced Features",
            "Enhanced SEO",
            "Periodic Reports",
            "Up to 4 Custom Web Pages",
            "Priority Support",
        ],
        color: "bg-[var(--primary-color)] text-white",
        popular: true,
    },
    {
        title: "Premium",
        price: "$599.99+",
        yearlyPrice: "$5490.99+",
        details: "One Time Payment (Tailored for Large Projects)",
        features: [
            "Basic Plan+",
            "Standard Plan+",
            "Targeted Marketing",
            "In-depth Analysis",
            "Up to 6 Custom Web Pages",
            "24/7 Support",
            "Customized Features",
        ],
        note: "For large-scale or complex projects, pricing may vary based on specific requirements.",
        color: "bg-purple-800 text-white",
        popular: false,
    },
];


export default function Plans() {
    const [selectedPlan, setSelectedPlan] = useState("Standard");
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="px-4 py-8 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold text-center md:mb-8 mb-4 text-gray-800"
            >
                Our <span className="text-[var(--primary-color)]">Plans</span>
            </motion.h1>
            <p className="text-lg text-gray-500 mb-8 max-w-7xl mx-auto md:px-6 px-4 text-center">
                Smart solutions for growth, visibility, and success.
            </p>

            {/* Toggle */}
            <div className="flex justify-center mb-6">
                <div className="bg-white p-2 rounded-full shadow-md space-x-2">
                    <button
                        onClick={() => setIsYearly(false)}
                        className={`px-4 py-2 mx-2 rounded-full font-semibold transition-transform duration-300 ${!isYearly ? "bg-[var(--primary-color)] text-white" : "bg-gray-200 text-gray-600"
                            }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setIsYearly(true)}
                        className={`px-4 py-2 mx-2 rounded-full font-semibold transition-transform duration-300 ${isYearly ? "bg-[var(--primary-color)] text-white" : "bg-gray-200 text-gray-600"
                            }`}
                    >
                        Yearly
                    </button>
                </div>
            </div>

            {/* Plan Cards */}
            <section className="flex flex-col md:flex-row justify-center items-center gap-6">
                {plans.map((plan, idx) => (
                    <motion.article
                        key={plan.title}
                        onClick={() => setSelectedPlan(plan.title)}
                        className={`highlight-effect relative w-full md:w-1/3 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${selectedPlan === plan.title ? "ring-4 ring-indigo-400" : ""
                            } flex-1 min-h-full bg-white`}
                        aria-labelledby={`plan-${plan.title}-heading`}
                        role="region"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1 * idx }}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 -right-4 bg-yellow-400 text-white text-sm px-3 py-1 rounded-full shadow-md">
                                Most Popular
                            </div>
                        )}
                        <h2 id={`plan-${plan.title}-heading`} className="text-3xl font-bold mb-2 text-gray-800">{plan.title}</h2>
                        <p className="text-4xl font-semibold text-[var(--primary-color)]">
                            {isYearly ? plan.yearlyPrice : plan.price}
                        </p>
                        <p className="text-gray-600 mb-4">{plan.details}</p>
                        <ul className="space-y-2 mb-4">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center space-x-2">
                                    <span className="text-[#633BFF]">✔</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        {plan.note && (
                            <p className="mb-4 text-sm text-gray-500">{plan.note}</p>
                        )}
                        <div className="mt-6 flex justify-center">
                            <Link
                                href={{
                                    pathname: "/contact",
                                    query: { plan: plan.title },
                                }}
                                className={`inline-block px-6 py-3 text-white rounded-xl shadow-lg transition-all duration-500 ease-in-out hover:shadow-indigo-500/30
        bg-[length:100%_100%] bg-no-repeat
        ${plan.popular
                                        ? "bg-gradient-to-r from-indigo-500 to-[var(--primary-color)] hover:from-yellow-300 hover:to-yellow-400 hover:text-white"
                                        : "bg-gradient-to-r from-indigo-500 to-[var(--primary-color)] hover:from-indigo-600 hover:to-indigo-700"
                                    }`}
                            >
                                Get Started
                            </Link>

                        </div>

                    </motion.article>
                ))}
            </section>
        </section>
    );
}
