"use client";

import { X } from "@phosphor-icons/react";
import type { TopicModalContent } from "@/types/interface/topic-interface";
import FlowSection from "./FlowSection";
import ClimateEffectSection from "./ClimateEffectSection";
import AlsoDoesSection from "./AlsoDoesSection";

interface TopicModalShellProps {
  content: TopicModalContent;
  onClose?: () => void;
}

/**
 * Neutral shell for topic modals (Sun, Sea, Soil, Cars, etc).
 * Renders the fixed 5-part structure: intro, what comes in, what goes out,
 * climate effect, what else it does.
 *
 * Visual identity is intentionally minimal — this content lives inside a
 * modal triggered from a clickable map, so the shell should stay quiet and
 * legible rather than carry its own per-topic theme. Content supplies the
 * personality; the shell supplies consistent structure.
 */
export default function TopicModalShell({
  content,
  onClose,
}: TopicModalShellProps) {
  const { topicName, icon: Icon, intro } = content;

  return (
    <div className="bg-white rounded-lg w-full max-h-[85vh] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 px-5 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-border">
        <div className="flex items-center gap-3 min-w-0">
          {Icon && (
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
          )}
          <div className="min-w-0">
            <h2 className="text-lg font-medium text-foreground leading-tight">
              {topicName}
            </h2>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Scrollable body */}
      <div className="overflow-y-auto px-5 sm:px-6 py-5 sm:py-6 space-y-6">
        {/* Intro hook — no header, no number, just orientation */}
        <p className="text-base text-foreground leading-relaxed">{intro}</p>

        <FlowSection direction="in" section={content.whatComesIn} />
        <FlowSection direction="out" section={content.whatGoesOut} />
        <ClimateEffectSection section={content.climateEffect} />
        <AlsoDoesSection section={content.alsoDoes} />
      </div>
    </div>
  );
}
