import { useState } from "react";
import { PRODUCTS } from "../data";
import { Product } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ShoppingBag, Plus, Minus, Check, HelpCircle } from "lucide-react";

interface ProductHighlightsProps {
  onAddToCart: (product: Product, quantity?: number) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  openQuickViewProduct: (product: Product) => void;
  quickViewProduct: Product | null;
  closeQuickViewProduct: () => void;
}

export default function ProductHighlights({
  onAddToCart,
  selectedCategory,
  setSelectedCategory,
  openQuickViewProduct,
  quickViewProduct,
  closeQuickViewProduct,
}: ProductHighlightsProps) {
  const [successToast, setSuccessToast] = useState<string | null>(null);
  
  // Quickview specific states
  const [selectedSize, setSelectedSize] = useState<"S" | "M" | "L" | "XL">("M");
  const [qtyCounter, setQtyCounter] = useState(1);

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const categories = ["All", "Sherwanis", "Bandhgalas", "Co-ords"];

  const triggerAddToCartWithToast = (product: Product, quantity = 1) => {
    onAddToCart(product, quantity);
    setSuccessToast(product.name);
    setTimeout(() => {
      setSuccessToast(null);
    }, 2500);
  };

  const handleQuickViewAdd = (product: Product) => {
    triggerAddToCartWithToast(product, qtyCounter);
    closeQuickViewProduct();
    setQtyCounter(1); // Reset
  };

  return (
    <section
      id="highlights-section"
      className="py-24 md:py-32 bg-[#0c0c0c] text-white px-6 md:px-12 relative border-t border-[#1e1e1e]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 text-left">
            <span className="text-[11px] font-sans text-[#c9a84c] tracking-[0.6em] uppercase block">
              Atelier Showroom
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-wide leading-tight">
              This Season's Finest
            </h2>
            <div className="w-16 h-[1.5px] bg-[#c9a84c]" />
          </div>

          {/* Luxury Categories Filter Tab System */}
          <div className="flex flex-wrap items-center gap-2 border-b border-[#111111] pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-[10px] tracking-[0.25em] uppercase font-sans transition-all duration-300 relative cursor-pointer ${
                  selectedCategory === cat 
                    ? "text-[#c9a84c] font-medium" 
                    : "text-[#666] hover:text-white"
                }`}
              >
                {cat}
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryBorder"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c9a84c]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Horizontal Product Cards Stack vertically on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => {
              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col justify-between"
                >
                  {/* Clickable Card Body Area triggers Quick View */}
                  <div
                    onClick={() => openQuickViewProduct(p)}
                    className="relative aspect-[3/4] bg-[#111111] border border-[#1e1e1e] overflow-hidden cursor-pointer group-hover:border-[#c9a84c]/20 transition-all duration-500 flex items-center justify-center"
                  >
                    
                    {/* CSS Gradient Representation of premium garment style */}
                    <div
                      style={{ background: p.gradient }}
                      className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-out group-hover:scale-105"
                    >
                      {p.image && (
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover object-center"
                          referrerPolicy="no-referrer"
                        />
                      )}
                      {/* Subtle premium weave overlay patterns */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black/30 pointer-events-none" />
                      {/* Interactive shimmer */}
                      <div className="absolute inset-0 shimmer-bg opacity-15 pointer-events-none mix-blend-color-dodge" />
                    </div>

                    {/* Subtle aesthetic details inside picture frame */}
                    <div className="absolute inset-6 border border-white/[0.02]" />

                    {/* Display indicators */}
                    <div className="absolute top-4 left-6 flex flex-col space-y-2">
                      {p.isBestseller && (
                        <div className="bg-[#c9a84c] text-black text-[9px] font-sans font-bold tracking-[0.2em] px-3 py-1.5 uppercase shadow-md flex items-center space-x-1">
                          <Sparkles size={9} />
                          <span>Bestseller</span>
                        </div>
                      )}
                    </div>

                    {/* Invisible prompt revealed on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                      <span className="px-5 py-3 border border-[#c9a84c] text-[#c9a84c] bg-[#0c0c0c]/80 text-[10px] tracking-[0.25em] uppercase font-sans transition-colors duration-300 hover:bg-[#c9a84c] hover:text-black">
                        Quick View Atelier
                      </span>
                    </div>

                    {/* Decorative label */}
                    <span className="absolute bottom-4 right-6 text-[9px] font-mono tracking-widest text-white/30 uppercase">
                      Pure Heritage
                    </span>
                  </div>

                  {/* Card lower labels */}
                  <div className="pt-6 text-left space-y-2">
                    <div className="flex justify-between items-start">
                      <h3
                        onClick={() => openQuickViewProduct(p)}
                        className="font-serif text-lg md:text-xl text-white tracking-wide hover:text-[#c9a84c] transition-colors cursor-pointer"
                      >
                        {p.name}
                      </h3>
                      <span className="font-serif text-[#c9a84c] text-base md:text-lg font-medium whitespace-nowrap pl-4">
                        ₹{p.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                    
                    <p className="text-xs text-[#666] font-sans font-light leading-relaxed line-clamp-2">
                      {p.description}
                    </p>

                    {/* Premium action button - gold outline, fills gold on hover */}
                    <div className="pt-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          triggerAddToCartWithToast(p, 1);
                        }}
                        className="w-full py-3.5 bg-transparent border border-[#c9a84c] text-[#c9a84c] text-[10px] font-sans font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#c9a84c] hover:text-black hover:font-bold hover:shadow-lg focus:outline-none cursor-pointer"
                      >
                        Add to Cart Bag
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Adding item success Toast notifications banner */}
      <AnimatePresence>
        {successToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 bg-[#111111] border border-[#c9a84c]/40 p-4 md:p-5 flex items-center space-x-3.5 shadow-xl max-w-sm"
          >
            <div className="w-8 h-8 rounded-full bg-[#c9a84c]/10 flex items-center justify-center">
              <Check className="text-[#c9a84c]" size={16} />
            </div>
            <div>
              <p className="text-xs font-sans text-[#c9a84c] tracking-widest uppercase font-semibold">Added to Atelier Bag</p>
              <p className="text-[11px] text-[#999] font-serif leading-tight mt-0.5">{successToast}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Quick View Modal */}
      <AnimatePresence>
        {quickViewProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQuickViewProduct}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-55 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111111] border border-[#1e1e1e] w-full max-w-[850px] overflow-hidden p-0 relative rounded-none"
            >
              {/* Close Button */}
              <button
                onClick={closeQuickViewProduct}
                className="absolute top-5 right-5 text-white/50 hover:text-[#c9a84c] z-30 transition-colors p-2 cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1.5 1.5L16.5 16.5M16.5 1.5L1.5 16.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                
                {/* Left visual area layout - tall CSS Gradient display */}
                <div
                  style={{ background: quickViewProduct.gradient }}
                  className="md:col-span-6 min-h-[250px] md:min-h-[480px] relative flex items-center justify-center overflow-hidden"
                >
                  {quickViewProduct.image && (
                    <img
                      src={quickViewProduct.image}
                      alt={quickViewProduct.name}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 shimmer-bg opacity-20 pointer-events-none mix-blend-color-dodge" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  <div className="absolute inset-6 border border-white/[0.03]" />
                  
                  {/* Watermark logo */}
                  <span className="absolute bottom-4 left-6 text-[10px] tracking-[0.3em] font-mono text-white/30 uppercase">SUJO INDIA</span>
                </div>

                {/* Right detailed information text column */}
                <div className="md:col-span-6 p-6 md:p-10 flex flex-col justify-between text-left">
                  
                  {/* Product identity */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] tracking-[0.25em] font-mono uppercase bg-[#1e1e1e] text-[#c9a84c] px-2.5 py-0.5 rounded-full">
                        {quickViewProduct.category}
                      </span>
                      {quickViewProduct.isBestseller && (
                        <span className="text-[10px] text-[#c9a84c] tracking-widest uppercase font-sans">
                          • Bestseller
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
                      {quickViewProduct.name}
                    </h3>

                    {/* Royal golden currency label representation */}
                    <div className="text-[#c9a84c] font-serif text-xl md:text-2xl font-medium">
                      ₹{quickViewProduct.price.toLocaleString("en-IN")}
                      <span className="text-xs text-[#666] font-sans font-light tracking-wide ml-2 uppercase">Includes GST</span>
                    </div>

                    {/* Divider */}
                    <div className="h-[1px] bg-[#1e1e1e]" />

                    {/* Story description text */}
                    <p className="text-xs md:text-sm text-[#999] leading-relaxed font-sans font-light">
                      {quickViewProduct.description}
                    </p>

                    {/* Quality guarantees items list */}
                    <div className="bg-[#0c0c0c] border border-[#1e1e1e] p-3 space-y-1.5 font-sans text-[11px] text-[#999]">
                      <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full" />
                        <span><strong>Material</strong>: Premium high-density Indian weave threads</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full" />
                        <span><strong>Cut</strong>: High-authoritative structured shoulders</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full" />
                        <span><strong>Care</strong>: Delicate dry clean only</span>
                      </div>
                    </div>

                    {/* Size selectors */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] tracking-wider uppercase text-[#666] font-sans">
                        <span>Select Fitting</span>
                        <span className="text-[#c9a84c] flex items-center space-x-1">
                          <HelpCircle size={10} />
                          <span className="underline ml-0.5">Classic Indian Custom Fit</span>
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {(["S", "M", "L", "XL"] as const).map((sz) => (
                          <button
                            key={sz}
                            onClick={() => setSelectedSize(sz)}
                            className={`py-2 text-center text-xs font-mono font-bold tracking-widest transition-all duration-300 border cursor-pointer ${
                              selectedSize === sz
                                ? "bg-[#c9a84c] text-black border-[#c9a84c]"
                                : "bg-transparent text-white border-[#1e1e1e] hover:border-[#999]"
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quantity & Add with dynamic sum */}
                  <div className="pt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-widest text-[#666] uppercase font-sans">Investment Quantity</span>
                      
                      {/* Quantity Controller input */}
                      <div className="flex items-center border border-[#1e1e1e] bg-[#0c0c0c]">
                        <button
                          onClick={() => setQtyCounter(prev => Math.max(1, prev - 1))}
                          className="p-2 text-[#999] hover:text-white transition-colors"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="px-3 text-xs font-mono text-white min-w-[24px] text-center">
                          {qtyCounter}
                        </span>
                        <button
                          onClick={() => setQtyCounter(prev => prev + 1)}
                          className="p-2 text-[#999] hover:text-white transition-colors"
                        >
                          <Plus size={11} />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => handleQuickViewAdd(quickViewProduct)}
                      className="w-full py-4 bg-[#c9a84c] text-black text-xs font-sans font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <ShoppingBag size={12} />
                      <span>Invest in Garment • ₹{(quickViewProduct.price * qtyCounter).toLocaleString("en-IN")}</span>
                    </button>
                  </div>

                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
