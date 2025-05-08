import { motion } from 'framer-motion';

// Add blink animation via inline style or Tailwind's arbitrary value
const blinkStyle = {
  animation: 'blink 1s steps(1, end) infinite',
};

export default function Logo() {
  return (
    <motion.div
      className="group flex items-center text-2xl font-bold tracking-tight text-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'relative' }}
    >
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
      <svg
        className="hidden"
        width="8"
        height="20"
        viewBox="0 0 8 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        style={{ ...blinkStyle, display: 'none' }}
      >
        {/* Top bar */}
        <rect x="0" y="0" width="8" height="2" fill="currentColor" />
        {/* Vertical bar */}
        <rect x="3" y="2" width="2" height="16" fill="currentColor" />
        {/* Bottom bar */}
        <rect x="0" y="18" width="8" height="2" fill="currentColor" />
      </svg>
      <span className="font-['Fira_Code'] transition-colors group-hover:text-primary">Dev Cra</span>
      <span className="font-['Cormorant_Garamond'] text-4xl italic text-primary">f</span>
      <span className="font-['Fira_Code'] transition-colors group-hover:text-primary">t</span>
    </motion.div>
  );
} 