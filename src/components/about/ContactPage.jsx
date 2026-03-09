import { motion } from "framer-motion";

const ContactPage = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
    },
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-24 flex flex-col justify-center">
      {/* MASSIVE BACKGROUND TEXT */}
      <div className="absolute top-10 left-0 w-full pointer-events-none select-none">
        <h1 className="text-[25vw] font-black text-white leading-none tracking-tighter uppercase opacity-100">
          Contact
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
        {/* GREEN FORM CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="bg-[#1a7a42] rounded-3xl p-8 md:p-16 shadow-2xl ml-auto w-full lg:w-4/5 xl:w-3/4"
        >
          <div className="mb-12">
            <span className="text-white/70 text-xs font-bold uppercase tracking-[0.3em] block mb-4">
              REACH US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact us
            </h2>
            <p className="text-emerald-50 text-lg font-light max-w-2xl leading-relaxed">
              Interested in working together? Fill out some info and we will be
              in touch shortly. We can’t wait to hear from you!
            </p>
          </div>

          <form
            action="https://formspree.io/f/xrgnovpn"
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
          >
            {/* LEFT COLUMN: INPUTS */}
            <div className="space-y-10">
              <div className="relative group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
                />
                <span className="text-[10px] text-white/40 absolute -bottom-5 left-0">
                  Required
                </span>
              </div>

              <div className="relative group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
                />
                <span className="text-[10px] text-white/40 absolute -bottom-5 left-0">
                  Required
                </span>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
                />
                <span className="text-[10px] text-white/40 absolute -bottom-5 left-0">
                  Required
                </span>
              </div>

              <div className="flex items-start gap-4 pt-4">
                <input
                  type="checkbox"
                  id="signup"
                  name="newsletterSignup"
                  value="yes"
                  className="mt-1.5 accent-black"
                />
                <label
                  htmlFor="signup"
                  className="text-xs text-white/80 leading-snug"
                >
                  Sign up for news and updates. I give Revify permission to
                  contact me at this email address.
                </label>
              </div>
            </div>

            {/* RIGHT COLUMN: MESSAGE & SUBMIT */}
            <div className="flex flex-col justify-between">
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Type your message here"
                  required
                  rows="4"
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors resize-none"
                />
                <span className="text-[10px] text-white/40 absolute -bottom-5 left-0">
                  Required
                </span>
              </div>

              <div className="mt-12 md:mt-0 flex flex-col items-end gap-6">
                <p className="text-[10px] text-white/50 text-right max-w-[250px]">
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </p>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,1)",
                    color: "#1a7a42",
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="group flex items-center gap-4 border border-white rounded-full px-10 py-4 text-white font-bold transition-all"
                >
                  Submit
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
