import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
      className="absolute top-8 w-full px-8 md:px-16 flex justify-between items-center z-50"
    >
      {/* LARGER LOGO */}
      <img src="/image.png" alt="Logo" className="w-52 h-auto object-contain" />

      {/* NAV LINKS */}
      <div className="hidden lg:flex items-center bg-gray-50/80 border border-gray-200/50 backdrop-blur-md px-2 py-1.5 rounded-full shadow-sm">
        {["Home", "About Us", "Why Choose Us", "Our Services"].map((item, idx) => (
          <button
            key={item}
            className={`px-6 py-2 rounded-full text-xs font-semibold transition-all ${
              idx === 0
                ? "bg-black text-white"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-black text-white px-8 py-2.5 rounded-full text-sm font-bold tracking-tight"
      >
        SIGN UP
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
