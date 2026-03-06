import { motion } from 'motion/react';
import { Award, Heart, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-nagrik-light relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-nagrik-beige rounded-full opacity-50 blur-3xl mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-nagrik-gold/20 rounded-full opacity-50 blur-3xl mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-nagrik-maroon mb-3">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-nagrik-dark leading-tight">
                A Legacy of <br />
                <span className="italic text-nagrik-gold">Craftsmanship</span> & Care
              </h3>
            </div>

            <div className="space-y-6 text-lg text-nagrik-dark/70 font-light">
              <p>
                Established over five decades ago in the heart of Thane at Jambli Naka, Nagrik Stores has grown to become a landmark for ethnic fashion and wedding attire.
              </p>
              <p>
                What started as a humble retail shop has blossomed into a trusted destination for families seeking the perfect blend of traditional elegance and modern style. From exquisite Banarasi sarees to bespoke wedding sherwanis, our curated collections celebrate the rich tapestry of Indian fashion.
              </p>
              <p>
                Our commitment to quality, honest pricing, and personalized service has earned us the loyalty of generations of shoppers in Thane and Mumbai.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-nagrik-dark/10">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-nagrik-beige rounded-full flex items-center justify-center text-nagrik-maroon">
                  <ShieldCheck size={24} />
                </div>
                <p className="font-medium text-nagrik-dark">Premium Quality</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-nagrik-beige rounded-full flex items-center justify-center text-nagrik-maroon">
                  <Heart size={24} />
                </div>
                <p className="font-medium text-nagrik-dark">Trusted by Families</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-nagrik-beige rounded-full flex items-center justify-center text-nagrik-maroon">
                  <Award size={24} />
                </div>
                <p className="font-medium text-nagrik-dark">Legacy of 50+ Years</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
