import { PILLARS } from "../data";

export default function Pillars() {
  return (
    <section
      id="pillars-section"
      className="w-full bg-gradient-to-r from-[#9c7f36] via-[#c9a84c] to-[#e6c56c] py-20 px-6 sm:px-12 select-none relative overflow-hidden"
    >
      {/* Decorative luxury abstract geometric watermarks in background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 4 Pillars in a row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {PILLARS.map((p) => {
            return (
              <div
                key={p.id}
                className="flex flex-col items-center text-center space-y-4 max-w-[280px] mx-auto group"
              >
                {/* Custom geometric premium golden circle icon with black graphic paths */}
                <div className="w-12 h-12 rounded-full border border-black/30 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-black group-hover:border-black">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-black group-hover:text-[#c9a84c] transition-colors"
                  >
                    <path
                      d={p.iconSvg}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Pillar Typography, with black colors for optimal legibility */}
                <h3 className="font-serif text-black text-lg md:text-xl font-bold tracking-wide">
                  {p.title}
                </h3>
                
                <p className="text-black/85 text-xs font-sans font-light leading-relaxed max-w-[240px]">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
