
import { Card, CardContent } from "@/components/ui/card";
import { cva } from "class-variance-authority";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface MetricsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  variant?: 'default' | 'success' | 'danger' | 'warning';
  description?: string;
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

const MetricsCard = ({ title, value, icon, trend, variant = "default", description }: MetricsCardProps) => {
  return (
    <Card className={cardVariants({ variant })}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-1.5">
              <p className="text-sm font-medium text-muted-foreground">{title}</p>
              {description && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs max-w-[200px]">{description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
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
