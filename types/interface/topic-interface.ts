// Shared types for the topic modal shell.
// Content for each topic (Sun, Sea, Soil, etc.) is authored to match this shape,
// then passed into <TopicModalShell />.

import type { ComponentType, ReactNode } from "react";

export interface TopicModalContent {
  /** e.g. "Sun", "Sea", "Cars" — used for the modal header */
  topicName: string;

  /** Optional icon representing the topic, shown next to the name in the header */
  icon?: ComponentType<{ className?: string }>;

  /**
   * Section 0: short intro / hook.
   * 1-2 sentences. Not numbered, no header — rendered directly under the topic name.
   */
  intro: string;

  /**
   * Section 1: What comes in.
   * If the section was condensed/omitted per the content prompt's omission rule,
   * set `condensed: true` and explain why in `condensedReason`.
   */
  whatComesIn: TopicSection;

  /** Section 2: What goes out. Same condensation rules as above. */
  whatGoesOut: TopicSection;

  /** Section 3: How it affects climate change. Should not force a connection that isn't real. */
  climateEffect: TopicSection;

  /** Section 4: What else does it do (broader, non-climate effects). */
  alsoDoes: TopicSection;
}

export interface TopicSection {
  /** Main body content. Can be plain text or pre-split into paragraphs/bullets by the caller. */
  body: ReactNode;

  /** True if this section was condensed to a single line because it's minimal/not applicable. */
  condensed?: boolean;

  /** Required if condensed is true — one short line explaining why. */
  condensedReason?: string;
}

export interface GatewayModalContent {
  topicName: string;
  /** Longer than a regular topic's intro — this carries the section weight
   *  a gateway node doesn't have, since it has no in/out/climate/else sections. */
  intro: string;
  links: GatewayLink[];
}

export interface GatewayLink {
  label: string;
  /** Whatever identifies a zoom level/target in your map's navigation state.
   *  Adjust the type once your zoom-state system is built — string is a
   *  safe placeholder for now (e.g. "level1", "level1a"). */
  target: string;
}
