
import { getNewLeadsOverTime } from '@/data/leadsData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LeadsOverTimeChart = () => {
  return (
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
  );
};

export default LeadsOverTimeChart;
