import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TeddyCard = ({ onLoveClick }) => {
  const [scale, setScale] = useState(1);
  const [hearts, setHearts] = useState([]);

  const handleHugClick = () => {
    // Scale up the teddy briefly
    setScale(1.5);
    setTimeout(() => setScale(1), 500);

    // Add floating hearts
    const newHearts = Array.from({ length: 5 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100 - 50, // Random X offset
      y: 0,
    }));
    setHearts((prev) => [...prev, ...newHearts]);

    // Remove hearts after animation
    setTimeout(() => {
      setHearts((prev) => prev.slice(newHearts.length));
    }, 2000);
  };

  return (
    <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-sm w-full text-center border border-pink-100">
      <h1 className="text-3xl font-bold text-pink-600 mb-6 font-serif">
        Happy Teddy Day <span className="text-red-500">❤️</span>
      </h1>

      <div className="relative h-48 flex items-center justify-center mb-6">
        <motion.div
          animate={{ scale: scale }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="text-9xl cursor-pointer select-none"
        >
          🧸
        </motion.div>
        
        {/* Floating Hearts */}
        <AnimatePresence>
          {hearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{ opacity: 1, y: 0, x: heart.x }}
              animate={{ opacity: 0, y: -150 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute text-4xl top-1/2 left-1/2 pointer-events-none"
              style={{ marginLeft: heart.x }}
            >
              ❤️
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <p className="text-gray-700 text-lg mb-8 font-medium">
        Sending you a teddy full of hugs and love!
      </p>

      <div className="flex flex-col gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleHugClick}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          Send Hug 🤗
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onLoveClick}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          I Love You ❤️
        </motion.button>
      </div>
    </div>
  );
};

export default TeddyCard;
