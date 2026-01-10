import React from "react";
import { motion } from "framer-motion";

const WhyUsIntro = () => {
  // Animation variants consistent with your Hero and Identity sections
  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.19, 1, 0.22, 1] },
    },
  };

  return (
    <section className="relative py-32 bg-white overflow-hidden selection:bg-emerald-100">
      {/* Background Accent - Soft Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-emerald-50/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.span
            variants={itemVariants}
            className="text-emerald-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block"
          >
            The Revify Advantage
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-black leading-none"
          >
            Why Choose{" "}
            <span className="text-emerald-500 italic font-serif font-light">
              Us
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE SECTION with Floating Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="relative group"
          >
            <div className="relative z-10 overflow-hidden rounded-[3rem] border border-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
                alt="Professional Expertise"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-8 -right-8 bg-black text-white p-8 rounded-3xl shadow-2xl z-20"
            >
              <p className="text-emerald-400 text-4xl font-black tracking-tighter">
                30+ Years
              </p>
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-60">
                Combined Expertise
              </p>
            </motion.div>
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-500 text-xl font-light leading-relaxed">
                We know that{" "}
                <span className="text-black font-semibold italic">
                  no two businesses are the same.
                </span>{" "}
                By partnering with a variety of providers, we've gained a deep
                understanding of what truly drives their success.
              </p>

              <p className="text-gray-500 text-xl font-light leading-relaxed border-l-2 border-emerald-500 pl-8">
                We believe that besides financial growth, the most valuable
                thing we can offer our clients is{" "}
                <span className="text-black font-medium underline decoration-emerald-500/30 decoration-4 underline-offset-4">
                  clear, dependable, and timely service.
                </span>
              </p>

              <p className="text-gray-500 text-xl font-light leading-relaxed">
                Our team leverages over{" "}
                <span className="font-bold text-black">30 years</span> of
                combined experience in Revenue Cycle Management, along with the
                power of{" "}
                <span className="text-emerald-600 font-semibold">
                  AI automation
                </span>
                , to deliver services with the highest level of accuracy and
                care.
              </p>
            </motion.div>

            {/* Bottom Visual Accent */}
            <motion.div variants={itemVariants} className="pt-4">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-px bg-emerald-500 group-hover:w-20 transition-all duration-500" />
                <p className="text-sm font-black uppercase tracking-widest text-black">
                  Precision • Accuracy • Care
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .font-serif {
          font-family: "Playfair Display", serif;
        }
      `}</style>
    </section>
  );
};

export default WhyUsIntro;
