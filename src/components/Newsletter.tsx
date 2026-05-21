import { useState, FormEvent } from "react";
import { Check, Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section
      id="newsletter-section"
      className="py-24 md:py-32 bg-[#111111] border-y border-[#1e1e1e] text-white px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background ambient circular graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#c9a84c]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
        
        {/* Visual Crown or Icon Stamp */}
        <div className="w-10 h-10 border border-[#c9a84c]/20 flex items-center justify-center mx-auto rounded-full bg-[#0c0c0c]">
          <Mail size={14} className="text-[#c9a84c]" />
        </div>

        <div className="space-y-3">
          <span className="text-[10px] tracking-[0.4em] text-[#c9a84c] uppercase font-sans font-medium block">
            The Atelier Circle
          </span>
          {/* Main Headline (Cormorant, 48px) */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-wide leading-tight">
            Be the First to Know.
          </h2>
          {/* Subtext description */}
          <p className="text-xs sm:text-sm text-[#999999] font-sans font-light max-w-lg mx-auto leading-relaxed tracking-wide">
            New collections, exclusive drops, and stories from the heart of India. Dispatching invitations periodically.
          </p>
        </div>

        {/* Dynamic form / success container states */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto pt-4"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-[#0c0c0c] border border-[#c9a84c] text-white text-xs px-5 py-4 outline-none placeholder-white/20 font-sans tracking-wide transition-all focus:shadow-[0_0_12px_rgba(201,168,76,0.15)] focus:bg-black"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-[#c9a84c] text-black text-xs font-sans font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors cursor-pointer shrink-0"
            >
              Join
            </button>
          </form>
        ) : (
          <div className="max-w-md mx-auto p-6 bg-[#0c0c0c] border border-[#c9a84c]/30 rounded-sm text-center space-y-3 shadow-xl">
            <div className="w-8 h-8 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mx-auto">
              <Check className="text-[#c9a84c]" size={16} />
            </div>
            <p className="text-sm font-serif text-white">An invitation has been dispatched</p>
            <p className="text-xs text-[#999] font-sans font-light leading-relaxed">
              We have welcomed <strong className="text-white font-medium">{email}</strong> into the inner circle. Expect secret lookbook accesses first.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setEmail("");
              }}
              className="text-[10px] uppercase font-sans tracking-widest text-[#c9a84c] underline cursor-pointer"
            >
              Add another email
            </button>
          </div>
        )}

        <div className="text-[10px] text-[#555] tracking-widest uppercase font-mono pt-6">
          Zero Spam • Secured Hand-Crafted Letters Only
        </div>
      </div>
    </section>
  );
}
