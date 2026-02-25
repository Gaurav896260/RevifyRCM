import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Navbar from "../Navbar";
import { AnimatedText } from "../AnimatedText"; // Ensure the path is correct

// Extracted exactly from your provided image
const THEMES = [
  {
    name: "TrustTech Blue-Green",
    primary: "#007BFF", // Bright Blue
    secondary: "#28A745", // Fresh Green
    accent: "#FFC107", // Vibrant Yellow
    bgLight: "rgba(0, 123, 255, 0.08)",
  },
  {
    name: "InnoHealth Purple-Teal",
    primary: "#6F42C1", // Deep Purple
    secondary: "#20C997", // Teal
    accent: "#FD7E14", // Coral Orange
    bgLight: "rgba(111, 66, 193, 0.08)",
  },
  {
    name: "Wellness Navy-Neutral",
    primary: "#001F3F", // Navy Blue
    secondary: "#6C757D", // Cool Gray
    accent: "#17A2B8", // Aqua
    bgLight: "rgba(0, 31, 63, 0.08)",
  },
  {
    name: "Energy Heal Orange-Blue",
    primary: "#FD7E14", // Bright Orange
    secondary: "#0D6EFD", // Cobalt Blue
    accent: "#198754", // Forest Green
    bgLight: "rgba(253, 126, 20, 0.08)",
  },
];

const HeroSection = () => {
  // --- THEME STATE ---
  const [themeIndex, setThemeIndex] = useState(0);
  const currentTheme = THEMES[themeIndex];

  // --- MOUSE PARALLAX LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const textX = useTransform(mouseX, [0, 500], [5, -5]);
  const textY = useTransform(mouseY, [0, 500], [5, -5]);
  const bgX = useTransform(mouseX, [0, 500], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const cycleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % THEMES.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

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
    <section
      onMouseMove={handleMouseMove}
      style={{
        // Injecting CSS Variables to power Tailwind arbitrary values smoothly
        "--theme-primary": currentTheme.primary,
        "--theme-secondary": currentTheme.secondary,
        "--theme-accent": currentTheme.accent,
        "--theme-bg-light": currentTheme.bgLight,
      }}
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center font-sans selection:bg-[var(--theme-bg-light)] bg-white transition-colors duration-500"
    >
      <Navbar />

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
        <motion.div
          style={{ x: bgX }}
          className="absolute top-[20%] left-[30%] w-[60%] h-[60%] bg-[var(--theme-bg-light)] rounded-full blur-[120px] transition-colors duration-500"
        />
      </div>

      {/* HERO CONTENT */}
      <motion.div
        style={{ x: textX, y: textY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-6xl"
      >
        <motion.h1
          variants={itemVariants}
          className="text-black text-6xl md:text-8xl lg:text-[100px] font-medium tracking-tighter leading-[1.1] mb-8"
        >
          Take{" "}
          <span className="italic font-serif font-light text-[var(--theme-primary)] opacity-90 transition-colors duration-500">
            control
          </span>
          <br />
          of revenue,{" "}
          <AnimatedText
            text="effortlessly"
            className="inline-flex vertical-align-middle"
            textClassName="text-6xl md:text-8xl lg:text-[100px] font-semibold text-[var(--theme-secondary)] tracking-tighter leading-none transition-colors duration-500"
            underlineClassName="text-[var(--theme-accent)] opacity-80 -bottom-2 transition-colors duration-500"
            underlineDuration={2}
          />
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
        >
          Redefining financial flows for healthcare leaders. Manage, track, and
          optimize your revenue cycle within a secure, unified ecosystem.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-16">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
            }}
            whileTap={{ scale: 0.98 }}
            className="
              bg-[var(--theme-primary)] text-white px-14 py-6 rounded-full
              font-black text-lg transition-all duration-300
            "
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </motion.div>

      {/* FLOATING THEME TOGGLE BUTTON */}
      <div className="absolute bottom-8 right-8 z-50 flex items-center gap-4 bg-white/80 backdrop-blur-md p-2 pl-4 rounded-full shadow-lg border border-gray-100">
        <span className="text-sm font-medium text-gray-600">
          {currentTheme.name}
        </span>
        <button
          onClick={cycleTheme}
          className="flex gap-1 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          title="Toggle Theme"
        >
          <div
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: currentTheme.primary }}
          />
          <div
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: currentTheme.secondary }}
          />
          <div
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: currentTheme.accent }}
          />
        </button>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&family=Playfair+Display:italic@400&display=swap");
        .font-serif {
          family: "Playfair Display", serif;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
