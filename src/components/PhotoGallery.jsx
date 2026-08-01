import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X, Eye, ZoomIn, Camera } from 'lucide-react';

export default function PhotoGallery({ onTriggerConfetti, onAddTapHeart }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [likedPhotos, setLikedPhotos] = useState({});

  const photos = [
    {
      id: 1,
      src: '/photos/riya1.jpeg',
      title: 'My Cutest Sunshine 💖',
      caption: 'That smile literally brightens up my whole universe!',
      date: 'Special Moment',
      rotation: 'rotate-[-2deg]'
    },
    {
      id: 2,
      src: '/photos/riya2.jpeg',
      title: 'Prettiest Girl Alive ✨',
      caption: 'Every time I look at you, I fall in love all over again.',
      date: 'Pure Magic',
      rotation: 'rotate-[3deg]'
    },
    {
      id: 3,
      src: '/photos/riya3.jpeg',
      title: 'Unforgettable Memories 🌸',
      caption: 'Treasuring every single laugh, joke, and quiet moment together.',
      date: 'Sweetest Day',
      rotation: 'rotate-[-3deg]'
    },
    {
      id: 4,
      src: '/photos/riya4.jpeg',
      title: 'Pure Happiness 🎀',
      caption: 'You bring so much peace, laughter, and joy into my heart.',
      date: 'My Angel',
      rotation: 'rotate-[2deg]'
    },
    {
      id: 5,
      src: '/photos/riya5.jpeg',
      title: 'My Forever Person 💕',
      caption: 'With you, forever will never be long enough.',
      date: 'Always & Forever',
      rotation: 'rotate-[-1deg]'
    }
  ];

  const handleLikePhoto = (id, e) => {
    e.stopPropagation();
    setLikedPhotos(prev => ({ ...prev, [id]: !prev[id] }));
    onTriggerConfetti();
    if (e.clientX) {
      onAddTapHeart(e.clientX, e.clientY);
    }
  };

  return (
    <section id="gallery" className="py-16 px-4 max-w-6xl mx-auto relative z-10">
      
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold mb-3">
          <Camera className="w-3.5 h-3.5" />
          <span>Riya's Photo Wall</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif-playfair text-slate-800">
          Our Special Moments 📸
        </h2>
        <p className="text-rose-900/70 font-outfit text-sm sm:text-base mt-2 max-w-md mx-auto">
          Tap on any Polaroid to zoom in & send Riya love hearts! 💕
        </p>
      </div>

      {/* Responsive Polaroid Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-center justify-center">
        {photos.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onClick={() => setSelectedPhoto(p)}
            className={`polaroid cursor-pointer transform transition-all duration-300 relative group rounded-lg ${p.rotation} ${
              idx === 4 ? 'sm:col-span-2 lg:col-span-1 mx-auto max-w-sm w-full' : ''
            }`}
          >
            {/* Cute Tape Overlay */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-100/90 border border-amber-200 text-amber-800 text-[10px] font-semibold px-4 py-0.5 shadow-sm transform -rotate-1 z-10">
              RIYA ✨
            </div>

            {/* Photo Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded bg-rose-50">
              <img
                src={p.src}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60"; }}
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-rose-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 text-rose-600 p-3 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Polaroid Bottom Caption */}
            <div className="pt-3 px-1 flex items-center justify-between">
              <div>
                <h4 className="font-cursive text-xl text-rose-700 font-bold leading-tight">
                  {p.title}
                </h4>
                <p className="text-[11px] text-slate-400 font-outfit mt-0.5">{p.date}</p>
              </div>

              <button
                onClick={(e) => handleLikePhoto(p.id, e)}
                className={`p-2 rounded-full transition-transform active:scale-75 cursor-pointer ${
                  likedPhotos[p.id] ? 'bg-rose-100 text-rose-600' : 'text-slate-300 hover:text-rose-400'
                }`}
                title="Send Heart"
              >
                <Heart className={`w-5 h-5 ${likedPhotos[p.id] ? 'fill-rose-500 text-rose-500 animate-pulse' : ''}`} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-4 sm:p-6 max-w-lg w-full shadow-2xl relative border-2 border-rose-200"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 p-2.5 rounded-full bg-white/90 text-slate-700 hover:text-rose-600 shadow-lg z-50 transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-cursive text-3xl font-bold text-rose-600">
                  {selectedPhoto.title}
                </h3>
                <p className="text-slate-600 font-outfit text-sm mt-1">
                  {selectedPhoto.caption}
                </p>

                <button
                  onClick={(e) => handleLikePhoto(selectedPhoto.id, e)}
                  className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold flex items-center justify-center space-x-2 shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                >
                  <Heart className="w-5 h-5 fill-white animate-bounce" />
                  <span>Send Riya Endless Hearts! 💕</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
