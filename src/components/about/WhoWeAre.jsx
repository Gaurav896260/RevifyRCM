import { motion } from "framer-motion";

const WhoWeAre = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
    },
  };

  return (
    /* Reduced top padding from py-24/40 to pt-16/24 to shift content up */
    <section className="relative pt-16 pb-32 lg:pt-24 lg:pb-40 bg-white overflow-hidden selection:bg-emerald-100">
      {/* Background Aesthetic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT SIDE: THE "BIG" TEXT */}
          {/* Adjusted top-24 to top-16 to move it higher during scroll */}
          <div className="lg:col-span-7 sticky top-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.5em] mb-6 block">
                Establishment 2024
              </span>

              <h2 className="text-[15vw] lg:text-[11rem] font-bold tracking-[-0.078em] text-black leading-[1] relative">
                Who <br />
                <span className="text-emerald-500 italic font-serif font-light lowercase tracking-normal">
                  we are
                </span>
                {/* Overlapping Component: Decorative Dot/Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "120px" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-[2px] bg-black absolute -left-12 top-[45%] hidden lg:block"
                />
              </h2>
            </motion.div>
          </div>

          {/* RIGHT SIDE: WHOLE CONTENT */}
          {/* Reduced lg:pt-20 to lg:pt-12 to align with the higher text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 lg:pt-12 space-y-12 relative"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-2xl md:text-3xl text-black leading-tight font-light">
                <span className="font-black border-b-2 border-emerald-500 pb-1">
                  Revify RCM Group
                </span>{" "}
                is a cost-effective provider of revenue cycle consulting
                services.
              </p>

              <p className="text-gray-500 text-xl font-light leading-relaxed">
                Based in Austin, Tx, we leverage our operational expertise to
                deliver measurable results for healthcare organizations and
                their providers.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-10 bg-white border border-gray-100 rounded-[2rem] shadow-sm relative overflow-hidden group hover:border-emerald-200 transition-colors"
            >
              <div className="relative z-10 space-y-4">
                <p className="text-gray-600 leading-relaxed text-lg">
                  We create value for our clients by boosting operational
                  efficiency, cutting costs, and increasing revenue.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg italic border-l-2 border-emerald-500 pl-6">
                  Maintaining operating margins and patient satisfaction,
                  enabling providers to concentrate on providing care.
                </p>
              </div>
              {/* Subtle background flair for the component */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-black font-bold text-lg flex items-center gap-4">
                <span className="w-8 h-[1px] bg-emerald-500" />
                ROI Focused Compliance
              </p>
            </motion.div>
          </motion.div>
        </div>
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
