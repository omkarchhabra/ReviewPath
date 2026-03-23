import { AppShell } from "../src/components/shared/AppShell";
import { Button } from "../src/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <AppShell>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <span className="text-6xl font-bold tracking-tighter text-foreground mb-4 block">
            ReviewPath<span className="text-accent">.</span>
          </span>
          <p className="text-xl text-muted">
            The AI-powered developer platform that automatically summarizes PRs, triages CI failures, and chats with your codebase.
          </p>
        </div>
        
        <div className="flex gap-4">
          <Link href="/dashboard">
            <Button variant="primary" size="lg">Go to Dashboard</Button>
          </Link>
          <Link href="/repos">
            <Button variant="secondary" size="lg">Connect GitHub</Button>
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
