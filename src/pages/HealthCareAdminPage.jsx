import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HealthCareAdminPage = () => {
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

      {/* CHANGED: Increased pt-32 to pt-64 to push the content way down */}
      <div className="flex-grow pt-64 pb-24">
        <section className="relative bg-white overflow-hidden selection:bg-emerald-100">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/30 rounded-full blur-[120px] pointer-events-none -translate-y-1/4 translate-x-1/4" />

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* LEFT: TITLE */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="lg:col-span-5"
              >
                <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">
                  RCM Consulting
                </span>
                <h1 className="text-6xl md:text-7xl font-serif italic font-light text-black tracking-tighter leading-none">
                  Health Care <br />
                  <span className="text-emerald-500 font-sans font-bold not-italic tracking-tight">
                    Administrations
                  </span>
                </h1>
              </motion.div>

              {/* RIGHT: CONTENT */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="lg:col-span-7 space-y-10 pt-4"
              >
                <p className="text-gray-500 text-2xl md:text-3xl font-light leading-snug">
                  At{" "}
                  <span className="font-black text-black uppercase tracking-tighter">
                    Revify RCM Group
                  </span>
                  , we empower healthcare organizations with comprehensive
                  revenue cycle management (RCM) and administration services
                  designed to maximize financial performance and operational
                  efficiency.
                </p>

                <div className="p-8 bg-gray-50/50 border border-gray-100 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                  <p className="text-gray-600 text-lg font-light leading-relaxed">
                    Tailored for hospitals, clinics, and medical practices, our
                    solutions target the unique challenges faced by healthcare
                    providers, ensuring faster payments, reduced costs, and
                    sustainable growth.
                  </p>
                </div>

                {/* Bottom Visual Accent */}
                <div className="pt-8">
                  <div className="flex items-center gap-6 group cursor-default">
                    <div className="w-16 h-px bg-emerald-500 group-hover:w-24 transition-all duration-500" />
                    <p className="text-xs font-black uppercase tracking-widest text-black">
                      Efficiency • Performance • Growth
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

export default HealthCareAdminPage;
