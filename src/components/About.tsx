import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-black flex flex-col items-center justify-center min-h-screen">
      {/* Decorative 3D Elements */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[15%] left-[15%] z-0"
      >
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[120px] h-[120px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.2)]"
          style={{ background: 'radial-gradient(circle at 30% 30%, #ffffff, #b0b0b0)' }}
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[20%] right-[15%] z-0"
      >
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="w-[100px] h-[100px]"
          style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[50%] right-[10%] z-0"
      >
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [45, 50, 45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="w-[90px] h-[90px] rounded-[10px]"
          style={{ background: 'radial-gradient(circle, #b829ea, #500e8a)' }}
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[20%] left-[12%] z-0"
      >
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [-45, -40, -45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="w-[80px] h-[80px] rounded-[50%_50%_0_0]"
          style={{ background: 'radial-gradient(circle at 30% 30%, #ff4b4b, #a60000)' }}
        />
      </motion.div>

      <div className="z-10 text-center max-w-4xl px-4 relative">
        <motion.h2 
          initial={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.2)", textShadow: "none" }}
          whileInView={{ color: "#ffffff", WebkitTextStroke: "0px rgba(255,255,255,0)", textShadow: "0 10px 30px rgba(255,255,255,0.2)" }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="text-[12vw] md:text-[8vw] leading-none font-display uppercase tracking-tighter mb-8"
        >
          ABOUT ME
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-[#a0a0a0] font-medium leading-[1.8] mb-12 max-w-2xl mx-auto"
        >
          With over five years of experience in design,<br/>
          I specialize in branding, web design, and user experience.<br/>
          I love collaborating with businesses that want to stand out<br/>
          and showcase their best side.<br/>
          Let's create something amazing together!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#contact" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-orange-500 text-white font-bold tracking-wider uppercase hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,0,122,0.4)] relative z-20">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
