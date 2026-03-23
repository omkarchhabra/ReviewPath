import { Badge } from "../../src/components/ui/Badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../src/components/ui/Tabs";

export default function ExtensionMockup() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-foreground">IDE Extension Mockup</h1>
        <p className="text-muted text-sm mt-2">This simulates how the ReviewPath companion extension would look inside VSCode</p>
      </div>

      <div className="w-[380px] h-[640px] border border-border bg-panel flex flex-col mx-auto shadow-2xl rounded-xl overflow-hidden font-sans relative">
        <div className="flex items-center justify-between p-4 border-b border-border bg-panel-alt backdrop-blur-sm z-10 sticky top-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground tracking-tight text-lg">ReviewPath<span className="text-accent">.</span></span>
            <Badge variant="outline" className="text-[10px] py-0 border-accent/20 text-accent bg-accent/5">v1.2</Badge>
          </div>
          <div className="w-7 h-7 rounded-full bg-background border border-border overflow-hidden">
            <img src="https://avatars.githubusercontent.com/u/9919" alt="User" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto bg-background">
          <Tabs defaultValue="chat">
            <TabsList className="w-full rounded-none border-b border-border bg-panel sticky top-0 z-10 px-4 pt-2 shadow-sm">
              <TabsTrigger value="chat" className="flex-1 pb-2">Repo Chat</TabsTrigger>
              <TabsTrigger value="triage" className="flex-1 pb-2">File Triage</TabsTrigger>
            </TabsList>
            
            <TabsContent value="chat" className="p-0 border-none mt-0">
              <div className="flex flex-col h-[525px]">
                <div className="flex-1 p-5 overflow-y-auto space-y-6">
                  
                  {/* System Message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-md shrink-0 bg-accent flex items-center justify-center text-white text-xs font-bold shadow-sm shadow-accent/20">RP</div>
                    <div>
                      <p className="text-sm text-foreground bg-panel p-3.5 rounded-xl rounded-tl-sm border border-border shadow-sm leading-relaxed">
                        I'm connected to <strong className="text-accent underline decoration-accent/30 decoration-dashed">omkarchhabra/reviewpath</strong>. What would you like to know about this repository?
                      </p>
                    </div>
                  </div>
                  
                  {/* User Message */}
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full shrink-0 border border-border overflow-hidden shadow-sm">
                      <img src="https://avatars.githubusercontent.com/u/9919" alt="User" />
                    </div>
                    <div>
                      <p className="text-sm text-white bg-accent p-3.5 rounded-xl rounded-tr-sm shadow-sm">
                        Where is the authentication flow defined?
                      </p>
                    </div>
                  </div>
                  
                  {/* Repo Chat Response */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-md shrink-0 bg-accent flex items-center justify-center text-white text-xs font-bold shadow-sm shadow-accent/20">RP</div>
                    <div className="space-y-3 w-full pr-4">
                      <p className="text-sm text-foreground bg-panel p-3.5 rounded-xl rounded-tl-sm border border-border shadow-sm leading-relaxed">
                        The authentication flow is primarily handled in <code className="text-xs font-mono text-accent bg-accent/10 border-accent/20 border px-1.5 py-0.5 rounded">apps/web/src/auth/index.ts</code>. It uses NextAuth.js configured with the GitHub provider.
                      </p>
                      
                      {/* Code Snippet Card */}
                      <div className="border border-border rounded-lg overflow-hidden bg-background shadow-sm hover:border-accent/50 transition-colors group">
                        <div className="bg-panel-alt border-b border-border px-3 py-2 text-xs text-muted flex items-center justify-between">
                          <span className="font-mono flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            auth/index.ts
                          </span>
                          <span className="text-accent text-opacity-0 group-hover:text-opacity-100 transition-opacity cursor-pointer font-medium">Open ↗</span>
                        </div>
                        <pre className="p-3 text-[11px] text-muted overflow-x-auto leading-relaxed font-mono">
                          {`export const authOptions: NextAuthOptions = {
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],
  };`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-t border-border bg-panel-alt">
                  <div className="relative flex items-center">
                    <input 
                      type="text" 
                      placeholder="Ask about the codebase..." 
                      className="w-full bg-background border border-border rounded-full pl-5 pr-12 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-sm"
                    />
                    <button className="absolute right-2 p-1.5 text-accent hover:text-accent-hover hover:bg-accent/10 rounded-full transition-colors flex items-center justify-center">
                      <svg className="w-5 h-5 -rotate-90 mt-0.5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="triage">
               <div className="flex items-center justify-center h-[500px] text-muted text-sm flex-col gap-4">
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
