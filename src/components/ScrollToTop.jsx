import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPosition = window.pageYOffset;
      console.log('Scroll Position:', scrollPosition); // Debug scroll position
      const shouldBeVisible = scrollPosition > 100; // Lowered threshold for testing
      setIsVisible(shouldBeVisible);
      console.log('isVisible:', shouldBeVisible); // Debug visibility state
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) {
    console.log('ScrollToTop button is not visible'); // Debug render condition
    return null;
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-blue to-blue/80 text-white p-4 rounded-full shadow-lg hover:bg-black transition-colors hover:rotate-y-12 transform-style-3d perspective-1000 z-50"
      whileHover={{ scale: 1.1 }}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={24} />
    </motion.button>
  );
}

export default ScrollToTop;