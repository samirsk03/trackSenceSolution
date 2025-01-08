import React from 'react';
import { Phone } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '+919960670630'; // Replace with your actual WhatsApp number
  const message = 'Hello! I\'m interested in your people counting solutions.'; // Pre-filled message

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <Phone size={20} className="sm:w-6 sm:h-6" />
    </button>
  );
}

