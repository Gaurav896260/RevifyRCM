import { motion } from "framer-motion";

const ehrLogos = [
  { name: "EHR 1", path: "/logos/ehr1.png" },
  { name: "EHR 2", path: "/logos/ehr2.png" },
  { name: "EHR 3", path: "/logos/ehr3.png" },
  { name: "EHR 4", path: "/logos/ehr4.png" },
  { name: "EHR 5", path: "/logos/ehr5.png" },
  { name: "EHR 6", path: "/logos/ehr6.png" },
  { name: "EHR 7", path: "/logos/ehr7.png" },
  { name: "EHR 8", path: "/logos/ehr8.png" },
  { name: "EHR 9", path: "/logos/ehr9.png" },
  { name: "EHR 10", path: "/logos/ehr10.png" },
  { name: "EHR 11", path: "/logos/ehr11.png" },
  { name: "EHR 12", path: "/logos/ehr12.png" },
  { name: "EHR 13", path: "/logos/ehr13.png" },
];

const partnerLogos = [
  { name: "Partner 1", path: "/logos/p1.png" },
  { name: "Partner 2", path: "/logos/p2.png" },
  { name: "Partner 3", path: "/logos/p3.png" },
  { name: "Partner 4", path: "/logos/p4.png" },
  { name: "Partner 5", path: "/logos/p5.png" },
  { name: "Partner 6", path: "/logos/p6.png" },
  { name: "Partner 7", path: "/logos/p7.png" },
  { name: "Partner 8", path: "/logos/p8.png" },
  { name: "Partner 9", path: "/logos/p9.png" },
  { name: "Partner 10", path: "/logos/p10.png" },
];

const LogoRow = ({ logos, direction = "left", speed = 40 }) => {
  // We duplicate the logos array to ensure there's enough content to fill the screen
  // for a seamless "infinite" scroll effect.
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="flex overflow-hidden py-10 relative">
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
        className="flex flex-none gap-20 items-center px-10"
      >
        {duplicatedLogos.map((logo, idx) => (
          <div
            key={`${logo.name}-${idx}`}
            className="flex-none flex items-center justify-center transition-transform duration-300 hover:scale-110"
          >
            <img
              src={logo.path}
              alt={logo.name}
              className="h-14 w-auto object-contain block" // "grayscale-0" is default, ensuring full color
              onError={(e) => {
                e.target.style.display = "none"; // Hides broken image links
                console.error(`Image not found at: ${logo.path}`);
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const LogoMarquee = () => {
  return (
    <section className="py-24 bg-white relative">
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-emerald-600 font-black text-xs uppercase tracking-[0.3em] mb-4"
        >
          Ecosystem Compatibility
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-black max-w-4xl mx-auto tracking-tight leading-tight"
        >
          A holistic suite of services,{" "}
          <span className="text-emerald-500 italic font-serif">
            compatible with
          </span>{" "}
          and supported by
        </motion.h2>
      </div>

      {/* MARQUEE CONTAINER */}
      <div className="relative w-full overflow-hidden">
        {/* Visual Overlays for smooth entry/exit */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row 1: EHR Logos (Right to Left) */}
        <LogoRow logos={ehrLogos} direction="left" speed={50} />

        {/* Row 2: Partner Logos (Left to Right) */}
        <LogoRow logos={partnerLogos} direction="right" speed={45} />
      </div>

      {/* FOOTER ACCENT */}
      <div className="mt-12 flex justify-center opacity-20">
        <div className="h-[1px] w-32 bg-emerald-500" />
      </div>
    </section>
  );
};

export default LogoMarquee;
