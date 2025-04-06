
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardGrid from '@/components/dashboard/DashboardGrid';
import LeadsDashboard from '@/components/leads/LeadsDashboard';

const DashboardLayout = () => {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 pt-2">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Sales & Marketing Dashboard</h1>
          <p className="text-muted-foreground">Track and analyze your business performance metrics</p>
        </div>
        <Badge variant="outline" className="bg-powerbi-blue text-white">
          Updated 2 hours ago
        </Badge>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="leads">Lead Management</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <DashboardGrid />
        </TabsContent>
        <TabsContent value="leads" className="space-y-4">
          <LeadsDashboard />
        </TabsContent>
        <TabsContent value="analytics" className="h-[400px] flex items-center justify-center border rounded">
          <p className="text-muted-foreground">Analytics content coming soon</p>
        </TabsContent>
        <TabsContent value="reports" className="h-[400px] flex items-center justify-center border rounded">
          <p className="text-muted-foreground">Reports content coming soon</p>
        </TabsContent>
        <TabsContent value="settings" className="h-[400px] flex items-center justify-center border rounded">
          <p className="text-muted-foreground">Settings content coming soon</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardLayout;
