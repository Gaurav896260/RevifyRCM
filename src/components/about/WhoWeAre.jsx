import { motion } from "framer-motion";

const WhoWeAre = () => {
  // Animation variants consistent with your Hero Section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

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
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-50 rounded-full blur-[120px] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* TEXT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >
          <motion.div variants={itemVariants}>
            <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">
              Our Identity
            </span>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-black leading-[0.9]">
              Who{" "}
              <span className="text-emerald-500 italic font-serif font-light">
                we are
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-8 text-gray-500 leading-relaxed font-light text-xl"
          >
            <p>
              <span className="font-black text-black uppercase tracking-tighter mr-2">
                Revify RCM Group
              </span>
              is a cost-effective provider of revenue cycle consulting services,
              with a presence in Austin, Tx. We leverage our operational
              expertise to deliver measurable results for healthcare
              organizations and its providers.
            </p>

            <p className="border-l-2 border-emerald-500 pl-8 py-2">
              We create value for our clients by boosting operational
              efficiency, cutting costs, and increasing revenue. Our services
              help clients maintain their operating margins and patient
              satisfaction, enabling them to concentrate on providing care.
            </p>

            <p className="text-black font-medium">
              Our goal is to increase the Return on Investment for all our
              clients while maintaining full HIPAA compliance.
            </p>
          </motion.div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="relative group"
        >
          {/* Main Image with Premium Frame */}
          <div className="relative z-10 overflow-hidden rounded-[3rem] border border-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
              alt="Healthcare Technology"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Glassmorphism Overlay on Hover */}
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Floating Aesthetic Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-8 -left-8 w-64 h-24 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl p-6 z-20 flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600">
                Compliance
              </p>
              <p className="text-sm font-bold text-black">100% HIPAA Secure</p>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=Playfair+Display:italic@400&display=swap");
        .font-serif {
          font-family: "Playfair Display", serif;
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;
