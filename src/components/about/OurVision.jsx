import { motion } from "framer-motion";

const OurVision = () => {
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
    <section className="relative pt-16 pb-32 lg:pt-24 lg:pb-40 bg-white overflow-hidden selection:bg-emerald-100">
      {/* Background Aesthetic - Flipped to the right side */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT SIDE: THE PARAGRAPH CONTENT (lg:col-span-5) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 lg:pt-12 space-y-12 relative order-2 lg:order-1"
          >
            {/* Paragraph Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-2xl md:text-3xl text-black leading-tight font-light">
                We're{" "}
                <span className="font-black border-b-2 border-emerald-500 pb-1">
                  Revify
                </span>
                , and we're leading a revolution in Revenue Cycle Management.
              </p>

              <p className="text-gray-500 text-xl font-light leading-relaxed">
                By using AI to automate tasks, we're cutting down on manual work
                and solving complex challenges that have hindered the healthcare
                industry for decades.
              </p>
            </motion.div>

            {/* Bottom Insight Card */}
            <motion.div
              variants={itemVariants}
              className="p-10 bg-white border border-gray-100 rounded-[2rem] shadow-sm relative overflow-hidden group hover:border-emerald-200 transition-colors"
            >
              <div className="relative z-10 space-y-4">
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our goal is to transform the RCM market with smart tools that
                  handle processes autonomously.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg italic border-l-2 border-emerald-500 pl-6">
                  Allowing healthcare leaders to focus on{" "}
                  <span className="text-black font-semibold">
                    oversight and strategy
                  </span>{" "}
                  rather than technical bottlenecks.
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
            </motion.div>

            {/* Footer Tag */}
            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-black font-bold text-lg flex items-center gap-4">
                <span className="w-8 h-[1px] bg-emerald-500" />
                Innovation • Strategy • Results
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: THE "BIG" TEXT (lg:col-span-7 Sticky) */}
          <div className="lg:col-span-7 sticky top-16 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:text-right"
            >
              <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.5em] mb-6 block">
                The Future of RCM
              </span>

              <h2 className="text-[15vw] lg:text-[11rem] font-bold tracking-[-0.078em] text-black leading-[1] relative inline-block">
                Our <br />
                <span className="text-emerald-500 italic font-serif font-light lowercase tracking-normal">
                  Vision
                </span>
                {/* Decorative Line - Adjusted position for right side alignment */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "120px" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-[2px] bg-black absolute -right-12 top-[45%] hidden lg:block"
                />
              </h2>
            </motion.div>
          </div>
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

export default OurVision;
