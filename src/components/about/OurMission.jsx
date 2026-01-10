import { motion } from "framer-motion";

const OurMission = () => {
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
      {/* Background Aesthetic - Left accent to ground the text */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-emerald-50/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT SIDE: THE "BIG" TEXT (Sticky like WhoWeAre) */}
          <div className="lg:col-span-7 sticky top-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.5em] mb-6 block">
                Our Core Purpose
              </span>

              <h2 className="text-[15vw] lg:text-[11rem] font-bold tracking-[-0.078em] text-black leading-[1] relative">
                Our <br />
                <span className="text-emerald-500 italic font-serif font-light lowercase tracking-normal">
                  Mission
                </span>
                {/* Decorative Line matching previous sections */}
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

          {/* RIGHT SIDE: CONTENT & INSIGHTS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 lg:pt-12 space-y-12 relative"
          >
            {/* Primary Paragraph */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-2xl md:text-3xl text-black leading-tight font-light">
                Our philosophy is simple:{" "}
                <span className="font-black border-b-2 border-emerald-500 pb-1">
                  focus on patient care
                </span>
                —we'll handle the revenue.
              </p>

              <p className="text-gray-500 text-xl font-light leading-relaxed">
                We enhance your revenue by combining deep human operational
                expertise with cutting-edge AI automation.
              </p>
            </motion.div>

            {/* Feature Card: AI Automation Insight */}
            <motion.div
              variants={itemVariants}
              className="p-10 bg-white border border-gray-100 rounded-[2rem] shadow-sm relative overflow-hidden group hover:border-emerald-200 transition-colors"
            >
              <div className="relative z-10 space-y-4">
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our systems utilize AI to automate appeals and crawl major
                  payer websites.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg italic border-l-2 border-emerald-500 pl-6">
                  Turning complex operational hurdles into straightforward,
                  intelligent solutions.
                </p>
              </div>
              {/* Decorative Flair */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
            </motion.div>

            {/* Bottom Statement */}
            <motion.div variants={itemVariants} className="pt-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-[1px] bg-emerald-500" />
                <p className="text-black font-bold text-lg">
                  24/7 AI Transformation
                </p>
              </div>
              <p className="text-black text-2xl font-black tracking-tighter uppercase italic leading-none">
                We don't just manage your revenue cycle,{" "}
                <span className="text-emerald-500">we transform it.</span>
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

export default OurMission;
