"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  PackageOpen,
} from "lucide-react";

const Message = React.memo(({ message, type }) => {
  return (
    <p
      className={`text-center font-semibold ${
        type === "success" ? "text-green-400" : "text-red-400"
      }`}
    >
      {type === "success" ? "✅ " : "⚠️ "} {message}
    </p>
  );
});

const fieldVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, type: "spring" },
  }),
};

export default function SecureContactForm() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Number: "",
    Plan: "",
    Message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState({ success: false, error: "" });
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const scriptURL = process.env.NEXT_PUBLIC_CONTACT_GOOGLE_WEB_URL;

  // 🔍 Auto-select plan from URL
  useEffect(() => {
    const planFromUrl = searchParams.get("plan");
    if (planFromUrl && ["Basic", "Standard", "Premium"].includes(planFromUrl)) {
      setFormData((prev) => ({ ...prev, Plan: planFromUrl }));
    }
  }, [searchParams]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    if (name === "Number") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 15) return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      setStatus({ success: false, error: "" });

      if (formData.honeypot !== "") {
        setStatus({ success: false, error: "Spam detected" });
        setLoading(false);
        return;
      }

      const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.Email)) {
        setStatus({ success: false, error: "Invalid email format" });
        setLoading(false);
        return;
      }

      if (
        formData.Number &&
        (formData.Number.length < 10 || formData.Number.length > 15)
      ) {
        setStatus({
          success: false,
          error: "Phone number must be between 10 and 15 digits",
        });
        setLoading(false);
        return;
      }

      if (formData.Message.trim().length < 10) {
        setStatus({
          success: false,
          error: "Message is too short. Please provide more details.",
        });
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(scriptURL, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.Name.trim(),
            email: formData.Email.trim(),
            number: formData.Number.trim() || "N/A",
            plan: formData.Plan.trim() || "N/A",
            message: formData.Message.trim(),
            honeypot: formData.honeypot,
          }),
        });

        const result = await response.json();
        setLoading(false);

        if (result.success) {
          setStatus({ success: true, error: "" });
          setFormData({
            Name: "",
            Email: "",
            Number: "",
            Plan: "",
            Message: "",
            honeypot: "",
          });

          setTimeout(() => {
            setStatus({ success: false, error: "" });
          }, 5000);
        } else {
          setStatus({
            success: false,
            error:
              result.error || "Something went wrong. Please try again.",
          });
        }
      } catch (error) {
        setStatus({
          success: false,
          error:
            error.message ||
            "Failed to send message. Please try again later.",
        });
        setLoading(false);
      }
    },
    [formData]
  );

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0F0E17] md:px-6 md:pb-6 p-2 pt-24">
      <div className="max-w-4xl w-full bg-[#1a1b25] shadow-lg rounded-3xl p-6 sm:p-12 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Let's <span className="text-[var(--primary-color)]">Connect</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Have a project in mind? We'd love to hear from you!
          </p>
        </div>

        {status.success && (
          <Message message="Message sent successfully!" type="success" />
        )}
        {status.error && (
          <Message message={status.error} type="error" />
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            className="hidden"
          />

          {[
            {
              name: "Name",
              icon: <User className="text-[var(--primary-color)]" size={18} />,
            },
            {
              name: "Email",
              icon: <Mail className="text-[var(--primary-color)]" size={18} />,
            },
            {
              name: "Number",
              icon: <Phone className="text-[var(--primary-color)]" size={18} />,
            },
          ].map(({ name, icon }, index) => (
            <motion.div
              key={name}
              className="col-span-1"
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <label className="text-white font-semibold mb-2 flex items-center gap-2">
                <motion.span
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.span>
                {name === "Number"
                  ? "Phone Number (Optional)"
                  : name}
              </label>
              <input
                type={
                  name === "Email"
                    ? "email"
                    : name === "Number"
                    ? "tel"
                    : "text"
                }
                name={name}
                placeholder={`Enter your ${name.toLowerCase()}`}
                value={formData[name]}
                onChange={handleChange}
                required={name !== "Number"}
                className="w-full px-4 py-3 bg-[#151621] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all"
              />
            </motion.div>
          ))}

          {/* Plan Selection */}
          <motion.div
            className="col-span-1"
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <label className="text-white font-semibold mb-2 flex items-center gap-2">
              <motion.span
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <PackageOpen className="text-[var(--primary-color)]" size={18} />
              </motion.span>
              Choose a Plan (Optional)
            </label>
            <select
              name="Plan"
              value={formData.Plan}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#151621] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all"
            >
              <option value="">Select a Plan</option>
              <option value="Basic">Basic</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
            </select>
          </motion.div>

          {/* Message */}
          <motion.div
            className="col-span-1 md:col-span-2"
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <label className="text-white font-semibold mb-2 flex items-center gap-2">
              <motion.span
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MessageSquare className="text-[var(--primary-color)]" size={18} />
              </motion.span>
              Message
            </label>
            <textarea
              name="Message"
              placeholder="Enter your message"
              rows="5"
              value={formData.Message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#151621] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 resize-none transition-all"
            />
          </motion.div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <motion.button
              type="submit"
              disabled={loading}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="w-full md:w-1/2 py-3 bg-gradient-to-r from-indigo-500 to-[var(--primary-color)] text-white font-semibold text-lg rounded-lg shadow-md hover:to-indigo-600 disabled:opacity-50 flex justify-center items-center gap-2"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
              ) : (
                <>
                  <Send size={18} className="text-white" />
                  Send Message
                </>
              )}
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}
