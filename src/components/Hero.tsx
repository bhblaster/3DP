import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-purple-600 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="z-10 text-center w-full max-w-7xl px-4 relative flex flex-col items-center justify-center h-full">
        
        {/* Massive Text Background */}
        <div className="relative w-full flex justify-center items-center mt-20 md:mt-0">
          <motion.h1 
            style={{ y: titleY, opacity, scaleY: 1.1 }}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[20vw] md:text-[16vw] leading-none font-display text-white uppercase tracking-tighter z-0 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] whitespace-nowrap"
          >
            HI, I'M ALEX
          </motion.h1>
          
          {/* Overlapping Avatar */}
          <motion.div
            style={{ y: avatarY, opacity }}
            initial={{ scale: 0.8, opacity: 0, y: 60 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-80 md:h-80 z-10 mt-10 md:mt-16"
          >
            <motion.div
              animate={{ y: [0, -10, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                alt="3D Avatar" 
                className="w-full h-full object-cover rounded-full border-4 border-gray-800 shadow-[0_30px_50px_rgba(0,0,0,0.6)]"
              />
            </motion.div>
          </motion.div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mt-24 md:mt-32 relative w-full px-8 z-20">
          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xs text-center md:text-left mb-8 md:mb-0"
          >
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2 font-bold">A 3D Designer Passionate</p>
            <p className="text-sm uppercase tracking-widest text-gray-500">About crafting bold and memorable projects</p>
          </motion.div>

          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#contact" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-orange-500 text-white font-bold tracking-wider uppercase hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,0,122,0.4)]">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
