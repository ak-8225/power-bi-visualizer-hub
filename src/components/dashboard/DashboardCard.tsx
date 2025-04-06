
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BarChart, DownloadIcon, MoreHorizontal, ExpandIcon } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface DashboardCardProps {
  title: string;
  description: string;
  chart: React.ReactNode;
  className?: string;
}

const DashboardCard = ({
  title,
  description,
  chart,
  className,
}: DashboardCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Card 
      className={cn("overflow-hidden transition-all duration-200", 
        isHovering ? "shadow-md" : "shadow-sm",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-base font-medium">{title}</CardTitle>
            <CardDescription className="text-xs mt-1">{description}</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuItem className="cursor-pointer">
                <ExpandIcon className="h-4 w-4 mr-2" />
                <span>Expand</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <DownloadIcon className="h-4 w-4 mr-2" />
                <span>Download</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-3">
        {chart}
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
