import React from 'react';
import { ViewName, Match } from '../types';
import { MOCK_MATCHES } from '../constants';
import { Calendar, Ticket, Users, ChevronRight, Trophy, ArrowRight } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: ViewName) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  // Find the next upcoming match
  const nextMatch = MOCK_MATCHES.find(m => m.status === 'UPCOMING');

  return (
    <div className="bg-gray-50 min-h-screen animate-fade-in pb-12">
      {/* Hero Section */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[#034694]">
          <img 
            src="https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/Zjk1YTE0Y2UtNTRhZS00Y2UzLWExYTEtYjg2NzM4MDRiNmNm" 
            alt="Chelsea Women Huddle"
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#034694] via-transparent to-transparent"></div>
        
        <div className="absolute bottom-10 left-6 right-6 text-white z-10">
          <span className="inline-block px-2 py-1 bg-[#d1a030] text-[#034694] text-[10px] font-black uppercase tracking-widest rounded-sm mb-3">
            The Pride of London
          </span>
          <h1 className="text-5xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 drop-shadow-xl">
            Winning<br/>Mentality
          </h1>
          <button 
            onClick={() => onNavigate(ViewName.SQUAD)}
            className="bg-white text-[#034694] px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            Meet the Squad <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="px-4 -mt-6 relative z-20 space-y-4">
        {/* Next Match Card */}
        {nextMatch && (
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
             <div className="bg-[#034694] px-4 py-2 flex justify-between items-center">
                 <span className="text-white text-[10px] font-bold uppercase tracking-widest">Next Match</span>
                 <div className="flex items-center gap-1 text-[#d1a030]">
                     <Calendar size={12} />
                     <span className="text-[10px] font-bold">{nextMatch.date}</span>
                 </div>
             </div>
             <div className="p-5 flex flex-col items-center">
                 <div className="flex items-center justify-between w-full mb-4">
                     <div className="text-center w-1/3">
                         <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center border border-gray-200">
                            {nextMatch.isHome ? (
                                <span className="font-serif font-bold text-[#034694]">CFC</span>
                            ) : (
                                <span className="font-bold text-gray-400">{nextMatch.opponent.charAt(0)}</span>
                            )}
                         </div>
                         <span className="text-xs font-bold uppercase block leading-tight">
                            {nextMatch.isHome ? 'Chelsea' : nextMatch.opponent.replace(' Women', '')}
                         </span>
                     </div>
                     
                     <div className="text-center w-1/3">
                        <div className="text-2xl font-black text-gray-200">VS</div>
                        <div className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full mt-1 inline-block">
                            {nextMatch.time}
                        </div>
                     </div>

                     <div className="text-center w-1/3">
                         <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center border border-gray-200">
                            {!nextMatch.isHome ? (
                                <span className="font-serif font-bold text-[#034694]">CFC</span>
                            ) : (
                                <span className="font-bold text-gray-400">{nextMatch.opponent.charAt(0)}</span>
                            )}
                         </div>
                         <span className="text-xs font-bold uppercase block leading-tight">
                            {!nextMatch.isHome ? 'Chelsea' : nextMatch.opponent.replace(' Women', '')}
                         </span>
                     </div>
                 </div>
                 
                 <div className="w-full border-t border-gray-100 pt-4 flex gap-2">
                     <button 
                        onClick={() => onNavigate(ViewName.FIXTURES)}
                        className="flex-1 bg-gray-50 text-gray-600 py-2.5 rounded text-xs font-bold uppercase tracking-wide hover:bg-gray-100"
                     >
                         Match Info
                     </button>
                     <button 
                        onClick={() => onNavigate(ViewName.BUY_TICKETS)}
                        className="flex-1 bg-[#034694] text-white py-2.5 rounded text-xs font-bold uppercase tracking-wide hover:bg-[#001489]"
                     >
                         Tickets
                     </button>
                 </div>
             </div>
          </div>
        )}

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 gap-3">
            <div 
                onClick={() => onNavigate(ViewName.SQUAD)}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 active:scale-95 transition-transform cursor-pointer"
            >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#034694]">
                    <Users size={20} />
                </div>
                <div>
                    <span className="block font-black text-[#034694] uppercase text-sm">The Team</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Player Profiles</span>
                </div>
            </div>

            <div 
                onClick={() => onNavigate(ViewName.BUY_TICKETS)}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 active:scale-95 transition-transform cursor-pointer"
            >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#034694]">
                    <Ticket size={20} />
                </div>
                <div>
                    <span className="block font-black text-[#034694] uppercase text-sm">Tickets</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Buy Online</span>
                </div>
            </div>
        </div>

        {/* Feature Section: History */}
        <div 
            onClick={() => onNavigate(ViewName.ABOUT)}
            className="bg-[#034694] rounded-xl overflow-hidden shadow-lg relative h-40 flex items-center cursor-pointer active:scale-[0.98] transition-transform"
        >
            <div className="absolute right-0 top-0 bottom-0 w-1/2">
                 <img src="https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/Zjk1YTE0Y2UtNTRhZS00Y2UzLWExYTEtYjg2NzM4MDRiNmNm" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="History" />
                 <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#034694]"></div>
            </div>
            <div className="relative z-10 p-6 text-white">
                <div className="w-8 h-8 rounded-full bg-[#d1a030] flex items-center justify-center text-[#034694] mb-3">
                    <Trophy size={16} />
                </div>
                <h3 className="font-black uppercase text-xl italic leading-none mb-1">Our History</h3>
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest opacity-80">
                    <span>Explore the Legacy</span>
                    <ArrowRight size={10} />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};