import { motion } from "framer-motion";

const team = [
  {
    name: "Amanda Perez",
    role: "Founder",
    image: "/amanda.png", // Replace with your public folder path
    bio: "Amanda is an Austin, Texas native with over 21 years of experience in leadership roles at major healthcare organizations.",
  },
  {
    name: "Greg Garza",
    role: "Operations Manager",
    image: "/greg.png",
    bio: "Greg is a highly experienced business professional specializing in technology and healthcare operations.",
  },
  {
    name: "Clarence Abellanosa",
    role: "Patient Access Manager",
    image: "/clare.png",
    bio: "Clarence has extensive experience in patient access, client services, and administrative leadership.",
  },
  {
    name: "Lulu",
    role: "Office Administrator",
    image: "/lulu.png",
    bio: "A true expert in patient care and comfort, Lulu brings a gentle, patient-centric approach to her role.",
  },
];

const MeetTheTeam = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-50/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-4">
            Meet The{" "}
            <span className="text-emerald-500 italic font-serif">Team</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group flex flex-col items-center text-center"
            >
              {/* Image Container with Custom Border Effect */}
              <div className="relative mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-emerald-50 group-hover:ring-emerald-200 transition-all duration-500 z-10"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>

                {/* Decorative background circle */}
                <div className="absolute -inset-2 bg-emerald-100/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-black mb-1 group-hover:text-emerald-600 transition-colors">
                {member.name}
              </h3>
              <p className="text-emerald-600 text-xs font-black uppercase tracking-[0.2em] mb-4">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed font-light px-4">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
