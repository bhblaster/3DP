import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-white"
    >
      <div className="flex gap-8 text-sm font-medium tracking-widest uppercase w-full justify-between max-w-7xl mx-auto">
        <div className="flex gap-8">
          <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
          <a href="#customers" className="hover:text-purple-400 transition-colors">Customers</a>
        </div>
        <div className="flex gap-8">
          <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}
