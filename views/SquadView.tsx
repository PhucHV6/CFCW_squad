import React, { useState, useEffect } from 'react';
import { MOCK_PLAYERS } from '../constants';
import { Player } from '../types';
import { X, Play, BarChart2, BookOpen, ChevronRight, Award, User, Shirt, Briefcase, Activity, MapPin, Quote } from 'lucide-react';

export const SquadView: React.FC = () => {
  const [activeSquadType, setActiveSquadType] = useState<'Senior' | 'U21' | 'Loan' | 'Staff'>('Senior');
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const positionFilters = ['ALL', 'FORWARD', 'MIDFIELDER', 'DEFENDER', 'GOALKEEPER'];
  const squadTypes: { label: string, value: 'Senior' | 'U21' | 'Loan' | 'Staff' }[] = [
    { label: 'Senior', value: 'Senior' },
    { label: 'Women U21s', value: 'U21' },
    { label: 'On Loan', value: 'Loan' },
    { label: 'Staff', value: 'Staff' }
  ];

  // First filter by Squad Type
  const squadPlayers = MOCK_PLAYERS.filter(p => p.squadType === activeSquadType);

  // Then filter by Position (if not Staff)
  const filteredPlayers = activeSquadType === 'Staff' 
    ? squadPlayers 
    : (activeFilter === 'ALL' 
        ? squadPlayers 
        : squadPlayers.filter(p => p.position.toUpperCase() === activeFilter));

  // Featured player for hero section (only for Senior squad usually)
  const featuredPlayer = activeSquadType === 'Senior' 
    ? (squadPlayers.find(p => p.number === 10) || squadPlayers[0])
    : squadPlayers[0];

  const getFlagCode = (country: string) => {
      const map: Record<string, string> = {
          'ENG': 'gb-eng', 
          'SUI': 'ch', 
          'CAN': 'ca', 
          'FRA': 'fr',
          'SCO': 'gb-sct', 
          'GER': 'de', 
          'NOR': 'no', 
          'WAL': 'gb-wls',
          'SWE': 'se', 
          'AUS': 'au', 
          'USA': 'us', 
          'COL': 'co', 
          'POL': 'pl'
      };
      return map[country] || 'gb-eng';
  };

  return (
    <div className="bg-gray-100 min-h-screen animate-fade-in relative">
        {/* Squad Type Selector - Top Bar */}
        {/* Using grid to ensure all 4 fit perfectly on screen */}
        <div className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
            <div className="grid grid-cols-4 w-full">
                {squadTypes.map((type) => (
                    <button
                        key={type.value}
                        onClick={() => {
                            setActiveSquadType(type.value);
                            setActiveFilter('ALL'); // Reset position filter when changing squad
                        }}
                        className={`py-3 px-1 text-[10px] md:text-xs font-black uppercase tracking-widest transition-all border-b-4 flex items-center justify-center ${
                            activeSquadType === type.value
                            ? 'border-[#034694] text-[#034694] bg-gray-50'
                            : 'border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                        {type.label}
                    </button>
                ))}
            </div>
        </div>

        {/* Immersive Hero Section (Only show if there are players) */}
        {featuredPlayer && (
            <div 
                className="relative h-[45vh] w-full overflow-hidden cursor-pointer group"
                onClick={() => setSelectedPlayer(featuredPlayer)}
            >
                <div className="absolute inset-0 bg-[#034694]">
                    <SafeImage 
                        src={featuredPlayer.imageUrl} 
                        alt={featuredPlayer.name}
                        className="w-full h-full object-cover object-top opacity-80 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#034694] via-transparent to-transparent"></div>
                
                <div className="absolute bottom-8 left-4 right-4 text-white z-10">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-[#d1a030] text-[#034694] text-[10px] font-black px-2 py-0.5 uppercase tracking-widest rounded-sm">
                            {activeSquadType === 'Staff' ? 'Management' : 'Spotlight'}
                        </span>
                    </div>
                    <h1 className="text-5xl font-black italic tracking-tighter leading-[0.9] mb-2 opacity-90 drop-shadow-xl">
                        {featuredPlayer.name.split(' ')[0]}<br/>{featuredPlayer.name.split(' ')[1]}
                    </h1>
                    {activeSquadType !== 'Staff' && (
                        <div className="flex items-center gap-4 mt-4">
                            <a 
                                href="https://www.tiktok.com/@chelseafcw/video/7472366856561511702"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()} // Prevent opening player modal
                                className="flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full text-xs font-bold uppercase hover:bg-white hover:text-[#034694] transition-all"
                            >
                                <Play size={14} fill="currentColor" /> Watch Highlights
                            </a>
                        </div>
                    )}
                </div>
                
                {/* Big Number Background (if exists) */}
                {featuredPlayer.number && (
                    <div className="absolute -right-4 -bottom-16 text-[250px] font-black text-white opacity-10 leading-none select-none pointer-events-none">
                        {featuredPlayer.number}
                    </div>
                )}
            </div>
        )}

        {/* Secondary Filter Bar (Position) - Hide for Staff */}
        {/* Adjusted top offset to 98px to ensure tight visual connection with the first bar (which sits at top-16/64px + ~44px height = 108px approx). 
            Setting it lower ensures it tucks under the z-index 30 bar. */}
        {activeSquadType !== 'Staff' && (
            <div className="sticky top-[98px] z-20 bg-gray-50/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
                <div className="flex overflow-x-auto no-scrollbar px-4 py-3 gap-3">
                    {positionFilters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all transform active:scale-95 border ${
                                activeFilter === filter 
                                ? 'bg-[#034694] text-white border-[#034694] shadow-md' 
                                : 'bg-white text-gray-500 hover:bg-gray-100 border-gray-200'
                            }`}
                        >
                            {filter === 'ALL' ? 'All Positions' : filter}
                        </button>
                    ))}
                </div>
            </div>
        )}

        {/* Interactive Grid */}
        <div className="p-4 grid grid-cols-2 gap-4 pb-24">
            {filteredPlayers.length > 0 ? (
                filteredPlayers.map(player => (
                    <div 
                        key={player.id} 
                        onClick={() => setSelectedPlayer(player)}
                        className="bg-white rounded-2xl p-3 shadow-sm active:scale-95 transition-transform duration-200 cursor-pointer relative overflow-hidden group border border-gray-100"
                    >
                        <div className="flex justify-between items-start mb-2 relative z-10">
                            {player.number ? (
                                <span className="font-black text-2xl text-[#034694]">{player.number}</span>
                            ) : (
                                <span className="font-black text-2xl text-[#034694] opacity-0">00</span>
                            )}
                            {player.squadType !== 'Staff' && (
                                <div className="w-8 h-5 rounded-md overflow-hidden shadow-sm border border-gray-100">
                                    <img 
                                        src={`https://flagcdn.com/w80/${getFlagCode(player.country)}.png`}
                                        alt={player.country}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            )}
                        </div>
                        
                        <div className="relative h-32 w-full mb-2">
                            <div className="absolute inset-0 bg-blue-50 rounded-full scale-0 group-hover:scale-125 transition-transform duration-500 origin-center opacity-50"></div>
                            <SafeImage 
                                src={player.imageUrl} 
                                alt={player.name}
                                className="w-full h-full object-cover object-top drop-shadow-lg z-10 relative"
                            />
                        </div>

                        <div className="text-center relative z-10">
                            <h3 className="font-bold text-sm leading-tight text-gray-900 uppercase tracking-tight">{player.name}</h3>
                            <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">{player.position}</p>
                        </div>

                        {/* Quick Stats Mini Bar (Only for players with stats) */}
                        {player.stats && (
                            <div className="mt-3 flex justify-center gap-1.5">
                                {(() => {
                                    const topStats = [
                                        { label: 'PAC', value: player.stats.pace },
                                        { label: 'SHO', value: player.stats.shooting },
                                        { label: 'PAS', value: player.stats.passing },
                                        { label: 'DRI', value: player.stats.dribbling },
                                        { label: 'DEF', value: player.stats.defending },
                                        { label: 'PHY', value: player.stats.physical },
                                    ].sort((a, b) => b.value - a.value).slice(0, 3);

                                    return topStats.map(stat => (
                                        <div key={stat.label} className="flex flex-col items-center w-8">
                                            <span className="text-[7px] font-black text-gray-400 mb-0.5">{stat.label}</span>
                                            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                                                <div 
                                                    className={`h-full ${stat.value >= 85 ? 'bg-green-500' : stat.value >= 75 ? 'bg-[#d1a030]' : 'bg-blue-400'}`} 
                                                    style={{ width: `${stat.value}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-[8px] font-bold text-gray-700 mt-0.5">{stat.value}</span>
                                        </div>
                                    ));
                                })()}
                            </div>
                        )}
                        
                        {/* Alternative for Staff */}
                        {!player.stats && (
                            <div className="mt-4 flex justify-center opacity-40">
                                <Briefcase size={12} />
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <div className="col-span-2 text-center py-12 text-gray-400 font-bold uppercase tracking-widest text-xs">
                    No items found
                </div>
            )}
        </div>

        {/* Immersive Player Modal */}
        {selectedPlayer && (
            <PlayerDetailModal 
                player={selectedPlayer} 
                onClose={() => setSelectedPlayer(null)} 
            />
        )}
    </div>
  );
};

// Helper component for safe image loading
const SafeImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
                 <User className="text-gray-400" size={48} />
            </div>
        );
    }

    return (
        <img 
            src={src} 
            alt={alt}
            className={className}
            onError={() => setHasError(true)}
            loading="lazy"
        />
    );
};

const PlayerDetailModal: React.FC<{ player: Player; onClose: () => void }> = ({ player, onClose }) => {
    const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'ANALYSIS' | 'BIO'>('OVERVIEW');
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animations after mount
        setTimeout(() => setAnimate(true), 100);
        
        // Prevent background scroll
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; }
    }, []);

    const isStaff = player.squadType === 'Staff';
    // If staff, don't show analysis
    const tabs = isStaff ? ['OVERVIEW', 'BIO'] : ['OVERVIEW', 'ANALYSIS', 'BIO'];

    // Helper data generators
    const getCoachQuote = (p: Player) => {
        if (p.name.includes('Lauren James')) return "She has the ability to change a game in a split second. A generational talent.";
        if (p.name.includes('Kerr')) return "A born winner. When the team needs a goal, Sam is always there.";
        if (p.name.includes('Bright')) return "The definition of a leader. She puts her body on the line every single match.";
        if (p.position === 'Goalkeeper') return "Her presence in goal gives the whole team confidence to play forward.";
        if (p.position === 'Defender') return "Solid, dependable, and intelligent in her reading of the game.";
        if (p.position === 'Midfielder') return "She controls the tempo perfectly and connects our play effortlessly.";
        return "An integral part of our squad with a fantastic attitude in training.";
    };

    const getTraits = (p: Player) => {
        const traits = [];
        if (p.name.includes('Lauren James')) return ['Technical Dribbler', 'Power Shot', 'Playmaker'];
        if (p.stats && p.stats.pace > 85) traits.push('Speedster');
        if (p.stats && p.stats.physical > 85) traits.push('Strength');
        if (p.stats && p.stats.shooting > 85) traits.push('Finisher');
        if (p.stats && p.stats.passing > 85) traits.push('Vision');
        if (p.stats && p.stats.dribbling > 85) traits.push('Flair');
        if (p.stats && p.stats.defending > 85) traits.push('Interceptor');
        
        // Fill if empty
        if (traits.length === 0) {
            if (p.position === 'Forward') return ['Poacher', 'Speed Dribbler'];
            if (p.position === 'Midfielder') return ['Box-to-Box', 'Playmaker'];
            if (p.position === 'Defender') return ['Aerial Threat', 'Tackler'];
            return ['Reflexes', 'Distribution'];
        }
        return traits.slice(0, 3);
    };

    const getHeatmapColor = (p: Player) => {
        if (p.position === 'Forward') return 'bg-gradient-to-t from-red-500/80 via-red-500/40 to-transparent'; // Attack focused
        if (p.position === 'Defender') return 'bg-gradient-to-b from-blue-500/20 via-blue-500/40 to-blue-500/80'; // Defense focused
        if (p.position === 'Goalkeeper') return 'bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-yellow-500/80 to-transparent'; 
        return 'bg-gradient-to-r from-transparent via-green-500/50 to-transparent'; // Midfield
    };

    return (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col animate-fade-in">
            {/* Header/Hero of Modal */}
            <div className="relative h-[45vh] bg-[#034694] flex-shrink-0">
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 bg-black/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-black transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#034694]"></div>
                
                {/* Dynamic Background Text */}
                <div className="absolute top-10 left-0 right-0 text-center pointer-events-none overflow-hidden">
                    <span className="text-[120px] font-black text-white opacity-5 uppercase tracking-tighter whitespace-nowrap leading-none">
                        {player.name.split(' ').pop()}
                    </span>
                </div>

                <SafeImage 
                    src={player.imageUrl} 
                    className={`w-full h-full object-cover object-top absolute bottom-0 z-10 transition-transform duration-700 ease-out ${animate ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95 opacity-0'}`}
                    alt={player.name}
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-[#034694] to-transparent pt-20">
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="text-[#d1a030] font-black text-xl mb-1 flex items-center gap-2">
                                {player.number && <span className="text-4xl">{player.number}</span>}
                                <span className="text-xs border border-[#d1a030] px-1 rounded uppercase">{player.position}</span>
                            </div>
                            <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">{player.name}</h2>
                        </div>
                        <div className="text-white text-right">
                             <div className="text-xs opacity-70 uppercase tracking-widest font-bold">Country</div>
                             <div className="font-bold text-xl">{player.country}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto bg-white rounded-t-[30px] -mt-6 relative z-30 shadow-2xl">
                {/* Tabs */}
                <div className="flex border-b border-gray-100 p-2 justify-center gap-6 sticky top-0 bg-white z-40">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`py-3 px-2 text-xs font-black uppercase tracking-widest transition-all border-b-2 ${
                                activeTab === tab 
                                ? 'border-[#034694] text-[#034694]' 
                                : 'border-transparent text-gray-400 hover:text-gray-600'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="p-6 pb-24">
                    {activeTab === 'OVERVIEW' && (
                        <div className="space-y-8 animate-slide-in-up">
                            {/* Key Stats Cards - Only if stats exist */}
                            {player.stats && (
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="bg-gray-50 p-3 rounded-xl text-center border border-gray-100">
                                        <div className="text-2xl font-black text-[#034694]">{player.stats.appearances}</div>
                                        <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">Matches</div>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-xl text-center border border-gray-100">
                                        <div className="text-2xl font-black text-[#034694]">{player.stats.goals}</div>
                                        <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">Goals</div>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-xl text-center border border-gray-100">
                                        <div className="text-2xl font-black text-[#034694]">{player.stats.assists}</div>
                                        <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">Assists</div>
                                    </div>
                                </div>
                            )}

                            {/* Performance Bars - Only if stats exist */}
                            {player.stats ? (
                                <div>
                                    <h3 className="flex items-center gap-2 font-bold text-gray-900 uppercase tracking-wide mb-4 text-sm">
                                        <BarChart2 size={16} className="text-[#034694]" /> Performance Stats
                                    </h3>
                                    <div className="space-y-4">
                                        <StatBar label="Pace" value={player.stats.pace} delay={100} />
                                        <StatBar label="Shooting" value={player.stats.shooting} delay={200} />
                                        <StatBar label="Passing" value={player.stats.passing} delay={300} />
                                        <StatBar label="Dribbling" value={player.stats.dribbling} delay={400} />
                                        <StatBar label="Defending" value={player.stats.defending} delay={500} />
                                        <StatBar label="Physical" value={player.stats.physical} delay={600} />
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-gray-50 p-8 rounded-xl text-center">
                                    <p className="text-gray-500 font-medium text-sm">Staff profile overview available.</p>
                                </div>
                            )}

                             {/* Video Teaser - Hide for staff if not applicable */}
                             {!isStaff && (
                                <a 
                                    href="https://www.tiktok.com/@chelseafcw/video/7472366856561511702"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-black rounded-xl overflow-hidden relative h-40 group cursor-pointer"
                                >
                                    <SafeImage src={player.imageUrl} className="w-full h-full object-cover opacity-60" alt="Video" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
                                            <Play size={24} fill="white" className="text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 left-4 text-white font-bold text-sm">Watch Highlights</div>
                                </a>
                             )}
                        </div>
                    )}

                    {activeTab === 'ANALYSIS' && !isStaff && (
                         <div className="space-y-6 animate-slide-in-up">
                            {/* Coach's Quote */}
                            <div className="bg-blue-50/50 p-6 rounded-2xl border-l-4 border-[#034694] relative">
                                <Quote className="absolute top-4 left-4 text-blue-100 rotate-180" size={48} />
                                <p className="italic text-gray-700 text-sm font-medium relative z-10 leading-relaxed">
                                    "{getCoachQuote(player)}"
                                </p>
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                                        <img src="https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Sonia_Bompastor_profile_2025-26_avatar-removebg.png" className="w-full h-full object-cover" alt="Sonia" />
                                    </div>
                                    <div className="text-xs">
                                        <p className="font-black text-[#034694] uppercase">Sonia Bompastor</p>
                                        <p className="text-gray-400 font-bold uppercase text-[9px]">Head Coach</p>
                                    </div>
                                </div>
                            </div>

                            {/* Playstyle Traits */}
                            <div>
                                <h3 className="flex items-center gap-2 font-bold text-gray-900 uppercase tracking-wide mb-4 text-sm">
                                    <Activity size={16} className="text-[#034694]" /> Playstyle Traits
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {getTraits(player).map(trait => (
                                        <span key={trait} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wide border border-gray-200">
                                            {trait}
                                        </span>
                                    ))}
                                    <span className="bg-[#d1a030]/10 text-[#d1a030] px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wide border border-[#d1a030]/20">
                                        World Class
                                    </span>
                                </div>
                            </div>

                            {/* Heatmap Visual */}
                            <div>
                                <h3 className="flex items-center gap-2 font-bold text-gray-900 uppercase tracking-wide mb-4 text-sm">
                                    <MapPin size={16} className="text-[#034694]" /> Season Heatmap
                                </h3>
                                <div className="h-48 bg-green-700/5 rounded-xl relative overflow-hidden border border-gray-100 flex items-center justify-center">
                                    {/* Pitch Lines */}
                                    <div className="absolute inset-0 border-2 border-green-100 m-4 rounded-sm"></div>
                                    <div className="absolute top-1/2 w-full border-t border-green-100/50"></div>
                                    <div className="absolute left-1/2 h-full border-l border-green-100/50"></div>
                                    <div className="absolute w-20 h-20 border border-green-100/50 rounded-full"></div>
                                    
                                    {/* Heat Blob */}
                                    <div className={`absolute inset-0 opacity-60 blur-3xl ${getHeatmapColor(player)}`}></div>

                                    <div className="absolute bottom-2 right-2 text-[8px] font-bold text-gray-400 uppercase">
                                        Avg Position • 24/25
                                    </div>
                                </div>
                            </div>
                         </div>
                    )}

                    {activeTab === 'BIO' && (
                        <div className="space-y-6 animate-slide-in-up">
                             <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#034694] flex-shrink-0">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">{isStaff ? 'Career' : 'Player Journey'}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm mt-2">
                                        {player.bio}
                                    </p>
                                </div>
                             </div>

                             <div className="border-t border-gray-100 pt-6">
                                <h3 className="font-bold text-gray-900 uppercase tracking-wide mb-4 text-sm flex items-center gap-2">
                                    <Award size={16} className="text-[#d1a030]" /> {isStaff ? 'Honours' : 'Recent Achievements'}
                                </h3>
                                <ul className="space-y-3">
                                    <li className="bg-gray-50 p-3 rounded-lg flex items-center justify-between text-sm">
                                        <span className="font-medium text-gray-700">Champions League</span>
                                        <span className="font-bold text-[#034694]">Multiple</span>
                                    </li>
                                </ul>
                             </div>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Fixed Bottom Action - Hide for Staff */}
            {!isStaff && (
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-50">
                    <button className="w-full bg-[#d1a030] text-[#034694] py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-[#c19020] transition-all shadow-xl shadow-yellow-900/10 flex items-center justify-center gap-3 transform active:scale-95">
                        <Shirt size={20} strokeWidth={2.5} />
                        <span>Get {player.name.split(' ').pop()}'s Shirt</span>
                        <ChevronRight size={16} strokeWidth={3} />
                    </button>
                </div>
            )}
        </div>
    );
};

const StatBar: React.FC<{ label: string; value: number; delay: number }> = ({ label, value, delay }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setWidth(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    const getColor = (val: number) => {
        if (val > 85) return 'bg-green-500';
        if (val > 70) return 'bg-[#d1a030]';
        return 'bg-gray-400';
    };

    return (
        <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                <span className="text-gray-500">{label}</span>
                <span className="text-gray-900">{value}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${getColor(value)}`}
                    style={{ width: `${width}%` }}
                ></div>
            </div>
        </div>
    );
};