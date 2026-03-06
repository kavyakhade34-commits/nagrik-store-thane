import { motion } from 'motion/react';

const galleryImages = [
  "https://images.unsplash.com/photo-1583391733958-6115f1108376?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1983&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583391733958-6115f1108376?q=80&w=1974&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-nagrik-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-nagrik-dark mb-4"
          >
            A Glimpse of <span className="italic text-nagrik-maroon">Elegance</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-nagrik-dark/70 text-lg font-light max-w-2xl mx-auto"
          >
            Explore our exquisite collection of ethnic wear and the warm ambiance of our Thane store.
          </motion.p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg shadow-nagrik-dark/5"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
