import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star, Smile, Gift, Award, Sun, Flame, MessageCircleHeart, Check } from 'lucide-react';

export default function ReasonsGrid({ onTriggerConfetti, onAddTapHeart }) {
  const [flippedCards, setFlippedCards] = useState({});

  const reasons = [
    {
      id: 1,
      icon: Smile,
      title: "Your Bright Smile 😁",
      secret: "Your smile literally brightens up my whole universe and turns my worst days into happy ones."
    },
    {
      id: 2,
      icon: Heart,
      title: "Your Cute Laugh 😂",
      secret: "Hearing your sweet laugh is my single favorite sound in the entire world!"
    },
    {
      id: 3,
      icon: Sparkles,
      title: "Your Kind & Caring Heart 🌸",
      secret: "You have the softest, most genuine and loving soul I have ever known."
    },
    {
      id: 4,
      icon: Sun,
      title: "Your Adorable Excitement 🎀",
      secret: "The way your eyes sparkle when you get excited is impossibly cute!"
    },
    {
      id: 5,
      icon: MessageCircleHeart,
      title: "You Are My Best Friend 👯‍♀️",
      secret: "With you, I can talk for hours, share all my secrets, and laugh until my stomach hurts."
    },
    {
      id: 6,
      icon: Gift,
      title: "Your Warm Cozy Hugs 🤗",
      secret: "Nothing in the world feels safer or sweeter than being wrapped in your arms."
    },
    {
      id: 7,
      icon: Flame,
      title: "Your Gorgeous Eyes ✨",
      secret: "I could get lost looking into your eyes forever and never get tired."
    },
    {
      id: 8,
      icon: Star,
      title: "Always Believing In Me 🌟",
      secret: "Your constant support and belief in me give me strength every single day."
    },
    {
      id: 9,
      icon: Award,
      title: "Making Life An Adventure 🍕",
      secret: "Whether we are doing something wild or just eating food on the couch, everything with you is magical."
    },
    {
      id: 10,
      icon: Heart,
      title: "Just Being YOU, Riya! 💕",
      secret: "You are my dream girl, my favorite person, and my whole heart forever & always!"
    }
  ];

  const handleCardClick = (id, e) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
    onTriggerConfetti();
    if (e && e.clientX) {
      onAddTapHeart(e.clientX, e.clientY);
    }
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold mb-3 border border-pink-200">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Tap Cards to Reveal Sweet Secrets</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif-playfair text-slate-800">
          10 Reasons Why I Love Riya 💕
        </h2>
        <p className="text-rose-900/70 font-outfit text-sm sm:text-base mt-2 max-w-md mx-auto">
          Tap on each cute card below to unlock a sweet secret love reason! ✨
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reasons.map((r) => {
          const IconComponent = r.icon;
          const isFlipped = flippedCards[r.id];

          return (
            <motion.div
              key={r.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => handleCardClick(r.id, e)}
              className="cursor-pointer h-48 rounded-2xl relative"
            >
              <div className="w-full h-full relative rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                
                {/* Front Side of Card */}
                <div
                  className={`absolute inset-0 rounded-2xl p-6 flex flex-col justify-between glass-card border border-rose-200/80 transition-all duration-500 ${
                    isFlipped ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 scale-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-rose-100 rounded-xl text-rose-600 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-rose-400 font-outfit bg-rose-50 px-2.5 py-1 rounded-full border border-rose-100">
                      Reason #{r.id}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg text-slate-800 font-outfit">
                      {r.title}
                    </h4>
                    <p className="text-xs text-rose-500 font-medium mt-1.5 flex items-center space-x-1">
                      <span>Tap to unwrap secret</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                    </p>
                  </div>
                </div>

                {/* Back Side of Card (Fully Upright & Perfectly Readable) */}
                <div
                  className={`absolute inset-0 rounded-2xl p-6 flex flex-col justify-between bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 text-white shadow-lg border-2 border-rose-300 transition-all duration-500 ${
                    isFlipped ? 'opacity-100 scale-100' : 'opacity-0 pointer-events-none scale-95'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-cursive tracking-wider bg-white/20 px-3 py-0.5 rounded-full">
                      Reason #{r.id} Revealed ✨
                    </span>
                    <Heart className="w-5 h-5 fill-white text-white animate-pulse" />
                  </div>

                  {/* Secret text is clean, upright, and large cursive */}
                  <div className="my-auto py-1">
                    <p className="font-cursive text-xl sm:text-2xl text-white font-bold leading-relaxed text-center drop-shadow-sm">
                      "{r.secret}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-outfit text-rose-100 pt-1 border-t border-white/20">
                    <span>Tap to flip back</span>
                    <span className="font-semibold">Riya + Me 💕</span>
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
