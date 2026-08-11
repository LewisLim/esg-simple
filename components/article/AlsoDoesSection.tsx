"use client";

import { useState } from "react";
import { Sparkle, CaretDown } from "@phosphor-icons/react";
import type { TopicSection } from "./types";

interface AlsoDoesSectionProps {
  section: TopicSection;
  /**
   * Content height (px) above which the section collapses by default.
   * Short content never shows the toggle at all — only kicks in when needed.
   */
  collapseThreshold?: number;
}

/**
 * "What else does it do" section.
 * Broader/secondary effects tend to be the longest of the four sections
 * (e.g. Sun's covers seasons, ocean currents, water cycle, food chains),
 * so this is the one place a collapse/expand toggle earns its complexity.
 *
 * Starts expanded. Only shows a toggle if content actually overflows
 * collapseThreshold — short answers never get a pointless "Show more".
 */
export default function AlsoDoesSection({
  section,
  collapseThreshold = 160,
}: AlsoDoesSectionProps) {
  const [expanded, setExpanded] = useState(true);
  const [overflowing, setOverflowing] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Sparkle className="w-4 h-4 text-primary flex-shrink-0" />
        <h3 className="text-sm font-semibold text-foreground">
          What else it does
        </h3>
      </div>

      <div
        ref={(el) => {
          if (el && el.scrollHeight > collapseThreshold && !overflowing) {
            setOverflowing(true);
          }
        }}
        className={`text-sm text-foreground leading-relaxed pl-6 ${
          !expanded && overflowing ? "overflow-hidden" : ""
        }`}
        style={
          !expanded && overflowing
            ? { maxHeight: collapseThreshold }
            : undefined
        }
      >
        {section.body}
      </div>

      {overflowing && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1 text-xs font-medium text-primary mt-1.5 ml-6 hover:underline"
        >
          {expanded ? "Show less" : "Show more"}
          <CaretDown
            className={`w-3 h-3 transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      )}

      {section.condensed && section.condensedReason && (
        <p className="text-xs text-muted-foreground italic mt-1.5 pl-6">
          {section.condensedReason}
        </p>
      )}
    </div>
  );
}
