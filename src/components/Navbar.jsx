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
    {
      name: "Consulting Offerings",
      isDropdown: true,
      dropdownData: [
        {
          title: "RCM Consulting",
          links: [
            {
              name: "Health Care Administrations",
              path: "/healthcare-administrations",
            },
            { name: "A/R + Revenue", path: "/ar-revenue-audit" },
            { name: "Provider Credentialing", path: "/provider-credentialing" },
            { name: "RCM Service List", path: "/rcm-service-list" },
          ],
        },
        {
          title: "IT Consulting",
          links: [
            { name: "Cloud Consulting", path: "/cloud-consulting" },
            { name: "Server Management", path: "/server-management" },
            { name: "Digital Solution", path: "/digital-solution" },
          ],
        },
      ],
    },
    // --- NEW CONTACT LINK ---
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isAtTop ? 0 : -100,
        opacity: isAtTop ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-4 w-full px-8 md:px-16 flex justify-between items-center z-50"
    >
      <Link to="/">
        <img
          src="/image.png"
          alt="Logo"
          className="w-52 h-auto object-contain"
        />
      </Link>

      <div className="hidden lg:flex items-center bg-gray-50/80 border border-gray-200/50 backdrop-blur-md px-2 py-1.5 rounded-full shadow-sm">
        {navItems.map((item) =>
          item.isDropdown ? (
            <div key={item.name} className="relative group">
              {/* Dropdown Trigger */}
              <button className="px-6 py-2 rounded-full text-xs font-semibold transition-all text-gray-500 group-hover:text-black flex items-center gap-1.5 cursor-default">
                {item.name}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="mt-0.5 opacity-50 group-hover:rotate-180 transition-transform duration-300"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {/* Mega Menu Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="w-[450px] bg-white border border-gray-100 rounded-3xl shadow-2xl p-6 flex gap-8">
                  {item.dropdownData.map((col, idx) => (
                    <div key={idx} className="flex-1">
                      <h4 className="text-teal-600 font-black text-[10px] uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">
                        {col.title}
                      </h4>
                      <ul className="space-y-3">
                        {col.links.map((link, linkIdx) => (
                          <li key={linkIdx}>
                            <Link
                              to={link.path}
                              className="text-gray-500 hover:text-black text-xs font-medium transition-colors block"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
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
          ),
        )}
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
