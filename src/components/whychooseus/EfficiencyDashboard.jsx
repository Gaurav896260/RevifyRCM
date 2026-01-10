import React from "react";
import { motion } from "framer-motion";

const dashboardData = [
  { label: "EHR Same Day Close Rate", value: 97.5, suffix: "%" },
  { label: "Revenue vs Goal", value: 102.8, suffix: "%" },
  { label: "Accuracy Rate", value: 99.2, suffix: "%" },
  { label: "Bad Debt Reduction", value: 1.8, suffix: "%" },
  { label: "First Pass Ratio", value: 94.8, suffix: "%" },
  { label: "Increase in Cash Flow", value: 15.5, suffix: "%" },
  { label: "Electronic Transmission", value: 70.4, suffix: "%" },
  { label: "ERA Conversion Rate", value: 80.3, suffix: "%" },
];

const StatCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1],
      }}
      className="group relative bg-white border border-neutral-100 p-8 rounded-[2.5rem] flex items-center gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(16,185,129,0.1)] transition-all duration-700 overflow-hidden"
    >
      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-emerald-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Circular Progress Visual */}
      <div className="relative w-20 h-20 flex items-center justify-center flex-shrink-0">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            className="text-neutral-100"
          />
          <motion.circle
            cx="40"
            cy="40"
            r="36"
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray="226.2"
            initial={{ strokeDashoffset: 226.2 }}
            whileInView={{
              strokeDashoffset:
                226.2 - (226.2 * Math.min(item.value, 100)) / 100,
            }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5, ease: "circOut" }}
            className="text-emerald-500"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-black text-black">
            {item.value}
            {item.suffix}
          </span>
        </div>
      </div>

      {/* Text Label */}
      <div className="relative z-10">
        <h3 className="text-sm font-black uppercase tracking-widest text-neutral-400 group-hover:text-emerald-600 transition-colors duration-500 mb-1">
          Performance Metric
        </h3>
        <p className="text-xl font-bold text-black leading-tight tracking-tighter">
          {item.label}
        </p>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      </div>
    </motion.div>
  );
};

const EfficiencyDashboard = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden selection:bg-emerald-100">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-50/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* FIXED HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">
            Measurable Results
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-none">
            Operational Efficiency{" "}
            <span className="text-emerald-500 italic font-serif font-light">
              Dashboard
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dashboardData.map((item, idx) => (
            <StatCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EfficiencyDashboard;
