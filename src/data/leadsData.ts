
export interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  priority: 'high' | 'medium' | 'low';
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'converted' | 'lost';
  source: 'website' | 'referral' | 'event' | 'social';
  value: number;
  created_at: string;
  updated_at: string;
  last_contacted_at?: string;
  next_follow_up?: string;
  notes?: string;
  industry?: string;
  company_size?: 'Small' | 'Medium' | 'Large';
  revenue?: number;
}

export const leadsData: Lead[] = [
  {
    id: 'ab52b865-2398-4acb-abd5-9056e285ec4e',
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Acme Corp',
    position: 'CTO',
    priority: 'high',
    status: 'contacted',
    source: 'website',
    value: 50000,
    created_at: '2025-04-03 18:59:10.402863',
    updated_at: '2025-04-03 18:59:10.402863',
    notes: 'Interested in our enterprise solution. Needs proposals',
    industry: 'Technology',
    company_size: 'Medium'
  },
  {
    id: '184c5636-20b2-47ae-9abe-017fa7d22edb',
    first_name: 'Jane',
    last_name: 'Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 987-6543',
    company: 'Tech Solutions Inc',
    position: 'Marketing Director',
    priority: 'medium',
    status: 'new',
    source: 'referral',
    value: 25000,
    created_at: '2025-04-03 18:59:10.402863',
    updated_at: '2025-04-03 18:59:10.402863',
    notes: 'Referred by Mike Johnson. Looking for marketing solutions',
    industry: 'Technology',
    company_size: 'Small'
  },
  {
    id: '34bb2146-9d11-4809-b072-dbf2752e0490',
    first_name: 'Robert',
    last_name: 'Brown',
    email: 'robert.brown@example.com',
    phone: '+1 (555) 567-8901',
    company: 'Global Enterprises',
    position: 'CEO',
    priority: 'high',
    status: 'qualified',
    source: 'event',
    value: 100000,
    created_at: '2025-04-03 18:59:10.402863',
    updated_at: '2025-04-03 18:59:10.402863',
    notes: 'Met at Tech Conference 2023. Very interested in our services',
    industry: 'Finance',
    company_size: 'Large'
  },
  {
    id: '9a9ab569-44a8-4206-b366-20b510e65142',
    first_name: 'Emily',
    last_name: 'Davis',
    email: 'emily.davis@example.com',
    phone: '+1 (555) 345-6789',
    company: 'Creative Designs',
    position: 'Art Director',
    priority: 'low',
    status: 'new',
    source: 'social',
    value: 10000,
    created_at: '2025-04-03 18:59:10.402863',
    updated_at: '2025-04-03 18:59:10.402863',
    notes: 'Found us on LinkedIn. Requested more information.',
    industry: 'Design',
    company_size: 'Small'
  },
  {
    id: '171398e0-93b8-4ce0-8d82-d96a16b1fc05',
    first_name: 'Michael',
    last_name: 'Wilson',
    email: 'michael.wilson@example.com',
    phone: '+1 (555) 234-5678',
    company: 'Innovative Solutions',
    position: 'IT Manager',
    priority: 'medium',
    status: 'proposal',
    source: 'website',
    value: 35000,
    created_at: '2025-04-03 18:59:10.402863',
    updated_at: '2025-04-03 18:59:10.402863',
    notes: 'Proposal sent. Waiting for feedback.',
    industry: 'Healthcare',
    company_size: 'Medium'
  }
];

// Calculate metrics from the leads data
export const getTotalLeads = () => leadsData.length;

export const getHotLeads = () => leadsData.filter(lead => lead.priority === 'high').length;

export const getConversionRate = () => {
  const convertedLeads = leadsData.filter(lead => lead.status === 'converted').length;
  return ((convertedLeads / leadsData.length) * 100).toFixed(1);
};

export const getPendingFollowUps = () => {
  // For demo purposes, assume 2 leads need follow up
  return 2;
};

export const getLeadsBySource = () => {
  const sources = ['website', 'referral', 'event', 'social'];
  return sources.map(source => ({
    name: source.charAt(0).toUpperCase() + source.slice(1),
    value: leadsData.filter(lead => lead.source === source).length
  }));
};

export const getLeadsByStatus = () => {
  const statuses = ['new', 'contacted', 'qualified', 'proposal', 'converted', 'lost'];
  return statuses.map(status => ({
    name: status.charAt(0).toUpperCase() + status.slice(1),
    value: leadsData.filter(lead => lead.status === status).length
  }));
};

export const getLeadsByPriority = () => {
  const priorities = ['high', 'medium', 'low'];
  return priorities.map(priority => ({
    name: priority.charAt(0).toUpperCase() + priority.slice(1),
    value: leadsData.filter(lead => lead.priority === priority).length
  }));
};

export const getNewLeadsOverTime = () => {
  // Sample data for demonstration purposes
  return [
    { month: 'Jan', leads: 12 },
    { month: 'Feb', leads: 19 },
    { month: 'Mar', leads: 15 },
    { month: 'Apr', leads: 25 },
    { month: 'May', leads: 32 },
    { month: 'Jun', leads: 28 }
  ];
};
