
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  PanelLeftIcon, 
  ChevronLeft, 
  ChevronRight, 
  LayoutDashboard, 
  BarChart2, 
  PieChart, 
  LineChart, 
  Settings, 
  Home, 
  HelpCircle, 
  Users 
} from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const sidebarItems = [
    { name: 'Home', icon: Home, active: false },
    { name: 'Dashboards', icon: LayoutDashboard, active: true },
    { name: 'Leads', icon: Users, active: false },
    { name: 'Reports', icon: BarChart2, active: false },
    { name: 'Analytics', icon: LineChart, active: false },
    { name: 'Data Sets', icon: PieChart, active: false },
  ];

  const bottomItems = [
    { name: 'Settings', icon: Settings, active: false },
    { name: 'Help', icon: HelpCircle, active: false },
  ];

  return (
    <div className={cn(
      "relative h-screen border-r bg-background transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex h-14 items-center border-b px-3">
        <div className={cn(
          "flex items-center gap-2 font-semibold transition-all duration-300",
          collapsed ? "opacity-0 invisible" : "opacity-100 visible"
        )}>
          <PanelLeftIcon className="h-5 w-5 text-powerbi-blue" />
          <span className="text-powerbi-blue">Power BI Hub</span>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-1 rounded-full ml-auto"
          onClick={toggleSidebar}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      
      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <Button
                  key={item.name}
                  variant={item.active ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    item.active ? "bg-powerbi-blue text-white hover:bg-powerbi-dark-blue" : ""
                  )}
                >
                  <item.icon className={cn("h-5 w-5 mr-2", collapsed ? "mr-0" : "mr-2")} />
                  {!collapsed && <span>{item.name}</span>}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-4 w-full px-3">
            <div className="space-y-1">
              {bottomItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full justify-start"
                >
                  <item.icon className={cn("h-5 w-5 mr-2", collapsed ? "mr-0" : "mr-2")} />
                  {!collapsed && <span>{item.name}</span>}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
