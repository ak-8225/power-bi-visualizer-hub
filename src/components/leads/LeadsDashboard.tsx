
import { useState } from 'react';
import LeadFilters, { FilterOptions } from './LeadFilters';
import DashboardMetrics from './DashboardMetrics';
import LeadSourceChart from './LeadSourceChart';
import LeadStatusChart from './LeadStatusChart';
import LeadPriorityChart from './LeadPriorityChart';
import LeadsOverTimeChart from './LeadsOverTimeChart';

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
      
      <DashboardMetrics />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LeadSourceChart />
        <LeadStatusChart />
        <LeadPriorityChart />
        <LeadsOverTimeChart />
      </div>
    </div>
  );
};

export default LeadsDashboard;
