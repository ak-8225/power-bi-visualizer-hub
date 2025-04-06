
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { ArrowUpRight, BarChart4, Briefcase, Building2 } from "lucide-react";

const LeadScoringSettings = () => {
  const { toast } = useToast();
  const [weights, setWeights] = useState({
    companySizeWeight: 25,
    industryWeight: 20,
    positionWeight: 30,
    valueWeight: 25,
  });

  const handleWeightChange = (factor: keyof typeof weights, value: number[]) => {
    setWeights({
      ...weights,
      [factor]: value[0],
    });
  };

  const handleSave = () => {
    // Ensure weights sum to 100%
    const total = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
    if (total !== 100) {
      toast({
        title: "Invalid weights",
        description: "Weights must sum to 100%. Please adjust your values.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Scoring settings saved",
      description: "Your lead scoring configuration has been updated.",
    });
  };

  const handleReset = () => {
    setWeights({
      companySizeWeight: 25,
      industryWeight: 20,
      positionWeight: 30,
      valueWeight: 25,
    });
    
    toast({
      title: "Settings reset",
      description: "Lead scoring weights have been reset to default values.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Lead Scoring Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-muted-foreground">
          Adjust the importance of each factor in the lead scoring algorithm.
          The total weight must sum to 100%.
        </p>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-powerbi-blue" />
                <p className="text-sm font-medium">Company Size</p>
              </div>
              <p className="text-sm font-bold">{weights.companySizeWeight}%</p>
            </div>
            <Slider 
              value={[weights.companySizeWeight]} 
              min={0} 
              max={100} 
              step={5}
              onValueChange={(value) => handleWeightChange("companySizeWeight", value)} 
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-powerbi-blue" />
                <p className="text-sm font-medium">Industry Type</p>
              </div>
              <p className="text-sm font-bold">{weights.industryWeight}%</p>
            </div>
            <Slider 
              value={[weights.industryWeight]} 
              min={0} 
              max={100} 
              step={5}
              onValueChange={(value) => handleWeightChange("industryWeight", value)} 
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ArrowUpRight className="h-4 w-4 text-powerbi-blue" />
                <p className="text-sm font-medium">Contact Position</p>
              </div>
              <p className="text-sm font-bold">{weights.positionWeight}%</p>
            </div>
            <Slider 
              value={[weights.positionWeight]} 
              min={0} 
              max={100} 
              step={5}
              onValueChange={(value) => handleWeightChange("positionWeight", value)} 
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <BarChart4 className="h-4 w-4 text-powerbi-blue" />
                <p className="text-sm font-medium">Potential Value</p>
              </div>
              <p className="text-sm font-bold">{weights.valueWeight}%</p>
            </div>
            <Slider 
              value={[weights.valueWeight]} 
              min={0} 
              max={100} 
              step={5}
              onValueChange={(value) => handleWeightChange("valueWeight", value)} 
            />
          </div>
        </div>

        <div className="flex justify-between gap-3 pt-2">
          <Button variant="outline" onClick={handleReset}>Reset to Default</Button>
          <Button onClick={handleSave}>Save Settings</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadScoringSettings;
