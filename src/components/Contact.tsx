import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-nagrik-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-nagrik-dark mb-4"
          >
            Visit <span className="italic text-nagrik-maroon">Our Store</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-nagrik-dark/70 text-lg font-light max-w-2xl mx-auto"
          >
            Experience the elegance of our collections in person. We look forward to welcoming you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-nagrik-light p-10 rounded-3xl space-y-10 shadow-lg shadow-nagrik-dark/5"
          >
            <h3 className="text-3xl font-serif text-nagrik-dark mb-8">Get in Touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-nagrik-bg rounded-full flex items-center justify-center text-nagrik-maroon flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-nagrik-dark mb-2">Store Location</h4>
                  <p className="text-nagrik-dark/70 font-light leading-relaxed">
                    Panchali CHS, Station Road<br />
                    Jambli Naka, Thane West<br />
                    Maharashtra 400601
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-nagrik-bg rounded-full flex items-center justify-center text-nagrik-maroon flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-nagrik-dark mb-2">Phone Number</h4>
                  <p className="text-nagrik-dark/70 font-light">
                    <a href="tel:+918657866610" className="hover:text-nagrik-maroon transition-colors">+91 8657866610</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-nagrik-bg rounded-full flex items-center justify-center text-nagrik-maroon flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-nagrik-dark mb-2">Email Address</h4>
                  <p className="text-nagrik-dark/70 font-light">
                    <a href="mailto:nagrikstore@gmail.com" className="hover:text-nagrik-maroon transition-colors">nagrikstore@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-nagrik-bg rounded-full flex items-center justify-center text-nagrik-maroon flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-nagrik-dark mb-2">Store Hours</h4>
                  <p className="text-nagrik-dark/70 font-light">
                    Monday - Sunday<br />
                    10:00 AM - 9:30 PM
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-nagrik-dark/10">
              <a 
                href="tel:+918657866610" 
                className="w-full inline-flex items-center justify-center space-x-2 bg-nagrik-dark text-nagrik-bg px-8 py-4 rounded-full hover:bg-nagrik-maroon transition-all duration-300 font-medium"
              >
                <span>Call Us Now</span>
                <Phone size={18} />
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-lg shadow-nagrik-dark/5 h-[500px] lg:h-auto min-h-[500px]"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.106880024623!2d72.9723812149029!3d19.19054768702166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b92019b1689b%3A0x606f52e3d81b9e81!2sJambli%20Naka%2C%20Thane%20West%2C%20Thane%2C%20Maharashtra%20400601!5e0!3m2!1sen!2sin!4v1689234567890!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Nagrik Stores Location"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
