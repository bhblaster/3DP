import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618005192384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=800&auto=format&fit=crop",
];

const clients = ["PROTOSPHERE", "THELMA WATSON", "IMPACT CREATIVE", "SCALER", "PIXEL FORGE", "VIOLETA"];

export default function Gallery() {
  return (
    <section className="py-20 overflow-hidden bg-black flex flex-col gap-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-between px-8 md:px-16 opacity-50 font-extrabold tracking-widest text-sm md:text-base overflow-x-auto gap-8 scrollbar-hide whitespace-nowrap"
      >
        {clients.map((client, idx) => (
          <span key={idx}>{client}</span>
        ))}
      </motion.div>

      <div className="flex gap-6 px-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="min-w-[280px] md:min-w-[400px] h-[200px] md:h-[300px] rounded-3xl overflow-hidden snap-center flex-shrink-0 shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          >
            <img 
              src={src} 
              alt={`3D Render ${idx + 1}`} 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

