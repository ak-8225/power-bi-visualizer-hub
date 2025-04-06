
import { Card, CardContent } from "@/components/ui/card";
import { cva } from "class-variance-authority";

interface MetricsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  variant?: 'default' | 'success' | 'danger' | 'warning';
}

const cardVariants = cva("", {
  variants: {
    variant: {
      default: "border-l-4 border-l-powerbi-blue",
      success: "border-l-4 border-l-powerbi-green",
      danger: "border-l-4 border-l-powerbi-red",
      warning: "border-l-4 border-l-powerbi-yellow",
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

const MetricsCard = ({ title, value, icon, trend, variant = "default" }: MetricsCardProps) => {
  return (
    <Card className={cardVariants({ variant })}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-4xl font-bold mt-2">{value}</h3>
            {trend && (
              <p className={`text-xs mt-2 flex items-center ${trend.isPositive ? 'text-powerbi-green' : 'text-powerbi-red'}`}>
                {trend.isPositive ? '↑' : '↓'} {trend.value}
              </p>
            )}
          </div>
          <div className="text-powerbi-blue">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricsCard;
