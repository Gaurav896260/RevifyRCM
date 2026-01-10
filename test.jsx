import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const HeroSection = () => {
  // --- MOUSE PARALLAX LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const textX = useTransform(mouseX, [0, 500], [5, -5]);
  const textY = useTransform(mouseY, [0, 500], [5, -5]);
  const bgX = useTransform(mouseX, [0, 500], [-20, 20]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
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
      className="
    relative min-h-screen w-full overflow-hidden
    flex flex-col items-center justify-center
    font-sans selection:bg-teal-500/30
    bg-[linear-gradient(135deg,#050f0f_0%,#050f0f_45%,#ffffff_55%,#ffffff_100%)]
  "
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0">
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />

        {/* Soft blend glow */}
        <motion.div
          style={{ x: bgX }}
          className="
            absolute top-[35%] left-[40%]
            w-[70%] h-[70%]
            bg-teal-900/25
            rounded-full blur-[160px]
          "
        />
      </div>

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        className="absolute top-8 w-full px-8 md:px-16 flex justify-between items-center z-50"
      >
        {/* LOGO (PNG ONLY) */}
        <img src="/image.png" alt="Logo" className="w-28 h-auto" />

        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center bg-white/10 border border-white/20 backdrop-blur-2xl px-2 py-1.5 rounded-full shadow-2xl">
          {["Home", "About", "Features", "Pricing"].map((item, idx) => (
            <button
              key={item}
              className={`px-6 py-2 rounded-full text-xs font-semibold transition-all ${
                idx === 0
                  ? "bg-white/20 text-white"
                  : "text-gray-300 hover:text-white"
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
          className="bg-white text-black px-8 py-2.5 rounded-full text-sm font-black tracking-wide"
        >
          SIGN UP
        </motion.button>
      </motion.nav>

      {/* HERO CONTENT */}
      <motion.div
        style={{ x: textX, y: textY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <motion.h1
          variants={itemVariants}
          className="text-white text-6xl md:text-8xl lg:text-[100px] font-medium tracking-tighter leading-[0.95] mb-8"
        >
          Take{" "}
          <span className="italic font-serif font-light text-gray-500">
            control
          </span>
          <br />
          of revenue,{" "}
          <span className="font-semibold text-white">effortlessly</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-gray-400/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
        >
          Redefining financial flows for healthcare leaders. Manage, track, and
          optimize your revenue cycle within a secure, unified ecosystem.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-16">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#f0fdfa" }}
            whileTap={{ scale: 0.98 }}
            className="
              bg-white text-black px-14 py-6 rounded-full
              font-black text-lg
              shadow-[0_20px_50px_rgba(255,255,255,0.15)]
              transition-all
            "
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </motion.div>

      {/* FOOTER TEXT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        className="absolute bottom-10 w-full text-center z-10"
      >
        <div className="h-[1px] w-24 bg-white/30 mx-auto mb-4" />
        <p className="text-white text-[9px] uppercase tracking-[0.8em]">
          Modernized • Unified • Secure
        </p>
      </motion.div>

      {/* FONTS */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&family=Playfair+Display:italic@400&display=swap");
        .font-serif {
          font-family: "Playfair Display", serif;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
