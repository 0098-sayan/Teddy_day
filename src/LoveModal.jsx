import { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const LoveModal = ({ onClose }) => {
  useEffect(() => {
    // Trigger confetti when modal opens
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.5, opacity: 0 }}
        className="bg-[#fffdf0] rounded-lg p-8 max-w-md w-full shadow-[0_0_20px_rgba(0,0,0,0.1)] border border-stone-200 relative overflow-hidden"
      >
        {/* Decorative stamp */}
        <div className="absolute top-4 right-4 text-4xl opacity-80 rotate-12">💌</div>
        
        <div className="font-serif text-left space-y-4 text-stone-800 pt-4">
           <p className="text-xl font-bold text-pink-600">My Dearest Sumana,</p>
           <p className="leading-relaxed text-lg">
             On this Teddy Day, I want to send you all the warmth and cuddles in the world. 
             You are my favorite person, my safe place, and my greatest joy.
           </p>
           <p className="leading-relaxed text-lg">
             Sending you a giant teddy bear hug! 
           </p>
           <p className="text-right mt-8 font-bold text-pink-600 text-xl">- Forever Yours ❤️</p>
        </div>

        <div className="mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="bg-pink-500 text-white font-bold py-2 px-8 rounded-full shadow-md hover:bg-pink-600 transition-colors cursor-pointer"
          >
            Love You Too! ❤️
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoveModal;
