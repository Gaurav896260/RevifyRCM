import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-[#fafafa] pt-24 pb-12 overflow-hidden border-t border-gray-100">
      {/* Massive Background Initial (Matching the 2nd image style) */}
      <div className="absolute -bottom-12 -right-12 pointer-events-none select-none">
        <h1 className="text-[25vw] font-bold text-gray-200/40 leading-none tracking-tighter">
          Rv
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          {/* LEFT SECTION: Logo & Copyright */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div className="space-y-6">
              <img src="/image.png" alt="Revify Logo" className="w-48 h-auto" />
              <div className="space-y-1 text-sm text-gray-500 font-light">
                <p>All rights reserved. © 2026</p>
                <p>Revify RCM Group LLC.</p>
              </div>
            </div>
          </div>

          {/* MIDDLE SECTION: Location (From 1st image) */}
          <div className="md:col-span-4">
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

          {/* RIGHT SECTION: Contact (From 1st image) */}
          <div className="md:col-span-4">
            <h4 className="text-emerald-600 font-serif italic text-xl mb-6">
              Contact
            </h4>
            <div className="space-y-4 text-gray-600 font-light">
              <a
                href="mailto:Info@revifyrcm.com"
                className="block hover:text-emerald-500 transition-colors"
              >
                Info@revifyrcm.com
              </a>
              <div className="space-y-1">
                <p>Corporate: (888) 698-9142</p>
                <p>Fax: (877) 681-0558</p>
              </div>

              {/* Simple Social Links */}
              <div className="flex gap-6 pt-4 text-xs font-bold uppercase tracking-widest text-black">
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="pt-8 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
            <a href="#" className="hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Cookie Policy
            </a>
          </div>

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
