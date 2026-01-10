import { motion } from "framer-motion";

const OurMission = () => {
  // Animation variants consistent with your Hero and Vision sections
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
      {/* Background Accent - Soft Left Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-50/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* TEXT CONTENT (Left on Desktop) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >
          <motion.div variants={itemVariants}>
            <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">
              Our Core Purpose
            </span>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-black leading-[0.9]">
              Our{" "}
              <span className="text-emerald-500 italic font-serif font-light">
                Mission
              </span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="relative">
              <p className="text-gray-500 text-xl font-light leading-relaxed">
                Our core business philosophy is simple:{" "}
                <span className="text-black font-semibold">
                  you should be able to focus on providing exceptional patient
                  care.
                </span>{" "}
                Meanwhile, we'll focus on what we do best—enhancing your revenue
                by combining human expertise with cutting-edge AI.
              </p>
            </div>

            <p className="text-gray-500 text-xl font-light leading-relaxed border-l-2 border-emerald-500 pl-8">
              Our systems utilize AI to automate appeals and crawl major payer
              websites, turning complex operational hurdles into
              straightforward, intelligent solutions.
            </p>

            <div className="pt-4">
              <p className="text-black text-2xl font-black tracking-tighter uppercase italic">
                We don't just manage your revenue cycle,{" "}
                <span className="text-emerald-500">we transform it.</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* IMAGE SECTION (Right on Desktop) */}
        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="relative z-10 overflow-hidden rounded-[3.5rem] border border-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]"
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
              alt="Healthcare Mission"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>

          {/* Floating Mission Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -bottom-8 -right-8 z-20 bg-black text-white p-8 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center min-w-[180px]"
          >
            <span className="text-emerald-400 text-4xl font-black mb-1">
              24/7
            </span>
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-60">
              AI Monitoring
            </p>
            <div className="mt-4 flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  animate={{ height: [8, 16, 8] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  className="w-1 bg-emerald-500 rounded-full"
                />
              ))}
            </div>
          </motion.div>

          {/* Back Decoration */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -z-10" />
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

export default OurMission;
