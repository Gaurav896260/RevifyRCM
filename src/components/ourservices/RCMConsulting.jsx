import React from "react";
import { motion } from "framer-motion";

const consultingServices = [
  {
    title: "RCM Process Analysis",
    description:
      "Evaluate all internal RCM processes to discover blind spots and recommend high-impact solutions.",
  },
  {
    title: "Process Improvement",
    description:
      "Identify critical gaps in your end-to-end workflow and provide guidance on building an efficient, automated pipeline.",
  },
  {
    title: "FTE Management",
    description:
      "Thoroughly analyze each RCM process to determine the exact human capital required to manage tasks effectively.",
  },
  {
    title: "Performance Metrics",
    description:
      "Develop ideal metric templates based on deep process analysis to help your organization achieve targeted growth.",
  },
];

const RCMConsulting = () => {
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
    <section className="relative py-32 bg-[#fafafa] overflow-hidden selection:bg-emerald-100">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

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
              Strategic Growth
            </span>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-black leading-[0.9]">
              RCM{" "}
              <span className="text-emerald-500 italic font-serif font-light">
                consulting
              </span>{" "}
              services
            </h2>
            <div className="pt-8 hidden lg:block">
              <div className="w-16 h-1 bg-emerald-500 rounded-full" />
            </div>
          </motion.div>

          {/* Consulting Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {consultingServices.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Visual Number Node */}
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest px-3 py-1 bg-emerald-50 rounded-full group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500">
                    Step 0{idx + 1}
                  </span>
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

export default RCMConsulting;
