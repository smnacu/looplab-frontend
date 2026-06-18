"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-blanco/95 backdrop-blur-sm border-b border-gris sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-turquesa to-dorado rounded-lg flex items-center justify-center">
              <span className="text-blanco font-bold text-xl">∞</span>
            </div>
            <span className="font-bold text-2xl text-indigo tracking-tight">LOOP LAB</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#valores" className="text-indigo hover:text-turquesa transition-colors font-medium">
              Valores
            </a>
            <a href="#programas" className="text-indigo hover:text-turquesa transition-colors font-medium">
              Programas
            </a>
            <a href="#como-funciona" className="text-indigo hover:text-turquesa transition-colors font-medium">
              Cómo Funciona
            </a>
            <a
              href="#waitlist"
              className="bg-dorado hover:bg-dorado/90 text-indigo font-semibold px-6 py-2.5 rounded-lg transition-all hover:scale-105"
            >
              Comenzar
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-indigo hover:text-turquesa transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gris pt-4">
            <div className="flex flex-col gap-4">
              <a
                href="#valores"
                onClick={() => setMobileMenuOpen(false)}
                className="text-indigo hover:text-turquesa transition-colors font-medium"
              >
                Valores
              </a>
              <a
                href="#programas"
                onClick={() => setMobileMenuOpen(false)}
                className="text-indigo hover:text-turquesa transition-colors font-medium"
              >
                Programas
              </a>
              <a
                href="#como-funciona"
                onClick={() => setMobileMenuOpen(false)}
                className="text-indigo hover:text-turquesa transition-colors font-medium"
              >
                Cómo Funciona
              </a>
              <a
                href="#waitlist"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-dorado hover:bg-dorado/90 text-indigo font-semibold px-6 py-2.5 rounded-lg transition-all text-center"
              >
                Comenzar
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
