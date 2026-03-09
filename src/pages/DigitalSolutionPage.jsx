import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DigitalSolutionPage = () => {
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
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow pt-64 pb-32">
        <section className="relative bg-white overflow-hidden selection:bg-teal-100">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* LEFT: TITLE */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <span className="text-teal-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">
                  IT Consulting
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black tracking-tighter leading-none">
                  Digital
                  <br />
                  <span className="inline-block bg-teal-100 text-black px-4 py-2 mt-4 rounded-xl">
                    Solution
                  </span>
                </h1>
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
                  We deliver cutting-edge Digital Solutions powered by robust
                  AWS serverless architectures, tailored specifically to meet
                  the complex demands of the healthcare sector.
                </p>

                <p className="border-l-2 border-teal-500 pl-8 text-black font-medium text-xl font-light leading-relaxed">
                  By utilizing <span className="font-bold">AWS Lambda</span> for
                  compute, <span className="font-bold">Amazon API Gateway</span>{" "}
                  for secure endpoints, and{" "}
                  <span className="font-bold">Amazon DynamoDB</span> for
                  ultra-fast data retrieval, we build agile and scalable
                  applications. From advanced patient portals to custom API
                  integrations, our digital solutions drive operational
                  efficiency and enhance engagement.
                </p>

                <div className="pt-8">
                  <div className="flex items-center gap-6 group cursor-default">
                    <div className="w-16 h-px bg-teal-500 group-hover:w-24 transition-all duration-500" />
                    <p className="text-xs font-black uppercase tracking-widest text-black">
                      Serverless • Integration • Innovation
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default DigitalSolutionPage;
