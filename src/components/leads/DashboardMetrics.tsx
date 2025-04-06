
import { 
  getConversionRate, 
  getHotLeads, 
  getPendingFollowUps, 
  getTotalLeads 
} from '@/data/leadsData';
import MetricsCard from './MetricsCard';
import { Users, Flame, TrendingUp, Clock } from 'lucide-react';

const DashboardMetrics = () => {
  return (
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
  );
};

export default DashboardMetrics;
