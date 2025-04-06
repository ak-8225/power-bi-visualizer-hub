
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MetricsCard from "./MetricsCard";
import LeadScoreGauge from "./LeadScoreGauge";
import InventoryTable from "./InventoryTable";
import NotificationSettings from "./NotificationSettings";
import ERPIntegrationCard from "./ErpIntegrationCard";
import LeadDetailTable from "./LeadDetailTable";
import LeadScoringSettings from "./LeadScoringSettings";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";
import { Badge } from "@/components/ui/badge";
import { getAverageLeadScore, getHotLeads, getLeadScoreByIndustry, getLeadScoreDistribution, getTotalLeads } from "@/data/leadsData";
import { ArrowUpRight, BarChart4, Bell, Database, Flame, Settings, Users } from 'lucide-react';

const COLORS = ['#0078D4', '#107C10', '#FFB900', '#E81123', '#5C2D91', '#767676'];

const UserProfileDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">User Profile Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your leads, notifications, and integrations
          </p>
        </div>
        <Badge variant="outline" className="bg-powerbi-blue text-white">
          Last updated: {new Date().toLocaleString()}
        </Badge>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-4 md:w-[600px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="leads">Lead Management</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricsCard 
              title="Total Leads" 
              value={getTotalLeads()} 
              icon={<Users className="h-8 w-8" />} 
              variant="default"
              trend={{ value: "+12% from last month", isPositive: true }}
              description="Total number of leads in your pipeline"
            />
            <MetricsCard 
              title="Hot Leads" 
              value={getHotLeads()} 
              icon={<Flame className="h-8 w-8" />} 
              variant="success"
              trend={{ value: "+5% from last month", isPositive: true }}
              description="High priority leads that need immediate attention"
            />
            <MetricsCard 
              title="Average Lead Score" 
              value={getAverageLeadScore()} 
              icon={<BarChart4 className="h-8 w-8" />} 
              variant="warning"
              trend={{ value: "+8% from last month", isPositive: true }}
              description="Average score across all leads (scale of 0-100)"
            />
            <MetricsCard 
              title="Integrations" 
              value="3 Active" 
              icon={<Database className="h-8 w-8" />} 
              variant="default"
              description="Number of active system integrations"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Lead Score Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={getLeadScoreDistribution()}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar 
                        dataKey="value" 
                        fill="#0078D4" 
                        name="Number of Leads" 
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <LeadScoreGauge score={parseInt(getAverageLeadScore())} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Lead Score by Industry</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={getLeadScoreByIndustry()}
                      layout="vertical"
                      margin={{
                        top: 5,
                        right: 30,
                        left: 80,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" />
                      <Tooltip />
                      <Legend />
                      <Bar 
                        dataKey="score" 
                        fill="#0078D4" 
                        name="Average Score" 
                        radius={[0, 4, 4, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Lead Distribution by Industry</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={getLeadScoreByIndustry()}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="score"
                        nameKey="name"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {getLeadScoreByIndustry().map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <LeadDetailTable />
        </TabsContent>

        <TabsContent value="leads" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="col-span-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Lead Management Dashboard</CardTitle>
                  <Button>
                    <ArrowUpRight className="mr-2 h-4 w-4" />
                    View All Leads
                  </Button>
                </div>
                <CardDescription>
                  View and manage your leads from a single location
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LeadScoringSettings />
            <LeadDetailTable />
          </div>
        </TabsContent>

        <TabsContent value="integrations" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ERPIntegrationCard />
          <InventoryTable />
        </TabsContent>

        <TabsContent value="settings" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NotificationSettings />
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Account Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium">Account Type</p>
                  <p className="text-sm text-muted-foreground">Enterprise Plan</p>
                </div>
                <div className="grid gap-1">
                  <p className="text-sm font-medium">User Role</p>
                  <p className="text-sm text-muted-foreground">Admin</p>
                </div>
                <div className="grid gap-1">
                  <p className="text-sm font-medium">Last Login</p>
                  <p className="text-sm text-muted-foreground">2025-04-06 08:42:19</p>
                </div>
                <div className="pt-4 flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Settings className="mr-2 h-4 w-4" />
                    Profile Settings
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Bell className="mr-2 h-4 w-4" />
                    Notification Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfileDashboard;
