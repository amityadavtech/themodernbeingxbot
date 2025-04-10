"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Megaphone,
    LineChart,
    Smartphone,
    Palette,
    ShieldCheck,
} from "lucide-react";

export default function Services() {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            id: 1,
            title: "Web Development",
            description: "Custom, secure websites designed to grow your business.",
            icon: Code2,
            iconColor: "text-indigo-600",
            bgColor: "bg-indigo-100",
            textColor: "text-indigo-900",
            details: [
                "🚀 Custom Web Design",
                "🔍 SEO-Optimized for Visibility",
                "🛠️ 24/7 Support",
            ],
        },
        {
            id: 2,
            title: "Digital Marketing",
            description: "Boost your brand with targeted digital campaigns.",
            icon: Megaphone,
            iconColor: "text-green-500",
            bgColor: "bg-green-100",
            textColor: "text-green-900",
            details: [
                "📈 Targeted Ads",
                "🤝 Social Media Growth",
                "🎯 Data-Driven Results",
            ],
        },
        {
            id: 3,
            title: "SEO Optimization",
            description: "Rank higher on search engines and drive organic traffic.",
            icon: LineChart,
            iconColor: "text-yellow-500",
            bgColor: "bg-yellow-100",
            textColor: "text-yellow-900",
            details: [
                "🔑 Keyword Research",
                "📝 On-Page & Off-Page SEO",
                "🔗 Backlink Building",
            ],
        },
        {
            id: 4,
            title: "App Development",
            description: "Custom mobile apps for iOS and Android platforms.",
            icon: Smartphone,
            iconColor: "text-blue-500",
            bgColor: "bg-blue-100",
            textColor: "text-blue-900",
            details: [
                "📱 Cross-Platform Apps",
                "🧑‍💻 User-Friendly Design",
                "⚡ Fast Performance",
            ],
        },
        {
            id: 5,
            title: "UI/UX Design",
            description: "Engaging designs that enhance user experience.",
            icon: Palette,
            iconColor: "text-pink-500",
            bgColor: "bg-pink-100",
            textColor: "text-pink-900",
            details: [
                "🖌️ Wireframing & Prototypes",
                "📊 User Research",
                "✨ Interactive Design",
            ],
        },
        {
            id: 6,
            title: "Cybersecurity",
            description: "Keep your business safe from cyber threats.",
            icon: ShieldCheck,
            iconColor: "text-red-500",
            bgColor: "bg-red-100",
            textColor: "text-red-900",
            details: [
                "🔒 Threat Detection",
                "🛡️ Data Protection",
                "⚙️ Quick Incident Response",
            ],
        },
    ];

    const toggleService = (id) => {
        setActiveService(activeService === id ? null : id);
    };

    return (
        <section className="py-16 bg-[#0F0E17] px-2 pt-24" id="services">
            <div className="max-w-7xl mx-auto md:px-6 px-2 text-center">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--primary-color)]">
                        Our <span className="text-white">Services</span>
                    </h1>
                    <p className="text-lg text-gray-400 mb-10">
                        Transforming ideas into reality with modern digital solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`highlight-effect relative bg-[#1a1b25] md:p-8 p-6 rounded-2xl shadow-lg hover:shadow-[0_8px_30px_rgba(102,59,255,0.5)] hover:ring-2 hover:ring-indigo-500/30
                                    transition duration-300 ${activeService === service.id ? "shadow-2xl scale-105" : ""
                                                        }`}
                            >
                                {/* Icon Centered */}
                                <div className="flex justify-center mb-4">
                                    <div className={`${service.iconColor}`}>
                                        <IconComponent size={48} />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-semibold text-white mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400">{service.description}</p>

                                {/* Learn More Button */}
                                <button
                                    onClick={() => toggleService(service.id)}
                                    className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 focus:outline-none transition relative z-40"
                                >
                                    {activeService === service.id ? "Show Less" : "Learn More"}
                                </button>

                                {/* Expanded Details */}
                                <div
                                    className={`absolute inset-0 w-full h-full flex flex-col items-center text-center pt-12 rounded-lg transition-all duration-300 ${activeService === service.id
                                        ? "opacity-100 scale-100 z-10"
                                        : "opacity-0 scale-90"
                                        } ${service.bgColor} ${service.textColor} pointer-events-none`}
                                >
                                    <h4 className="md:text-3xl text-2xl font-bold mb-4">
                                        Why Choose Us?
                                    </h4>
                                    <ul className="space-y-2 md:text-lg text-base font-medium text-start">
                                        {service.details.map((detail, index) => (
                                            <li key={index}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}


                </div>
            </div>
        </section>
    );
}
