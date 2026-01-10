"use client";

import React from "react";
import { motion } from "framer-motion";
import { RadialScrollGallery } from "./RadialScrollGallery"; // Adjust path
import {
  UserCheck,
  ClipboardCheck,
  Settings,
  Cpu,
  FileText,
  Activity,
  Layers,
  RotateCcw,
  Wrench,
} from "lucide-react";

const steps = [
  {
    title: "Provider Credentialing",
    icon: <UserCheck />,
    desc: "Enrollment & Primary Source Verification",
  },
  {
    title: "Eligibility & Benefits",
    icon: <ClipboardCheck />,
    desc: "Real-time coverage verification",
  },
  {
    title: "Charge Entry",
    icon: <Settings />,
    desc: "Accurate data capture & entry",
  },
  {
    title: "Medical Coding",
    icon: <Cpu />,
    desc: "Expert ICD-10 & CPT optimization",
  },
  {
    title: "EDI Submission",
    icon: <FileText />,
    desc: "Electronic transmission to payers",
  },
  {
    title: "Payment Posting",
    icon: <Activity />,
    desc: "EOB processing & reconciliation",
  },
  {
    title: "A/R Management",
    icon: <Layers />,
    desc: "Aggressive follow-up on aged claims",
  },
  {
    title: "Denial Mgmt",
    icon: <RotateCcw />,
    desc: "Root cause analysis & appeals",
  },
  {
    title: "Patient Follow Up",
    icon: <Wrench />,
    desc: "Clear communication & statements",
  },
];

const ClaimLifeCycle = () => {
  return (
    <section className="relative bg-white pt-18">
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-10 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">
            End-to-End Workflow
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-6">
            Life Cycle of a{" "}
            <span className="text-emerald-500 italic font-serif">Claim</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-light text-lg">
            Experience a continuous loop of financial optimization driven by
            precision technology and expert oversight.
          </p>
        </motion.div>
      </div>

      {/* RADIAL GALLERY COMPONENT */}
      <div className="relative z-10">
        <RadialScrollGallery
          scrollDuration={3000}
          baseRadius={500}
          mobileRadius={250}
          visiblePercentage={55}
          startTrigger="top 10%"
        >
          {(hoveredIndex) =>
            steps.map((step, index) => (
              <div
                key={index}
                className="group relative flex items-center justify-center"
              >
                {/* THE CARD */}
                <div className="w-48 h-64 bg-white border border-gray-100 rounded-[2.5rem] p-6 shadow-2xl shadow-emerald-500/5 flex flex-col items-center justify-center text-center transition-all duration-500 overflow-hidden">
                  {/* Subtle Number Gradient background */}
                  <span className="absolute -top-4 -right-2 text-8xl font-black text-emerald-50/50 select-none pointer-events-none group-hover:text-emerald-100/50 transition-colors">
                    {index + 1}
                  </span>

                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(step.icon, { size: 28 })}
                  </div>

                  {/* Text */}
                  <h3 className="text-sm font-black uppercase tracking-widest text-black mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[10px] text-gray-400 font-medium tracking-tight px-2">
                    {step.desc}
                  </p>

                  {/* Hover Progress Bar */}
                  <div className="absolute bottom-0 left-0 h-1 bg-emerald-500 w-0 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            ))
          }
        </RadialScrollGallery>
      </div>

      {/* INFINITY SIGN OVERLAY (Matches the Curve of the Wheel) */}
      {/* INFINITY SIGN OVERLAY */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 opacity-20">
        <svg
          viewBox="0 0 1200 400"
          className="w-full h-full text-emerald-500 fill-none stroke-current"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            strokeWidth="2"
            d="M300,200 C300,50 900,50 900,200 C900,350 300,350 300,200 C300,50 -300,50 -300,200 C-300,350 300,350 300,200"
          />
        </svg>
      </div>

      <style jsx global>{`
        /* Adjusting the mask to feel more organic with the theme */
        .mask-gradient {
          mask-image: linear-gradient(
            to top,
            transparent 0%,
            black 20%,
            black 80%,
            transparent 100%
          );
        }
      `}</style>
    </section>
  );
};

export default ClaimLifeCycle;
