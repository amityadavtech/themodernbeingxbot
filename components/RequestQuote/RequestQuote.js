"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
    User, Mail, Phone, Building2, LayoutTemplate,
    DollarSign, Clock, MessageSquare, Send
} from "lucide-react";

const Message = ({ message, type }) => (
    <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-center font-semibold ${type === "success" ? "text-green-400" : "text-red-400"}`}
        role="alert"
    >
        {type === "success" ? "✅" : "⚠️"} {message}
    </motion.p>
);

const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
};


const InputField = ({ name, label, type = "text", icon, value, onChange, required = false }) => (
    <div>
        <label htmlFor={name} className="text-white font-semibold mb-2 flex items-center gap-2">
            {icon} {label || name}
        </label>
        <input
            id={name}
            type={type}
            name={name}
            placeholder={`Enter your ${name.toLowerCase()}`}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full px-4 py-3 bg-[#151621] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all"
        />
    </div>
);

const SelectField = ({ name, icon, value, onChange, options = [], required = false }) => (
    <div>
        <label htmlFor={name} className="text-white font-semibold mb-2 flex items-center gap-2">
            {icon} {name}
        </label>
        <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full px-4 py-3 bg-[#151621] text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all"
        >
            <option value="">Select {name}</option>
            {options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
    </div>
);


const RequestQuoteForm = () => {
    const [formData, setFormData] = useState({
        Name: "", Email: "", Number: "", Company: "",
        ProjectType: "", Budget: "", Timeline: "", Message: "", honeypot: ""
    });

    const [status, setStatus] = useState({ success: false, error: "" });
    const [loading, setLoading] = useState(false);

    const scriptURL = process.env.NEXT_PUBLIC_QUOTE_GOOGLE_WEB_URL;

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        if (name === "Number" && (!/^\d*$/.test(value) || value.length > 15)) return;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ success: false, error: "" });

        if (formData.honeypot) {
            setStatus({ success: false, error: "Spam detected" });
            setLoading(false);
            return;
        }

        const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
        if (!emailRegex.test(formData.Email)) {
            setStatus({ success: false, error: "Invalid email format" });
            setLoading(false);
            return;
        }

        if (formData.Number && (formData.Number.length < 10 || formData.Number.length > 15)) {
            setStatus({ success: false, error: "Phone number must be 10–15 digits" });
            setLoading(false);
            return;
        }

        if (formData.Message.trim().length < 10) {
            setStatus({ success: false, error: "Message is too short. Please provide more details." });
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                mode: "cors",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            setLoading(false);

            if (result.success) {
                setStatus({ success: true, error: "" });
                setFormData({
                    Name: "", Email: "", Number: "", Company: "",
                    ProjectType: "", Budget: "", Timeline: "", Message: "", honeypot: ""
                });
                setTimeout(() => setStatus({ success: false, error: "" }), 5000);
            } else {
                throw new Error(result.error || "Something went wrong.");
            }
        } catch (error) {
            setStatus({ success: false, error: error.message || "Failed to send message." });
            setLoading(false);
        }
    }, [formData]);

    const inputBaseClass = "w-full px-4 py-3 bg-[#151621] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all";

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#0F0E17] p-2 pt-24">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08 } }
                }}
                className="max-w-4xl w-full bg-[#1a1b25] shadow-lg rounded-3xl p-6 sm:p-12 space-y-8"
            >
                <motion.div variants={fieldVariants} custom={0} className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Request a <span className="text-[var(--primary-color)]">Quote</span>
                    </h1>
                    <p className="text-gray-400 text-lg">Tell us about your project – we’ll get back with a plan!</p>
                </motion.div>

                {status.success && <Message message="Quote request submitted successfully!" type="success" />}
                {status.error && <Message message={status.error} type="error" />}

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" />

                    {[
                        { icon: <User size={18} color="var(--primary-color)" />, name: "Name", required: true },
                        { icon: <Mail size={18} color="var(--primary-color)" />, name: "Email", type: "email", required: true },
                        { icon: <Phone size={18} color="var(--primary-color)" />, name: "Number", label: "Phone Number (Optional)", type: "tel" },
                        { icon: <Building2 size={18} color="var(--primary-color)" />, name: "Company", required: true },
                    ].map((field, i) => (
                        <motion.div key={field.name} variants={fieldVariants} custom={i}>
                            <InputField {...field} value={formData[field.name]} onChange={handleChange} />
                        </motion.div>
                    ))}

                    {[
                        { icon: <LayoutTemplate size={18} color="var(--primary-color)" />, name: "ProjectType", required: true, options: ["Website", "App", "SEO", "Branding", "UI/UX Design", "Other"] },
                        {icon: <DollarSign size={18} color="var(--primary-color)" />, name: "Budget",required: true, options: ["<$149.99", "$149.99 - $599.99", "$599.99 - $999.99", "$999.99+"]},
                        { icon: <Clock size={18} color="var(--primary-color)" />, name: "Timeline", required: true, options: ["1-2 Weeks", "1 Month", "2 Months", "Flexible"] },
                    ].map((field, i) => (
                        <motion.div key={field.name} variants={fieldVariants} custom={i + 4}>
                            <SelectField {...field} value={formData[field.name]} onChange={handleChange} />
                        </motion.div>
                    ))}

                    <motion.div variants={fieldVariants} custom={8} className="col-span-1 md:col-span-2">
                        <label htmlFor="Message" className="text-white font-semibold mb-2 flex items-center gap-2">
                            <MessageSquare size={18} className="text-[var(--primary-color)]" />
                            Project Description
                        </label>
                        <textarea
                            id="Message"
                            name="Message"
                            placeholder="Describe your project in detail"
                            rows={5}
                            value={formData.Message}
                            onChange={handleChange}
                            required
                            className={`${inputBaseClass} resize-none`}
                        />
                    </motion.div>

                    <motion.div
                        variants={fieldVariants}
                        custom={9}
                        className="col-span-1 md:col-span-2 flex justify-center"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full md:w-1/2 py-3 bg-gradient-to-r from-indigo-500 to-[var(--primary-color)] text-white font-semibold text-lg rounded-lg shadow-lg hover:to-indigo-600 disabled:opacity-50 transition-all duration-300 flex justify-center items-center gap-2"
                        >
                            <Send size={18} className="text-white" />
                            {loading ? (
                                <motion.div
                                    className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                />
                            ) : (
                                <span className="tracking-wide">Request Quote</span>
                            )}
                        </motion.button>
                    </motion.div>

                </form>
            </motion.div>
        </section>
    );
};

export default RequestQuoteForm;
