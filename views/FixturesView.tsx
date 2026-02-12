import React, { useState } from 'react';
import { MOCK_MATCHES } from '../constants';
import { Match } from '../types';
import { ChevronRight } from 'lucide-react';

export const FixturesView: React.FC = () => {
  const [filter, setFilter] = useState<'UPCOMING' | 'RESULTS'>('UPCOMING');

  const filteredMatches = MOCK_MATCHES.filter(m => {
    if (filter === 'UPCOMING') return m.status === 'UPCOMING';
    if (filter === 'RESULTS') return m.status === 'PLAYED';
    return true;
  });

  // Helper to group by month
  const groupedMatches = filteredMatches.reduce((groups, match) => {
    // Extract month from "Fri 16 Feb" -> "Feb"
    const month = match.date.split(' ')[2] || 'Upcoming'; 
    if (!groups[month]) groups[month] = [];
    groups[month].push(match);
    return groups;
  }, {} as Record<string, Match[]>);

  // Sort months logic usually needed, but relying on insertion order from constants for this clone
  const months = Object.keys(groupedMatches);

  return (
    <div className="animate-fade-in bg-gray-100 min-h-screen">
      {/* Sub-header Filter */}
      <div className="bg-white px-4 py-4 border-b border-gray-200 sticky top-16 z-30 shadow-sm">
        <h1 className="text-3xl font-black text-[#034694] mb-4 uppercase tracking-tight">Fixtures & Results</h1>
        <div className="flex bg-gray-100 p-1 rounded-md">
          {['UPCOMING', 'RESULTS'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`flex-1 py-2.5 rounded text-xs font-bold transition-all uppercase tracking-wide ${
                filter === f 
                  ? 'bg-[#034694] text-white shadow-sm' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="pb-12">
        {months.length === 0 ? (
            <div className="p-8 text-center text-gray-500 font-medium">No matches found for this period.</div>
        ) : (
            months.map(month => (
            <div key={month} className="mb-2">
                <div className="bg-gray-200 px-4 py-2 text-xs font-bold text-gray-700 uppercase tracking-wider sticky top-[138px] z-20">
                    {month} 2025
                </div>
                <div className="bg-white divide-y divide-gray-100">
                    {groupedMatches[month].map((match) => (
                    <MatchRow key={match.id} match={match} />
                    ))}
                </div>
            </div>
            ))
        )}
      </div>
    </div>
  );
};

const MatchRow: React.FC<{ match: Match }> = ({ match }) => {
  const isUpcoming = match.status === 'UPCOMING';
  const day = match.date.split(' ')[0]; // "Fri"
  const dateNum = match.date.split(' ')[1]; // "16"

  return (
    <div className="relative group hover:bg-gray-50 transition-colors">
        <div className="px-4 py-5 flex items-center justify-between">
            {/* Left: Date */}
            <div className="flex flex-col items-center justify-center w-12 border-r border-gray-100 pr-3 mr-3 text-gray-600">
                <span className="text-[10px] font-bold uppercase">{day}</span>
                <span className="text-xl font-black leading-none text-[#034694]">{dateNum}</span>
            </div>

            {/* Middle: Match Info */}
            <div className="flex-1 flex items-center justify-between gap-2">
                {/* Home Team */}
                <div className={`flex items-center gap-2 flex-1 ${match.isHome ? 'order-1 justify-end' : 'order-3 justify-start'}`}>
                    <span className={`text-sm font-bold leading-tight ${match.isHome ? 'text-right' : 'text-left'}`}>
                        {match.isHome ? 'Chelsea' : match.opponent.replace(' Women', '')}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-gray-400">
                        {match.isHome ? 'CFC' : match.opponent.charAt(0)}
                    </div>
                </div>

                {/* Score/Time */}
                <div className="order-2 flex flex-col items-center min-w-[60px]">
                    {isUpcoming ? (
                        <div className="bg-gray-100 px-2 py-1 rounded text-xs font-bold text-gray-800">
                            {match.time}
                        </div>
                    ) : (
                        <div className="bg-[#034694] text-white px-3 py-1 rounded text-sm font-black tracking-widest">
                            {match.score}
                        </div>
                    )}
                </div>
                 
                 {/* Away Team (Logic handled by flex order above) */}
                 <div className={`flex items-center gap-2 flex-1 ${!match.isHome ? 'order-1 justify-end' : 'order-3 justify-start'}`}>
                     {!match.isHome ? (
                        <>
                             <span className="text-sm font-bold leading-tight text-right text-[#034694]">Chelsea</span>
                             <div className="w-8 h-8 rounded-full bg-[#034694] text-white border border-blue-900 flex-shrink-0 flex items-center justify-center text-[10px] font-bold">CFC</div>
                        </>
                     ) : (
                        <>
                            <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-gray-400">
                                {match.opponent.charAt(0)}
                            </div>
                            <span className="text-sm font-bold leading-tight text-left">
                                {match.opponent.replace(' Women', '')}
                            </span>
                        </>
                     )}
                 </div>
            </div>

            {/* Right: Chevron */}
            <div className="pl-2">
                <ChevronRight size={18} className="text-gray-300" />
            </div>
        </div>
        
        {/* Footer Info of Card */}
        <div className="px-4 pb-4 pl-[70px] flex items-center gap-4 text-[10px] text-gray-500 font-medium uppercase tracking-wide">
            <span className="truncate max-w-[120px]">{match.venue}</span>
            <span className="text-[#034694] truncate">{match.competition}</span>
        </div>
    </div>
  );
};