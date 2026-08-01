import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Calendar, Clock, ChevronDown, Smile, Music } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenLetter, onScrollToGallery, onTriggerConfetti, onAddTapHeart }) {
  // Days since special day (defaults to a beautiful milestone counter)
  const [timeTogether, setTimeTogether] = useState({
    days: 365,
    hours: 14,
    minutes: 28,
    seconds: 45
  });

  useEffect(() => {
    // Dynamic ticker increment
    const timer = setInterval(() => {
      setTimeTogether(prev => {
        let sec = prev.seconds + 1;
        let min = prev.minutes;
        let hr = prev.hours;
        let d = prev.days;
        if (sec >= 60) { sec = 0; min += 1; }
        if (min >= 60) { min = 0; hr += 1; }
        if (hr >= 24) { hr = 0; d += 1; }
        return { days: d, hours: hr, minutes: min, seconds: sec };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 pt-12 pb-16 text-center z-10 overflow-hidden">
      
      {/* Top Floating Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-rose-100/90 border border-rose-300/60 shadow-sm text-rose-700 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md cursor-pointer hover:scale-105 transition-transform"
        onClick={(e) => {
          onTriggerConfetti();
          onAddTapHeart(e.clientX, e.clientY);
        }}
      >
        <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
        <span>National Girlfriend Day Special • August 1st</span>
        <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
      </motion.div>

      {/* Main Cute Greeting Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-serif-playfair text-slate-800 tracking-tight leading-tight mb-3">
          Happy Girlfriend Day,{' '}
          <span className="font-cursive font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 drop-shadow-sm inline-block transform hover:scale-110 transition-transform cursor-pointer">
            Riya! 💕
          </span>
        </h1>

        <p className="text-base sm:text-xl text-rose-900/80 font-outfit max-w-2xl mx-auto leading-relaxed mt-4">
          To the most gorgeous, sweetest, and loving girl in the whole wide world. You fill every moment of my life with warmth, smiles, and magic! ✨
        </p>
      </motion.div>

      {/* Cute Interactive Polaroid Crown / Hero Image Stack */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="mt-8 mb-8 relative cursor-pointer group"
        onClick={onOpenLetter}
      >
        <div className="relative inline-block">
          <div className="polaroid w-52 sm:w-64 rotate-[-3deg] group-hover:rotate-0 transition-transform duration-500 border-4 border-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src="/photos/riya1.jpeg" 
              alt="Beautiful Riya" 
              className="w-full h-56 sm:h-72 object-cover rounded-sm"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60"; }}
            />
            <div className="pt-3 pb-1 text-center font-cursive text-2xl text-rose-600 font-bold">
              My Sunshine, Riya 💖
            </div>
          </div>

          {/* Decorative Tape & Heart Badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-100/90 text-amber-800 text-[10px] font-semibold tracking-widest px-6 py-1 rounded-sm shadow-sm border border-amber-200 uppercase transform -rotate-2">
            My Forever Favorite
          </div>
          <div className="absolute -bottom-4 -right-4 bg-rose-500 text-white p-3 rounded-full shadow-lg animate-heart-beat">
            <Heart className="w-6 h-6 fill-white" />
          </div>
        </div>
      </motion.div>

      {/* Relationship Counter Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="glass-card px-6 py-4 rounded-2xl shadow-lg border border-rose-200/80 max-w-lg w-full mx-auto my-4"
      >
        <div className="flex items-center justify-center space-x-2 text-rose-600 font-semibold text-sm mb-3">
          <Clock className="w-4 h-4 animate-spin text-rose-500" />
          <span>Loving You Counter 💕</span>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
          <div className="bg-rose-50/80 p-2 sm:p-3 rounded-xl border border-rose-100">
            <span className="block text-xl sm:text-3xl font-bold font-outfit text-rose-600">{timeTogether.days}</span>
            <span className="text-[11px] sm:text-xs text-rose-800/70 uppercase font-medium">Days</span>
          </div>
          <div className="bg-rose-50/80 p-2 sm:p-3 rounded-xl border border-rose-100">
            <span className="block text-xl sm:text-3xl font-bold font-outfit text-rose-600">{timeTogether.hours}</span>
            <span className="text-[11px] sm:text-xs text-rose-800/70 uppercase font-medium">Hours</span>
          </div>
          <div className="bg-rose-50/80 p-2 sm:p-3 rounded-xl border border-rose-100">
            <span className="block text-xl sm:text-3xl font-bold font-outfit text-rose-600">{timeTogether.minutes}</span>
            <span className="text-[11px] sm:text-xs text-rose-800/70 uppercase font-medium">Mins</span>
          </div>
          <div className="bg-rose-50/80 p-2 sm:p-3 rounded-xl border border-rose-100">
            <span className="block text-xl sm:text-3xl font-bold font-outfit text-rose-600">{timeTogether.seconds}</span>
            <span className="text-[11px] sm:text-xs text-rose-800/70 uppercase font-medium">Secs</span>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-3 mt-6"
      >
        <button
          onClick={onOpenLetter}
          className="px-6 py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white font-semibold shadow-lg shadow-rose-300/50 hover:shadow-rose-400/70 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2 text-sm sm:text-base cursor-pointer"
        >
          <span>Open Love Letter 💌</span>
          <Sparkles className="w-4 h-4 text-amber-200" />
        </button>

        <button
          onClick={onScrollToGallery}
          className="px-6 py-3.5 rounded-full bg-white text-rose-600 font-semibold border border-rose-200 shadow-md hover:bg-rose-50 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2 text-sm sm:text-base cursor-pointer"
        >
          <span>View Our Memories 📸</span>
        </button>
      </motion.div>

      {/* Scroll Down Indicator */}
      <div className="mt-12 animate-bounce cursor-pointer opacity-70 hover:opacity-100" onClick={onScrollToGallery}>
        <ChevronDown className="w-8 h-8 text-rose-400 mx-auto" />
      </div>

    </section>
  );
}
