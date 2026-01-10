import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Navbar from "../Navbar";

const HeroSection = () => {
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

  // Animations
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
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center font-sans selection:bg-emerald-100 bg-white"
    >
      {/* NAVBAR COMPONENT INCLUDED HERE */}
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
          className="absolute top-[20%] left-[30%] w-[60%] h-[60%] bg-emerald-50 rounded-full blur-[120px]"
        />
      </div>

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
          className="text-black text-6xl md:text-8xl lg:text-[100px] font-medium tracking-tighter leading-[0.9] mb-8"
        >
          Take{" "}
          <span className="italic font-serif font-light text-emerald-500/80">
            control
          </span>
          <br />
          of revenue,{" "}
          <span className="font-semibold text-emerald-600">effortlessly</span>
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
              bg-emerald-500 text-black px-14 py-6 rounded-full
              font-black text-lg transition-all
            "
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </motion.div>

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
