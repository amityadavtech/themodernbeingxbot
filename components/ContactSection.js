"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2, 
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }, 
  },
};


export default function ContactSection() {
  return (
    <section
      className="bg-[#f6f6f8] px-4 md:px-10 md:py-20 flex justify-center items-center min-h-[90vh] bg-[url('/images/about-bg.svg')] bg-cover bg-center"
      id="contact"
      aria-label="Contact Section"
    >
      <motion.div
        className="bg-white/70 backdrop-blur-md shadow-2xl border border-white/20 rounded-3xl p-6 md:p-16 text-center max-w-2xl md:max-w-[80vw] w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-[var(--primary-color)] mb-4"
          variants={itemVariants}
        >
          Get in Touch
        </motion.h1>

        <motion.div
          className="w-24 h-1 bg-[var(--primary-color)] mx-auto rounded-full mb-6"
          variants={itemVariants}
        />

        <motion.p
          className="text-lg text-gray-700 mb-8"
          variants={itemVariants}
        >
          Contact <strong>BeingxBot</strong> for any queries or support — we’re here to help!
        </motion.p>

        <motion.address
          className="not-italic space-y-4 md:text-lg text-base font-medium mb-10"
          variants={itemVariants}
        >
          <p>
            <span className="font-semibold text-gray-800">📧 Email: </span>
            <a
              href="mailto:beingxbot@gmail.com"
              className="text-[var(--primary-color)] hover:underline block md:inline"
              title="Email BeingxBot"
            >
              beingxbot@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-gray-800">📞 Phone 1: </span>
            <a
              href="tel:+917079490430"
              className="text-[var(--primary-color)] hover:underline"
              title="Call BeingxBot"
            >
              +91 7079490430
            </a>
          </p>
          <p>
            <span className="font-semibold text-gray-800">📞 Phone 2: </span>
            <a
              href="tel:+918340634394"
              className="text-[var(--primary-color)] hover:underline"
              title="Call BeingxBot"
            >
              +91 8340634394
            </a>
          </p>
        </motion.address>

        <motion.div className="m-8" variants={itemVariants}>
          <Link
            href="/contact"
            title="Go to Contact Page"
            className="bg-gradient-to-r from-[var(--primary-color)] to-indigo-500 hover:from-indigo-500 hover:to-[var(--primary-color)] text-white font-semibold py-3 px-10 rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_var(--primary-color)]"
          >
            Contact Us
          </Link>
        </motion.div>

        <div className="sr-only">
          <p>Get in touch with BeingxBot through email or phone for website development and digital marketing solutions.</p>
        </div>
      </motion.div>
    </section>
  );
}
