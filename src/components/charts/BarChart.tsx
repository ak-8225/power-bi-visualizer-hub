
import { ResponsiveContainer, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'North', revenue: 4000, target: 4400 },
  { name: 'South', revenue: 3000, target: 3200 },
  { name: 'East', revenue: 2000, target: 2400 },
  { name: 'West', revenue: 2780, target: 2800 },
  { name: 'Central', revenue: 1890, target: 2200 },
];

const BarChart = () => {
  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" fontSize={12} tick={{ fill: '#666' }} />
          <YAxis fontSize={12} tick={{ fill: '#666' }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #ccc', 
              borderRadius: '4px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }} 
          />
          <Legend wrapperStyle={{ paddingTop: 10 }} />
          <Bar dataKey="revenue" fill="#0078D4" name="Revenue" radius={[2, 2, 0, 0]} />
          <Bar dataKey="target" fill="#50B0F0" name="Target" radius={[2, 2, 0, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
