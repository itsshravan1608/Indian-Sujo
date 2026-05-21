import { motion, AnimatePresence } from "motion/react";

interface StoryProps {
  storyOpen: boolean;
  setStoryOpen: (open: boolean) => void;
}

export default function Story({ storyOpen, setStoryOpen }: StoryProps) {
  return (
    <>
      <section
        id="story-section"
        className="py-24 md:py-32 bg-[#111111] border-y border-[#1e1e1e] px-6 md:px-12 relative overflow-hidden"
      >
        {/* Background ambient lighting */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#c9a84c]/3 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Large Year Marker with Luxury Border Stamp */}
          <div className="md:col-span-5 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/5 to-transparent blur-xl pointer-events-none" />
            
            {/* Outline Box Frame */}
            <div className="relative border border-[#1e1e1e] p-12 md:p-16 w-full max-w-[340px] text-center bg-[#0c0c0c] hover:border-[#c9a84c]/20 transition-all duration-700">
              <span className="absolute top-0 right-0 w-8 h-[1px] bg-[#c9a84c]/30" />
              <span className="absolute bottom-0 left-0 w-8 h-[1px] bg-[#c9a84c]/30" />
              
              <div className="font-serif text-[11px] text-[#c9a84c] tracking-[0.4em] uppercase mb-4">
                Est. Atelier
              </div>
              
              {/* Huge stylized year typography */}
              <div className="font-serif text-8xl md:text-9xl text-white font-light tracking-tighter leading-none select-none relative">
                2025
                <span className="absolute -bottom-2 right-12 text-xs italic font-serif text-[#c9a84c]">SUJO</span>
              </div>
              
              <div className="text-[10px] text-[#555] tracking-widest uppercase font-mono mt-4">
                Tailoring Independence
              </div>
            </div>
          </div>

          {/* Right Text Editorial Column */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-6 text-left">
            <span className="text-[11px] font-sans text-[#c9a84c] tracking-[0.4em] uppercase block">
              Our Vision
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-wide leading-tight">
              Indian. Premium. <span className="italic">Unapologetic.</span>
            </h2>
            
            {/* Small Gold Divider */}
            <div className="w-16 h-[1.5px] bg-[#c9a84c]" />

            <p className="text-sm md:text-base text-[#999999] font-sans font-light leading-relaxed tracking-wide space-y-4">
              Sujo Indian was born from one belief — that Indian fashion deserves to stand next to the world's best luxury brands. Understated, structured, and heavy with heritage, every product celebrates our legacy of textile excellence.
            </p>
            
            <p className="text-xs md:text-sm text-[#999999] font-sans font-light leading-relaxed tracking-wide">
              Every detail has a singular goal — turning the spotlight on you. When you carry our heritage, we don't just ask you to look your best. We demand that you own the room.
            </p>

            <div className="pt-4">
              <button
                onClick={() => setStoryOpen(true)}
                className="inline-flex items-center space-x-3 text-[#c9a84c] text-xs font-sans uppercase tracking-[0.22em] group focus:outline-none cursor-pointer"
              >
                <span>Read Our Story</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Read Our Story Modal */}
      <AnimatePresence>
        {storyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setStoryOpen(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-55 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0c0c0c] border border-[#1e1e1e] w-full max-w-[800px] max-h-[85vh] overflow-y-auto p-6 md:p-12 relative"
            >
              {/* Close Button top corner */}
              <button
                onClick={() => setStoryOpen(false)}
                className="absolute top-6 right-6 text-[#999] hover:text-[#c9a84c] transition-colors p-2 cursor-pointer"
              >
                <XMarker />
              </button>

              <div className="space-y-8 text-left">
                {/* Header info */}
                <div className="border-b border-[#1e1e1e] pb-6 space-y-2">
                  <span className="text-[10px] text-[#c9a84c] font-sans font-semibold tracking-[0.3em] uppercase">The Manifesto</span>
                  <h3 className="font-serif text-3xl md:text-5xl text-white font-light tracking-wide">Sujo Indian.</h3>
                  <p className="text-xs text-[#666] font-mono uppercase tracking-widest">A Modern Legacy In Indian Textiles</p>
                </div>

                {/* Subsections representing beautiful story columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#999] font-sans text-xs md:text-sm leading-relaxed tracking-wide font-light">
                  <div className="space-y-4">
                    <h4 className="font-serif text-[#c9a84c] text-base tracking-wider uppercase">Authentic Weave Origins</h4>
                    <p>
                      Each garment produced by Sujo Indian starts its lifecycle in select micro-studios spanning weaver clusters in Varanasi, Bhagalpur, and Jaipur. We partner only with master guilds who keep the centuries-old art of zardozi work and fine-line hand looming alive.
                    </p>
                    <p>
                      Instead of high-volume industrial machines, our fabrics are custom-knitted in low-speed, double-loom sessions. This preserves the natural variations of genuine tussar silks, linen fibers, and raw cotton. This means every individual piece has a signature fingerprint of real handcraft.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-serif text-[#c9a84c] text-base tracking-wider uppercase">Modern Structured Tailoring</h4>
                    <p>
                      While our fabrics are rich with traditions, our tailoring templates are aggressively modern. We scrap traditional baggy cuts in favor of structured shoulders, tapered sleeves, and high arm-holes reminiscent of classic SAVILE ROW bespoke styling.
                    </p>
                    <p>
                      This structural hybrid means that you receive the ease of mobility and deep comfort of traditional Indian attire, but with the posture-defining, authoritative silhouette of high luxury fashion. Perfect for high-stature banquets, weddings, and executive presentations.
                    </p>
                  </div>
                </div>

                {/* Styled Quote Row */}
                <div className="bg-[#111111] p-6 border-l-2 border-[#c9a84c] italic text-white/90 text-sm font-serif leading-relaxed">
                  "Traditional luxury isn't about looking backwards — it is about carrying the pride of our weavers into the boards, weddings, and halls of global leadership today."
                  <span className="block not-italic text-[10px] uppercase tracking-widest text-[#666] mt-2">— Founder, Sujo Indian</span>
                </div>

                {/* Footer close */}
                <div className="pt-4 border-t border-[#1e1e1e] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-2 text-[11px] text-[#555] tracking-widest uppercase">
                    <span>100% Native Weave</span>
                    <span>•</span>
                    <span>Crafted in India</span>
                  </div>
                  <button
                    onClick={() => setStoryOpen(false)}
                    className="px-6 py-3 bg-[#c9a84c] text-black text-xs font-sans font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors cursor-pointer"
                  >
                    Return to Atelier
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Inline minimalist close icon marker to dodge extra import issues
function XMarker() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
      <path d="M1.5 1.5L16.5 16.5M16.5 1.5L1.5 16.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
