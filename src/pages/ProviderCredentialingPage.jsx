import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const credentialingSteps = [
  {
    title: "Initial Enrollment",
    desc: "We handle the exhaustive paperwork and submit error-free applications to all major payers.",
  },
  {
    title: "Source Verification",
    desc: "Rigorous background checks and license verification to ensure strict NCQA/URAC compliance.",
  },
  {
    title: "CAQH Management",
    desc: "Routine updates and attestations to keep your provider data current across all networks.",
  },
  {
    title: "Re-credentialing",
    desc: "Proactive tracking of expiring licenses to prevent sudden payment disruptions or penalties.",
  },
];

const ProviderCredentialingPage = () => {
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

      <div className="flex-grow pt-64 pb-0">
        {/* =========================================
            SECTION 1: HERO
        ========================================= */}
        <section className="relative pb-32 bg-white overflow-hidden selection:bg-teal-100">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            {/* CHANGED: Adjusted gap and alignment to handle the long word better */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* LEFT: TITLE */}
              {/* CHANGED: Gave the left column 6 spans instead of 5 for more width */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-6"
              >
                <span className="text-teal-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">
                  RCM Consulting
                </span>
                {/* CHANGED: Scaled down from text-8xl to lg:text-7xl so "Credentialing" fits */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black tracking-tighter leading-none">
                  Provider
                  <br />
                  <span className="inline-block bg-teal-100 text-black px-4 py-2 mt-4 rounded-xl">
                    Credentialing
                  </span>
                </h1>
              </motion.div>

              {/* RIGHT: DESCRIPTION */}
              {/* CHANGED: Adjusted to col-span-6 to balance the grid */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-6 space-y-10 pt-4"
              >
                <p className="text-gray-500 text-xl font-light leading-relaxed">
                  Navigating the complex world of payer enrollment can be
                  daunting. At Revify RCM Group, we remove the administrative
                  burden so your practitioners can focus on patient care.
                </p>

                <p className="border-l-2 border-teal-500 pl-8 text-black font-medium text-xl font-light leading-relaxed">
                  We manage the entire lifecycle of provider enrollment,
                  ensuring your practice is fully in-network, compliant, and
                  ready to bill without costly delays.
                </p>

                {/* Bottom Visual Accent */}
                <div className="pt-8">
                  <div className="flex items-center gap-6 group cursor-default">
                    <div className="w-16 h-px bg-teal-500 group-hover:w-24 transition-all duration-500" />
                    <p className="text-xs font-black uppercase tracking-widest text-black">
                      Compliance • Speed • Accuracy
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            SECTION 2: PROCESS GRID
        ========================================= */}
        <section className="relative py-32 bg-[#fafafa] overflow-hidden selection:bg-teal-100">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              {/* Main Title Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="lg:col-span-4 space-y-6"
              >
                <span className="text-teal-600 font-black text-xs uppercase tracking-[0.4em] block">
                  Methodology
                </span>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-black leading-[0.9]">
                  The <br />
                  <span className="inline-block bg-teal-100 text-black px-3 py-1 mt-2 rounded-lg">
                    Process
                  </span>
                </h2>
                <div className="pt-8 hidden lg:block">
                  <div className="w-16 h-1 bg-teal-500 rounded-full" />
                </div>
              </motion.div>

              {/* Consulting Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                {credentialingSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative"
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <span className="text-[10px] font-black text-teal-500 uppercase tracking-widest px-3 py-1 bg-teal-50 rounded-full group-hover:bg-teal-500 group-hover:text-white transition-colors duration-500">
                        Step 0{idx + 1}
                      </span>
                      <div className="h-px flex-grow bg-neutral-200" />
                    </div>

                    <h3 className="text-2xl font-bold text-black mb-3 tracking-tight group-hover:text-teal-600 transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-white py-24 px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-neutral-900 rounded-[3rem] p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="relative z-10">
              <h2 className="text-4xl font-black text-white tracking-tighter mb-4">
                Tired of credentialing delays?
              </h2>
              <p className="text-gray-400 font-light max-w-xl mx-auto mb-8">
                Let our dedicated team handle the paperwork. Partner with Revify
                to get your providers credentialed faster.
              </p>
              <Link to="/contact">
                <button className="bg-white text-black px-8 py-3 rounded-full font-black hover:scale-105 transition-transform">
                  Get Credentialed Today
                </button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default ProviderCredentialingPage;
