import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "SARAH JENKINS",
    role: "MARKETING DIRECTOR",
    text: "Alex created stunning 3D visuals for our new product launch. The attention to detail and lighting was incredible. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "MICHAEL CHEN",
    role: "GAME DEVELOPER",
    text: "Working with Alex was a breeze. The 3D assets provided were perfectly optimized and looked amazing in our engine. Will definitely hire again.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "EMILY RODRIGUEZ",
    role: "ART DIRECTOR",
    text: "The 3D animations Alex produced for our campaign were exactly what we needed. They brought our vision to life with style and precision.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "DAVID KIM",
    role: "CEO, TECHSTART",
    text: "Alex's product renders helped us secure our seed funding. The visuals were so realistic that investors thought we already had physical prototypes.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section id="customers" className="py-32 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[8vw] md:text-[6vw] leading-none font-display uppercase tracking-tighter inline-block">
            What Clients <br/> Are Saying <span className="inline-block animate-bounce">😍</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-gray-800 rounded-3xl p-8 bg-gray-900/50 backdrop-blur-sm hover:border-purple-500 transition-colors"
            >
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold uppercase tracking-wider">{t.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
