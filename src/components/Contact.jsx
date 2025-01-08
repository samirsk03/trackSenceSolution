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
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">Contact Us</h2>
          <p className="text-secondary text-xl sm:text-2xl max-w-4xl mx-auto">
            Get in touch with us for all your CCTV and surveillance needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-10">Our Locations</h3>
            <div className="grid gap-8">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center gap-6">
                  <MapPin className="text-primary w-10 h-10" />
                  <span className="text-xl">{location}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 space-y-8">
              <div className="flex items-center gap-6">
                <Phone className="text-primary w-10 h-10" />
                <span className="text-xl">+91 9960670630</span>
              </div>
              <div className="flex items-center gap-6">
                <Mail className="text-primary w-10 h-10" />
                <span className="text-xl">fahad.kuchi@tracksensesolutions.com</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block mb-2 text-xl font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 text-xl border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-xl font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 text-xl border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-xl font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 text-xl border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full gradient-bg text-white py-4 rounded-lg text-xl hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

