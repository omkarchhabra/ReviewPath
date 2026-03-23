import { AppShell } from "../../src/components/shared/AppShell";
import { PageHeader } from "../../src/components/shared/PageHeader";
import { Section } from "../../src/components/shared/Section";
import { Button } from "../../src/components/ui/Button";
import { Input } from "../../src/components/ui/Input";
import { Textarea } from "../../src/components/ui/Textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../src/components/ui/Card";
import { Badge } from "../../src/components/ui/Badge";
import { Spinner } from "../../src/components/ui/Spinner";
import { Skeleton } from "../../src/components/ui/Skeleton";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../src/components/ui/Tabs";

export default function TestComponentsPage() {
  return (
    <AppShell>
      <PageHeader 
        title="Component Test Cases" 
        description="Visual verification of all UI primitives built in Phase 1."
      >
        <Button variant="primary">Primary Action</Button>
      </PageHeader>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Section title="Buttons" description="Testing different button variants and states">
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
            <Button isLoading>Loading</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Section>
        
        <Section title="Form Controls" description="Testing inputs and textareas">
          <div className="space-y-4">
            <Input placeholder="Standard Input" />
            <Input placeholder="Error Input" error />
            <Textarea placeholder="Standard Textarea" />
            <Textarea placeholder="Error Textarea" error />
          </div>
        </Section>
        
        <Section title="Cards & Badges" description="Testing container and inline elements">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Project Card</CardTitle>
                  <CardDescription>Visual test of card composition</CardDescription>
                </div>
                <Badge variant="success">Active</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted mb-4">Cards can contain various content types.</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="secondary" className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        </Section>
        
        <Section title="Loading States & Tabs" description="Testing data fetching placeholders and navigation">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
            </div>
            
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-20 w-full" />
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <Tabs defaultValue="tab1">
                  <TabsList className="w-full flex">
                    <TabsTrigger value="tab1" className="flex-1">Account</TabsTrigger>
                    <TabsTrigger value="tab2" className="flex-1">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">Account settings content here.</TabsContent>
                  <TabsContent value="tab2">Password reset content here.</TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </Section>
      </div>
    </AppShell>
  );
}
