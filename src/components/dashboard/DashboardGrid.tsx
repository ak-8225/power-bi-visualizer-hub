
import { BarChart, LineChart, PieChart } from '@/components/charts';
import DashboardCard from '@/components/dashboard/DashboardCard';

const DashboardGrid = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <DashboardCard 
        title="Revenue by Region" 
        description="Monthly revenue distribution across regions" 
        chart={<BarChart />} 
        className="lg:col-span-2"
      />
      <DashboardCard 
        title="Customer Segments" 
        description="Distribution of customers by segment" 
        chart={<PieChart />} 
      />
      <DashboardCard 
        title="Monthly Sales Trend" 
        description="Sales performance over the last 12 months" 
        chart={<LineChart />} 
        className="lg:col-span-2"
      />
      <DashboardCard 
        title="Product Performance" 
        description="Top performing products by revenue" 
        chart={<BarChart />} 
      />
    </div>
  );
};

export default DashboardGrid;
