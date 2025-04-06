
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface LeadScoreGaugeProps {
  score: number;
  title?: string;
}

const LeadScoreGauge = ({ score, title = "Lead Score" }: LeadScoreGaugeProps) => {
  // Normalize score between 0 and 100
  const normalizedScore = Math.min(Math.max(score, 0), 100);
  
  // Define color based on score range
  const getColor = (score: number) => {
    if (score < 40) return "#ef4444"; // Red for low scores
    if (score < 70) return "#f97316"; // Orange for medium scores
    return "#22c55e"; // Green for high scores
  };
  
  const scoreColor = getColor(normalizedScore);
  
  // Create data for the gauge chart
  const data = [
    { name: "Score", value: normalizedScore },
    { name: "Remaining", value: 100 - normalizedScore }
  ];
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="w-full h-[180px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                startAngle={180}
                endAngle={0}
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                <Cell key="score" fill={scoreColor} />
                <Cell key="remaining" fill="#e5e7eb" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-5xl font-bold" style={{ color: scoreColor }}>
                {normalizedScore}
              </p>
              <p className="text-xs text-muted-foreground">out of 100</p>
            </div>
          </div>
        </div>
        <div className="w-full pt-4 grid grid-cols-3 text-center text-xs">
          <div>
            <div className="h-2 w-12 mx-auto rounded-full bg-red-500 mb-1"></div>
            <p>Low (0-40)</p>
          </div>
          <div>
            <div className="h-2 w-12 mx-auto rounded-full bg-orange-500 mb-1"></div>
            <p>Medium (41-70)</p>
          </div>
          <div>
            <div className="h-2 w-12 mx-auto rounded-full bg-green-500 mb-1"></div>
            <p>High (71-100)</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadScoreGauge;
