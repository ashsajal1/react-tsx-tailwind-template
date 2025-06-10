import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useFeatureFlags } from "@/contexts/FeatureFlagsContext";
import { Beaker } from "lucide-react";

export function AlphaModeToggle() {
  const { isAlphaMode, toggleAlphaMode } = useFeatureFlags();

  return (
    <div className="flex items-center space-x-2 p-2 bg-muted/50 rounded-lg">
      <Beaker className="h-4 w-4 text-orange-500" />
      <Switch
        id="alpha-mode"
        checked={isAlphaMode}
        onCheckedChange={toggleAlphaMode}
      />
      <Label htmlFor="alpha-mode" className="text-sm font-medium">
        Alpha Mode
      </Label>
    </div>
  );
} 