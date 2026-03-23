import { AppShell } from "../../../../src/components/shared/AppShell";
import { PageHeader } from "../../../../src/components/shared/PageHeader";
import { Card, CardContent } from "../../../../src/components/ui/Card";
import { Button } from "../../../../src/components/ui/Button";
import { Input } from "../../../../src/components/ui/Input";

export default function InstallRepoPage() {
  return (
    <AppShell>
      <div className="max-w-3xl mx-auto">
        <PageHeader 
          title="Connect a Repository" 
          description="Select a GitHub repository to analyze and monitor with AI."
        />
        
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <Input placeholder="Search your repositories..." className="flex-1" />
              <Button variant="primary">Search</Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="hover:border-accent border transition-colors cursor-pointer group">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-panel-alt flex items-center justify-center border border-border group-hover:bg-accent/10 transition-colors">
                    <svg className="w-5 h-5 text-muted group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">omkarchhabra/awesome-project-{i}</h3>
                    <p className="text-sm text-muted">Public • Last pushed {i * 2} days ago</p>
                  </div>
                </div>
                <Button variant="secondary" size="sm" className="hidden sm:inline-flex">Connect</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
