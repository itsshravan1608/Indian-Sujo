import { COLLECTIONS } from "../data";
import { motion } from "motion/react";

interface FeaturedCollectionsProps {
  onSelectCategory: (category: string) => void;
}

export default function FeaturedCollections({ onSelectCategory }: FeaturedCollectionsProps) {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="collections-section"
      className="py-24 md:py-32 bg-[#0c0c0c] text-white px-6 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-4">
          <span className="text-[11px] font-sans text-[#c9a84c] tracking-[0.6em] uppercase block">
            Collections
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-wide max-w-2xl leading-tight">
            Crafted for the Modern Indian
          </h2>
          <div className="w-12 h-[1px] bg-[#c9a84c] mt-4 mx-auto md:mx-0" />
        </div>

        {/* 4 Cards Row Structure */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {COLLECTIONS.map((c) => {
            // Helper to match catalog filtering system
            const categoryFilter = c.name.includes("Sherwani") 
               ? "Sherwanis" 
               : c.name.includes("Bandhgala") 
               ? "Bandhgalas" 
               : c.name.includes("Co-ord") 
               ? "Co-ords" 
               : "All";

            return (
              <motion.div
                key={c.id}
                variants={itemVariants}
                onClick={() => onSelectCategory(categoryFilter)}
                className="group relative aspect-[3/4] bg-[#111111] overflow-hidden border border-[#1e1e1e] cursor-pointer"
              >
                {/* Visual Backdrop Layer with Shimmer Weave and Custom Gradients */}
                <div
                  style={{ background: c.gradient }}
                  className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-out group-hover:scale-105"
                >
                  {c.image && (
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  {/* Subtle shimmer simulation */}
                  <div className="absolute inset-0 shimmer-bg opacity-30 mix-blend-color-dodge pointer-events-none" />
                  {/* Backdrop golden lighting shadow vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  {/* Inner subtle fabric grain border */}
                  <div className="absolute inset-4 border border-white/[0.03]" />
                </div>

                {/* Golden Corner Accents appearing on hover */}
                <div className="absolute top-4 left-4 right-4 bottom-4 pointer-events-none z-10 border border-transparent group-hover:border-[#c9a84c]/20 transition-all duration-700">
                  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#c9a84c] opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#c9a84c] opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#c9a84c] opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#c9a84c] opacity-0 group-hover:opacity-100 transition-all duration-700" />
                </div>

                {/* Badges */}
                {c.isNew && (
                  <span className="absolute top-4 right-4 bg-[#c9a84c] text-black text-[9px] font-sans font-bold tracking-[0.2em] px-2.5 py-1 uppercase z-20">
                    New Collection
                  </span>
                )}

                {/* Static Index Label (01, 02, etc.) */}
                <span className="absolute top-5 left-5 text-[10px] font-mono tracking-widest text-white/25">
                  SERIES 0{COLLECTIONS.indexOf(c) + 1}
                </span>

                {/* Text overlay & hover links */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col justify-end z-25 text-left">
                  <h3 className="font-serif text-lg md:text-xl xl:text-2xl text-white tracking-wide leading-tight mb-2">
                    {c.name}
                  </h3>
                  
                  {/* Expanded description block hidden but responsive */}
                  <p className="text-[11px] text-[#999] font-sans font-light leading-relaxed max-h-0 opacity-0 overflow-hidden group-hover:max-h-16 group-hover:opacity-100 transition-all duration-700">
                    {c.description}
                  </p>

                  <div className="mt-3 flex items-center space-x-2 text-[#c9a84c] text-xs font-sans uppercase tracking-[0.2em]">
                    <span>Explore</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
