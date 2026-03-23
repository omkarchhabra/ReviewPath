"use client";

import * as React from "react";
import { Badge } from "../../src/components/ui/Badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../src/components/ui/Tabs";

export default function ExtensionMockup() {
  const [messages, setMessages] = React.useState([
    { role: "assistant", content: "I'm connected! What would you like to know about your codebase or your recent Pull Requests?" }
  ]);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content })) }),
      });
      const data = await res.json();
      
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply || data.error }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I encountered an error connecting to the AI via Groq." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-12 px-4">
      <div className="mb-8 text-center max-w-lg">
        <Badge variant="success" className="mb-3 animate-pulse">Groq AI Live</Badge>
        <h1 className="text-2xl font-bold text-foreground">Interactive AI Chat Mockup</h1>
        <p className="text-muted text-sm mt-2">This is fully wired up to your live Groq API key! The AI is responding via `/api/chat` using LLaMA 3. Go ahead and type a message to test it out.</p>
      </div>

      <div className="w-full max-w-[420px] h-[650px] border border-border bg-panel flex flex-col mx-auto shadow-2xl rounded-xl overflow-hidden font-sans relative">
        <div className="flex items-center justify-between p-4 border-b border-border bg-panel-alt backdrop-blur-sm z-10 sticky top-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground tracking-tight text-lg">ReviewPath<span className="text-accent">.</span></span>
            <Badge variant="outline" className="text-[10px] py-0 border-accent/20 text-accent bg-accent/5">v1.2</Badge>
          </div>
          <div className="w-7 h-7 rounded-full bg-background border border-border overflow-hidden">
            <img src="https://avatars.githubusercontent.com/u/9919" alt="User" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto bg-background flex flex-col">
          <Tabs defaultValue="chat" className="flex flex-col flex-1">
            <TabsList className="w-full rounded-none border-b border-border bg-panel sticky top-0 z-10 px-4 pt-2 shadow-sm">
              <TabsTrigger value="chat" className="flex-1 pb-2">Repo Chat</TabsTrigger>
              <TabsTrigger value="triage" className="flex-1 pb-2">File Triage</TabsTrigger>
            </TabsList>
            
            <TabsContent value="chat" className="p-0 border-none mt-0 flex-1 flex flex-col h-auto outline-none">
              <div className="flex flex-col flex-1 h-[525px]">
                <div className="flex-1 p-5 overflow-y-auto space-y-6">
                  
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                      <div className={`w-8 h-8 shrink-0 flex items-center justify-center text-xs font-bold shadow-sm 
                        ${msg.role === "user" ? "rounded-full border border-border overflow-hidden" : "rounded-md bg-accent text-white shadow-accent/20"}`}>
                        {msg.role === "user" ? <img src="https://avatars.githubusercontent.com/u/9919" alt="User" /> : "RP"}
                      </div>
                      <div className={`space-y-3 max-w-[85%] ${msg.role === "user" ? "" : ""}`}>
                        <div className={`text-sm p-3.5 shadow-sm leading-relaxed whitespace-pre-wrap
                          ${msg.role === "user" ? "text-white bg-accent rounded-2xl rounded-tr-sm" : "text-foreground bg-panel rounded-2xl rounded-tl-sm border border-border"}`}>
                          {msg.content}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-md shrink-0 bg-accent flex items-center justify-center text-white text-xs font-bold shadow-sm shadow-accent/20">RP</div>
                      <div className="text-sm text-foreground bg-panel px-4 py-4 rounded-full rounded-tl-sm border border-border shadow-sm flex items-center gap-1.5 h-[44px]">
                        <span className="w-2 h-2 bg-accent rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-accent rounded-full animate-bounce delay-75" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-accent rounded-full animate-bounce delay-150" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                
                <div className="p-4 border-t border-border bg-panel-alt">
                  <form onSubmit={handleSubmit} className="relative flex items-center">
                    <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      disabled={isLoading}
                      placeholder="Ask the AI..." 
                      className="w-full bg-background border border-border rounded-full pl-5 pr-12 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-sm disabled:opacity-50"
                    />
                    <button type="submit" disabled={isLoading || !input.trim()} className="absolute right-2 p-1.5 text-accent hover:text-accent-hover hover:bg-accent/10 rounded-full transition-colors flex items-center justify-center disabled:opacity-50">
                      <svg className="w-5 h-5 -rotate-90 mt-0.5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    </button>
                  </form>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="triage">
               <div className="flex items-center justify-center h-full flex-1 text-muted text-sm flex-col gap-4 py-24">
                  <svg className="w-12 h-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  No active file triage sessions.
               </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
