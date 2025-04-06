
import { ResponsiveContainer, LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', sales: 4000, lastYear: 2400 },
  { month: 'Feb', sales: 3000, lastYear: 1398 },
  { month: 'Mar', sales: 9800, lastYear: 2000 },
  { month: 'Apr', sales: 3908, lastYear: 2780 },
  { month: 'May', sales: 4800, lastYear: 1890 },
  { month: 'Jun', sales: 3800, lastYear: 2390 },
  { month: 'Jul', sales: 4300, lastYear: 3490 },
  { month: 'Aug', sales: 5300, lastYear: 3000 },
  { month: 'Sep', sales: 4500, lastYear: 2500 },
  { month: 'Oct', sales: 5500, lastYear: 2800 },
  { month: 'Nov', sales: 6500, lastYear: 4300 },
  { month: 'Dec', sales: 7500, lastYear: 5000 },
];

const LineChart = () => {
  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" fontSize={12} tick={{ fill: '#666' }} />
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
          <Line type="monotone" dataKey="sales" stroke="#0078D4" activeDot={{ r: 8 }} strokeWidth={2} name="This Year" />
          <Line type="monotone" dataKey="lastYear" stroke="#767676" strokeDasharray="3 3" name="Last Year" />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
