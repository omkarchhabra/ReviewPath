import { AppShell } from "../../src/components/shared/AppShell";
import { PageHeader } from "../../src/components/shared/PageHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../src/components/ui/Card";
import { Badge } from "../../src/components/ui/Badge";
import { Button } from "../../src/components/ui/Button";

export default function DashboardPage() {
  return (
    <AppShell>
      <PageHeader 
        title="Dashboard" 
        description="Overview of your connected repositories and recent PR activity."
      >
        <Button variant="primary">Connect New Repository</Button>
      </PageHeader>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-accent cursor-pointer hover:underline">
                    omkarchhabra/project-{i}
                  </CardTitle>
                  <CardDescription>Updated {i * 2} hours ago</CardDescription>
                </div>
                <Badge variant={i === 1 ? "warning" : "success"}>
                  {i === 1 ? "2 Pending PRs" : "All Good"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 text-sm text-muted">
                <span>TypeScript</span>
                <span>•</span>
                <span>{i * 12} stars</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
