import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "918657866610";
  const message = "Hello Nagrik Stores, I would like to know more about your collections.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center space-x-2 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl shadow-[#25D366]/30 hover:bg-[#128C7E] transition-colors group"
      aria-label="Order Now on WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:animate-pulse" />
      <span className="font-medium hidden sm:inline-block">Order Now on WhatsApp</span>
    </motion.a>
  );
}
