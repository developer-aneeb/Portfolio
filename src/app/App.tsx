import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { NeuralBackground } from './components/NeuralBackground';
import { Code2, Sparkles, Menu, X } from 'lucide-react';
import { Button } from './components/ui/button';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Case Study', href: '#case-study' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="dark min-h-screen bg-[#020617] text-slate-100 relative overflow-x-hidden">
      <NeuralBackground />

      {/* Sticky Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:border-blue-400 transition-colors">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="font-bold tracking-tight text-slate-100 text-sm sm:text-base group-hover:text-blue-400 transition-colors">
              Aneeb Ur Rehman
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-3">
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-3.5 py-1.5 rounded-lg shadow-sm"
                asChild
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-4 space-y-2 backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
      </main>
    </div>
  );
}
