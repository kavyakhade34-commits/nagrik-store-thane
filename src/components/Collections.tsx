import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const collections = [
  {
    title: "Women's Sarees",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1974&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    title: "Lehenga Collection",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1983&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    title: "Men's Sherwanis",
    image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=1974&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    title: "Indo Western",
    image: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=1974&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    title: "Wedding Collection",
    image: "https://images.unsplash.com/photo-1583391733958-6115f1108376?q=80&w=1974&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-3 lg:col-span-3",
  }
];

export default function Collections() {
  return (
    <section id="collections" className="py-24 bg-nagrik-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-nagrik-dark mb-4">
              Curated <span className="italic text-nagrik-maroon">Collections</span>
            </h2>
            <p className="text-nagrik-dark/70 text-lg font-light">
              Discover our handpicked selection of traditional and contemporary ethnic wear for every occasion.
            </p>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 md:mt-0 group flex items-center space-x-2 text-nagrik-dark font-medium hover:text-nagrik-maroon transition-colors"
          >
            <span>View All Categories</span>
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl aspect-[4/5] md:aspect-auto md:h-[400px] ${collection.colSpan} cursor-pointer`}
            >
              <div className="absolute inset-0 bg-nagrik-dark/20 group-hover:bg-nagrik-dark/40 transition-colors duration-500 z-10" />
              <img 
                src={collection.image} 
                alt={collection.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex justify-between items-end">
                <h3 className="text-2xl font-serif text-nagrik-bg">
                  {collection.title}
                </h3>
                <div className="bg-nagrik-bg/20 backdrop-blur-sm p-3 rounded-full text-nagrik-bg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
