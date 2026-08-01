import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Sparkles, MailOpen, Lock } from 'lucide-react';

export default function LoveLetter({ isOpen, onClose, onTriggerConfetti, onAddTapHeart }) {
  const [isOpened, setIsOpened] = useState(false);
  const [hasSealed, setHasSealed] = useState(false);

  const handleOpenEnvelope = (e) => {
    setIsOpened(true);
    onTriggerConfetti();
    if (e && e.clientX) {
      onAddTapHeart(e.clientX, e.clientY);
    }
  };

  const handleClose = () => {
    setIsOpened(false);
    setHasSealed(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl my-auto"
          >
            
            {/* Top Close Modal Button - Always visible inside modal header */}
            <button
              onClick={handleClose}
              className="absolute -top-12 right-2 sm:right-0 p-2.5 rounded-full bg-white text-slate-800 hover:text-rose-600 shadow-xl z-50 transition-all cursor-pointer flex items-center space-x-1.5 px-3 py-1.5 font-outfit text-xs font-semibold"
              aria-label="Close Letter"
            >
              <span>Close</span>
              <X className="w-4 h-4 text-rose-500" />
            </button>

            {!isOpened ? (
              /* Sealed Envelope View */
              <motion.div
                initial={{ scale: 0.85, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="glass-card-dark p-6 sm:p-10 rounded-3xl shadow-2xl text-center border-2 border-rose-300 relative overflow-hidden max-h-[85vh] overflow-y-auto"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/40 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-200/40 rounded-full blur-2xl pointer-events-none"></div>

                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-tr from-rose-500 to-pink-400 rounded-full flex items-center justify-center shadow-lg shadow-rose-300 animate-pulse">
                  <MailOpen className="w-10 h-10 text-white" />
                </div>

                <span className="text-xs uppercase tracking-widest font-semibold text-rose-600 bg-rose-100 px-3.5 py-1 rounded-full border border-rose-200">
                  Top Secret • For Riya Only 🔒
                </span>

                <h3 className="text-2xl sm:text-4xl font-bold font-serif-playfair text-slate-800 mt-4 mb-2">
                  A Secret Love Letter For You
                </h3>
                <p className="text-rose-900/75 font-outfit text-sm sm:text-base max-w-md mx-auto mb-8">
                  Tap the heart seal below to unseal your Girlfriend Day letter, Riya! 💕
                </p>

                {/* Wax Seal Button */}
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpenEnvelope}
                  className="relative inline-flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 text-white font-semibold rounded-full shadow-xl shadow-rose-400/50 cursor-pointer"
                >
                  <Heart className="w-6 h-6 fill-white animate-heart-beat" />
                  <span className="text-lg font-cursive tracking-wide">Open Riya's Envelope 💌</span>
                  <Sparkles className="w-5 h-5 text-amber-200" />
                </motion.button>
              </motion.div>
            ) : (
              /* Unfolded Handwritten Love Letter View */
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-[#FFFDF9] rounded-3xl p-5 sm:p-8 shadow-2xl border-4 border-rose-200 relative text-slate-800 max-h-[82vh] overflow-y-auto"
              >
                {/* Close Button Inside Letter Header */}
                <div className="flex items-center justify-between border-b border-rose-200 pb-3 mb-5">
                  <div>
                    <span className="font-cursive text-rose-600 font-bold text-xl sm:text-2xl">Girlfriend Day Letter</span>
                    <p className="text-xs text-slate-500 font-outfit">To My Dearest Riya 💖</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-12 border-2 border-dashed border-rose-300 rounded flex flex-col items-center justify-center bg-rose-50 text-rose-500 font-cursive text-[10px] rotate-6 hidden sm:flex">
                      <Heart className="w-4 h-4 fill-rose-500" />
                      <span>AUG 1</span>
                    </div>
                    <button
                      onClick={handleClose}
                      className="p-2 rounded-full bg-rose-100 text-rose-700 hover:bg-rose-200 transition-colors cursor-pointer"
                      title="Close Letter"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Main Cute Handwritten Letter Content */}
                <div className="font-cursive text-2xl sm:text-3xl text-slate-800 leading-relaxed space-y-4 relative z-10">
                  <p className="text-rose-600 font-bold text-3xl sm:text-4xl">My Dearest Riya 💕,</p>

                  <p>
                    Happy Girlfriend Day, my gorgeous girl! 🌸 Today is all about celebrating you, though every single day with you feels like a gift I get to unwrap.
                  </p>

                  <p>
                    From the moment you came into my life, everything became brighter, sweeter, and so much happier. Your smile is literally my favorite thing in the universe—it can turn my worst day into the best one in an instant.
                  </p>

                  <p>
                    Thank you for your warm hugs, your infectious laughter, your kindness, and for being my best friend and soulmate all in one. You make my heart skip a beat every single time I look at you.
                  </p>

                  <p>
                    I promise to always adore you, cherish your cute smile, stand by your side, and remind you every single day how deeply you are loved.
                  </p>

                  <div className="pt-4 text-right">
                    <p className="text-rose-500 font-bold text-3xl sm:text-4xl">Forever & Always Yours, ❤️</p>
                    <p className="text-slate-500 text-lg font-outfit font-medium">With infinite love & hugs 💖</p>
                  </div>
                </div>

                {/* Interactive Heart Seal & Close Action Bar */}
                <div className="mt-6 pt-5 border-t border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    onClick={(e) => {
                      setHasSealed(true);
                      onTriggerConfetti();
                      onAddTapHeart(e.clientX, e.clientY);
                    }}
                    className={`w-full sm:w-auto px-5 py-2.5 rounded-full font-semibold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                      hasSealed
                        ? 'bg-rose-500 text-white shadow-md'
                        : 'bg-rose-100 text-rose-700 hover:bg-rose-200'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${hasSealed ? 'fill-white' : 'fill-rose-500'}`} />
                    <span>{hasSealed ? 'Sealed with Kisses! 💋' : 'Seal With A Kiss 💋'}</span>
                  </button>

                  <button
                    onClick={handleClose}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-slate-800 text-white hover:bg-slate-900 font-semibold text-sm transition-all flex items-center justify-center space-x-1.5 cursor-pointer shadow-md"
                  >
                    <span>Close Letter 💌</span>
                  </button>
                </div>

              </motion.div>
            )}

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
