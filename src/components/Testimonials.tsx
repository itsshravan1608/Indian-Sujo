import { TESTIMONIALS } from "../data";
import { motion } from "motion/react";

export default function Testimonials() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="testimonials-section"
      className="py-24 md:py-32 bg-[#0c0c0c] text-white px-6 md:px-12 relative border-t border-[#1e1e1e]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[11px] font-sans text-[#c9a84c] tracking-[0.6em] uppercase block">
            Endorsements
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-light tracking-wide leading-tight">
            Worn with Pride
          </h2>
          <div className="w-12 h-[1px] bg-[#c9a84c] mx-auto mt-4" />
        </div>

        {/* 3 Quote Cards in a row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {TESTIMONIALS.map((t) => {
            return (
              <motion.div
                key={t.id}
                variants={cardVariants}
                className="group relative bg-[#111111] border border-[#1e1e1e] p-8 md:p-10 text-left transition-all duration-500 hover:border-[#c9a84c]/20 hover:bg-[#151515] flex flex-col justify-between min-h-[220px]"
              >
                {/* Large gold quote marks absolute in card background */}
                <span className="absolute top-4 right-8 font-serif text-[120px] text-[#c9a84c]/10 leading-none select-none pointer-events-none transition-colors duration-500 group-hover:text-[#c9a84c]/15">
                  “
                </span>

                {/* Decorative golden thread line indicator */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#c9a84c] transition-all duration-500 group-hover:w-16" />

                {/* Quote Text */}
                <p className="font-serif text-base sm:text-lg text-white/95 leading-relaxed tracking-wide italic z-10 relative">
                  {t.quote}
                </p>

                {/* Author Block */}
                <div className="pt-6 border-t border-[#1e1e1e]/60 mt-6 flex items-center justify-between z-10 relative">
                  <div className="space-y-0.5">
                    <span className="block font-serif text-sm font-semibold tracking-wide text-white">
                      {t.author}
                    </span>
                    <span className="block text-[10px] text-[#999] tracking-widest font-sans uppercase">
                      {t.location}
                    </span>
                  </div>
                  
                  {/* Small gold brand insignia marker */}
                  <span className="text-[10px] text-[#c9a84c] font-mono tracking-widest select-none">
                    • Verified Royal •
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
