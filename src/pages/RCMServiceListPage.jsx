import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle2 } from "lucide-react";

const backendOptions = [
  "Billing",
  "ICD-10 Order",
  "Payment Posting",
  "A/R Follow up",
  "Denial Management",
  "Patient Statement & Collection Monitoring",
];

const backendStats = [
  { label: "Patient Visits Finalized in EHR Same Day", value: "92%" },
  { label: "Revify Team Precision Rate", value: "92%" },
  { label: "First Pass Claim Approval Rate", value: "94%" },
  { label: "Electronic Claims Submissions", value: "96%" },
  { label: "AR Days", value: "40" },
  { label: "Increase in Cash Flow (Annually)", value: "14%" },
  { label: "Time to Bill Payers", value: "Up to 2 Days" },
  { label: "Time to Process Received Payments", value: "Up to 2 Days" },
  { label: "Uncollected Payments vs Avg Monthly Charges", value: "94%" },
  { label: "Days Sales Outstanding (DSO) Strive", value: "35" },
];

const frontendOptions = [
  "Patient Scheduling",
  "Eligibility & Benefits Verification",
  "Prior Authorization",
];

const RCMServiceListPage = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.19, 1, 0.22, 1] },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow pt-64 pb-0">
        {/* =========================================
            SECTION 1: HERO
        ========================================= */}
        <section className="relative pb-24 bg-white overflow-hidden selection:bg-teal-100">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />

          <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-teal-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">
                Comprehensive Solutions
              </span>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-black tracking-tighter leading-none">
                RCM Service
                <br />
                <span className="inline-block bg-teal-100 text-black px-6 py-2 mt-4 rounded-xl">
                  List
                </span>
              </h1>
              <p className="text-gray-500 text-xl font-light leading-relaxed mt-8 max-w-3xl mx-auto">
                End-to-end revenue cycle management divided into specialized
                frontend and backend operations to ensure maximum efficiency and
                revenue capture for your practice.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            SECTION 2: BACKEND CYCLE
        ========================================= */}
        <section className="relative py-32 bg-[#fafafa] border-t border-gray-100 overflow-hidden selection:bg-teal-100">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            {/* CENTERED HEADING FOR PARTITION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-black">
                Backend Cycle
              </h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full" />
            </motion.div>

            {/* SUB-OPTIONS PILLS */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-20"
            >
              {backendOptions.map((option, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white border border-gray-200 text-black px-6 py-3 rounded-full text-sm font-bold tracking-tight shadow-sm flex items-center gap-2"
                >
                  <CheckCircle2 size={16} className="text-teal-500" />
                  {option}
                </motion.div>
              ))}
            </motion.div>

            {/* FOCUS & STRENGTHS (STATS GRID) */}
            <div className="mb-10 text-center">
              <span className="text-teal-600 font-black text-xs uppercase tracking-[0.4em] block">
                Focus and Strengths
              </span>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {backendStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all duration-300 group flex flex-col justify-between"
                >
                  <p className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-4 leading-relaxed group-hover:text-black transition-colors">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-black text-teal-600 tracking-tighter">
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================
            SECTION 3: FRONTEND CYCLE
        ========================================= */}
        <section className="relative py-32 bg-white border-t border-gray-100 overflow-hidden selection:bg-teal-100">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            {/* CENTERED HEADING FOR PARTITION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-black">
                Frontend Cycle
              </h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full" />
            </motion.div>

            {/* SUB-OPTIONS PILLS */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-20"
            >
              {frontendOptions.map((option, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-gray-50 border border-gray-200 text-black px-6 py-3 rounded-full text-sm font-bold tracking-tight shadow-sm flex items-center gap-2"
                >
                  <CheckCircle2 size={16} className="text-teal-500" />
                  {option}
                </motion.div>
              ))}
            </motion.div>

            {/* FRONTEND CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-block bg-teal-100 text-black px-4 py-1 rounded-lg font-black tracking-tight mb-2">
                  Workflow Optimization
                </div>
                <p className="text-gray-500 font-light leading-relaxed text-xl">
                  Our expert front end operations team streamlines your
                  practice’s scheduling and patient intake processes, ensuring a
                  seamless and efficient experience for both your staff and
                  patients. We manage all aspects of scheduling, coordinating
                  appointments to optimize your clinic’s workflow and patient
                  satisfaction.
                </p>
                <p className="text-gray-500 font-light leading-relaxed text-xl border-l-2 border-teal-500 pl-6">
                  Using our fast, automated, prebuilt system, we verify
                  insurance eligibility and benefits at the time of scheduling
                  and again 48 hours prior to appointment time. This ensures no
                  authorizations are required, coordination of benefits is
                  aligned, providers are in network, and the visit is medically
                  necessary.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-block bg-teal-100 text-black px-4 py-1 rounded-lg font-black tracking-tight mb-2">
                  Proactive Management
                </div>
                <p className="text-gray-500 font-light leading-relaxed text-xl">
                  With authorizations increasingly required by Medicare and most
                  commercial plans, our team proactively manages the process to
                  secure approvals and referrals, minimizing delays and denials.
                  To streamline check in and reduce patient wait times, we
                  collect copays and deductibles over the phone before
                  appointments and can integrate with or set up an online
                  patient portal for convenient payments.
                </p>
                <p className="text-gray-500 font-light leading-relaxed text-xl text-black font-medium">
                  Our advanced tools proactively identify and resolve up to 70%
                  of potential insurance denials before the patient’s visit,
                  ensuring smoother claims processing and improved revenue
                  capture. Our goal is to customize our services to meet your
                  clinic’s unique needs, delivering a hassle free experience.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default RCMServiceListPage;
