import { motion } from 'framer-motion';

const services = [
  { title: "Web Design", desc: "Creating immersive digital experiences focusing on aesthetics and deep user engagement." },
  { title: "3D Branding", desc: "Elevating brand identities with premium 3D assets that command attention." },
  { title: "Motion Graphics", desc: "Adding rhythm and life to digital products through smooth, intentional motion design." }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-4 md:px-8 relative bg-black">
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#f0f0f0] rounded-[40px] py-20 px-4 md:px-12 relative overflow-hidden text-[#111] min-h-[80vh] flex flex-col justify-center"
      >
        {/* Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-display font-black text-black/5 pointer-events-none tracking-tighter select-none">
          SERVICES
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mt-12">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/80 backdrop-blur-sm p-10 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-transform duration-400"
            >
              <div className="w-[50px] h-[50px] bg-[#111] rounded-xl mb-6"></div>
              <h3 className="text-2xl font-extrabold mb-4">{service.title}</h3>
              <p className="text-[#555] leading-[1.6] text-[0.95rem]">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

