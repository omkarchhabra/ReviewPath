import { AppShell } from "../../../../../../src/components/shared/AppShell";
import { Badge } from "../../../../../../src/components/ui/Badge";
import { Button } from "../../../../../../src/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "../../../../../../src/components/ui/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../../../../src/components/ui/Tabs";

export default async function PullRequestPage({ params }: { params: Promise<{ owner: string; repo: string; pull_number: string }> }) {
  const { owner, repo, pull_number } = await params;
  
  return (
    <AppShell>
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-3">
            Refactor authentication flow <span className="text-muted font-normal">#{pull_number}</span>
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted">
            <Badge variant="success">Open</Badge>
            <span>{owner} wants to merge 3 commits into <code className="bg-panel-alt px-1 py-0.5 rounded border border-border">main</code> from <code className="bg-panel-alt px-1 py-0.5 rounded border border-border">feat/auth</code></span>
          </div>
        </div>
        <Button variant="primary">Review Changes</Button>
      </div>
      
      <Tabs defaultValue="summary">
        <TabsList className="mb-6 w-full flex bg-panel-alt p-1 rounded-md border border-border">
          <TabsTrigger value="summary" className="flex-1">AI Summary</TabsTrigger>
          <TabsTrigger value="commits" className="flex-1">Commits (3)</TabsTrigger>
          <TabsTrigger value="files" className="flex-1">Files Changed (12)</TabsTrigger>
          <TabsTrigger value="checks" className="flex-1">Checks (1 failing)</TabsTrigger>
        </TabsList>
        
        <TabsContent value="summary">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    AI Pull Request Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none text-sm">
                  <p className="text-muted leading-relaxed mb-4">This pull request refactors the authentication flow to use NextAuth.js instead of custom JWT handling. It introduces a new SessionProvider wrapper and updates all protected API routes.</p>
                  <h4 className="text-foreground mt-6 mb-3 font-semibold text-base">Key Changes:</h4>
                  <ul className="list-[circle] pl-5 space-y-2 text-muted">
                    <li>Replaced custom <code className="bg-panel-alt border border-border px-1 rounded text-foreground">lib/auth.ts</code> with NextAuth integration.</li>
                    <li>Added OAuth providers for GitHub and Google.</li>
                    <li>Updated <code className="bg-panel-alt border border-border px-1 rounded text-foreground">middleware.ts</code> to handle route protection.</li>
                  </ul>
                  <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-md">
                    <strong className="text-warning flex items-center gap-2 mb-2">
                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                       Security Warning
                    </strong>
                    <span className="text-warning hover:opacity-80">The <code className="bg-warning/20 px-1 font-mono text-warning font-bold">NEXTAUTH_SECRET</code> environment variable is missing from the example `.env` file updates in this PR.</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Conversation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-muted text-sm border-2 border-dashed border-border rounded-lg bg-panel-alt/30">
                    No comments yet. Start reviewing to add feedback.
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xs text-muted uppercase tracking-wider font-semibold">Reviewers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">No reviewers assigned</p>
                </CardContent>
              </Card>
              
              <Card className="border-danger/30 bg-danger/5">
                <CardHeader>
                  <CardTitle className="text-xs text-danger uppercase tracking-wider font-semibold flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Failing Checks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground mb-1">Vercel Build / Preview</p>
                    <p className="text-muted mb-4 leading-relaxed">Build failed due to Type errors in <code className="text-danger bg-danger/10 px-1 py-0.5 rounded">app/api/auth/[...nextauth]/route.ts</code></p>
                    <Button variant="danger" size="sm" className="w-full flex justify-center gap-2">
                       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                       AI Triage Failure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        {/* Render other tabs out here later */}
      </Tabs>
    </AppShell>
  );
}
