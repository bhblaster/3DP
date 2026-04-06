/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden shadow-[inset_0_0_150px_rgba(70,50,255,0.15)]">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 w-full flex justify-center z-[100] pointer-events-none"
      >
        <div className="bg-black/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full text-sm font-semibold tracking-wide shadow-[0_10px_30px_rgba(0,0,0,0.5)] pointer-events-auto">
          Want to build a stunning portfolio site for your client?
        </div>
      </motion.div>
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
