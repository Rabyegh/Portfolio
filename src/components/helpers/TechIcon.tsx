import { cn } from "@/lib/utils";
import type { TechItem } from "@/data/tech";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Database } from "lucide-react";
import { useState } from "react";

type TechIconProps = {
  item: TechItem;
  className?: string;
  showTooltip?: boolean;
};

const TechIcon = ({ item, className, showTooltip = false }: TechIconProps) => {
  const [failed, setFailed] = useState(false);
  const icon = (
    <span className="relative inline-flex shrink-0 cursor-default">
      {item.icon === "database" ? (
        <Database aria-hidden="true" className={className} />
      ) : failed ? null : (
        <img
          src={item.icon}
          alt={item.name}
          onError={() => setFailed(true)}
          className={cn("block", className, item.darkIcon ? "dark:hidden" : "")}
        />
      )}
      {item.darkIcon && !failed ? (
        <img
          src={item.darkIcon}
          alt={item.name}
          onError={() => setFailed(true)}
          className={cn("hidden", className, "dark:block")}
        />
      ) : null}
    </span>
  );

  if (!showTooltip) return icon;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{icon}</TooltipTrigger>
      <TooltipContent sideOffset={5}>
        <p className="text-xs">{item.name}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default TechIcon;
