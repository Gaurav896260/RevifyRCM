import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [isAtTop, setIsAtTop] = useState(true);

  // Listen to scroll changes to toggle navbar visibility
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsAtTop(false);
    } else {
      setIsAtTop(true);
    }
  });

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Why Choose Us", path: "/why-us" },
    { name: "Our Services", path: "/services" },
  ];

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isAtTop ? 0 : -100,
        opacity: isAtTop ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-8 w-full px-8 md:px-16 flex justify-between items-center z-50"
    >
      <Link to="/">
        <img
          src="/image.png"
          alt="Logo"
          className="w-52 h-auto object-contain"
        />
      </Link>

      <div className="hidden lg:flex items-center bg-gray-50/80 border border-gray-200/50 backdrop-blur-md px-2 py-1.5 rounded-full shadow-sm">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`px-6 py-2 rounded-full text-xs font-semibold transition-all ${
              location.pathname === item.path
                ? "bg-black text-white"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {item.name}
          </Link>
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
