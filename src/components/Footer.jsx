import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function Footer({ onTriggerConfetti, onAddTapHeart }) {
  return (
    <footer className="py-12 px-4 border-t border-rose-200/60 bg-white/50 backdrop-blur-sm text-center relative z-10">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-center space-x-2 text-rose-500 font-cursive text-2xl font-bold mb-2">
          <span>Riya + Me</span>
          <Heart className="w-5 h-5 fill-rose-500 animate-heart-beat inline-block" />
          <span>Forever</span>
        </div>

        <p className="text-xs text-rose-900/60 font-outfit">
          Crafted with endless love & affection for National Girlfriend Day 🌸
        </p>

        <div className="mt-4 flex justify-center items-center space-x-1 text-[11px] text-slate-400 font-outfit">
          <span>Tap anywhere on the screen for heart magic! ✨</span>
        </div>
      </div>
    </footer>
  );
}
