
import { useState } from 'react';
import { 
  getConversionRate, 
  getHotLeads, 
  getLeadsByPriority, 
  getLeadsBySource, 
  getLeadsByStatus, 
  getNewLeadsOverTime, 
  getPendingFollowUps, 
  getTotalLeads 
} from '@/data/leadsData';
import MetricsCard from './MetricsCard';
import LeadFilters, { FilterOptions } from './LeadFilters';
import { Users, Flame, TrendingUp, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const COLORS = ['#0078D4', '#107C10', '#FFB900', '#E81123', '#5C2D91', '#767676'];

const LeadsDashboard = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    source: 'all',
    status: 'all',
    priority: 'all',
    dateRange: undefined
  });

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    console.log('Filters updated:', newFilters);
    // In a real app, you would fetch new data based on these filters
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Lead Management Dashboard</h1>
      <p className="text-muted-foreground">Track, analyze, and manage your leads effectively</p>
      
      <LeadFilters onFilterChange={handleFilterChange} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <MetricsCard 
          title="Total Leads" 
          value={getTotalLeads()} 
          icon={<Users className="h-8 w-8" />} 
          variant="default"
          trend={{ value: "+12% from last month", isPositive: true }}
        />
        <MetricsCard 
          title="Hot Leads" 
          value={getHotLeads()} 
          icon={<Flame className="h-8 w-8" />} 
          variant="success"
          trend={{ value: "+5% from last month", isPositive: true }}
        />
        <MetricsCard 
          title="Conversion Rate" 
          value={`${getConversionRate()}%`} 
          icon={<TrendingUp className="h-8 w-8" />} 
          variant="warning"
          trend={{ value: "-2% from last month", isPositive: false }}
        />
        <MetricsCard 
          title="Pending Follow-ups" 
          value={getPendingFollowUps()} 
          icon={<Clock className="h-8 w-8" />} 
          variant="danger"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Leads by Source</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={getLeadsBySource()}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {getLeadsBySource().map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Leads by Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={getLeadsByStatus()}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {getLeadsByStatus().map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Leads by Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={getLeadsByPriority()}
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar 
                    dataKey="value" 
                    fill="#0078D4" 
                    name="Count" 
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">New Leads Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={getNewLeadsOverTime()}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="leads" 
                    stroke="#0078D4" 
                    activeDot={{ r: 8 }} 
                    strokeWidth={2}
                    name="New Leads"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeadsDashboard;
