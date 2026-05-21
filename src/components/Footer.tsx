interface FooterProps {
  onSelectCategory: (category: string) => void;
  openStoryModal: () => void;
}

export default function Footer({ onSelectCategory, openStoryModal }: FooterProps) {
  const handleCategoryNav = (cat: string) => {
    onSelectCategory(cat);
    // Smooth scroll down to highlights showroom
    const element = document.getElementById("highlights-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="brand-footer"
      className="bg-[#080808] border-t border-[#c9a84c]/30 text-white pt-16 pb-8 px-6 md:px-12 select-none"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Foot top columns - Stack 2x2 on small, then 1 column */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10">
          
          {/* Column 1 - Large Logo - spans 4 cols */}
          <div className="col-span-2 lg:col-span-5 space-y-4 text-left">
            <a href="#" className="font-serif text-xl md:text-2xl font-bold tracking-[0.25em] text-[#c9a84c]">
              SUJO INDIAN
            </a>
            <p className="text-xs text-[#999] tracking-wide font-sans font-light max-w-sm leading-relaxed">
              "Wear India. Own the Room." <br />
              Premium Indian attire, custom-loomed and structured for high-stature contemporary presence.
            </p>
            <div className="pt-2">
              <span className="text-[10px] text-[#666] tracking-widest uppercase block mb-1">Electronic Dispatch</span>
              <a href="mailto:lucidvex7777@gmail.com" className="text-xs text-[#c9a84c] hover:underline font-mono tracking-wider">
                lucidvex7777@gmail.com
              </a>
            </div>
          </div>

          {/* Column 2 - Shop links - spans 2 cols */}
          <div className="col-span-1 lg:col-span-2 text-left space-y-4">
            <h4 className="font-serif text-[#c9a84c] text-xs tracking-[0.2em] uppercase font-semibold">Shop Atelier</h4>
            <ul className="space-y-2 text-xs text-[#999] font-sans font-light">
              <li>
                <button onClick={() => handleCategoryNav("Bandhgalas")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Sovereign Bandhgalas
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryNav("Sherwanis")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Luxury Sherwanis
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryNav("Co-ords")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Contemporary Co-ords
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryNav("All")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Limited Archive Sale
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Help - spans 2 cols */}
          <div className="col-span-1 lg:col-span-2 text-left space-y-4">
            <h4 className="font-serif text-[#c9a84c] text-xs tracking-[0.2em] uppercase font-semibold">Atelier Help</h4>
            <ul className="space-y-2 text-xs text-[#999] font-sans font-light">
              <li>
                <a href="#highlights-section" className="hover:text-white transition-colors">Sizing Metric Chart</a>
              </li>
              <li>
                <button onClick={openStoryModal} className="hover:text-white transition-colors cursor-pointer">
                  The Story & Craft
                </button>
              </li>
              <li>
                <a href="#newsletter-section" className="hover:text-[#c9a84c] transition-colors">Returns & Exchanges</a>
              </li>
              <li>
                <a href="#newsletter-section" className="hover:text-white transition-colors">Track Sovereign Order</a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Follow Us - spans 3 cols */}
          <div className="col-span-2 lg:col-span-3 text-left space-y-4">
            <h4 className="font-serif text-[#c9a84c] text-xs tracking-[0.2em] uppercase font-semibold">Follow Us</h4>
            <ul className="space-y-2 text-xs text-[#999] font-sans font-light">
              <li>
                <a href="https://instagram.com/Indian_sujo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full" />
                  <span>Instagram @Indian_sujo</span>
                </a>
              </li>
              <li>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full" />
                  <span>Pinterest lookbooks</span>
                </a>
              </li>
              <li>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full" />
                  <span>WhatsApp Atelier line</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Horizontal dividing strip */}
        <div className="h-[1px] bg-[#1e1e1e]" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-center gap-4 text-[10px] text-[#555] font-sans uppercase tracking-[0.25em]">
          <div>
            © 2025 Sujo Indian. Crafted in India with pride.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Terms of Atelier Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
