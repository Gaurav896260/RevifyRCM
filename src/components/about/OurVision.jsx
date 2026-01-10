import { motion } from "framer-motion";

const OurVision = () => {
  // Animation variants consistent with your Identity and Hero sections
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
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* IMAGE SECTION (Left on Desktop) */}
        <div className="relative order-2 lg:order-1 group">
          {/* Main Image with Premium Styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="relative z-10 overflow-hidden rounded-[3rem] border border-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)]"
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              alt="AI and Technology Vision"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Floating AI Performance Card */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -top-6 -right-6 md:-right-10 z-20 bg-white/90 backdrop-blur-xl border border-emerald-100 p-6 rounded-3xl shadow-2xl max-w-[200px]"
          >
            <div className="flex flex-col gap-1">
              <span className="text-emerald-500 font-black text-2xl tracking-tighter">
                AI-Driven
              </span>
              <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
                Task Automation
              </p>
              <div className="mt-3 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="h-full bg-emerald-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Geometric Background Decoration */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-50 rounded-br-[80px] -z-0" />
        </div>

        {/* TEXT CONTENT (Right on Desktop) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 order-1 lg:order-2"
        >
          <motion.div variants={itemVariants}>
            <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">
              The Future of RCM
            </span>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-black leading-[0.9]">
              Our{" "}
              <span className="text-emerald-500 italic font-serif font-light">
                Vision
              </span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-gray-500 text-xl font-light leading-relaxed">
              We're <span className="font-bold text-black">Revify</span>, and
              we're leading a revolution in Revenue Cycle Management. By using
              AI to automate tasks, we're cutting down on manual work and
              solving complex challenges.
            </p>

            <p className="text-gray-500 text-xl font-light leading-relaxed">
              Our goal is to transform the RCM market with smart tools that can
              handle processes on their own, allowing healthcare leaders to
              focus on{" "}
              <span className="text-black font-medium underline decoration-emerald-500/30 decoration-4 underline-offset-4">
                oversight and strategy.
              </span>
            </p>

            <div className="pt-6">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-px bg-emerald-500 group-hover:w-20 transition-all duration-500" />
                <p className="text-sm font-black uppercase tracking-widest text-black">
                  Innovation • Strategy • Results
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        .font-serif {
          font-family: "Playfair Display", serif;
        }
      `}</style>
    </section>
  );
};

export default OurVision;
