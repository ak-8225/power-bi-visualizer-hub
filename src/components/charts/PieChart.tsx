
import { ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Enterprise', value: 400 },
  { name: 'SMB', value: 300 },
  { name: 'Retail', value: 200 },
  { name: 'Government', value: 100 },
];

const COLORS = ['#0078D4', '#50B0F0', '#107C10', '#FFB900'];

const PieChart = () => {
  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #ccc', 
              borderRadius: '4px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }} 
            formatter={(value) => [`${value}`, 'Customers']}
          />
          <Legend />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
