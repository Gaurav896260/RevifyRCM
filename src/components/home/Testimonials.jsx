import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- Revify Testimonial Data from Image ---
const testimonials = [
  {
    text: "We were struggling to keep up with our medical billing and collections... We chose Revify RCM Group for their expertise and personalized approach.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie",
    name: "Jamie Washington",
    role: "D.C.",
  },
  {
    text: "From the start, the team at Revify took the time to understand our unique challenges... created a customized plan to optimize our revenue cycle.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Craig",
    name: "Craig",
    role: "Albuquerque, NM",
  },
  {
    text: "Since partnering with Revify, we've seen a dramatic improvement in our financial performance. Our claims are being processed faster and collections have increased.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    name: "Carlos",
    role: "Boca Raton, FL",
  },
  {
    text: "I highly recommend Revify to any healthcare organization looking to streamline their revenue cycle and improve their bottom line.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elaine",
    name: "Elaine",
    role: "Charlotte N.C.",
  },
  // Duplicating a few to ensure the smooth infinite scroll loop works
  {
    text: "They have been true partners in our success.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Revify",
    name: "Health Partner",
    role: "Medical Lead",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(0, 3);

const TestimonialsColumn = (props) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 list-none m-0 p-0"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <motion.li
                key={`${index}-${i}`}
                whileHover={{ scale: 1.03, y: -8 }}
                className="p-8 rounded-3xl border border-neutral-200 bg-white shadow-lg max-w-xs w-full transition-all cursor-default select-none"
              >
                <blockquote className="m-0 p-0">
                  <p className="text-neutral-600 leading-relaxed font-normal italic">
                    "{text}"
                  </p>
                  <footer className="flex items-center gap-3 mt-6">
                    <img
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full bg-emerald-50"
                    />
                    <div className="flex flex-col text-left">
                      <cite className="font-semibold not-italic text-neutral-900">
                        {name}
                      </cite>
                      <span className="text-xs text-neutral-500">{role}</span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-neutral-900">
            Client{" "}
            <span className="text-emerald-500 font-serif italic">
              Testimonials
            </span>
          </h2>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={20} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={25}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={22}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
