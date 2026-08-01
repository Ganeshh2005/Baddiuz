import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, Sparkles, Heart, Gift, CheckCircle2 } from 'lucide-react';

export default function LoveVouchers({ onTriggerConfetti, onAddTapHeart }) {
  const [redeemed, setRedeemed] = useState({});

  const vouchers = [
    {
      id: 1,
      title: 'Unlimited Hugs & Cuddles 🎟️',
      description: 'Valid anytime, anywhere, 24/7 forever without expiration!',
      code: 'HUG-RIYA-100',
      tag: 'Infinite Hugs'
    },
    {
      id: 2,
      title: 'Late Night Ice Cream Date 🍦',
      description: 'Your favorite flavors, desserts & toppings, fully my treat!',
      code: 'SWEET-RIYA-2026',
      tag: 'Sweet Treat'
    },
    {
      id: 3,
      title: '"Riya Wins Any Argument" Pass 👑',
      description: 'Flash this pass to claim instant 100% victory on any topic!',
      code: 'QUEEN-VICTORY-1',
      tag: 'Royal Pass'
    },
    {
      id: 4,
      title: 'Movie Night & Favorite Snacks 🎬',
      description: 'You select the movie, TV show, popcorn & snacks unlimited!',
      code: 'POPCORN-LOVE',
      tag: 'Movie Date'
    }
  ];

  const handleRedeem = (id, e) => {
    setRedeemed((prev) => ({ ...prev, [id]: true }));
    onTriggerConfetti();
    if (e && e.clientX) {
      onAddTapHeart(e.clientX, e.clientY);
    }
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto relative z-10">
      
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold mb-3 border border-rose-200">
          <Ticket className="w-3.5 h-3.5 text-rose-500" />
          <span>Exclusive Love Coupons</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif-playfair text-slate-800">
          Redeemable Love Vouchers 🎟️
        </h2>
        <p className="text-rose-900/70 font-outfit text-sm sm:text-base mt-2 max-w-md mx-auto">
          Custom love coupons made specially for Riya! Tap any voucher to redeem it! 💕
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {vouchers.map((v) => {
          const isRedeemed = redeemed[v.id];

          return (
            <motion.div
              key={v.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-3xl border-2 relative overflow-hidden transition-all duration-300 ${
                isRedeemed
                  ? 'bg-gradient-to-r from-rose-50 to-pink-50 border-rose-300 shadow-md'
                  : 'glass-card border-rose-200 shadow-lg hover:border-rose-400'
              }`}
            >
              {/* Ticket Edge Stub Cutouts */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FFF5F7] rounded-full border-r border-rose-200"></div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FFF5F7] rounded-full border-l border-rose-200"></div>

              <div className="flex items-start justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-rose-100 text-rose-700 rounded-full">
                  {v.tag}
                </span>
                <span className="text-xs text-slate-400 font-mono">#{v.code}</span>
              </div>

              <h3 className="text-xl font-bold font-serif-playfair text-slate-800 mb-1">
                {v.title}
              </h3>
              <p className="text-sm text-slate-600 font-outfit mb-6">
                {v.description}
              </p>

              <button
                onClick={(e) => handleRedeem(v.id, e)}
                disabled={isRedeemed}
                className={`w-full py-3 rounded-2xl font-semibold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                  isRedeemed
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-200 hover:scale-[1.02] active:scale-95'
                }`}
              >
                {isRedeemed ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Redeemed For Riya! 💖</span>
                  </>
                ) : (
                  <>
                    <Gift className="w-4 h-4 text-white" />
                    <span>Tap to Redeem Coupon 🎟️</span>
                  </>
                )}
              </button>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
