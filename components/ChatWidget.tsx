import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: '¡Hola! Soy el asistente virtual de Alex basado en IA. ¿Tienes alguna pregunta sobre su experiencia o habilidades?',
      timestamp: Date.now()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(userMsg.text);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          isOpen ? 'bg-gray-700 rotate-90' : 'bg-gradient-to-r from-primary to-secondary animate-bounce'
        }`}
      >
        {isOpen ? <X className="text-white h-6 w-6" /> : <MessageSquare className="text-white h-6 w-6" />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-40 w-80 sm:w-96 bg-surface border border-gray-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100vh - 150px)', height: '500px' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center gap-2">
          <Sparkles className="text-white h-5 w-5" />
          <div>
             <h3 className="text-white font-bold text-sm">Alex AI Assistant</h3>
             <p className="text-xs text-white/80">Powered by Gemini</p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark/50 scrollbar-thin">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user'
                    ? 'bg-primary text-white rounded-tr-none'
                    : 'bg-gray-700 text-gray-200 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex justify-start">
                <div className="bg-gray-700 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                   <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
                   <span className="text-xs text-gray-400">Pensando...</span>
                </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-surface border-t border-gray-700">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Pregúntame sobre Alex..."
              className="flex-1 bg-dark border border-gray-600 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="p-2 bg-primary text-white rounded-full hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
