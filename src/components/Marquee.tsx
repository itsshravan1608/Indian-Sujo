export default function Marquee() {
  const textPattern = "New Arrivals • Handcrafted Fabrics • Sovereign Bandhgalas • Luxury Sherwanis • Festive Collection • Limited Editions • ";
  
  return (
    <div className="w-full bg-[#111111] border-y border-[#c9a84c]/30 py-4.5 overflow-hidden select-none relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0c0c0c] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0c0c0c] to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max shrink-0">
        <div className="animate-marquee flex items-center shrink-0">
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-light text-[#c9a84c] px-4 space-x-12">
            <span>{textPattern}</span>
            <span>{textPattern}</span>
            <span>{textPattern}</span>
            <span>{textPattern}</span>
          </span>
        </div>
        <div className="animate-marquee flex items-center shrink-0" aria-hidden="true">
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-light text-[#c9a84c] px-4 space-x-12">
            <span>{textPattern}</span>
            <span>{textPattern}</span>
            <span>{textPattern}</span>
            <span>{textPattern}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
