import React from 'react';
import { ChevronDown, Info, ExternalLink } from 'lucide-react';

export const TicketGuideView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in pb-12">
      <div className="relative h-64 bg-gray-900 overflow-hidden">
        <img src="https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/ZGY0ZDg0OTMtNTRmYi00YTZkLWIxZjgtZjA4OTVkZjYwZTI4" alt="Kingsmeadow" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#034694]/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white w-full">
            <div className="uppercase font-bold tracking-widest text-xs mb-2 text-yellow-400">Matchday Info</div>
            <h1 className="text-4xl font-black uppercase tracking-tight leading-none">Ticket Guide</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
         {/* Introduction */}
         <div className="p-6">
            <p className="text-lg font-serif text-[#034694] italic leading-relaxed mb-6">
                All you need to know about securing your seat to watch the Blues in action.
            </p>
            <p className="text-gray-700 text-sm leading-6 mb-6">
                Chelsea FC Women play their home matches at Kingsmeadow in Kingston upon Thames, with select high-profile fixtures taking place at Stamford Bridge. We advise supporters to purchase tickets well in advance to avoid disappointment.
            </p>
            
            <div className="bg-blue-50 border border-blue-100 p-4 rounded flex items-start gap-3">
                <Info className="text-[#034694] flex-shrink-0 mt-0.5" size={20} />
                <div className="text-sm text-[#034694]">
                    <span className="font-bold block mb-1">Digital Tickets</span>
                    All match tickets are now digital. You will receive your ticket via email to download to your smartphone wallet.
                </div>
            </div>
         </div>

         {/* Accordion Sections */}
         <div className="border-t border-gray-100">
            <AccordionSection title="Buying Tickets">
                <p className="mb-2">Tickets generally go on sale 4-6 weeks before a fixture.</p>
                <ul className="list-disc pl-4 space-y-1">
                    <li>Season Ticket Holders priority window</li>
                    <li>General Sale</li>
                </ul>
            </AccordionSection>
            <AccordionSection title="Pricing Categories">
                 <table className="w-full text-xs">
                    <thead className="bg-gray-100 text-gray-700 font-bold uppercase">
                        <tr><th className="p-2 text-left">Category</th><th className="p-2 text-right">Price</th></tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr><td className="p-2">Adult</td><td className="p-2 text-right font-bold">£12 - £50</td></tr>
                        <tr><td className="p-2">Junior (Under 20)</td><td className="p-2 text-right font-bold">£6 - £25</td></tr>
                        <tr><td className="p-2">Senior (65+)</td><td className="p-2 text-right font-bold">£6 - £25</td></tr>
                    </tbody>
                </table>
            </AccordionSection>
            <AccordionSection title="Kingsmeadow Stadium Plan">
                <p className="mb-2">Kingsmeadow offers both seated and standing areas.</p>
                <ul className="list-disc pl-4 space-y-1">
                    <li><strong>South Stand:</strong> Main seated stand, covered.</li>
                    <li><strong>North Stand:</strong> Terraced standing, covered. Popular with singing section.</li>
                    <li><strong>West Stand:</strong> Seated, family area.</li>
                </ul>
            </AccordionSection>
            <AccordionSection title="Accessibility">
                <p>We are committed to making our matches accessible to all. Wheelchair spaces and accessible seating are available in all stands.</p>
            </AccordionSection>
         </div>

         <div className="p-6">
             <button className="w-full py-4 bg-[#034694] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#001489] transition-colors flex items-center justify-center gap-2">
                 <span>Visit Help Centre</span>
                 <ExternalLink size={16} />
             </button>
         </div>
      </div>
    </div>
  );
};

const AccordionSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="border-b border-gray-100">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors text-left"
            >
                <span className="font-bold text-[#034694] uppercase tracking-wide text-sm">{title}</span>
                <ChevronDown size={20} className={`text-[#034694] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
};