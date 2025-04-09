'use client';

import { motion } from "framer-motion";
import {
  Briefcase, Rocket, Zap, Shield, ThumbsUp, Headset,
} from "lucide-react";

const features = [
  { Icon: Briefcase, title: "Expertise", desc: "Over 5 years of experience delivering innovative web solutions." },
  { Icon: Rocket, title: "Creative Solutions", desc: "Tailored designs that reflect your brand's uniqueness." },
  { Icon: Zap, title: "Fast & Responsive", desc: "Optimized performance with lightning-fast load times." },
  { Icon: Shield, title: "Reliable & Secure", desc: "Top-notch security to safeguard your digital assets." },
  { Icon: ThumbsUp, title: "Client Satisfaction", desc: "We prioritize your growth and long-term success." },
  { Icon: Headset, title: "24/7 Support", desc: "Round-the-clock assistance whenever you need it." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#1A1A1A] p-4 md:p-12 rounded-2xl shadow-2xl text-white mt-10 space-y-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Why <span className="text-[#663bff]">Choose Us?</span>
      </h1>
      <p className="text-center text-gray-300 max-w-2xl mx-auto">
        At <strong className="text-[#663bff]">BeingxBot</strong>, we deliver powerful digital solutions tailored to your business growth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ Icon, title, desc }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="highlight-effect bg-[#222] p-6 rounded-lg shadow-md border-2 border-transparent hover:border-[#663bff] hover:shadow-[0_0_15px_#663bff] transition-all flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 flex justify-center items-center bg-[#663bff] rounded-full text-white shadow-lg">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-400 text-center">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
