import React, { useState } from 'react';
import { ViewName } from '../types';
import { Menu, X, ChevronRight, Search, ShoppingBag, User } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewName;
  onNavigate: (view: ViewName) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (view: ViewName) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Official Top Bar Style */}
      <header className="sticky top-0 z-40 bg-white text-[#034694] shadow-sm border-b border-gray-100">
        <div className="flex items-center justify-between px-4 h-16">
          
          {/* Left Side: Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => handleNav(ViewName.HOME)}
          >
             <img 
               src="https://img.chelseafc.com/image/upload/f_auto,c_pad,w_230,h_230,ar_1,dpr_2.0,q_auto:best/Site%20Chelsea%20Badges/Main_Website_Badge_-_Colour.png" 
               alt="Chelsea FC" 
               className="h-12 w-12 object-contain"
             />
          </div>

          {/* Right Side: Icons & Menu */}
          <div className="flex items-center gap-4">
             <button className="p-1 hover:bg-gray-50 rounded-full transition-colors">
                <Search size={24} strokeWidth={2} />
             </button>
             
             {/* Hamburger Menu */}
             <button 
              onClick={() => setIsMenuOpen(true)} 
              className="p-1 hover:bg-gray-50 rounded transition-colors"
              aria-label="Menu"
            >
              <Menu size={28} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end animate-fade-in">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          <div className="relative w-[85%] max-w-[300px] bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
               <span className="font-bold text-[#034694] text-xl tracking-tight">MENU</span>
               <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                 <X size={24} />
               </button>
            </div>
            
            <nav className="flex-1 overflow-y-auto">
              <div className="py-2">
                {Object.values(ViewName).map((view) => (
                  <button
                    key={view}
                    onClick={() => handleNav(view)}
                    className={`w-full text-left px-6 py-5 border-b border-gray-50 flex items-center justify-between group active:bg-gray-50 transition-colors
                      ${currentView === view ? 'text-[#034694] font-bold bg-blue-50/50' : 'text-gray-800 font-semibold'}`}
                  >
                    <span className="text-sm uppercase tracking-wide">{view}</span>
                    <ChevronRight size={18} className={`text-gray-300 group-active:translate-x-1 transition-transform ${currentView === view ? 'text-[#034694]' : ''}`} />
                  </button>
                ))}
              </div>
            </nav>
            
            <div className="p-6 bg-gray-50 border-t border-gray-200">
               <button className="w-full bg-[#034694] text-white py-3.5 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-[#001489] transition-colors shadow-sm">
                 Sign In / Register
               </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Official Style Footer */}
      <footer className="bg-[#034694] text-white pt-10 pb-12 px-6">
        <div className="max-w-md mx-auto flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full border-2 border-white mb-6 flex items-center justify-center font-serif font-bold">CFC</div>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-xs font-semibold uppercase tracking-wide mb-8 w-full">
                <a href="#" className="hover:text-gray-300">Contact Us</a>
                <a href="#" className="hover:text-gray-300">FAQs</a>
                <a href="#" className="hover:text-gray-300">Careers</a>
                <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                <a href="#" className="hover:text-gray-300">Terms of Use</a>
                <a href="#" className="hover:text-gray-300">Cookies</a>
            </div>

            <div className="w-full h-px bg-blue-800 mb-6"></div>

            <p className="opacity-60 text-[10px] leading-relaxed">
                © 2025 Chelsea FC. All rights reserved. No part of this site may be reproduced without our written permission.
            </p>
        </div>
      </footer>
    </div>
  );
};