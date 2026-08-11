import { Thermometer, CheckCircle, Warning } from "@phosphor-icons/react";
import type { TopicSection } from "./types";

interface ClimateEffectSectionProps {
  section: TopicSection;
}

/**
 * "How it affects climate change" section.
 *
 * This is the one section with a genuine binary worth showing visually:
 *   - No real effect (e.g. the Sun — condensed: true, condensedReason explains why)
 *   - Explains a real mechanism (e.g. cars, industry — condensed: false/undefined)
 *
 * We reuse the existing `condensed` field from TopicSection as the signal for
 * this, rather than adding a new prop — a condensed climate section IS the
 * "no meaningful effect" case by definition by how the content prompt works.
 * If that assumption ever stops holding (e.g. you want a condensed section
 * for a different reason on this specific block), this'll need a dedicated
 * `hasEffect` boolean instead — flagging that now so it's not silently baked in.
 */
export default function ClimateEffectSection({ section }: ClimateEffectSectionProps) {
  const noEffect = section.condensed;

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Thermometer className="w-4 h-4 text-primary flex-shrink-0" />
        <h3 className="text-sm font-semibold text-foreground">
          How it affects climate change
        </h3>
      </div>

      <div
        className={`rounded-md pl-3 pr-3 py-2.5 ml-6 border ${
          noEffect
            ? "bg-muted/40 border-border"
            : "bg-primary/5 border-primary/20"
        }`}
      >
        <div className="flex items-start gap-2">
          {noEffect ? (
            <CheckCircle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          ) : (
            <Warning className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          )}
          <div className="text-sm text-foreground leading-relaxed">
            {section.body}
          </div>
        </div>
      </div>

      {section.condensed && section.condensedReason && (
        <p className="text-xs text-muted-foreground italic mt-1.5 pl-6">
          {section.condensedReason}
        </p>
      )}
    </div>
  );
}
