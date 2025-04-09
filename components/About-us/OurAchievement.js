'use client';

import { motion } from "framer-motion";
import {
  LayoutDashboard, Smile, Clock, Headphones,
} from "lucide-react";

const stats = [
  { Icon: LayoutDashboard, value: "100+", label: "Projects Completed" },
  { Icon: Smile, value: "50+", label: "Happy Clients" },
  { Icon: Clock, value: "5+", label: "Years of Experience" },
  { Icon: Headphones, value: "24/7", label: "Support Available" },
];

export default function OurAchievs() {
  return (
    <section className="bg-[#1A1A1A] p-4 md:p-12 rounded-2xl shadow-2xl text-white mt-10 space-y-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Our <span className="text-[#663bff]">Achievements</span>
      </h1>
      <p className="text-center text-gray-300 max-w-2xl mx-auto">
        At <strong className="text-[#663bff]">BeingxBot</strong>, we take pride in delivering impactful solutions that drive measurable results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ Icon, value, label }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-[#222] highlight-effect p-6 rounded-lg shadow-md border-2 border-transparent hover:border-[#663bff] hover:shadow-[0_0_15px_#663bff] transition-all duration-300 flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 flex justify-center items-center bg-[#663bff] rounded-full text-white shadow-lg">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-bold">{value}</h3>
            <p className="text-gray-400 text-center">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
