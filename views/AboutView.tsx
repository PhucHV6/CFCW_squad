import React from 'react';

export const AboutView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in">
      {/* Hero */}
      <div className="h-[40vh] relative bg-gray-900">
         <img src="https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/Zjk1YTE0Y2UtNTRhZS00Y2UzLWExYTEtYjg2NzM4MDRiNmNm" className="w-full h-full object-cover opacity-80" alt="Team Huddle" />
         <div className="absolute inset-0 bg-gradient-to-t from-[#034694] to-transparent mix-blend-multiply"></div>
         <div className="absolute bottom-8 left-6 right-6 text-white text-center">
            <span className="block text-yellow-400 font-bold uppercase tracking-widest text-xs mb-3">The Pride of London</span>
            <h1 className="text-5xl font-black uppercase tracking-tighter leading-none mb-4">History Makers</h1>
         </div>
      </div>

      {/* Intro Text */}
      <div className="px-6 py-10 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-black text-[#034694] uppercase tracking-tight mb-4">Chelsea FC Women</h2>
        <p className="text-gray-600 leading-7 text-sm">
            Since the formation of the Women's Super League, Chelsea FC Women have been a dominant force, winning consecutive league titles and establishing themselves as one of the premier teams in world football.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="bg-[#034694] text-white py-12 px-4">
        <div className="grid grid-cols-2 gap-8 text-center max-w-md mx-auto">
            <div>
                <div className="text-5xl font-black mb-1">7</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">WSL Titles</div>
            </div>
            <div>
                <div className="text-5xl font-black mb-1">5</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">FA Cups</div>
            </div>
            <div>
                <div className="text-5xl font-black mb-1">2</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">League Cups</div>
            </div>
            <div>
                <div className="text-5xl font-black mb-1">1</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Comm. Shield</div>
            </div>
        </div>
      </div>

      {/* Kingsmeadow Section */}
      <div className="grid md:grid-cols-2">
          <div className="bg-gray-100 p-8 flex flex-col justify-center">
              <h3 className="text-xl font-black text-[#034694] uppercase mb-4">Our Home</h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Kingsmeadow has been the home of Chelsea FC Women since 2017. The stadium provides an intimate and electric atmosphere that has become a fortress for the Blues.
              </p>
              <ul className="text-xs font-bold text-gray-500 uppercase tracking-wide space-y-2">
                  <li className="flex items-center gap-2 before:w-1.5 before:h-1.5 before:bg-[#034694] before:rounded-full">Capacity: 4,850</li>
                  <li className="flex items-center gap-2 before:w-1.5 before:h-1.5 before:bg-[#034694] before:rounded-full">Opened: 1989</li>
              </ul>
          </div>
          <div className="h-64 md:h-auto">
              <img src="https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/ZGY0ZDg0OTMtNTRmYi00YTZkLWIxZjgtZjA4OTVkZjYwZTI4" className="w-full h-full object-cover" alt="Kingsmeadow Stadium" />
          </div>
      </div>
      
      {/* Management */}
      <div className="py-12 px-6 text-center">
         <h3 className="text-xl font-black text-[#034694] uppercase mb-8">Management</h3>
         <div className="inline-block bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto">
             <div className="h-64 bg-gray-200">
                <img src="https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/MjAyNC0wOC0xNi9mZWVhMTZiMi0wYzU2LTQxZTAtOWRkZC1lMWQxYjQ1MzNhNDU=" className="w-full h-full object-cover object-top" alt="Sonia Bompastor" />
             </div>
             <div className="p-4 bg-white border-t border-gray-100">
                 <div className="font-bold text-lg text-[#034694]">Sonia Bompastor</div>
                 <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Head Coach</div>
             </div>
         </div>
      </div>
    </div>
  );
};