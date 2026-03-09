import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const auditItems = [
  {
    title: "Patient Intake Trends",
    desc: "Analyze patterns in patient registrations and eligibility verifications to ensure smooth onboarding and reduce early stage delays.",
  },
  {
    title: "Charge Entry Delays",
    desc: "Review the time from service delivery to charge capture, highlighting any lags that slow down billing.",
  },
  {
    title: "Billing Patterns & Delays",
    desc: "Examine submission trends and the gap between charge entry and claim filing to optimize timeliness and accuracy.",
  },
  {
    title: "Payments & Adjustments",
    desc: "Break down collections and adjustments across time buckets (e.g., 0-30 days, 31-60 days) to reveal trends in delayed reimbursements.",
  },
  {
    title: "Payment Processing Delays",
    desc: "Assess the time from receipt to posting payments in your system, minimizing hold ups in cash application.",
  },
  {
    title: "Outstanding AR by Payer",
    desc: "Segment uncollected revenue by primary, secondary, tertiary insurance, and patient balances for targeted follow up strategies.",
  },
  {
    title: "Days Sales Outstanding",
    desc: "Calculate average time to collect revenue by comparing outstanding AR to monthly sales, revealing conversion efficiency.",
  },
];

const ARRevenueAuditPage = () => {
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

      {/* Main Wrapper with massive padding to clear the navbar */}
      <div className="flex-grow pt-64 pb-0">
        {/* =========================================
            SECTION 1: HERO (Matches ServicesIntro)
        ========================================= */}
        <section className="relative pb-32 bg-white overflow-hidden selection:bg-teal-100">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* LEFT: TITLE */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <span className="text-teal-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">
                  RCM Consulting
                </span>
                <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-none">
                  A/R + Revenue
                  <br />
                  <span className="inline-block bg-teal-100 text-black px-4 py-2 mt-4 rounded-xl">
                    Audit
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
                  Unlock the full potential of your healthcare practice with our
                  expert AR Revenue Cycle Management Audit—a thorough,
                  data-driven evaluation designed to streamline your financial
                  operations, accelerate cash flow, and boost overall revenue
                  performance.
                </p>

                <div className="space-y-8 text-gray-500 text-xl font-light leading-relaxed">
                  <p className="border-l-2 border-teal-500 pl-8 text-black font-medium">
                    Tailored for hospitals, clinics, and medical groups, this
                    audit dives deep into your revenue processes to identify
                    inefficiencies, compare against industry benchmarks, and
                    deliver actionable insights for sustainable growth.
                  </p>
                </div>

                {/* Bottom Visual Accent */}
                <div className="pt-8">
                  <div className="flex items-center gap-6 group cursor-default">
                    <div className="w-16 h-px bg-teal-500 group-hover:w-24 transition-all duration-500" />
                    <p className="text-xs font-black uppercase tracking-widest text-black">
                      Efficiency • Cash Flow • Growth
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            SECTION 2: GRID (Matches RCMConsulting)
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
                  Comprehensive Review
                </span>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-black leading-[0.9]">
                  What Our <br /> Audit{" "}
                  <span className="inline-block bg-teal-100 text-black px-3 py-1 mt-2 rounded-lg">
                    Covers
                  </span>
                </h2>
                <p className="text-gray-400 font-light text-lg pt-4">
                  A 360-degree view of your revenue cycle, examining key metrics
                  to pinpoint bottlenecks and opportunities.
                </p>
                <div className="pt-8 hidden lg:block">
                  <div className="w-16 h-1 bg-teal-500 rounded-full" />
                </div>
              </motion.div>

              {/* Consulting Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
                {auditItems.map((service, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative"
                  >
                    {/* Visual Number Node */}
                    <div className="mb-6 flex items-center gap-4">
                      <span className="text-[10px] font-black text-teal-500 uppercase tracking-widest px-3 py-1 bg-teal-50 rounded-full group-hover:bg-teal-500 group-hover:text-white transition-colors duration-500">
                        Metric 0{idx + 1}
                      </span>
                      <div className="h-px flex-grow bg-neutral-200" />
                    </div>

                    <h3 className="text-2xl font-bold text-black mb-4 tracking-tight group-hover:text-teal-600 transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 font-light leading-relaxed text-lg">
                      {service.desc}
                    </p>
                  </motion.div>
                ))}

                {/* Benchmark Highlight Card (Takes up the last spot) */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-teal-600 p-8 rounded-3xl shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                  <h3 className="text-white text-xl font-black mb-3 relative z-10">
                    Market Standards
                  </h3>
                  <p className="text-teal-50 font-light text-sm leading-relaxed relative z-10">
                    All findings are benchmarked against market standards from
                    leading sources like <strong>MGMA</strong> and{" "}
                    <strong>HFMA</strong>, so you see exactly how your
                    organization stacks up against peers in efficiency, denial
                    rates, and collection timelines.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            SECTION 3: ACTION PLAN (Matches RCMServices)
        ========================================= */}
        <section className="relative py-32 bg-white overflow-hidden selection:bg-teal-100 border-t border-gray-100">
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
                  Strategic Growth
                </span>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-black leading-[0.9]">
                  Path <br />
                  <span className="inline-block bg-teal-100 text-black px-3 py-1 mt-2 rounded-lg">
                    Forward
                  </span>
                </h2>
              </motion.div>

              {/* Services Content */}
              <div className="lg:col-span-8 space-y-20">
                {/* Priority Block */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.5)]" />
                    <div className="h-px flex-grow bg-neutral-100" />
                  </div>
                  <h3 className="text-3xl font-black text-black mb-6 tracking-tight group-hover:text-teal-600 transition-colors duration-500">
                    Identifying Priorities & Next Steps
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-500 font-light leading-relaxed text-xl">
                      We don't just deliver data we provide clarity. Our audit
                      highlights the core areas demanding attention, such as
                      high DSO (e.g., over 50 days), excessive billing lags, or
                      unbalanced AR aging.
                    </p>
                    <p className="text-gray-500 font-light leading-relaxed text-xl border-l-2 border-teal-500 pl-6">
                      From there, we map out a clear path forward, prioritizing
                      quick wins like automating charge entry or enhancing payer
                      follow ups to reduce delays and improve first-pass
                      approval rates.
                    </p>
                  </div>
                </motion.div>

                {/* Collaborative Block */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.5)]" />
                    <div className="h-px flex-grow bg-neutral-100" />
                  </div>
                  <h3 className="text-3xl font-black text-black mb-6 tracking-tight group-hover:text-teal-600 transition-colors duration-500">
                    Addressing Pain Points Collaboratively
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-500 font-light leading-relaxed text-xl">
                      We start by listening to you and your team uncovering
                      internal challenges like staff overload from manual
                      processes, frequent claim denials, or inconsistent cash
                      flow.
                    </p>
                    <p className="text-gray-500 font-light leading-relaxed text-xl border-l-2 border-teal-500 pl-6 text-black font-medium">
                      Together, we'll craft customized solutions—such as
                      implementing intelligent automation to slash specialty
                      drug costs or refining workflows to drive financial
                      sustainability. Set measurable goals and watch your
                      practice thrive.
                    </p>
                  </div>
                </motion.div>
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
            className="max-w-5xl mx-auto bg-neutral-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
                Ready to transform your revenue cycle?
              </h2>
              <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto mb-10">
                Contact the Revify Group today for a no obligation consultation
                and start your audit because efficient RCM isn't just about
                numbers; it's about empowering your team and securing your
                organization's future.
              </p>
              <Link to="/contact">
                <button className="bg-white text-black px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform">
                  Start Your Audit
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

export default ARRevenueAuditPage;
