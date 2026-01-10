import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-[#fafafa] pt-24 pb-12 overflow-hidden border-t border-gray-100">
      {/* Massive Background Text - "Revify" spanning left to right - MUCH MORE VISIBLE */}
      <div className="absolute bottom-8 left-0 right-0 pointer-events-none select-none flex items-end justify-start overflow-hidden">
        <svg
          viewBox="0 0 1200 250"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMax meet"
        >
          <text
            x="10"
            y="200"
            fontSize="220"
            fontWeight="400"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2"
            fontFamily="Inter, sans-serif"
            letterSpacing="-0.02em"
          >
            Revify
          </text>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* LEFT SECTION: Empty */}
          <div></div>

          {/* RIGHT SECTION: Location Only */}
          <div className="flex justify-end">
            <div className="max-w-xs">
              <h4 className="text-emerald-600 font-serif italic text-xl mb-6">
                Location
              </h4>
              <div className="space-y-2 text-gray-600 font-light tracking-tight">
                <p className="font-bold text-black text-sm uppercase tracking-widest">
                  Headquarters
                </p>
                <p>Revify RCM Group</p>
                <p>1515 E Cesar Chavez Suite #100</p>
                <p>Austin, Tx. 78702</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP - Minimal */}
        <div className="pt-8 border-t border-gray-200/60 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[10px] uppercase font-black tracking-[0.3em] text-emerald-600 flex items-center gap-2"
          >
            Back to top ↑
          </motion.button>
        </div>
      </div>

      <style jsx>{`
        footer {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
