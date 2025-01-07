import React from 'react';
import logo from "../assets/images/Logo.jpg"


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1 sm:col-span-2">
            <img
              src={logo}
              alt="Track Sense Solutions"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 max-w-md text-lg">
              Leading provider of CCTV and surveillance solutions across Madhya Pradesh,
              Maharashtra, Gujarat, and Goa.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-white text-lg">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white text-lg">About</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white text-lg">Products</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white text-lg">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contact Info</h3>
            <ul className="space-y-4 text-gray-400 text-lg">
              <li>info@tracksensesolutions.com</li>
              <li>+91 1234567890</li>
              <li>Available in:</li>
              <li>Madhya Pradesh, Maharashtra,</li>
              <li>Gujarat, Goa</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="text-lg">&copy; {new Date().getFullYear()} Track Sense Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

