import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import FloatingHearts from './components/FloatingHearts';
import Hero from './components/Hero';
import LoveLetter from './components/LoveLetter';
import PhotoGallery from './components/PhotoGallery';
import ReasonsGrid from './components/ReasonsGrid';
import LoveTimeline from './components/LoveTimeline';
import LoveVouchers from './components/LoveVouchers';
import LoveQuiz from './components/LoveQuiz';
import InteractiveControls from './components/InteractiveControls';
import Footer from './components/Footer';

export default function App() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [tapHearts, setTapHearts] = useState([]);

  // Trigger romantic heart/rose confetti explosion
  const handleTriggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F43F5E', '#FB7185', '#EC4899', '#F472B6', '#FBBF24']
      });

      setTimeout(() => {
        confetti({
          particleCount: 30,
          angle: 60,
          spread: 60,
          origin: { x: 0 },
          colors: ['#F43F5E', '#EC4899', '#FB7185']
        });
        confetti({
          particleCount: 30,
          angle: 120,
          spread: 60,
          origin: { x: 1 },
          colors: ['#F43F5E', '#EC4899', '#FB7185']
        });
      }, 250);
    } catch (err) {
      console.log('Confetti error:', err);
    }
  };

  // Add temporary floating heart at specific click position
  const handleAddTapHeart = (x, y, color = '#F43F5E', size = 26) => {
    setTapHearts((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        x,
        y,
        color,
        size
      }
    ]);
  };

  const handleGlobalClick = (e) => {
    if (e.target.closest('button') || e.target.closest('a')) return;
    handleAddTapHeart(e.clientX, e.clientY);
  };

  const handleScrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      onClick={handleGlobalClick}
      className="min-h-screen relative bg-gradient-to-b from-[#FFF5F7] via-[#FFF0F3] to-[#FFE4E8] text-slate-800 selection:bg-rose-200 selection:text-rose-900 font-outfit"
    >
      {/* Background Floating Hearts */}
      <FloatingHearts tapHearts={tapHearts} setTapHearts={setTapHearts} />

      {/* Main Content Layout */}
      <main className="relative z-10 space-y-4">
        <Hero
          onOpenLetter={() => setIsLetterOpen(true)}
          onScrollToGallery={handleScrollToGallery}
          onTriggerConfetti={handleTriggerConfetti}
          onAddTapHeart={handleAddTapHeart}
        />

        <PhotoGallery
          onTriggerConfetti={handleTriggerConfetti}
          onAddTapHeart={handleAddTapHeart}
        />

        <ReasonsGrid
          onTriggerConfetti={handleTriggerConfetti}
          onAddTapHeart={handleAddTapHeart}
        />

        <LoveTimeline
          onTriggerConfetti={handleTriggerConfetti}
          onAddTapHeart={handleAddTapHeart}
        />

        <LoveVouchers
          onTriggerConfetti={handleTriggerConfetti}
          onAddTapHeart={handleAddTapHeart}
        />

        <LoveQuiz
          onTriggerConfetti={handleTriggerConfetti}
          onAddTapHeart={handleAddTapHeart}
        />

        <Footer
          onTriggerConfetti={handleTriggerConfetti}
          onAddTapHeart={handleAddTapHeart}
        />
      </main>

      {/* Interactive Floating Hug & Kiss Controls + Music */}
      <InteractiveControls
        onTriggerConfetti={handleTriggerConfetti}
        onAddTapHeart={handleAddTapHeart}
      />

      {/* Animated Love Letter Modal */}
      <LoveLetter
        isOpen={isLetterOpen}
        onClose={() => setIsLetterOpen(false)}
        onTriggerConfetti={handleTriggerConfetti}
        onAddTapHeart={handleAddTapHeart}
      />
    </div>
  );
}
