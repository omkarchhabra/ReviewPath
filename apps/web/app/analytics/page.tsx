import { AppShell } from "../../src/components/shared/AppShell";
import { PageHeader } from "../../src/components/shared/PageHeader";
import { Card, CardHeader, CardTitle, CardContent } from "../../src/components/ui/Card";

export default function AnalyticsPage() {
  return (
    <AppShell>
      <PageHeader 
        title="Analytics" 
        description="Insights into your review speeds and CI/CD health."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-muted text-sm font-medium">Avg Review Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">2.4 hrs</div>
            <p className="text-sm text-success mt-1">↓ 12% from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-muted text-sm font-medium">CI Build Success</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">94.2%</div>
            <p className="text-sm text-danger mt-1">↓ 1.5% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-muted text-sm font-medium">AI Suggestions Accepted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">342</div>
            <p className="text-sm text-success mt-1">+42 this week</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="min-h-[300px] flex items-center justify-center">
        <div className="text-center text-muted">
          <svg className="w-12 h-12 mx-auto mb-4 text-border" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
          <p>Detailed charts will appear here after sufficient data collection.</p>
        </div>
      </Card>
    </AppShell>
  );
}
