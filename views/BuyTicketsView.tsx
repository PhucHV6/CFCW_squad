import React from 'react';
import { MOCK_MATCHES } from '../constants';
import { Ticket, ArrowRight, Calendar } from 'lucide-react';

export const BuyTicketsView: React.FC = () => {
  // Only show upcoming matches that are not played
  const ticketsAvailable = MOCK_MATCHES.filter(m => m.status === 'UPCOMING');

  return (
    <div className="bg-gray-100 min-h-screen animate-fade-in pb-12">
        <div className="bg-white p-6 border-b border-gray-200">
            <h1 className="text-3xl font-black text-[#034694] uppercase tracking-tighter mb-2">Match Tickets</h1>
            <p className="text-gray-500 text-sm">Select a fixture below to purchase tickets.</p>
        </div>

        <div className="p-4 space-y-4">
            {ticketsAvailable.map(match => (
                <div key={match.id} className="bg-white rounded-sm shadow-sm border-l-4 border-[#034694] overflow-hidden">
                    <div className="p-5">
                         <div className="flex justify-between items-start mb-4">
                             <div className="bg-gray-100 text-gray-600 text-[10px] font-bold uppercase px-2 py-1 rounded inline-flex items-center gap-1">
                                 <Calendar size={10} />
                                 {match.date} • {match.time}
                             </div>
                             {match.isHome && <span className="text-[10px] font-bold text-[#034694] bg-blue-50 px-2 py-1 uppercase tracking-wider">Home</span>}
                         </div>

                         <div className="flex items-center gap-4 mb-6">
                            <div className="flex-1 text-right">
                                <span className="block font-bold text-lg leading-none text-gray-900">{match.isHome ? 'Chelsea' : match.opponent.replace(' Women', '')}</span>
                            </div>
                            <div className="text-gray-300 font-black text-xl">VS</div>
                            <div className="flex-1 text-left">
                                <span className="block font-bold text-lg leading-none text-gray-900">{match.isHome ? match.opponent.replace(' Women', '') : 'Chelsea'}</span>
                            </div>
                         </div>
                         
                         <div className="flex flex-col gap-1 mb-4 text-center">
                             <span className="text-xs font-bold uppercase text-[#034694] tracking-wide">{match.competition}</span>
                             <span className="text-xs text-gray-500">{match.venue}</span>
                         </div>

                         <button className="w-full bg-[#034694] hover:bg-[#001489] text-white py-3 rounded-sm font-bold uppercase text-sm tracking-wider flex items-center justify-center gap-2 transition-all">
                             <Ticket size={18} />
                             <span>Buy Tickets</span>
                         </button>
                    </div>
                </div>
            ))}
            
            {/* Packages / Upsell */}
            <div className="mt-8">
                <h3 className="font-bold text-gray-900 uppercase tracking-wide text-sm mb-4 px-2">More Options</h3>
                <div className="bg-white p-5 rounded-sm shadow-sm flex items-center justify-between group cursor-pointer">
                    <div>
                        <div className="font-bold text-[#034694]">Season Tickets</div>
                        <div className="text-xs text-gray-500 mt-1">Join the waitlist for 2025/26</div>
                    </div>
                    <ArrowRight className="text-gray-300 group-hover:text-[#034694] transition-colors" />
                </div>
                <div className="bg-white p-5 rounded-sm shadow-sm flex items-center justify-between group cursor-pointer mt-2">
                     <div>
                        <div className="font-bold text-[#034694]">Hospitality Packages</div>
                        <div className="text-xs text-gray-500 mt-1">Upgrade your matchday experience</div>
                    </div>
                    <ArrowRight className="text-gray-300 group-hover:text-[#034694] transition-colors" />
                </div>
            </div>
        </div>
    </div>
  );
};