import React from 'react';

export default function Hero() {
  return (
    <section className="pt-20 gradient-bg min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive Range of People Counting Sensors
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Made in the UK. In-house design. We are a Authorised Resellers of people counting system, offering multiple devices for various AI and People Counting Solution
            </p>
            <button style={{ color: 'rgb(15 23 42)' }} 
            className="bg-white text-current px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg sm:text-xl"
            >
              <a href="#contact">Get Started</a>
            </button>
          </div>
          <div className="flex justify-center mt-8 md:mt-0">
            {/* <img
              src="/images/logo.png"
              alt="Track Sense Solutions"
              className="w-full max-w-sm md:max-w-md"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

