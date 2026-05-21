import { useState, useEffect, FormEvent } from "react";
import { ShoppingBag, X, Menu, Trash2, Plus, Minus, ArrowRight, Check } from "lucide-react";
import { Product, CartItem } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  cart: CartItem[];
  onUpdateCartQty: (productId: string, delta: number) => void;
  onRemoveFromCart: (productId: string) => void;
  onClearCart: () => void;
  openStoryModal: () => void;
  openQuickView: (product: Product) => void;
}

export default function Header({
  cart,
  onUpdateCartQty,
  onRemoveFromCart,
  onClearCart,
  openStoryModal,
  openQuickView,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"idle" | "details" | "success">("idle");
  
  // Checkout form details
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [orderId, setOrderId] = useState("");

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate cart metrics
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingThreshold = 10000;
  const isFreeShipping = subtotal >= shippingThreshold;
  const deliveryCharges = subtotal === 0 ? 0 : isFreeShipping ? 0 : 350;
  const grandTotal = subtotal + deliveryCharges;

  const handleCheckoutSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) return;
    
    // Simulate generation of premium order ID
    const generatedId = `SUJO-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setCheckoutStep("success");
  };

  const handleCompleteOrderDismiss = () => {
    setCheckoutStep("idle");
    setCartOpen(false);
    onClearCart();
    setName("");
    setPhone("");
    setAddress("");
  };

  return (
    <>
      {/* Target headers based on scroll to swap background with high-contrast luxury border */}
      <nav
        id="luxury-navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-5 md:py-6 ${
          scrolled
            ? "bg-[#0c0c0c]/95 backdrop-blur-md border-b border-[#1e1e1e] py-4"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo - Cormorant Garamond */}
          <a
            href="#"
            id="brand-logo"
            className="font-serif text-xl md:text-2xl font-bold tracking-[0.25em] text-[#c9a84c] hover:opacity-90 transition-opacity"
          >
            SUJO INDIAN
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10 text-xs tracking-[0.2em] uppercase font-sans font-light">
            <a href="#" className="text-white hover:text-[#c9a84c] transition-colors relative group py-2">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9a84c] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#collections-section" className="text-white hover:text-[#c9a84c] transition-colors relative group py-2">
              Collections
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9a84c] transition-all duration-300 group-hover:w-full" />
            </a>
            <button
              onClick={openStoryModal}
              className="text-white hover:text-[#c9a84c] transition-colors relative group py-2 uppercase tracking-[0.2em] cursor-pointer"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9a84c] transition-all duration-300 group-hover:w-full" />
            </button>
            <a href="#newsletter-section" className="text-white hover:text-[#c9a84c] transition-colors relative group py-2">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9a84c] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center space-x-6">
            
            {/* Cart Trigger Button */}
            <button
              id="cart-trigger"
              onClick={() => {
                setCartOpen(true);
                setCheckoutStep("idle");
              }}
              className="relative flex items-center space-x-2 text-white hover:text-[#c9a84c] transition-colors py-1 group"
              aria-label="Shopping Cart"
            >
              <div className="relative p-1">
                {/* Custom drawn CSS Bag Icon */}
                <div className="w-5 h-5 border-2 border-current rounded-sm relative mt-1.5 group-hover:border-[#c9a84c]">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-2 border-2 border-current rounded-t-full border-b-0 group-hover:border-[#c9a84c]" />
                </div>
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#c9a84c] text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-sans">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-[11px] uppercase tracking-[0.15em] text-[#c9a84c] group-hover:text-white transition-colors ml-1 font-sans">
                Shop Now
              </span>
            </button>

            {/* Hamburger Button for Mobile */}
            <button
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-white hover:text-[#c9a84c] transition-colors focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-55 md:hidden flex justify-end"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              /* Prevent backdrop click on side menu body */
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[320px] bg-[#0c0c0c] border-l border-[#1e1e1e] h-full p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-8 border-b border-[#111111]">
                  <span className="font-serif text-lg tracking-[0.2em] text-[#c9a84c]">SUJO INDIAN</span>
                  <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#c9a84c] transition-colors">
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col space-y-6 pt-10 text-sm tracking-[0.25em] uppercase font-sans font-light">
                  <a
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:text-[#c9a84c] transition-colors py-2 block border-b border-[#111111]/40"
                  >
                    Home
                  </a>
                  <a
                    href="#collections-section"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:text-[#c9a84c] transition-colors py-2 block border-b border-[#111111]/40"
                  >
                    Collections
                  </a>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openStoryModal();
                    }}
                    className="text-white text-left hover:text-[#c9a84c] transition-colors py-2 block border-b border-[#111111]/40 uppercase tracking-[0.25em] cursor-pointer"
                  >
                    About
                  </button>
                  <a
                    href="#newsletter-section"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:text-[#c9a84c] transition-colors py-2 block"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div className="border-t border-[#111111] pt-6 flex flex-col space-y-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCartOpen(true);
                  }}
                  className="w-full py-3 bg-[#c9a84c] text-black text-xs font-sans font-semibold tracking-[0.2em] text-center uppercase cursor-pointer"
                >
                  View Cart ({totalItems})
                </button>
                <span className="text-[10px] text-[#555] tracking-widest text-center uppercase">
                  Wear India. Own the room.
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer sliding side panel */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-55 flex justify-end"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[480px] bg-[#111111] border-l border-[#1e1e1e] h-full flex flex-col justify-between"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-[#1e1e1e] flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="font-serif text-xl text-white tracking-widest uppercase">Your Atelier Bag</span>
                  <span className="font-mono text-[11px] bg-[#1e1e1e] text-[#c9a84c] px-2.5 py-0.5 rounded-full">
                    {totalItems} items
                  </span>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="text-[#999] hover:text-white transition-colors p-1"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                {checkoutStep === "idle" && (
                  <>
                    {/* Free shipping banner meter */}
                    {totalItems > 0 && (
                      <div className="mb-6 p-4 bg-[#0c0c0c] border border-gold/10">
                        <p className="text-[11px] tracking-wide text-[#999] font-sans pb-2">
                          {isFreeShipping ? (
                            <span className="text-[#c9a84c] font-semibold">Congratulations! You have unlocked Free Atelier Shipping.</span>
                          ) : (
                            <span>
                              Add <strong className="text-white">₹{(shippingThreshold - subtotal).toLocaleString("en-IN")}</strong> more to unlock <strong className="text-[#c9a84c]">Free Hand-Packaged Shipping</strong>.
                            </span>
                          )}
                        </p>
                        <div className="w-full bg-[#1e1e1e] h-[2px] overflow-hidden">
                          <div
                            className="bg-[#c9a84c] h-full transition-all duration-500"
                            style={{ width: `${Math.min((subtotal / shippingThreshold) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {cart.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center py-12">
                        <div className="w-12 h-12 border-2 border-dotted border-[#c9a84c]/20 rounded-full flex items-center justify-center mb-4">
                          <ShoppingBag className="text-[#c9a84c]/40" size={20} />
                        </div>
                        <h3 className="font-serif text-lg text-white tracking-widest uppercase mb-1">Your bag is empty</h3>
                        <p className="text-[#666] text-xs font-sans mb-8 max-w-[280px]">
                          Select from our carefully hand-stitched 2025 festive lines to claim your presence in the room.
                        </p>
                        <button
                          onClick={() => setCartOpen(false)}
                          className="px-6 py-3 border border-[#c9a84c] text-[#c9a84c] text-[11px] font-sans uppercase tracking-[0.15em] hover:bg-[#c9a84c] hover:text-black transition-colors"
                        >
                          Continue Inspecting
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {cart.map((item) => (
                          <div
                            key={item.product.id}
                            className="flex space-x-4 pb-6 border-b border-[#1e1e1e]/60"
                          >
                            {/* CSS abstract fabric weave indicator representing product color */}
                            <div
                              onClick={() => {
                                setCartOpen(false);
                                openQuickView(item.product);
                              }}
                              style={{ background: item.product.gradient }}
                              className="w-16 h-20 shrink-0 border border-[#1e1e1e] cursor-pointer hover:border-[#c9a84c]/50 transition-colors relative overflow-hidden flex items-center justify-center"
                            >
                              {item.product.image && (
                                <img
                                  src={item.product.image}
                                  alt={item.product.name}
                                  className="absolute inset-0 w-full h-full object-cover"
                                  referrerPolicy="no-referrer"
                                />
                              )}
                              <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors z-10" />
                              <div className="absolute inset-1 border border-white/5 z-20" />
                            </div>

                            {/* Info */}
                            <div className="flex-1 flex flex-col justify-between">
                              <div>
                                <div className="flex justify-between items-start">
                                  <h4
                                    onClick={() => {
                                      setCartOpen(false);
                                      openQuickView(item.product);
                                    }}
                                    className="font-serif text-sm md:text-base text-white tracking-wide hover:text-[#c9a84c] transition-colors cursor-pointer"
                                  >
                                    {item.product.name}
                                  </h4>
                                  <button
                                    onClick={() => onRemoveFromCart(item.product.id)}
                                    className="text-white/30 hover:text-red-400 transition-colors pl-2 cursor-pointer"
                                    title="Remove item"
                                  >
                                    <Trash2 size={13} />
                                  </button>
                                </div>
                                <p className="text-[10px] text-[#666] font-sans uppercase tracking-widest mt-0.5">
                                  {item.product.category}
                                </p>
                              </div>

                              <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center border border-[#1e1e1e] bg-[#0c0c0c]">
                                  <button
                                    onClick={() => onUpdateCartQty(item.product.id, -1)}
                                    className="p-1 px-2 text-[#999] hover:text-white transition-colors"
                                  >
                                    <Minus size={10} />
                                  </button>
                                  <span className="px-2 text-xs font-mono text-white text-center min-w-[20px]">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => onUpdateCartQty(item.product.id, 1)}
                                    className="p-1 px-2 text-[#999] hover:text-white transition-colors"
                                  >
                                    <Plus size={10} />
                                  </button>
                                </div>
                                <span className="text-white font-serif text-sm font-medium">
                                  ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {checkoutStep === "details" && (
                  <form onSubmit={handleCheckoutSubmit} className="space-y-5 py-2">
                    <div className="mb-4">
                      <h3 className="font-serif text-lg text-[#c9a84c] uppercase tracking-wider">Atelier Order Customization</h3>
                      <p className="text-xs text-[#999] font-sans">Provide luxury package shipping details below.</p>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase tracking-widest text-[#999] font-sans">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Maharani Singh"
                        className="w-full bg-[#0c0c0c] border border-[#1e1e1e] focus:border-[#c9a84c] outline-none text-white text-xs px-4 py-3 placeholder-white/20 font-sans tracking-wide"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase tracking-widest text-[#999] font-sans">Contact number (WhatsApp Updates)</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-[#0c0c0c] border border-[#1e1e1e] focus:border-[#c9a84c] outline-none text-white text-xs px-4 py-3 placeholder-white/20 font-sans tracking-wide"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase tracking-widest text-[#999] font-sans">Shipping Address</label>
                      <textarea
                        rows={3}
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter full delivery details"
                        className="w-full bg-[#0c0c0c] border border-[#1e1e1e] focus:border-[#c9a84c] outline-none text-white text-xs px-4 py-3 placeholder-white/20 font-sans tracking-wide resize-none"
                      />
                    </div>

                    {/* Order summary small box */}
                    <div className="bg-[#0c0c0c] p-4 border border-[#1e1e1e] space-y-2 mt-4 font-sans text-xs">
                      <div className="flex justify-between text-[#666]">
                        <span>Subtotal ({totalItems} items)</span>
                        <span>₹{subtotal.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="flex justify-between text-[#666]">
                        <span>Draping & Shipping</span>
                        <span>{isFreeShipping ? "FREE" : "₹350"}</span>
                      </div>
                      <div className="h-[1px] bg-[#1e1e1e] my-2" />
                      <div className="flex justify-between text-[#c9a84c] font-semibold text-sm">
                        <span>Grand Total</span>
                        <span>₹{grandTotal.toLocaleString("en-IN")}</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#c9a84c] text-black text-xs font-sans font-bold tracking-[0.2em] py-4 uppercase hover:bg-white transition-colors duration-300 mt-4 cursor-pointer"
                    >
                      Authenticate & Book Dispatch
                    </button>

                    <button
                      type="button"
                      onClick={() => setCheckoutStep("idle")}
                      className="w-full text-center text-[#999] hover:text-white font-sans text-xs uppercase tracking-widest mt-2 cursor-pointer"
                    >
                      Modify Bag Items
                    </button>
                  </form>
                )}

                {checkoutStep === "success" && (
                  <div className="h-full flex flex-col items-center justify-center text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-tr from-[#c9a84c] to-[#9c7f36] rounded-full flex items-center justify-center mb-6 shadow-xl shadow-gold/10">
                      <Check className="text-black" size={32} />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#c9a84c] mb-2">Order Confirmed</span>
                    <h3 className="font-serif text-2xl text-white tracking-wide mb-3">Sujo Indian Atelier Order</h3>
                    <p className="text-[#999] text-xs font-sans max-w-[320px] mb-8 leading-relaxed">
                      Thank you for choosing to wear your heritage, <strong className="text-white">{name}</strong>. Your royal garment is being handcrafted at our studio. We will contact you at <strong className="text-white">{phone}</strong> for fitting customizations.
                    </p>

                    <div className="w-full bg-[#0c0c0c] border border-[#1e1e1e] p-5 rounded-sm space-y-3 font-sans text-xs mb-8 text-left">
                      <div className="flex justify-between">
                        <span className="text-[#666] uppercase tracking-wider">Atelier Order ID</span>
                        <span className="text-[#c9a84c] font-mono font-bold tracking-widest">{orderId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#666] uppercase tracking-wider">Garment Weight</span>
                        <span className="text-white font-medium">Standard Premium Drape</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#666] uppercase tracking-wider">Design Standard</span>
                        <span className="text-white">Unapologetic Luxury</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#666] uppercase tracking-wider">Atelier Transit Class</span>
                        <span className="text-[#c9a84c]">Royal Secured Courier</span>
                      </div>
                    </div>

                    <button
                      onClick={handleCompleteOrderDismiss}
                      className="w-full py-3.5 bg-white text-black text-xs font-sans tracking-[0.2em] font-medium uppercase hover:bg-[#c9a84c] transition-colors cursor-pointer"
                    >
                      Return to Showroom
                    </button>
                  </div>
                )}
              </div>

              {/* Footer sticky bar on view state idle */}
              {cart.length > 0 && checkoutStep === "idle" && (
                <div className="p-6 md:p-8 bg-[#0c0c0c] border-t border-[#1e1e1e] space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[#999] font-sans text-xs uppercase tracking-wider">
                      <span>Bag Subtotal</span>
                      <span className="text-white font-serif text-base">₹{subtotal.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-[#666] font-sans text-xs uppercase tracking-wider">
                      <span>Standard Shipping</span>
                      <span>{isFreeShipping ? "FREE" : "₹350"}</span>
                    </div>
                    <div className="h-[1px] bg-[#1e1e1e] my-1" />
                    <div className="flex justify-between text-white font-sans text-sm tracking-widest uppercase">
                      <span className="text-[#c9a84c]">Aesthetic Investment</span>
                      <span className="text-[#c9a84c] font-serif text-lg font-bold">₹{grandTotal.toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  <div className="pt-2 grid grid-cols-1 gap-2">
                    <button
                      onClick={() => setCheckoutStep("details")}
                      className="w-full bg-[#c9a84c] text-black text-xs font-sans font-bold tracking-[0.22em] py-4 uppercase text-center hover:bg-white hover:text-black transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>Proceed to Checkout</span>
                      <ArrowRight size={13} />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm("Are you sure you want to empty your atelier cart?")) {
                          onClearCart();
                        }
                      }}
                      className="w-full py-2 text-center text-[#ff3b30]/60 hover:text-[#ff3b30] text-[10px] font-sans uppercase tracking-[0.15em] transition-colors cursor-pointer"
                    >
                      Empty Bag
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
