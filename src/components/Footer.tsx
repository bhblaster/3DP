import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10vw] md:text-[6vw] leading-none font-display uppercase tracking-tighter">
              ALEX <br/> TURNER
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Social</h4>
              <a href="#" className="hover:text-purple-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Facebook</a>
              <a href="#" className="hover:text-purple-400 transition-colors">ArtStation</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Behance</a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Contact</h4>
              <p>alex@3dturner.com</p>
              <p>+1 (555) 123-4567</p>
              <p className="text-gray-400 max-w-[200px] mt-4">123 Creative Lane, Suite 4B<br/>Design City, DC 90210</p>
            </motion.div>
          </div>
        </div>

        {/* Abstract Shapes Footer Decoration */}
        <div className="flex justify-between items-center border-t border-gray-800 pt-16 overflow-hidden">
          <div className="flex gap-4 w-full justify-between opacity-80">
            <div className="w-12 h-12 md:w-20 md:h-20 bg-purple-500 rounded-full"></div>
            <div className="w-12 h-12 md:w-20 md:h-20 bg-pink-500" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}></div>
            <div className="w-12 h-12 md:w-20 md:h-20 bg-yellow-400 rounded-lg transform rotate-45"></div>
            <div className="w-12 h-12 md:w-20 md:h-20 bg-blue-500 rounded-full"></div>
            <div className="w-12 h-12 md:w-20 md:h-20 bg-green-400" style={{ borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%' }}></div>
            <div className="w-12 h-12 md:w-20 md:h-20 bg-red-500 rounded-full hidden md:block"></div>
            <div className="w-12 h-12 md:w-20 md:h-20 bg-orange-500 rounded-lg transform rotate-12 hidden md:block"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
