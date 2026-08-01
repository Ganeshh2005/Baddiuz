import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Trophy, CheckCircle, RefreshCw } from 'lucide-react';

export default function LoveQuiz({ onTriggerConfetti, onAddTapHeart }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      question: "Who is the luckiest person in the whole wide world?",
      options: [
        { text: "Me, because I have Riya in my life! 💕", isCorrect: true },
        { text: "A random lottery winner", isCorrect: false },
        { text: "Cupid himself", isCorrect: false }
      ]
    },
    {
      question: "How much love is in my heart reserved for Riya?",
      options: [
        { text: "100%", isCorrect: false },
        { text: "1,000,000% & Infinite Beyond! 💖", isCorrect: true },
        { text: "To the moon", isCorrect: false }
      ]
    },
    {
      question: "What happens every single time Riya smiles?",
      options: [
        { text: "My heart melts completely ✨", isCorrect: true },
        { text: "Butterflies throw a party", isCorrect: true },
        { text: "All of the above! 🌸", isCorrect: true }
      ]
    }
  ];

  const handleSelectOption = (index, isCorrect, e) => {
    setSelectedAnswer(index);
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    onTriggerConfetti();
    if (e.clientX) {
      onAddTapHeart(e.clientX, e.clientY);
    }

    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
        onTriggerConfetti();
      }
    }, 900);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <section className="py-16 px-4 max-w-2xl mx-auto relative z-10">
      
      <div className="glass-card p-6 sm:p-10 rounded-3xl shadow-xl border-2 border-rose-200/80 text-center relative overflow-hidden">
        
        {/* Header */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold mb-4">
          <Trophy className="w-3.5 h-3.5 text-amber-500" />
          <span>Interactive Love Quiz</span>
        </div>

        {!showResult ? (
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 font-outfit mb-4">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span className="text-rose-500 font-semibold">Love Meter: {(currentStep + 1) * 33}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-rose-100 h-2.5 rounded-full overflow-hidden mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                className="bg-gradient-to-r from-rose-500 to-pink-500 h-full rounded-full"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif-playfair text-slate-800 mb-8">
              {questions[currentStep].question}
            </h3>

            <div className="space-y-3">
              {questions[currentStep].options.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;
                return (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => handleSelectOption(idx, opt.isCorrect, e)}
                    className={`w-full p-4 rounded-2xl font-outfit text-base font-semibold text-left transition-all border flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-rose-500 text-white border-rose-500 shadow-lg shadow-rose-200'
                        : 'bg-white/90 hover:bg-rose-50 text-slate-700 border-rose-200 hover:border-rose-400'
                    }`}
                  >
                    <span>{opt.text}</span>
                    {isSelected && <CheckCircle className="w-5 h-5 text-white" />}
                  </motion.button>
                );
              })}
            </div>
          </div>
        ) : (
          /* Result View */
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-6"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-tr from-rose-500 to-pink-400 rounded-full flex items-center justify-center shadow-xl shadow-rose-300 animate-heart-beat">
              <Heart className="w-12 h-12 text-white fill-white" />
            </div>

            <span className="text-xs uppercase tracking-widest font-bold text-rose-500 bg-rose-100 px-4 py-1.5 rounded-full">
              Score: 1000% LOVE OVERLOAD 💕
            </span>

            <h3 className="text-3xl sm:text-4xl font-bold font-serif-playfair text-slate-800 mt-4 mb-2">
              Official Verdict: Riya is My Whole World! 💖
            </h3>

            <p className="text-rose-900/80 font-outfit text-sm sm:text-base max-w-md mx-auto mb-8">
              Congratulations Riya! You scored 10000% on the love test! You win infinite hugs, kisses, and endless love forever! ✨
            </p>

            <div className="flex justify-center space-x-4">
              <button
                onClick={(e) => {
                  onTriggerConfetti();
                  onAddTapHeart(e.clientX, e.clientY);
                }}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold shadow-lg shadow-rose-300 hover:scale-105 transition-transform flex items-center space-x-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Claim Infinite Kisses 💋</span>
              </button>

              <button
                onClick={handleRestart}
                className="p-3.5 rounded-full bg-rose-100 text-rose-600 hover:bg-rose-200 transition-colors"
                title="Replay Quiz"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}

      </div>

    </section>
  );
}
