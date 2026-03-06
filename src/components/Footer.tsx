import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-nagrik-dark text-nagrik-bg py-16 border-t border-nagrik-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-1 space-y-6">
            <a href="#" className="font-serif text-3xl font-semibold tracking-tight text-nagrik-bg">
              Nagrik <span className="text-nagrik-gold italic">Stores</span>
            </a>
            <p className="text-nagrik-bg/60 text-sm font-light leading-relaxed">
              Thane's trusted fashion destination for over 50 years. Crafting memories with premium ethnic wear.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-nagrik-bg/60 hover:text-nagrik-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-nagrik-bg/60 hover:text-nagrik-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-nagrik-bg/60 hover:text-nagrik-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-nagrik-gold">Quick Links</h4>
            <ul className="space-y-4 text-sm font-light text-nagrik-bg/60">
              <li><a href="#" className="hover:text-nagrik-bg transition-colors">Home</a></li>
              <li><a href="#collections" className="hover:text-nagrik-bg transition-colors">Collections</a></li>
              <li><a href="#gallery" className="hover:text-nagrik-bg transition-colors">Gallery</a></li>
              <li><a href="#about" className="hover:text-nagrik-bg transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-nagrik-bg transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-nagrik-gold">Collections</h4>
            <ul className="space-y-4 text-sm font-light text-nagrik-bg/60">
              <li><a href="#" className="hover:text-nagrik-bg transition-colors">Women's Sarees</a></li>
              <li><a href="#" className="hover:text-nagrik-bg transition-colors">Lehenga Collection</a></li>
              <li><a href="#" className="hover:text-nagrik-bg transition-colors">Men's Sherwanis</a></li>
              <li><a href="#" className="hover:text-nagrik-bg transition-colors">Indo Western</a></li>
              <li><a href="#" className="hover:text-nagrik-bg transition-colors">Wedding Collection</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-nagrik-gold">Newsletter</h4>
            <p className="text-nagrik-bg/60 text-sm font-light mb-4">
              Subscribe to get updates on new arrivals and special offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-nagrik-bg/10 border border-nagrik-bg/20 text-nagrik-bg px-4 py-2 rounded-l-md focus:outline-none focus:border-nagrik-gold w-full text-sm font-light placeholder-nagrik-bg/40"
              />
              <button 
                type="submit" 
                className="bg-nagrik-gold text-nagrik-dark px-4 py-2 rounded-r-md hover:bg-nagrik-beige transition-colors font-medium text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-nagrik-bg/10 text-center text-sm font-light text-nagrik-bg/40">
          <p>&copy; {new Date().getFullYear()} Nagrik Stores Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
