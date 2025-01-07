import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="max-w-full mx-auto  ">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;