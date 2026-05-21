import { motion } from "motion/react";

interface HeroProps {
  onExploreClick: () => void;
  onStoryClick: () => void;
}

export default function Hero({ onExploreClick, onStoryClick }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center bg-[#0c0c0c] pt-24 md:pt-16 pb-16 overflow-hidden px-6 md:px-12"
    >
      {/* Background ambient gold lights */}
      <div className="absolute top-[20%] left-[10%] w-[250px] h-[250px] rounded-full bg-[#c9a84c]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-[#c9a84c]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left side text column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left"
        >
          {/* Top category stamp */}
          <div className="flex items-center space-x-3">
            <span className="h-[1px] w-6 bg-[#c9a84c]" />
            <span className="text-[11px] uppercase tracking-[0.4em] font-sans font-medium text-[#c9a84c]">
              New Collection 2025
            </span>
          </div>

          {/* Large display headline */}
          <h1 className="font-serif font-light text-5xl sm:text-7xl md:text-8xl xl:text-9xl text-white leading-[0.9] tracking-tight">
            Wear <span className="italic font-normal">India.</span>
            <br />
            Own the <span className="text-[#c9a84c]">Room.</span>
          </h1>

          {/* Subtext description */}
          <p className="max-w-xl text-sm md:text-base text-[#999999] font-sans font-light leading-relaxed tracking-wide">
            Premium Indian fashion crafted for those who carry their culture with confidence. Structured silhouettes engineered for unforgettable entries.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onExploreClick}
              className="px-8 py-4 bg-[#c9a84c] text-black text-xs font-sans font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300 shadow-md cursor-pointer"
            >
              Explore Collection
            </button>
            <button
              onClick={onStoryClick}
              className="px-8 py-4 border border-[#c9a84c] text-[#c9a84c] text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-[#c9a84c] hover:text-black transition-all duration-300 bg-transparent cursor-pointer"
            >
              Our Story
            </button>
          </div>

          {/* Rotating Stamp circle at bottom left (absolute on desktop, simple layout on mobile) */}
          <div className="pt-8 flex items-center space-x-4">
            <div className="relative w-20 h-20 shrink-0">
              <svg viewBox="0 0 100 100" className="w-20 h-20 animate-rotate-circle text-[#c9a84c]">
                <path
                  id="circlePath"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="none"
                />
                {/* SVG textPath rotating */}
                <text className="text-[7.5px] font-sans font-bold tracking-[0.16em] uppercase fill-[#c9a84c]">
                  <textPath href="#circlePath" startOffset="0%">
                    Premium • Handcrafted • Indian • Luxury •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[8px] font-sans font-semibold text-[#c9a84c]/60">SUJO</span>
              </div>
            </div>
            
            <div className="text-[10px] text-[#666] tracking-widest uppercase font-mono max-w-[160px] leading-relaxed">
              Tailored meticulously <br />
              for deep cultural pride.
            </div>
          </div>
        </motion.div>

        {/* Right side Large CSS abstract draped fabric canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 h-[340px] sm:h-[450px] lg:h-[600px] w-full flex items-center justify-center relative group"
        >
          {/* Framed border wrapping the abstract fabric shape for high-end editorial feel */}
          <div className="absolute inset-0 border border-[#1e1e1e] p-4 flex items-center justify-center transition-all duration-700 group-hover:border-[#c9a84c]/20">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#c9a84c]/40" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#c9a84c]/40" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#c9a84c]/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#c9a84c]/40" />
            
            {/* The actual fluid draped fabric simulation using CSS gradients, animations and luxury overlays */}
            <div className="w-full h-full bg-[#0c0c0c] relative overflow-hidden flex items-center justify-center shadow-2xl">
              
              {/* Polygons and gradients directly extracted from the Dark Luxury design template */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-60"
                style={{
                  background: "radial-gradient(ellipse at center, #2a2212 0%, #0c0c0c 70%)",
                  clipPath: "polygon(20% 0%, 100% 10%, 90% 90%, 0% 100%, 15% 40%)"
                }}
              />
              
              <div 
                className="absolute inset-0 pointer-events-none opacity-40 transition-transform duration-[10s] ease-in-out group-hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #c9a84c 0%, #3a2f15 100%)",
                  clipPath: "polygon(30% 5%, 95% 15%, 85% 95%, 5% 85%, 25% 50%)"
                }}
              />

              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 80%)"
                }}
              />

              <div className="absolute inset-0 fabric-shape opacity-20 pointer-events-none mix-blend-color-dodge" />
              
              {/* Subtle gold satin shimmers */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a84c]/20 via-transparent to-black/30 mix-blend-overlay pointer-events-none" />
              
              {/* Central minimalist gold brand monogram floating */}
              <div className="relative z-10 px-8 py-6 bg-[#0c0c0c]/90 backdrop-blur-sm border border-[#c9a84c]/30 text-center select-none text-white max-w-[200px] shadow-2xl">
                <span className="block font-serif text-[11px] tracking-[0.4em] uppercase text-[#c9a84c]">SUJO ATELIER</span>
                <span className="block font-serif text-2xl font-light italic mt-1 text-white">Authentic</span>
                <span className="block text-[8px] font-sans tracking-[0.2em] font-light mt-1 text-[#999]">No. 2025</span>
              </div>

              {/* Unique circular dashed badge from Dark Luxury design template */}
              <div 
                className="absolute bottom-6 right-6 w-24 h-24 border border-dashed border-[#c9a84c]/40 rounded-full flex items-center justify-center text-center select-none pointer-events-none hidden sm:flex animate-pulse duration-5000"
              >
                <div className="font-sans text-[7px] text-[#c9a84c] uppercase tracking-[0.2em] leading-relaxed">
                  Premium<br/>•<br/>Handcrafted<br/>•<br/>Indian
                </div>
              </div>
              
              {/* Decorative vertical golden threads running behind */}
              <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-gradient-to-b from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
              <div className="absolute top-0 bottom-0 left-2/4 w-[1px] bg-gradient-to-b from-transparent via-[#c9a84c]/10 to-transparent pointer-events-none" />
              <div className="absolute top-0 bottom-0 left-3/4 w-[1px] bg-gradient-to-b from-transparent via-[#c9a84c]/25 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Elegant scroll vertical line indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 select-none">
        <span className="text-[10px] text-[#666] tracking-[0.25em] uppercase font-sans">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#666] via-transparent to-transparent animate-pulse" />
      </div>
    </section>
  );
}
