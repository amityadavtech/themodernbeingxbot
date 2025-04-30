"use client";

import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    const typedTextRef = useRef(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const typingEffect = new Typed(typedTextRef.current, {
            strings: ["Success.", "Reality.", "Growth.", "Innovation."],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 2000,
        });

        return () => typingEffect.destroy();
    }, []);

    return (
        <section
            aria-label="Hero Section - Introduction to BeingxBot"
            className="relative w-full bg-[#1A1A2E] text-white flex items-center justify-center overflow-hidden px-4 md:py-0 py-8 min-h-screen"
            role="region"
        >
            {/* Abstract Blob (Bottom Right) */}
            <div className="absolute bottom-[-40px] right-[-70px] w-[500px] h-[500px] opacity-20 animate-slow-float" aria-hidden="true">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 600 600"
                    fill="none"
                    className="absolute top-[21rem] w-[750px] h-[400px] opacity-10 blob-shape"
                >
                    <path
                        fill="#FF6B6B"
                        d="M370.2,11.7c38.6,3,61,31.4,82.3,61.5c21.3,30,42.8,61.4,42.4,98.2c-0.4,36.9-23,73.1-49.2,104.7s-53.7,59.1-93.3,70.2c-39.5,11.1-85.3,5.3-123.3-11.6c-38.1-16.9-68.3-44.9-97.5-74.1c-29.2-29.2-57.3-59.7-72.3-96.7c-15.1-37-17-81.5,5.3-114.2c22.3-32.7,67.5-54.5,109.5-60.5C264.8,0.7,331.7-2.4,370.2,11.7z"
                    />
                </svg>
            </div>

            {/* Dotted Background (Top Left) */}
            <svg className="absolute top-1 left-5 w-[20%] h-[30%] opacity-10 animate-slow-float" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="white"></circle>
                </pattern>
                <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>

            <main className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-around gap-0 z-10 min-h-screen">
                {/* Left Content */}
                <article className="text-left max-w-3xl space-y-8 relative sm:text-left animate-fade-in-up delay-100">
                    <header>
                        <h1 className="text-4xl md:text-6xl font-bold md:leading-1 transition-all duration-700 ease-in-out">
                            <span className="inline-block md:inline drop-shadow-2xl">
                                Shaping Ideas into Digital{" "}
                            </span>
                            <span
                                ref={typedTextRef}
                                className="text-[var(--primary-color)] hover:text-indigo-600 transition typedtext"
                                aria-live="polite"
                            ></span>
                        </h1>
                    </header>

                    <p className="text-base text-gray-400 sm:text-xl sm:leading-7 transition-opacity duration-1000 ease-in-out">
                        BeingxBot builds SEO-friendly, fast, and mobile-friendly websites, apps, and software solutions — combining expert web development, design, and digital marketing to grow your brand online.
                    </p>

                    <section className="flex sm:flex-row gap-4 sm:justify-start mb-12 transition-all duration-1000 ease-in-out" aria-label="Call to action links">
                        <div className="absolute -bottom-[32rem] -left-[20rem] w-[28rem] h-[28rem] bg-[var(--primary-color)] rounded-full blur-[152px]" aria-hidden="true"></div>

                        <Link
                            href="/contact"
                            aria-label="Start your project with BeingxBot"
                            className="bg-[var(--primary-color)] flex items-center gap-2 text-white px-3 py-2 text-sm sm:text-lg sm:px-6 sm:py-3 rounded-lg hover:bg-indigo-600 transition transform hover:scale-105"
                        >
                            Get Started <ArrowRight size={18} />
                        </Link>

                        <Link
                            href="/plans&services"
                            aria-label="Learn more about our plans and services"
                            className="border flex items-center gap-2 border-white px-3 py-2 text-sm sm:text-lg sm:px-6 sm:py-3 rounded-lg hover:bg-white hover:text-[#1A1A2E] transition"
                        >
                            Learn More <ArrowRight size={18} />
                        </Link>
                    </section>

                    <section className="flex items-center space-x-6 transition-all duration-1000 ease-in-out">
                        <div className="flex -space-x-3" aria-hidden="true">
                            <div className="w-12 h-12 rounded-full border-2 border-background bg-[var(--primary-color)] flex items-center justify-center text-white ">
                                <span className="font-bold">500+</span>
                            </div>
                            <div className="w-12 h-12 rounded-full border-2 border-background bg-[#623bff83] flex items-center justify-center text-white ">
                                <span className="font-bold">98%</span>
                            </div>
                            <div className="w-12 h-12 rounded-full border-2 border-background bg-[#623bff84] flex items-center justify-center text-white ">
                                <span className="font-bold">24/7</span>
                            </div>
                        </div>
                        <p className="text-muted-foreground font-medium">
                            Trusted by <span className="text-[var(--primary-color)]">500+</span> clients
                        </p>

                        <svg className="absolute left-6 w-[250px] h-[40px] opacity-5 z-10 animate-slow-float" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" fill="none" aria-hidden="true">
                            <pattern id="small-dots" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
                                <circle cx="1.5" cy="1.5" r="1" fill="white" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#small-dots)" />
                        </svg>
                    </section>
                </article>

                <svg className="absolute bottom-[-60px] left-6 w-[250px] h-[40px] opacity-5 animate-slow-float" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" fill="none" aria-hidden="true">
                    <pattern id="small-dots" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
                        <circle cx="1.5" cy="1.5" r="1" fill="white" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#small-dots)" />
                </svg>

                {/* Right Side - Illustration */}
                <aside className="relative mt-7 flex justify-center animate-fade-in-up delay-300" aria-label="Hero illustration of BeingxBot services">
                    <div className={`z-10 drop-shadow-lg transition-transform duration-700 hover:scale-105 ${imageLoaded ? "animate-flote" : ""}`}>
                        <Image
                            src="/images/hero-illustration.svg"
                            alt="Illustration showing digital innovation at BeingxBot"
                            width={600}
                            height={500}
                            loading="lazy"
                            className="rounded-lg"
                            onLoad={() => setImageLoaded(true)}
                        />
                    </div>
                </aside>
            </main>
        </section>
    );
}
