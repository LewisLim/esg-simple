"use client";

import { Modal } from "@mantine/core";
import {
  TrayArrowDown,
  TrayArrowUp,
  Thermometer,
  Sparkle,
} from "@phosphor-icons/react";
import type {
  TopicModalContent,
  TopicSection,
} from "@/types/interface/topic-interface";

interface TopicModalShellProps {
  content: TopicModalContent | null;
  opened: boolean;
  onClose: () => void;
}

/**
 * Renders topic content (Sun, Atmosphere, Moon, etc.) inside a Mantine
 * Modal. Content stays neutral/white per earlier decision — the modal
 * itself carries no per-topic theme, just structure.
 */
export default function TopicModalShell({
  content,
  opened,
  onClose,
}: TopicModalShellProps) {
  if (!content) return null;

  const { topicName, icon: Icon, intro } = content;

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
          )}
          <span className="text-lg font-medium text-foreground">
            {topicName}
          </span>
        </div>
      }
      centered
      size="lg"
      radius="md"
      overlayProps={{ backgroundOpacity: 0.5, blur: 2 }}
    >
      <div className="space-y-6 pb-2">
        <p className="text-base text-foreground leading-relaxed">{intro}</p>

        <FlowSection direction="in" section={content.whatComesIn} />
        <FlowSection direction="out" section={content.whatGoesOut} />
        <ClimateEffectSection section={content.climateEffect} />
        <AlsoDoesSection section={content.alsoDoes} />
      </div>
    </Modal>
  );
}

function FlowSection({
  direction,
  section,
}: {
  direction: "in" | "out";
  section: TopicSection;
}) {
  const Icon = direction === "in" ? TrayArrowDown : TrayArrowUp;
  const label = direction === "in" ? "What comes in" : "What goes out";

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-7 h-7 text-primary flex-shrink-0" />
        <h3 className="text-sm font-semibold text-foreground">{label}</h3>
      </div>
      <div className="text-sm text-foreground leading-relaxed pl-9">
        {section.body}
      </div>
      {section.condensed && section.condensedReason && (
        <p className="text-xs text-muted-foreground italic mt-1 pl-9">
          {section.condensedReason}
        </p>
      )}
    </div>
  );
}

function ClimateEffectSection({ section }: { section: TopicSection }) {
  const noEffect = section.condensed;

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Thermometer className="w-7 h-7 text-primary flex-shrink-0" />
        <h3 className="text-sm font-semibold text-foreground">
          How it affects climate change
        </h3>
      </div>
      <div
        className={`rounded-md pl-3 pr-3 py-2.5 ml-9 border ${
          noEffect
            ? "bg-muted/40 border-border"
            : "bg-primary/5 border-primary/20"
        }`}
      >
        <div className="text-sm text-foreground leading-relaxed">
          {section.body}
        </div>
      </div>
      {section.condensed && section.condensedReason && (
        <p className="text-xs text-muted-foreground italic mt-1.5 pl-12">
          {section.condensedReason}
        </p>
      )}
    </div>
  );
}

function AlsoDoesSection({ section }: { section: TopicSection }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Sparkle className="w-7 h-7 text-primary flex-shrink-0" />
        <h3 className="text-sm font-semibold text-foreground">
          What else it does
        </h3>
      </div>
      <div className="text-sm text-foreground leading-relaxed pl-9">
        {section.body}
      </div>
      {section.condensed && section.condensedReason && (
        <p className="text-xs text-muted-foreground italic mt-1.5 pl-9">
          {section.condensedReason}
        </p>
      )}
    </div>
  );
}
