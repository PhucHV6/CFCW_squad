import React, { useState, useRef, useEffect } from 'react';
import { generateResponse } from '../services/geminiService';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Hi! Ask me about fixtures, players, or tickets.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const aiResponse = await generateResponse(userMessage);
      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Sorry, something went wrong." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-300 active:scale-90 ${
          isOpen ? 'bg-gray-200 text-gray-800' : 'bg-cfc-blue text-white hover:bg-cfc-dark'
        }`}
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 left-4 md:left-auto md:w-80 h-[450px] max-h-[60vh] bg-white rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-100 animate-slide-in-up">
          <div className="bg-cfc-blue text-white p-3 font-bold flex items-center justify-between shadow-sm">
            <span className="text-sm">CFC Assistant</span>
            <span className="text-[10px] bg-cfc-gold text-cfc-blue px-2 py-0.5 rounded-full font-black uppercase tracking-wider">AI</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-2.5 rounded-lg text-xs leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-cfc-blue text-white rounded-br-none'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-2.5 rounded-lg rounded-bl-none shadow-sm flex items-center gap-2">
                  <Loader2 className="animate-spin text-cfc-blue" size={14} />
                  <span className="text-[10px] text-gray-500 font-bold uppercase">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-2 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
              className="flex-1 border border-gray-300 rounded-full px-3 py-2 text-xs focus:outline-none focus:border-cfc-blue bg-gray-50"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-cfc-blue text-white p-2 rounded-full hover:bg-cfc-dark disabled:opacity-50 transition-colors flex items-center justify-center w-8 h-8"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};