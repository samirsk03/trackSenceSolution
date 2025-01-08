import React from 'react';
import resellerimg from '../assets/images/authorized-reseller.png'

export default function About() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">About Us</h2>
          <p className="text-secondary text-xl sm:text-2xl max-w-4xl mx-auto">
          Our mission is to help businesses and organisations optimise their operations, improve customer experiences, and drive revenue growth through our innovative solutions. Our cutting-edge technology and intuitive software platform allow businesses to gain valuable insights into their operations, from customer behaviour to occupancy rates we are serving in Maharashtra. <br /> <br />
          Established in the UK in 2002, we as an authorised resellers in India has emerged as  the global frontrunner in people counting solutions. As an engineering company, we take pride in harnessing cutting-edge technologies to develop dependable, precise, and valuable products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-8">Authorized Reseller</h3>
            <p className="text-secondary text-xl mb-10">
              We are proud to be an authorized reseller of FootfallCam and other leading .
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 bg-gray-50 rounded-lg">
                <h4 className="text-2xl font-bold mb-4">Experience</h4>
                <p className="text-secondary text-lg">Years of expertise in People counting, AI Analytics and IT solutions </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-lg">
                <h4 className="text-2xl font-bold mb-4">Coverage</h4>
                <p className="text-secondary text-lg">Serving 4 major Indian states - Maharashtra , Madhya Pradesh , Gujrat and Goa </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12 md:mt-0">
            <img
              src={resellerimg}
              alt="Authorized Reseller"
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

