
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { CircleCheckBig, Database, RefreshCw, Settings2 } from "lucide-react";

const ERPIntegrationCard = () => {
  const { toast } = useToast();
  const [connected, setConnected] = useState(true);
  const [autoSync, setAutoSync] = useState(true);
  const [lastSync, setLastSync] = useState("2025-04-06 09:15:22");

  const handleDisconnect = () => {
    setConnected(false);
    
    toast({
      title: "ERP Disconnected",
      description: "Your ERP integration has been disconnected",
      variant: "destructive",
    });
  };

  const handleConnect = () => {
    setConnected(true);
    
    toast({
      title: "ERP Connected",
      description: "Successfully connected to your ERP system",
    });
  };

  const handleSyncNow = () => {
    const now = new Date();
    const formattedDate = now.toISOString().replace('T', ' ').substring(0, 19);
    setLastSync(formattedDate);
    
    toast({
      title: "Sync Complete",
      description: "Data has been synchronized with your ERP system",
    });
  };

  const handleAutoSyncToggle = () => {
    setAutoSync(!autoSync);
    
    toast({
      title: autoSync ? "Auto-sync disabled" : "Auto-sync enabled",
      description: autoSync 
        ? "You'll need to manually sync changes with your ERP system" 
        : "Changes will automatically sync with your ERP system",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">ERP Integration</CardTitle>
          {connected ? (
            <Badge className="bg-green-100 text-green-800">Connected</Badge>
          ) : (
            <Badge variant="outline" className="bg-red-100 text-red-800">Disconnected</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {connected ? (
          <>
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Database className="h-5 w-5 text-powerbi-blue" />
              </div>
              <div>
                <p className="text-sm font-medium">SAP ERP System</p>
                <p className="text-xs text-muted-foreground">Connected via API</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Last synced</p>
                  <p className="font-medium">{lastSync}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Sync status</p>
                  <div className="flex items-center gap-1 font-medium">
                    <CircleCheckBig className="h-4 w-4 text-green-600" />
                    <span>In sync</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t pt-4">
                <div>
                  <p className="text-sm font-medium">Auto-sync</p>
                  <p className="text-xs text-muted-foreground">Sync changes automatically</p>
                </div>
                <Switch checked={autoSync} onCheckedChange={handleAutoSyncToggle} />
              </div>

              <div className="flex gap-3 pt-2">
                <Button variant="outline" className="flex-1" onClick={handleSyncNow}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Sync Now
                </Button>
                <Button variant="outline" className="flex-1">
                  <Settings2 className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>

              <Button 
                variant="outline" 
                className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={handleDisconnect}
              >
                Disconnect
              </Button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4 py-6">
            <Database className="h-12 w-12 text-gray-300" />
            <div className="text-center">
              <h3 className="font-medium">Not Connected</h3>
              <p className="text-sm text-muted-foreground max-w-[250px] mx-auto mt-1">
                Connect your ERP system to sync inventory, contacts, and sales data
              </p>
            </div>
            <Button onClick={handleConnect}>Connect ERP</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ERPIntegrationCard;
