import React from "react";
import { motion } from "framer-motion";

const TrustSection = () => {
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
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-50/30 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT COLUMN: PREMIUM COMPLIANCE VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="relative group aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center bg-neutral-900 rounded-[4rem] p-12 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]"
          >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-48 h-56 md:w-64 md:h-72 drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              >
                <svg
                  viewBox="0 0 200 240"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M100 0L20 30V110C20 171.3 54.1 228.4 100 240C145.9 228.4 180 171.3 180 110V30L100 0Z"
                    fill="#10b981"
                  />
                  <path
                    d="M100 15L35 39V110C35 161.4 62.7 209.1 100 223.8C137.3 209.1 165 161.4 165 110V39L100 15Z"
                    fill="#059669"
                  />
                  {/* Cross Symbol */}
                  <rect x="85" y="75" width="30" height="30" fill="white" />
                  <rect x="70" y="90" width="60" height="30" fill="white" />
                </svg>
              </motion.div>

              <div className="mt-12 text-center">
                <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
                  HIPAA
                </h3>
                <p className="text-xl md:text-2xl font-bold text-emerald-400 tracking-[0.3em] uppercase mt-4">
                  Compliant
                </p>
              </div>
            </div>

            {/* Decorative Inner Glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
          </motion.div>

          {/* RIGHT COLUMN: TEXT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.4em] block">
                Trust & Security
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-[0.9]">
                Our Standard of{" "}
                <span className="text-emerald-500 italic font-serif font-light">
                  Excellence
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-8 text-gray-500 text-xl font-light leading-relaxed"
            >
              <p>
                At{" "}
                <span className="font-bold text-black uppercase tracking-tighter">
                  Revify RCM
                </span>
                , we don’t just follow regulations—we set the benchmark. Our
                commitment to integrity is woven into every automated flow and
                manual oversight.
              </p>

              <p className="border-l-2 border-emerald-500 pl-8 italic">
                We are driven by "Excellence in Action," delivering high-quality
                revenue services while maintaining the highest level of HIPAA
                data accuracy and patient privacy.
              </p>

              <p className="text-black font-medium">
                As your trusted partner, you can be confident that we treat
                patient information with the absolute respect, confidentiality,
                and protection it deserves.
              </p>
            </motion.div>

            {/* Bottom Visual Accent */}
            <motion.div variants={itemVariants} className="pt-8">
              <div className="flex items-center gap-6 group cursor-default">
                <div className="w-16 h-px bg-emerald-500 group-hover:w-24 transition-all duration-500" />
                <p className="text-xs font-black uppercase tracking-widest text-black">
                  Security • Integrity • Excellence
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

export default TrustSection;
