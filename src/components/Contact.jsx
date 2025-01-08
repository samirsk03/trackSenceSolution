import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import axios from "axios"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here
    try{
      const res = await axios.post("https://tracksencebackend.onrender.com/api/contact", formData);
      if (res.data.success) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        alert('Failed to send the message. Please try again.');
      }
    }catch(error){
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    }
    console.log(formData);
  };

  const locations = [
    'Madhya Pradesh',
    'Maharashtra',
    'Gujarat',
    'Goa'
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-secondary max-w-2xl mx-auto text-sm sm:text-base">
          Get in touch with us for your Queries and will contact you at earliest mention number and email
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Our Locations</h3>
            <div className="grid gap-4 sm:gap-6">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center gap-4">
                  <MapPin className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base">{location}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">+91 9960670630</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">fahad.kuchi@tracksensesolutions.com</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-sm sm:text-base">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-sm sm:text-base">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full gradient-bg text-white py-2 sm:py-3 rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}




