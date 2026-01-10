import { motion } from "framer-motion";
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
  { title: "Provider Credentialing", icon: <UserCheck />, position: "bottom" },
  {
    title: "Eligibility and Benefits",
    icon: <ClipboardCheck />,
    position: "top",
  },
  { title: "Charge Entry", icon: <Settings />, position: "bottom" },
  { title: "Medical Coding", icon: <Cpu />, position: "top" },
  { title: "EDI", icon: <FileText />, position: "bottom" },
  { title: "Pymt Posting", icon: <Activity />, position: "top" },
  { title: "A/R", icon: <Layers />, position: "bottom" },
  { title: "Denial Management", icon: <RotateCcw />, position: "top" },
  { title: "Patient Follow Up", icon: <Wrench />, position: "bottom" },
];

const ClaimLifeCycle = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-4">
            Life Cycle of a{" "}
            <span className="text-emerald-500 italic font-serif">Claim</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            Our end-to-end revenue cycle management ensures every claim is
            tracked, optimized, and resolved with precision.
          </p>
        </motion.div>

        <div className="relative flex flex-col items-center">
          {/* Main Flow Arrow/Line */}
          <div className="absolute top-1/2 left-0 w-full h-12 bg-gray-50 -translate-y-1/2 rounded-full border border-gray-100 hidden lg:block" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-4 w-full">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col items-center ${
                  step.position === "top" ? "lg:mb-32" : "lg:mt-32"
                }`}
              >
                {/* Vertical Connector Line (Desktop) */}
                <div
                  className={`w-px h-12 bg-emerald-200 hidden lg:block ${
                    step.position === "top" ? "order-2" : "order-1"
                  }`}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -5, borderColor: "#10b981" }}
                  className={`bg-white border border-gray-100 p-4 rounded-2xl shadow-xl shadow-gray-100/50 flex flex-col items-center text-center w-full max-w-[140px] ${
                    step.position === "top" ? "order-1" : "order-2"
                  }`}
                >
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-3">
                    {step.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-black leading-tight">
                    {step.title}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimLifeCycle;
