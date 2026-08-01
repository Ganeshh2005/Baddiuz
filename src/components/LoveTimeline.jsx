import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Calendar, Coffee, Crown, Compass } from 'lucide-react';

export default function LoveTimeline({ onTriggerConfetti, onAddTapHeart }) {
  const milestones = [
    {
      id: 1,
      icon: Sparkles,
      title: "The Moment We First Connected 💫",
      date: "The Beginning",
      desc: "The day my world became infinitely brighter. I never knew one person could bring so much joy into my life."
    },
    {
      id: 2,
      icon: Coffee,
      title: "Our First Date & Laughs ☕",
      date: "Sweetest Memories",
      desc: "Butterflies in my stomach, endless conversations, and a smile on my face that wouldn't go away."
    },
    {
      id: 3,
      icon: Heart,
      title: "When I Realized You're The One 💕",
      date: "Forever Locked In",
      desc: "Seeing your kindness, your cute giggle, and how sweet you are made me realize I want to hold your hand forever."
    },
    {
      id: 4,
      icon: Crown,
      title: "National Girlfriend Day 2026 👑",
      date: "Today & Always",
      desc: "Celebrating my gorgeous queen, Riya! Thank you for being the most amazing girlfriend in the world."
    }
  ];

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto relative z-10">
      
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold mb-3 border border-rose-200">
          <Calendar className="w-3.5 h-3.5 text-rose-500" />
          <span>Our Journey Together</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif-playfair text-slate-800">
          Our Love Story Timeline 💕
        </h2>
        <p className="text-rose-900/70 font-outfit text-sm sm:text-base mt-2 max-w-md mx-auto">
          Every chapter with you, Riya, is my absolute favorite story! ✨
        </p>
      </div>

      <div className="relative border-l-2 border-rose-300 ml-4 sm:ml-32 space-y-10">
        {milestones.map((m, idx) => {
          const IconComp = m.icon;

          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onClick={(e) => {
                onTriggerConfetti();
                if (e && e.clientX) {
                  onAddTapHeart(e.clientX, e.clientY);
                }
              }}
              className="relative pl-8 sm:pl-10 group cursor-pointer"
            >
              {/* Timeline Heart Dot */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-md shadow-rose-300 group-hover:scale-125 transition-transform">
                <Heart className="w-4 h-4 fill-white animate-pulse" />
              </div>

              {/* Date Badge for larger screens */}
              <div className="hidden sm:block absolute -left-36 top-2 text-right w-28 text-xs font-bold text-rose-600 font-outfit uppercase tracking-wider">
                {m.date}
              </div>

              {/* Milestone Card */}
              <div className="glass-card p-6 rounded-2xl border border-rose-200/90 shadow-md group-hover:shadow-xl group-hover:border-rose-400 transition-all">
                <div className="sm:hidden text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">
                  {m.date}
                </div>
                <div className="flex items-center space-x-2 text-rose-700 font-bold font-serif-playfair text-xl mb-2">
                  <IconComp className="w-5 h-5 text-rose-500" />
                  <h3>{m.title}</h3>
                </div>
                <p className="text-slate-600 font-outfit text-sm leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
