
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lead, leadsData } from "@/data/leadsData";
import { CircleDot, Mail, Phone, UserCheck } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const LeadDetailTable = () => {
  const { toast } = useToast();
  const [leads, setLeads] = useState<Lead[]>(leadsData);

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>;
      case 'low':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Low</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">New</Badge>;
      case 'contacted':
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 hover:bg-purple-100">Contacted</Badge>;
      case 'qualified':
        return <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">Qualified</Badge>;
      case 'proposal':
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Proposal</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const handleMarkAsContacted = (id: string) => {
    setLeads(leads.map(lead => 
      lead.id === id ? { ...lead, status: 'contacted', last_contacted_at: new Date().toISOString() } : lead
    ));
    
    toast({
      title: "Lead Updated",
      description: "Lead has been marked as contacted.",
    });
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg">Recent Leads</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{`${lead.first_name} ${lead.last_name}`}</p>
                      <p className="text-xs text-muted-foreground">{lead.position}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p>{lead.company}</p>
                      <p className="text-xs text-muted-foreground">{lead.industry}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5">
                      <CircleDot 
                        className={`h-3 w-3 ${
                          (lead.lead_score || 0) >= 70 ? 'text-green-500' : 
                          (lead.lead_score || 0) >= 40 ? 'text-yellow-500' : 'text-red-500'
                        }`} 
                      />
                      <span className="font-medium">{lead.lead_score}</span>
                    </div>
                  </TableCell>
                  <TableCell>{getPriorityBadge(lead.priority)}</TableCell>
                  <TableCell>{getStatusBadge(lead.status)}</TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Phone className="h-4 w-4" />
                      </Button>
                      {lead.status === 'new' && (
                        <Button 
                          size="sm" 
                          className="h-8"
                          onClick={() => handleMarkAsContacted(lead.id)}
                        >
                          <UserCheck className="h-3.5 w-3.5 mr-1" />
                          Mark Contacted
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadDetailTable;
