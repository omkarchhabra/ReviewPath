import { AppShell } from "../../src/components/shared/AppShell";
import { PageHeader } from "../../src/components/shared/PageHeader";
import { Card, CardContent } from "../../src/components/ui/Card";
import { Badge } from "../../src/components/ui/Badge";
import { Button } from "../../src/components/ui/Button";

export default function NotificationsPage() {
  return (
    <AppShell>
      <div className="max-w-3xl mx-auto">
        <PageHeader 
          title="Notifications" 
          description="Updates from your repositories and pull requests."
        >
          <Button variant="secondary">Mark all as read</Button>
        </PageHeader>
        
        <div className="space-y-4">
          <Card className="bg-panel-alt border-l-4 border-l-accent overflow-hidden">
            <CardContent className="p-5 flex gap-5">
               <div className="w-12 h-12 rounded-full bg-accent/20 flex flex-shrink-0 items-center justify-center text-accent">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               </div>
               <div>
                 <div className="flex items-center justify-between mb-1">
                   <div className="flex items-center gap-2">
                     <h4 className="font-semibold text-foreground text-lg">AI Triage Complete</h4>
                     <Badge variant="success">New</Badge>
                   </div>
                   <p className="text-xs text-muted font-medium">Just now</p>
                 </div>
                 <p className="text-sm text-muted leading-relaxed">The AI has finished triaging the build failure in <strong className="text-foreground hover:underline cursor-pointer transition-colors">omkarchhabra/reviewpath #12</strong>. A patch suggestion is available to automatically resolve the Type errors in your NextAuth config.</p>
                 <div className="mt-3">
                   <Button variant="primary" size="sm">View Patch</Button>
                 </div>
               </div>
            </CardContent>
          </Card>
          
          <Card className="hover:border-accent transition-colors">
            <CardContent className="p-5 flex gap-5">
               <div className="w-12 h-12 rounded-full bg-panel border border-border flex flex-shrink-0 items-center justify-center text-muted">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
               </div>
               <div className="opacity-80">
                 <div className="flex items-center justify-between mb-1">
                   <div className="flex items-center gap-2">
                     <h4 className="font-medium text-foreground text-lg">Weekly Digest Ready</h4>
                   </div>
                   <p className="text-xs text-muted font-medium">2 days ago</p>
                 </div>
                 <p className="text-sm text-muted leading-relaxed">Your review analytics for the week of Mar 15 - Mar 22 are now available. You accepted 42 AI suggestions this week, saving approximately 12 hours of code review time!</p>
                 <div className="mt-3">
                   <Button variant="secondary" size="sm">View Analytics</Button>
                 </div>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
