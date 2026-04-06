import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-gray-100 text-black relative overflow-hidden">
      {/* Floating Objects */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 md:right-32 w-32 h-32 bg-yellow-400 rounded-3xl opacity-80 shadow-2xl"
        style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
      />
      <motion.div 
        animate={{ y: [0, 40, 0], rotate: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-10 md:left-32 w-40 h-40 bg-purple-500 rounded-full opacity-80 shadow-[0_0_40px_rgba(168,85,247,0.4)]"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[12vw] md:text-[8vw] leading-none font-display uppercase tracking-tighter mb-8"
            >
              LET'S <br/> GET IN <br/> TOUCH
            </motion.h2>
            <motion.a 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              href="mailto:alex@3dturner.com" 
              className="text-2xl md:text-4xl font-bold text-purple-600 hover:text-purple-800 transition-colors underline decoration-4 underline-offset-8"
            >
              alex@3dturner.com
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl"
          >
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Name</label>
                <input type="text" className="border-b-2 border-gray-300 py-2 focus:outline-none focus:border-purple-500 transition-colors bg-transparent text-lg" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Email</label>
                <input type="email" className="border-b-2 border-gray-300 py-2 focus:outline-none focus:border-purple-500 transition-colors bg-transparent text-lg" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea rows={4} className="border-b-2 border-gray-300 py-2 focus:outline-none focus:border-purple-500 transition-colors bg-transparent text-lg resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="button" className="self-start px-12 py-4 rounded-full bg-black text-white font-bold tracking-wider uppercase hover:bg-purple-600 transition-colors mt-4">
                Send
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
