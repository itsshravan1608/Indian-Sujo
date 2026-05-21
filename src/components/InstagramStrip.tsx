import { Instagram } from "lucide-react";

export default function InstagramStrip() {
  // 6 gradient placeholders for instagram with high quality generated AI images
  const igPosts = [
    { id: "p-1", bg: "linear-gradient(45deg, #161005 0%, #000000 100%)", img: "/src/assets/images/royal_sherwani_1779384764489.png" },
    { id: "p-2", bg: "linear-gradient(225deg, #0f1c10 0%, #000000 100%)", img: "/src/assets/images/sovereign_bandhgala_coll_1779384916002.png" },
    { id: "p-3", bg: "linear-gradient(135deg, #1c0e0e 0%, #000000 100%)", img: "/src/assets/images/obsidian_bandhgala_1779384876882.png" },
    { id: "p-4", bg: "linear-gradient(315deg, #1a0820 0%, #000000 100%)", img: "/src/assets/images/royal_outerwear_coll_1779384934013.png" },
    { id: "p-5", bg: "linear-gradient(45deg, #101c1c 0%, #000000 100%)", img: "/src/assets/images/emerald_coords_1779384894958.png" },
    { id: "p-6", bg: "linear-gradient(135deg, #1d1d11 0%, #000000 100%)", img: "/src/assets/images/royal_sherwani_1779384764489.png" }
  ];

  return (
    <section id="instagram-section" className="bg-[#0c0c0c] border-t border-[#1e1e1e]">
      {/* Label and handle */}
      <div className="py-10 px-6 max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left">
        <div>
          <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-[#666] block mb-1">
            Visual Journal
          </span>
          <a
            href="https://instagram.com/Indian_sujo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-lg md:text-xl text-white tracking-widest hover:text-[#c9a84c] transition-colors"
          >
            @Indian_sujo
          </a>
        </div>
        <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#c9a84c] flex items-center space-x-2">
          <span>Inspiration & Royal Fitting Diaries</span>
          <span>•</span>
          <span className="underline cursor-pointer">Follow</span>
        </div>
      </div>

      {/* 6 Square boxes in a row (3x2 on mobile, 6x1 on desktop) */}
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-[1px] bg-[#1e1e1e]">
        {igPosts.map((post, idx) => (
          <div
            key={post.id}
            style={{ background: post.bg }}
            className="relative aspect-square overflow-hidden group cursor-pointer justify-center items-center flex"
          >
            {post.img && (
              <img
                src={post.img}
                alt="Instagram post model fashion lookup"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            )}
            {/* The gold shimmer background layer */}
            <div className="absolute inset-0 shimmer-bg opacity-30 pointer-events-none group-hover:opacity-40 transition-opacity" />
            
            {/* Minimal line frames inside */}
            <div className="absolute inset-4 border border-white/[0.02]" />

            {/* Post index watermark */}
            <span className="absolute bottom-3 left-4 text-[8px] font-mono tracking-widest text-white/20 uppercase">
              GRID_00{idx + 1}
            </span>

            {/* Hover: gold overlay with Instagram icon */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#c9a84c]/20 to-black/85 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center space-y-3 z-10">
              
              {/* Instagram icon box */}
              <div className="w-10 h-10 rounded-full bg-black/40 border border-[#c9a84c]/40 flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-500">
                <Instagram size={16} className="text-[#c9a84c]" />
              </div>

              <span className="text-[9px] tracking-[0.25em] text-[#c9a84c] uppercase font-sans font-medium">
                View Post
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
