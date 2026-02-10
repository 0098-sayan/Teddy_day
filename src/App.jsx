import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import TeddyCard from './TeddyCard';
import LoveModal from './LoveModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-100 via-red-50 to-pink-200 p-4 overflow-hidden">
      <TeddyCard onLoveClick={() => setShowModal(true)} />

      <AnimatePresence>
        {showModal && (
          <LoveModal onClose={() => setShowModal(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
