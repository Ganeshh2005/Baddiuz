import React, { useEffect, useState } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

export default function FloatingHearts({ tapHearts, setTapHearts }) {
  const [ambientHearts, setAmbientHearts] = useState([]);

  useEffect(() => {
    // Generate background floating hearts
    const hearts = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage
      size: Math.floor(Math.random() * 18) + 12, // size in px
      duration: Math.random() * 8 + 8, // seconds
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.3,
      color: ['#FB7185', '#F43F5E', '#EC4899', '#F472B6', '#E11D48'][Math.floor(Math.random() * 5)],
    }));
    setAmbientHearts(hearts);
  }, []);

  // Clear temporary tap hearts after animation finishes
  useEffect(() => {
    if (tapHearts.length > 0) {
      const timer = setTimeout(() => {
        setTapHearts((prev) => prev.filter((h) => Date.now() - h.id < 1500));
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [tapHearts, setTapHearts]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background ambient floating hearts */}
      {ambientHearts.map((h) => (
        <div
          key={h.id}
          className="absolute bottom-[-40px] animate-float-heart"
          style={{
            left: `${h.left}%`,
            animation: `floatUp ${h.duration}s linear infinite`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
            color: h.color,
          }}
        >
          <Heart size={h.size} fill={h.color} />
        </div>
      ))}

      {/* Tap-spawns floating hearts */}
      {tapHearts.map((th) => (
        <div
          key={th.id}
          className="absolute transition-all ease-out pointer-events-none"
          style={{
            left: th.x - 16,
            top: th.y - 16,
            animation: 'burstUp 1.4s ease-out forwards',
          }}
        >
          <div className="flex items-center justify-center space-x-1" style={{ color: th.color || '#F43F5E' }}>
            <Heart size={th.size || 24} fill={th.color || '#F43F5E'} className="drop-shadow-md animate-bounce" />
            <Sparkles size={16} className="text-amber-400 animate-spin" />
          </div>
        </div>
      ))}

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          15% {
            opacity: 0.7;
          }
          85% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-105vh) rotate(360deg) scale(1.2);
            opacity: 0;
          }
        }

        @keyframes burstUp {
          0% {
            transform: translateY(0) scale(0.5) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-60px) scale(1.3) rotate(15deg);
            opacity: 0.9;
          }
          100% {
            transform: translateY(-130px) scale(0.8) rotate(-15deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
