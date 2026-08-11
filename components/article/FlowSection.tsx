import { TrayArrowDown, TrayArrowUp } from "@phosphor-icons/react";
import type { TopicSection } from "./types";

interface FlowSectionProps {
  direction: "in" | "out";
  section: TopicSection;
}

/**
 * Shared component for "What comes in" and "What goes out".
 * These two are structurally identical (same shape, same condensation rule) —
 * only the direction, icon, and label differ — so one component with a
 * direction prop, not two near-duplicate files.
 */
export default function FlowSection({ direction, section }: FlowSectionProps) {
  const Icon = direction === "in" ? TrayArrowDown : TrayArrowUp;
  const label = direction === "in" ? "What comes in" : "What goes out";

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-primary flex-shrink-0" />
        <h3 className="text-sm font-semibold text-foreground">{label}</h3>
      </div>

      <div className="text-sm text-foreground leading-relaxed pl-6">
        {section.body}
      </div>

      {section.condensed && section.condensedReason && (
        <p className="text-xs text-muted-foreground italic mt-1 pl-6">
          {section.condensedReason}
        </p>
      )}
    </div>
  );
}
