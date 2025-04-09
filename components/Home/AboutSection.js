"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section
            className="relative w-full min-h-[90vh] bg-[#f6f6f8] text-[#1A1A2E] flex items-center justify-center px-6 md:px-12 py-16 pt-12 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/about-bg.svg')` }}
            aria-label="About Section"
        >
            {/* Floating Decorative Elements */}
            <div className="absolute top-10 left-10 blob-4 animate-pulse-slow" aria-hidden="true"></div>
            <div className="absolute bottom-20 right-20 blob-4 animate-pulse-slow" aria-hidden="true"></div>

            {/* Background Wave SVG */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
                <svg viewBox="0 0 1440 320" className="w-full h-auto">
                    <path
                        fill="#4C25D9"
                        d="M0,320 C200,250 500,180 800,220 C1100,260 1300,300 1440,240 L1440,320 L0,320 Z"
                    />
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative z-10 mx-auto w-full max-w-6xl">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-11"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-bold text-[#373749] relative inline-block">
                        About <span className="text-[#663bff]">BeingxBot</span>
                        <span className="absolute left-0 bottom-[-5px] w-full h-[4px] bg-[#663bff] rounded-md"></span>
                    </h2>
                </motion.div>

                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    {/* Image */}
                    <motion.div
                        className="relative w-full md:w-1/3 flex justify-center order-1 md:order-none"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/images/about-img.svg"
                            alt="About BeingxBot"
                            width={320}
                            height={320}
                            className="rounded-xl shadow-lg"
                            loading="lazy"
                        />
                    </motion.div>

                    {/* Text + Info Cards */}
                    <motion.div
                        className="w-full md:w-2/3 space-y-6 text-center md:text-left"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-gray-700 leading-relaxed">
                            BeingxBot is a digital agency that crafts modern, high-performance websites to help businesses thrive in the digital world. We believe in <b>innovation, efficiency, and creativity</b>.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Who We Are", text: "We specialize in website development, UI/UX, and digital marketing." },
                                { title: "Our Mission", text: "To provide businesses with cutting-edge digital solutions." },
                                { title: "Why Choose Us?", text: "We ensure top-notch quality, SEO optimization, and responsive designs.", fullWidth: true }
                            ].map(({ title, text, fullWidth }, index) => (
                                <motion.div
                                    key={index}
                                    className={`p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${fullWidth ? "md:col-span-2" : ""}`}
                                    initial={{ opacity: 0, y: 0 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-xl font-semibold text-[#663bff]">{title}</h3>
                                    <p className="text-gray-600 mt-2">{text}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            className="flex justify-center md:justify-start"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href="/about"
                                className="bg-[#663bff] text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105 hover:bg-[#6366F1] duration-300"
                            >
                                Know More
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
