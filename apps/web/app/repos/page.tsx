import { AppShell } from "../../src/components/shared/AppShell";
import { PageHeader } from "../../src/components/shared/PageHeader";
import { Card, CardContent } from "../../src/components/ui/Card";

export default function RepositoriesPage() {
  return (
    <AppShell>
      <PageHeader 
        title="Repositories" 
        description="All repositories you have access to."
      />
      <div className="flex flex-col gap-4">
        <Card>
          <CardContent className="p-8 text-center text-muted flex flex-col items-center justify-center">
            <svg className="w-12 h-12 mb-4 text-border" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
            <p>You haven't connected any repositories yet.</p>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
