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
  label: number;
  /** Whatever identifies a zoom level/target in your map's navigation state.
   *  Adjust the type once your zoom-state system is built — string is a
   *  safe placeholder for now (e.g. "level1", "level1a"). */
  target: string;
}

export interface MapElement {
  id: string;
  src: string;
  alt: string;
  /** Position as a percentage of the container — see conversation notes on
   *  why percentage (not pixel) positioning is what keeps hotspots aligned
   *  across screen sizes. */
  left: string;
  top: string;
  width: string;
  /** Real aspect ratio of the SVG file (viewBox width/height), used only
   *  as a layout-shift-prevention hint for next/image — NOT the rendered
   *  size, which is controlled by `width` above + w-full h-auto. */
  imgWidth: number;
  imgHeight: number;
  /** Stacking order within the scene. Higher = rendered on top. Optional —
   *  elements without it default to DOM/array order (later = on top),
   *  same as normal CSS stacking. Set this explicitly when you need one
   *  element behind another regardless of array position (e.g. Atmosphere
   *  behind Earth, since it's visually larger and would otherwise cover it). */
  zIndex?: number;
  clipPath?: string;
  /** null if this topic hasn't been authored yet — click highlights the
   *  element but doesn't open an empty modal. */
  content: TopicModalContent | GatewayModalContent | null;
}
