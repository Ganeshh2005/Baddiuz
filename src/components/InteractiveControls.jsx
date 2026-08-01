import React, { useState, useEffect, useRef } from 'react';
import { Heart, Volume2, VolumeX, Sparkles, Smile, Music } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InteractiveControls({ onTriggerConfetti, onAddTapHeart }) {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef(null);

  // Synthesize soft romantic melody chord sound using Web Audio API when user taps hug/kiss
  const playRomanticChime = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2 + index * 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + index * 0.1);
        osc.stop(ctx.currentTime + 1.4 + index * 0.15);
      });
    } catch (err) {
      console.log('Audio Context not available');
    }
  };

  const handleSendKiss = (e) => {
    onTriggerConfetti();
    playRomanticChime();
    const x = e.clientX || window.innerWidth / 2;
    const y = e.clientY || window.innerHeight / 2;
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        onAddTapHeart(
          x + (Math.random() * 80 - 40),
          y + (Math.random() * 80 - 40),
          '#F43F5E',
          Math.random() * 16 + 24
        );
      }, i * 120);
    }
  };

  const handleSendHug = (e) => {
    onTriggerConfetti();
    playRomanticChime();
    const x = e.clientX || window.innerWidth / 2;
    const y = e.clientY || window.innerHeight / 2;
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        onAddTapHeart(
          x + (Math.random() * 80 - 40),
          y + (Math.random() * 80 - 40),
          '#EC4899',
          Math.random() * 16 + 24
        );
      }, i * 120);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlayingMusic) {
        audioRef.current.pause();
        setIsPlayingMusic(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlayingMusic(true);
        }).catch((err) => {
          console.log('Music play prevented:', err);
          setIsPlayingMusic(true);
        });
      }
    } else {
      setIsPlayingMusic(!isPlayingMusic);
      playRomanticChime();
    }
  };

  return (
    <>
      {/* Background Audio Element with Royalty-free romantic track */}
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-112199.mp3"
      />

      {/* Floating Bottom Bar for Mobile & Desktop */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center space-x-3 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-2xl border border-rose-200/90 max-w-[92vw]">
        
        {/* Send Kiss Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleSendKiss}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold text-xs sm:text-sm flex items-center space-x-1.5 shadow-md hover:shadow-rose-300 transition-all cursor-pointer"
        >
          <span className="text-base">💋</span>
          <span>Send Kiss</span>
        </motion.button>

        {/* Send Hug Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleSendHug}
          className="px-4 py-2 rounded-full bg-rose-100 text-rose-700 font-semibold text-xs sm:text-sm flex items-center space-x-1.5 border border-rose-200 hover:bg-rose-200 transition-all cursor-pointer"
        >
          <span className="text-base">🤗</span>
          <span>Send Hug</span>
        </motion.button>

        {/* Music Player Toggle */}
        <button
          onClick={toggleMusic}
          className={`p-2.5 rounded-full transition-all flex items-center justify-center cursor-pointer ${
            isPlayingMusic
              ? 'bg-rose-500 text-white shadow-md animate-pulse'
              : 'bg-slate-100 text-slate-500 hover:bg-rose-100 hover:text-rose-600'
          }`}
          title={isPlayingMusic ? 'Mute Music' : 'Play Romantic Music'}
        >
          {isPlayingMusic ? (
            <Volume2 className="w-4 h-4 text-white" />
          ) : (
            <VolumeX className="w-4 h-4" />
          )}
        </button>

      </div>
    </>
  );
}
