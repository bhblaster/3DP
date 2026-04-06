import { motion } from 'framer-motion';

const projects = [
  {
    num: "01",
    client: "CLIENT",
    name: "Flora Nature",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    num: "02",
    client: "CLIENT",
    name: "Cozy Village",
    images: [
      "https://images.unsplash.com/photo-1618005192384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    num: "03",
    client: "CLIENT",
    name: "Abstract Spheres",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=600&auto=format&fit=crop"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[12vw] md:text-[8vw] leading-none font-display uppercase tracking-tighter mb-16 text-center"
        >
          PROJECTS
        </motion.h2>

        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-gray-800 rounded-3xl p-6 md:p-8 bg-gray-950"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-6">
                  <span className="text-4xl font-display text-purple-500">{project.num}</span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{project.client}</p>
                    <h3 className="text-2xl font-bold uppercase">{project.name}</h3>
                  </div>
                </div>
                <button className="px-6 py-2 rounded-full border border-gray-600 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                  Live Project
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 h-64 md:h-96 rounded-2xl overflow-hidden">
                  <img src={project.images[0]} alt={project.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col gap-4 h-64 md:h-96">
                  <div className="h-1/2 rounded-2xl overflow-hidden">
                    <img src={project.images[1]} alt={project.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="h-1/2 rounded-2xl overflow-hidden">
                    <img src={project.images[2]} alt={project.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
