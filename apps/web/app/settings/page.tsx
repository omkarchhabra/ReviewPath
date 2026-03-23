import { AppShell } from "../../src/components/shared/AppShell";
import { PageHeader } from "../../src/components/shared/PageHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../src/components/ui/Card";
import { Button } from "../../src/components/ui/Button";
import { Input } from "../../src/components/ui/Input";
import { Textarea } from "../../src/components/ui/Textarea";

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="max-w-4xl mx-auto">
        <PageHeader 
          title="Settings" 
          description="Manage your account preferences and application configurations."
        />
        
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Profile Details</CardTitle>
              <CardDescription>Your personal information tied to ReviewPath.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-foreground">Display Name</label>
                <Input defaultValue="Omkar Chhabra" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <Input defaultValue="omkar@example.com" disabled className="opacity-70" />
                <p className="text-xs text-muted">Billed to this email. Managed through GitHub.</p>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-foreground">Bio</label>
                <Textarea placeholder="A little bit about yourself..." />
              </div>
            </CardContent>
            <CardFooter className="border-t border-border pt-6 mt-2 bg-panel-alt/50 rounded-b-xl">
              <Button variant="primary">Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>GitHub Integration</CardTitle>
              <CardDescription>Manage your repository access and AI agent permissions.</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-panel-alt">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full overflow-hidden border border-border bg-white flex items-center justify-center">
                        <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                           <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                     </div>
                     <div>
                       <p className="font-semibold text-foreground">omkarchhabra</p>
                       <p className="text-sm text-success">Connected securely</p>
                     </div>
                  </div>
                  <Button variant="secondary" size="sm">Configure Access</Button>
               </div>
            </CardContent>
          </Card>

          <Card className="border-danger/40">
            <CardHeader>
              <CardTitle className="text-danger flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                Danger Zone
              </CardTitle>
              <CardDescription>Destructive actions that cannot be reversed.</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="flex items-center justify-between p-4 bg-danger/5 rounded border border-danger/20">
                  <div>
                    <h4 className="font-medium text-foreground">Delete Account</h4>
                    <p className="text-sm text-muted">Permanently remove your Data, AI indices, and preferences.</p>
                  </div>
                  <Button variant="danger">Delete Account</Button>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
