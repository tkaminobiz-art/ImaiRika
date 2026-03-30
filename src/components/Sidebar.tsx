'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MenuOverlay from './MenuOverlay';

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Sidebar - visible on desktop only */}
      <aside className="hidden md:fixed md:left-0 md:top-0 md:w-[100px] md:h-screen md:bg-cdp-blue md:flex md:flex-col md:items-center md:justify-between md:py-6 md:z-40">
        {/* Logo / Brand */}
        <div className="flex items-center justify-center">
          <a href="/" className="text-white text-2xl font-bold">
            IR
          </a>
        </div>

        {/* Menu Button */}
        <button
          onClick={handleMenuToggle}
          className="flex items-center justify-center rounded-full bg-cdp-yellow text-cdp-blue p-3 hover:opacity-90 transition-opacity"
          aria-label="メニューを開く"
        >
          <Menu size={24} />
        </button>
      </aside>

      {/* Mobile menu button - visible on mobile only */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={handleMenuToggle}
          className="flex items-center justify-center rounded-full bg-cdp-blue text-white p-3 hover:opacity-90 transition-opacity shadow-lg"
          aria-label="メニューを開く"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile header spacing */}
      <div className="md:hidden h-16"></div>

      {/* Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={handleMenuToggle} />
    </>
  );
}
