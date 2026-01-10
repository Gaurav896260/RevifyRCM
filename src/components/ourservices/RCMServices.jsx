import React from "react";
import { motion } from "framer-motion";

const rcmServicesList = [
  {
    title: "Accounts Receivable Management",
    description:
      "We support your medical billing process, perform claim follow-up, and implement proactive denial prevention measures.",
  },
  {
    title: "Payer Contract Review & Negotiation",
    description:
      "Periodic review and maintenance to ensure the best rates. We negotiate with payers to secure the best possible contracts for you.",
  },
  {
    title: "Data Entry",
    description:
      "Streamlined charge entry to save you time. We also handle data entry into insurance company websites on your behalf.",
  },
  {
    title: "Payer Credentialing",
    description:
      "Complete handling of applications, follow-ups, and re-enrollments. We simplify the complex credentialing process.",
  },
];

const RCMServices = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
    },
  };

  return (
    <section className="relative py-32 bg-white overflow-hidden selection:bg-emerald-100 border-t border-gray-100">
      {/* Background Decorative Accent */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-emerald-50/40 rounded-full blur-[100px] pointer-events-none translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Main Title Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="lg:col-span-4 space-y-6"
          >
            <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.4em] block">
              Core Capabilities
            </span>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-black leading-[0.9]">
              RCM{" "}
              <span className="text-emerald-500 italic font-serif font-light">
                Services
              </span>
            </h2>
            <p className="text-gray-400 font-light text-lg max-w-xs">
              Optimizing every touchpoint of the financial journey.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {rcmServicesList.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Visual Accent Node */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                  <div className="h-px flex-grow bg-neutral-100" />
                </div>

                <h3 className="text-2xl font-bold text-black mb-4 tracking-tight group-hover:text-emerald-600 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed text-lg">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RCMServices;
