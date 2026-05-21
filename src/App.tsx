import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import FeaturedCollections from "./components/FeaturedCollections";
import Story from "./components/Story";
import ProductHighlights from "./components/ProductHighlights";
import Pillars from "./components/Pillars";
import Testimonials from "./components/Testimonials";
import InstagramStrip from "./components/InstagramStrip";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { Product, CartItem } from "./types";

export default function App() {
  // Safe client-side localstorage load
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem("sujo_cart_2025");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [storyOpen, setStoryOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Sync cart to localstorage
  useEffect(() => {
    try {
      localStorage.setItem("sujo_cart_2025", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to persist atelier cart state:", e);
    }
  }, [cart]);

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateCartQty = (productId: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.product.id === productId) {
          const nextQty = item.quantity + delta;
          return { ...item, quantity: Math.max(1, nextQty) };
        }
        return item;
      })
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Nav actions
  const scrollToShowroom = () => {
    const element = document.getElementById("highlights-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectCategoryFromWidget = (category: string) => {
    setSelectedCategory(category);
    scrollToShowroom();
  };

  const handleOpenQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  return (
    <div className="bg-[#0c0c0c] text-white min-h-screen relative font-sans selection:bg-[#c9a84c] selection:text-black">
      
      {/* 1. Navbar + Mobile Drawer & Sliding Shopping Cart Panel */}
      <Header
        cart={cart}
        onUpdateCartQty={handleUpdateCartQty}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
        openStoryModal={() => setStoryOpen(true)}
        openQuickView={handleOpenQuickView}
      />

      {/* 2. Hero Section viewport layout split */}
      <Hero
        onExploreClick={scrollToShowroom}
        onStoryClick={() => setStoryOpen(true)}
      />

      {/* 3. Infinite scrolling Marquee section with thin classic fonts */}
      <Marquee />

      {/* 4. Featured Collections categories grid (2x2 on mobile, 4x1 on desktop) */}
      <FeaturedCollections onSelectCategory={handleSelectCategoryFromWidget} />

      {/* 5. Brand Story metadata panel */}
      <Story storyOpen={storyOpen} setStoryOpen={setStoryOpen} />

      {/* 6. Product Highlights horizontal catalog + active filter tabs */}
      <ProductHighlights
        onAddToCart={handleAddToCart}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        openQuickViewProduct={handleOpenQuickView}
        quickViewProduct={quickViewProduct}
        closeQuickViewProduct={() => setQuickViewProduct(null)}
      />

      {/* 7. Why Sujo Indian: 4 pillars container with golden black background */}
      <Pillars />

      {/* 8. Worn with Pride Testimonials */}
      <Testimonials />

      {/* 9. Visual grid Instagram strip with shimmer cards layout */}
      <InstagramStrip />

      {/* 10. Stay Informed Newsletter */}
      <Newsletter />

      {/* 11. Footer details column */}
      <Footer
        onSelectCategory={handleSelectCategoryFromWidget}
        openStoryModal={() => setStoryOpen(true)}
      />
    </div>
  );
}
