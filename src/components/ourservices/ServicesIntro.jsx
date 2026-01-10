import React from "react";
import { motion } from "framer-motion";

const ServicesIntro = () => {
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
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/30 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT: TITLE */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-7xl md:text-8xl font-serif italic font-light text-black tracking-tighter leading-none">
              Our <span className="text-emerald-500">services</span>
            </h2>
          </motion.div>

          {/* RIGHT: DESCRIPTION */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-10 pt-4"
          >
            <p className="text-gray-500 text-xl font-light leading-relaxed">
              At{" "}
              <span className="font-black text-black uppercase tracking-tighter">
                Revify RCM Group
              </span>
              , we offer comprehensive revenue cycle management solutions that
              empower healthcare providers to focus on patient care while we
              handle the complexities of billing and financial operations.
            </p>

            <div className="space-y-8 text-gray-500 text-xl font-light leading-relaxed">
              <p>
                Our core suite includes accurate medical billing and coding,
                seamless claims submission and follow-up, efficient payment
                posting, reconciliation, and proactive denial management.
              </p>

              <p className="border-l-2 border-emerald-500 pl-8 italic text-black font-medium">
                We provide insightful analytics and reporting to help providers
                make informed business decisions, reduce revenue loss, and
                ensure steady financial growth.
              </p>
            </div>

            {/* Bottom Visual Accent */}
            <div className="pt-8">
              <div className="flex items-center gap-6 group cursor-default">
                <div className="w-16 h-px bg-emerald-500 group-hover:w-24 transition-all duration-500" />
                <p className="text-xs font-black uppercase tracking-widest text-black">
                  Efficiency • Transparency • Growth
                </p>
              </div>
            </div>
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

export default ServicesIntro;
