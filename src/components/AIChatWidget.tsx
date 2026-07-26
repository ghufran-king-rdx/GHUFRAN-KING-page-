import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Calculator,
  ExternalLink,
  RotateCcw,
  Minimize2,
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface AIChatWidgetProps {
  onOpenContactWithService?: (serviceName?: string) => void;
}

const QUICK_PROMPTS = [
  { label: '⚡ Get Instant Quote', prompt: 'I would like an instant project quote for my digital business needs.' },
  { label: '🌐 Custom Web Development', prompt: 'What is the estimated cost and timeline for a custom business website?' },
  { label: '🤖 AI Web App & Chatbot', prompt: 'How much does it cost to build a web application with Gemini AI integration?' },
  { label: '📈 Marketing & SEO Plans', prompt: 'What digital marketing and SEO growth packages do you offer?' },
  { label: '🎨 Logo & UI/UX Branding', prompt: 'What are your prices for logo design and UI/UX branding kits?' },
];

export const AIChatWidget: React.FC<AIChatWidgetProps> = ({ onOpenContactWithService }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Hello! 👋 I'm **KingAI**, GHUFRAN KING DIGITAL's intelligent service assistant.\n\nI can answer questions about our digital services or generate an **instant custom quote** for your project.\n\nHow can I help you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      // Send chat history to backend Gemini endpoint
      const apiHistory = newMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: apiHistory,
          message: query,
        }),
      });

      const data = await res.json();
      const replyText = data.reply || "Thank you for asking! How else can I assist with your project?";

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content:
            "I'm experiencing a brief connectivity glitch. Please feel free to reach our team directly via WhatsApp or the Contact form below!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: `Hello! 👋 I'm **KingAI**, GHUFRAN KING DIGITAL's intelligent service assistant.\n\nI can answer questions about our digital services or generate an **instant custom quote** for your project.\n\nHow can I help you today?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  // Helper renderer for simple markdown text formatting (bold, lines, bullet points)
  const renderFormattedText = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      // Bold formatting replacement **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const formattedParts = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="font-semibold text-amber-300">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      if (line.trim().startsWith('- ') || line.trim().startsWith('• ')) {
        return (
          <li key={idx} className="ml-4 list-disc text-slate-200 my-0.5">
            {formattedParts}
          </li>
        );
      }

      return (
        <p key={idx} className={line.trim() === '' ? 'h-2' : 'my-1 text-slate-200 leading-relaxed'}>
          {formattedParts}
        </p>
      );
    });
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none">
      <AnimatePresence>
        {/* Expanded Chat Dialog */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="pointer-events-auto mb-4 w-[90vw] sm:w-[390px] h-[540px] max-h-[80vh] flex flex-col rounded-2xl border border-cyan-500/30 bg-slate-950/95 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/50 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-amber-500 p-0.5 shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-950 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white tracking-wide">KingAI Assistant</h3>
                    <span className="text-[10px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      Instant Quote
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
                    Powered by Gemini 3.6
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Minimize chat"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Quote Banner */}
            <div className="px-3 py-2 bg-slate-900/80 border-b border-white/5 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium text-amber-300">
                <Calculator className="w-3.5 h-3.5 text-amber-400" /> Need a tailored estimate?
              </span>
              <button
                onClick={() => handleSendMessage('Can you generate an instant custom project quote for my business?')}
                className="text-[11px] font-bold text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-0.5"
              >
                Get Quote <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
              {messages.map((msg) => {
                const isAssistant = msg.role === 'assistant';
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${isAssistant ? 'justify-start' : 'justify-end'}`}
                  >
                    {isAssistant && (
                      <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}

                    <div className={`max-w-[82%] group`}>
                      <div
                        className={`p-3 rounded-2xl shadow-sm text-xs leading-relaxed ${
                          isAssistant
                            ? 'bg-slate-900/90 border border-white/10 text-slate-100 rounded-tl-sm'
                            : 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-slate-950 font-medium rounded-tr-sm shadow-cyan-500/20'
                        }`}
                      >
                        {isAssistant ? renderFormattedText(msg.content) : msg.content}
                      </div>

                      <div
                        className={`text-[10px] text-slate-500 mt-1 px-1 flex items-center gap-2 ${
                          isAssistant ? 'justify-start' : 'justify-end'
                        }`}
                      >
                        <span>{msg.timestamp}</span>
                        {isAssistant && (
                          <button
                            onClick={() => {
                              if (onOpenContactWithService) {
                                onOpenContactWithService('Custom AI Quote Consultation');
                              } else {
                                const contactEl = document.getElementById('contact');
                                contactEl?.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                            className="text-[10px] text-cyan-400 hover:text-amber-300 transition-colors flex items-center gap-0.5 opacity-0 group-hover:opacity-100"
                          >
                            Proceed with Quote <ExternalLink className="w-2.5 h-2.5" />
                          </button>
                        )}
                      </div>
                    </div>

                    {!isAssistant && (
                      <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Loading State */}
              {isLoading && (
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                    <Bot className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900/90 border border-white/10 rounded-tl-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                    <span className="text-[11px] text-slate-400 ml-1">Analyzing project scope...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3 py-2 bg-slate-900/60 border-t border-white/5 overflow-x-auto flex gap-1.5 scrollbar-none">
              {QUICK_PROMPTS.map((promptItem, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(promptItem.prompt)}
                  disabled={isLoading}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-800/80 hover:bg-cyan-900/60 hover:text-cyan-300 text-slate-300 border border-white/10 hover:border-cyan-500/40 transition-all shrink-0 cursor-pointer disabled:opacity-50"
                >
                  {promptItem.label}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-slate-950 border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about services or request a quote..."
                disabled={isLoading}
                className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-amber-500 hover:from-cyan-400 hover:to-amber-400 text-slate-950 font-bold disabled:opacity-40 disabled:cursor-not-allowed shadow-lg transition-all"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto relative group flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-950/90 border border-cyan-500/50 hover:border-cyan-400 shadow-2xl shadow-cyan-500/30 text-white cursor-pointer backdrop-blur-md transition-all duration-300"
          aria-label="Open AI Quote & Service Chat"
        >
          {/* Pulsing ring around trigger */}
          <span className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping opacity-60 pointer-events-none" />

          <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-amber-500 p-0.5">
            <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </div>
          </div>

          <div className="text-left pr-1">
            <div className="text-xs font-bold text-white flex items-center gap-1">
              KingAI Assistant
              {hasUnread && (
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              )}
            </div>
            <p className="text-[10px] text-cyan-300/80 font-medium">Instant Project Quote</p>
          </div>
        </motion.button>
      )}
    </div>
  );
};
