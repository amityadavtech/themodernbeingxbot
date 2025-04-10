"use client";
import Image from "next/image";
import Link from "next/link";
import ContentBlock from "./ContentBlock";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import WhyChooseUs from "./WhyChooseUs";
import OurAchievs from "./OurAchievement";

export default function NewAboutUs() {
    useEffect(() => {
        if (typeof window === "undefined") return;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("in-view", entry.isIntersecting);
            });
        }, { threshold: 0.3 });
        document.querySelectorAll(".highlight-effect").forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);


    const processSteps = useMemo(() => [
        { step: 1, title: "Discovery", description: "We begin by understanding your business goals and project requirements to lay a solid foundation." },
        { step: 2, title: "Design", description: "Our design team creates sleek, user-friendly interfaces that align with your brand identity." },
        { step: 3, title: "Development", description: "We build high-performance websites with clean, scalable, and optimized code." },
        { step: 4, title: "Deployment", description: "Once tested, we ensure a smooth deployment with continuous monitoring for optimal performance." },
    ], []);


    return (
        <section className="px-4 pt-28 pb-20 sm:px-10 md:px-20 lg:px-32 bg-[#0D0D0D]">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--primary-color)]">About <span className="text-white">BeingxBot</span></h1>
                <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto leading-7">
                    Empowering businesses with cutting-edge web solutions through innovative design, development, and marketing strategies.
                </p>
            </div>


            <ContentBlock
                title="Our"
                highlight="Vision."
                image="/images/vision.svg"
                alt="Vision"
                descriptionStart="we envision a world where digital excellence is accessible to all."
                descriptionEnd="We are dedicated to turning innovative ideas into impactful digital experiences. Our mission is to blend creativity with technology, crafting websites that not only look stunning but also deliver seamless performance."
            />

            {/* About Us Section */}
            <ContentBlock
                title="Who"
                highlight="We Are."
                image="/images/our-team.svg"
                alt="About BeingxBot"
                descriptionStart="is a collective of creative thinkers, tech enthusiasts, and problem solvers"
                descriptionEnd="We push the boundaries of what’s possible on the web, transforming bold ideas into powerful digital solutions. Our team thrives on innovation, leveraging cutting-edge technology to create dynamic, user-centric websites that stand out. "
                reverse
            />

            <SectionBlock title="Our Process" image="/images/process.svg" alt="Process" >
                <h1 className="text-3xl md:text-5xl font-bold text-center">
                    Our <span className="text-[var(--primary-color)]">Process.</span>
                </h1>
                {processSteps.map(({ step, title, description }) => (
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="bg-[#222222] p-6 rounded-lg shadow-md flex gap-4  items-start relative highlight-effect"
                    >

                        <div className="w-12 h-12 flex justify-center items-center text-white font-bold text-lg">
                            {step}
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-2 text-[var(--primary-color)]">{title}:</h2>
                            <p className="text-gray-400 leading-6">{description}</p>
                        </div>
                    </motion.div>
                ))}
            </SectionBlock>

            <div className="bg-[#1A1A1A] p-4 md:p-12 rounded-2xl shadow-2xl space-y-10 my-10 text-white">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center space-y-4 mt-3">
                    <h1 className="text-4xl md:text-5xl font-bold">Antique <span className="text-[var(--primary-color)]">Approach.</span></h1>
                    <p className="text-gray-400 text-lg font-medium">Merging timeless principles with cutting-edge technology to craft digital experiences that last.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }} viewport={{ once: true }} className="leading-8 space-y-6">
                    <h2 className="text-[1.5rem] md:text-3xl font-semibold"><span className="text-[var(--primary-color)]">Why "Antique"?</span></h2>
                    <p className="text-gray-400 text-lg">In a world obsessed with speed and trends, <span className="text-[var(--primary-color)] font-bold">BeingxBot</span> stands apart by embracing the art of endurance.
                        Our <span className="highlight-effect relative bg-gradient-to-r from-[var(--primary-color)] to-[#4C25D9] bg-no-repeat bg-[0_100%] bg-[length:0%_100%] transition-all duration-1000 text-white font-semibold">Antique Approach</span> isn’t about old-fashioned methods — it’s about creating solutions that remain valuable long after the hype fades.</p>
                    <p className="text-gray-400 text-lg">Just like vintage art and timeless architecture, we build digital products that age gracefully. Whether it's a sleek website or a robust e-commerce platform, our work reflects durability, performance, and elegance.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="bg-[#222222] p-6 rounded-xl shadow-lg space-y-4">
                    <h3 className="text-2xl text-[var(--primary-color)] font-semibold">📰 Key Highlights</h3>
                    <ul className="list-disc ml-4 space-y-3 text-gray-400">
                        <li><strong className="text-white">Built to Last:</strong> Our designs focus on scalability and resilience.</li>
                        <li><strong className="text-white">Aesthetic Excellence:</strong> Combining beauty with functionality.</li>
                        <li><strong className="text-white">Human-Centric:</strong> Prioritizing user experience and accessibility.</li>
                    </ul>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} viewport={{ once: true }} className="text-center text-gray-400 italic p-4 rounded-lg bg-[#2A2A2A] shadow-md">
                    <p className="text-xl">“The web is ever-changing, but the values of great design and seamless functionality never go out of style.”</p>
                    <span className="block text-[var(--primary-color)] font-semibold mt-2">— Team BeingxBot</span>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} viewport={{ once: true }} className="text-gray-400 text-lg leading-8 space-y-4">
                    <h3 className="text-2xl text-[#4C25D9] font-semibold">📣 Join the Digital Revolution</h3>
                    <p>At BeingxBot, we’re not just building websites — we’re creating legacies. If you're ready to experience the perfect blend of tradition and technology, let’s start building your future today.</p>
                    <Link href="/contact" className="inline-block bg-[var(--primary-color)] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#4C25D9] transition-all">Let's Collaborate</Link>
                </motion.div>
            </div>

            <WhyChooseUs />
            <OurAchievs />

        </section>
    );
}
function SectionBlock({ image, alt, children }) {
    return (
        <div className="flex flex-col md:flex-row items-center  bg-[#1A1A1A] p-4 md:p-12 rounded-2xl shadow-2xl space-y-10 my-10">
            <div className="w-full md:w-1/2 flex justify-center">
                <Image src={image} alt={alt} width={500} height={500} loading="lazy" className="rounded-xl shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 space-y-6 text-white">{children}</div>
        </div>
    );
}


