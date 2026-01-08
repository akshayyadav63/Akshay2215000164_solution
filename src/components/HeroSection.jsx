import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const navLinks = [
        "HOME", "PRODUCTS", "FOR ENTERPRISE", "COMPANY", "KNOWLEDGE BANK", "API", "PATENTS"
    ];

    return (
        <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-transparent">
            <div className="flex items-center gap-2">
                 {/* Logo Placeholder */}
                <div className="flex items-center gap-1">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-sm"></div>
                    <span className="text-2xl font-bold text-white tracking-tight">Lynkit.</span>
                </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
                {navLinks.map((link) => (
                    <a key={link} href="#" className="text-xs font-bold text-orange-500 hover:text-orange-400 tracking-wider transition-colors">
                        {link}
                    </a>
                ))}
                <Button variant="primary" className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-6 py-2 rounded-md uppercase">
                    Contact Us
                </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-black/95 p-6 flex flex-col gap-4 lg:hidden">
                    {navLinks.map((link) => (
                        <a key={link} href="#" className="text-sm font-bold text-orange-500 hover:text-orange-400">
                            {link}
                        </a>
                    ))}
                     <Button variant="primary" className="bg-orange-500 w-full">
                        Contact Us
                    </Button>
                </div>
            )}
        </nav>
    );
};

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-center">
      
      {/* Background Image Placeholder - Simulating the Hardware/Circuit Board look */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
            alt="Hardware Background" 
            className="w-full h-full object-cover opacity-40 grayscale"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <Navbar />

      <div className="relative z-10 px-6 md:px-12 max-w-4xl mt-20">
        <h1 className="text-6xl md:text-8xl font-bold text-orange-500 leading-none mb-6 font-sans tracking-tighter">
          Orchestrating <br />
          Efficiency.
        </h1>
        
        <p className="text-white text-lg md:text-xl max-w-2xl font-light tracking-wide mb-8">
          Digitally transforming the supply chain with IoT, Blockchain, AI, ML and AR
        </p>

        {/* Carousel Dots Placeholder */}
         <div className="flex gap-2 mt-8">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white/50"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
