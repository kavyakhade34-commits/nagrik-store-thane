import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const categories = [
    { id: '01', name: 'Bridal Sarees' },
    { id: '02', name: 'Wedding Sherwanis' },
    { id: '03', name: 'Festive Collection' },
    { id: '04', name: 'New Arrivals' },
  ];

  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-nagrik-bg overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-8 z-10"
          >
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight text-nagrik-dark">
                THANE'S <br />
                <span className="text-nagrik-maroon italic font-light">TRUSTED</span> <br />
                FASHION STORE
              </h1>
              <p className="text-lg text-nagrik-dark/70 max-w-md font-light">
                For over 50 years, we've been crafting memories with premium ethnic wear, everyday comfort, and honest prices.
              </p>
            </div>

            <button className="group inline-flex items-center justify-center space-x-2 bg-nagrik-dark text-nagrik-bg px-8 py-4 rounded-full hover:bg-nagrik-maroon transition-all duration-300">
              <span className="font-medium">Explore Collection</span>
              <span className="bg-nagrik-bg text-nagrik-dark rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight size={16} />
              </span>
            </button>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-nagrik-dark/10">
              <div>
                <p className="text-3xl font-serif text-nagrik-dark">50+</p>
                <p className="text-sm text-nagrik-dark/60 mt-1">Years Legacy</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-nagrik-dark">150K+</p>
                <p className="text-sm text-nagrik-dark/60 mt-1">Happy Customers</p>
              </div>
            </div>
          </motion.div>

          {/* Center Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative h-[600px] lg:h-[700px] w-full flex justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-nagrik-bg/20 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1583391733958-6115f1108376?q=80&w=1974&auto=format&fit=crop" 
              alt="Elegant Ethnic Wear" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-nagrik-dark/5"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Right Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 flex flex-col justify-center space-y-8 pl-0 lg:pl-8"
          >
            <div className="space-y-6 w-full">
              {categories.map((category, index) => (
                <div 
                  key={category.id} 
                  className={`group flex items-center justify-between py-4 border-b border-nagrik-dark/10 cursor-pointer hover:border-nagrik-maroon transition-colors ${index === 1 ? 'border-nagrik-maroon' : ''}`}
                >
                  <span className="text-sm font-mono text-nagrik-dark/50 group-hover:text-nagrik-maroon transition-colors">
                    {category.id}
                  </span>
                  <div className="flex-1 px-6">
                    <div className={`h-[1px] w-full bg-nagrik-dark/10 group-hover:bg-nagrik-maroon transition-colors ${index === 1 ? 'bg-nagrik-maroon' : ''}`}></div>
                  </div>
                  <span className={`text-lg font-medium transition-colors ${index === 1 ? 'text-nagrik-maroon' : 'text-nagrik-dark/70 group-hover:text-nagrik-dark'}`}>
                    {category.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-12 text-right">
              <div className="flex items-center justify-end space-x-2 text-nagrik-dark mb-2">
                <span className="font-serif tracking-widest uppercase text-sm">Our Journey</span>
                <Sparkles size={16} className="text-nagrik-gold" />
              </div>
              <p className="text-sm text-nagrik-dark/50 italic">crafted for everyday elegance</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
