
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Bell, Mail, MessageSquare, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NotificationSettings = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    desktopNotifications: true,
    inAppNotifications: true,
  });

  const [emailFrequency, setEmailFrequency] = useState("daily");

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting],
    });

    toast({
      title: "Settings updated",
      description: `${setting} has been ${!settings[setting] ? "enabled" : "disabled"}.`,
    });
  };

  const handleFrequencyChange = (frequency: string) => {
    setEmailFrequency(frequency);
    
    toast({
      title: "Frequency updated",
      description: `Email notifications frequency set to ${frequency}.`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Email & Notification Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-powerbi-blue" />
              <div>
                <Label className="text-sm font-medium">Email Notifications</Label>
                <p className="text-xs text-muted-foreground">Get updates about new leads via email</p>
              </div>
            </div>
            <Switch 
              checked={settings.emailNotifications} 
              onCheckedChange={() => handleToggle("emailNotifications")} 
            />
          </div>

          {settings.emailNotifications && (
            <div className="ml-8 pl-3 border-l border-gray-200 space-y-2">
              <p className="text-xs font-medium mb-2">Notification frequency</p>
              <div className="flex gap-2">
                {["real-time", "daily", "weekly"].map((freq) => (
                  <Button
                    key={freq}
                    variant={emailFrequency === freq ? "default" : "outline"}
                    size="sm"
                    className="text-xs h-7"
                    onClick={() => handleFrequencyChange(freq)}
                  >
                    {freq.charAt(0).toUpperCase() + freq.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-powerbi-blue" />
              <div>
                <Label className="text-sm font-medium">SMS Notifications</Label>
                <p className="text-xs text-muted-foreground">Get text messages for urgent lead updates</p>
              </div>
            </div>
            <Switch 
              checked={settings.smsNotifications} 
              onCheckedChange={() => handleToggle("smsNotifications")} 
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-powerbi-blue" />
              <div>
                <Label className="text-sm font-medium">Desktop Notifications</Label>
                <p className="text-xs text-muted-foreground">
                  Show browser notifications
                  {settings.desktopNotifications && (
                    <Badge variant="outline" className="ml-2 text-[10px] py-0">
                      Enabled
                    </Badge>
                  )}
                </p>
              </div>
            </div>
            <Switch 
              checked={settings.desktopNotifications} 
              onCheckedChange={() => handleToggle("desktopNotifications")} 
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-powerbi-blue" />
              <div>
                <Label className="text-sm font-medium">In-App Notifications</Label>
                <p className="text-xs text-muted-foreground">Show notifications within the dashboard</p>
              </div>
            </div>
            <Switch 
              checked={settings.inAppNotifications} 
              onCheckedChange={() => handleToggle("inAppNotifications")} 
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;
