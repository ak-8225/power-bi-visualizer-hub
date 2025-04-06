
import { useState } from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { DateRange } from 'react-day-picker';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon, FilterIcon } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export interface FilterOptions {
  source: string;
  status: string;
  priority: string;
  dateRange: DateRange | undefined;
}

interface LeadFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
}

const LeadFilters = ({ onFilterChange }: LeadFiltersProps) => {
  const [source, setSource] = useState<string>('all');
  const [status, setStatus] = useState<string>('all');
  const [priority, setPriority] = useState<string>('all');
  const [date, setDate] = useState<DateRange | undefined>(undefined);

  const handleSourceChange = (value: string) => {
    setSource(value);
    onFilterChange({ source: value, status, priority, dateRange: date });
  };

  const handleStatusChange = (value: string) => {
    setStatus(value);
    onFilterChange({ source, status: value, priority, dateRange: date });
  };

  const handlePriorityChange = (value: string) => {
    setPriority(value);
    onFilterChange({ source, status, priority: value, dateRange: date });
  };

  const handleDateChange = (range: DateRange | undefined) => {
    setDate(range);
    onFilterChange({ source, status, priority, dateRange: range });
  };

  return (
    <div className="space-y-4 mb-6 bg-card p-4 rounded-lg border">
      <div className="flex items-center mb-2">
        <FilterIcon className="mr-2 h-4 w-4" />
        <h3 className="text-sm font-medium">Filters</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="text-xs text-muted-foreground mb-1 block">Source</label>
          <Select value={source} onValueChange={handleSourceChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Sources" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sources</SelectItem>
              <SelectItem value="website">Website</SelectItem>
              <SelectItem value="referral">Referral</SelectItem>
              <SelectItem value="event">Event</SelectItem>
              <SelectItem value="social">Social</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-xs text-muted-foreground mb-1 block">Status</label>
          <Select value={status} onValueChange={handleStatusChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="qualified">Qualified</SelectItem>
              <SelectItem value="proposal">Proposal</SelectItem>
              <SelectItem value="converted">Converted</SelectItem>
              <SelectItem value="lost">Lost</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-xs text-muted-foreground mb-1 block">Priority</label>
          <ToggleGroup type="single" value={priority} onValueChange={handlePriorityChange} className="justify-start">
            <ToggleGroupItem value="all" aria-label="All priorities">
              All
            </ToggleGroupItem>
            <ToggleGroupItem value="high" aria-label="High priority">
              High
            </ToggleGroupItem>
            <ToggleGroupItem value="medium" aria-label="Medium priority">
              Medium
            </ToggleGroupItem>
            <ToggleGroupItem value="low" aria-label="Low priority">
              Low
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        <div>
          <label className="text-xs text-muted-foreground mb-1 block">Date Range</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Select date range</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={handleDateChange}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default LeadFilters;
