"use client";

import { CSSProperties } from "react";

type Position =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

interface PointerArrowProps {
  /** Which direction the arrow points, relative to the label/anchor */
  position: Position;
  /** Text shown at the tail end of the arrow */
  label?: string;
  /** Arrow + text color */
  color?: string;
  /** Size of the arrow icon in px */
  size?: number;
  /** Extra classes for the wrapper (for positioning via absolute/fixed) */
  className?: string;
  /** Inline style overrides for the wrapper */
  style?: CSSProperties;
}

// Rotation so the arrow visually points in the right direction.
// Base SVG is drawn pointing DOWN (top -> down), i.e. "top" position = arrow pointing down at the target from above.
const ROTATION: Record<Position, number> = {
  top: 0, // points down
  bottom: 180, // points up
  left: 90, // points left
  right: -90, // points right
  topLeft: -45,
  topRight: 45,
  bottomLeft: -135,
  bottomRight: 135,
};

// bob direction so the animation moves along the arrow's axis, not just up/down always
const BOB_TRANSFORM: Record<Position, { a: string; b: string }> = {
  top: { a: "translateY(0px)", b: "translateY(8px)" },
  bottom: { a: "translateY(0px)", b: "translateY(-8px)" },
  left: { a: "translateX(0px)", b: "translateX(8px)" },
  right: { a: "translateX(0px)", b: "translateX(-8px)" },
  topLeft: { a: "translate(0px,0px)", b: "translate(-16px,6px)" },
  topRight: { a: "translate(-10px,36px)", b: "translate(-10px,20px)" },
  bottomLeft: { a: "translate(0px,0px)", b: "translate(-6px,-6px)" },
  bottomRight: { a: "translate(0px,0px)", b: "translate(6px,-6px)" },
};

// layout: whether label sits above/below/left/right of the arrow, based on position
const LAYOUT: Record<Position, CSSProperties["flexDirection"]> = {
  top: "column", // label above, arrow points down below it
  bottom: "column-reverse",
  left: "row-reverse", // arrow first, then label -> "<- Click here"
  right: "row", // label first, then arrow -> "Click here ->"
  topLeft: "column",
  topRight: "column",
  bottomLeft: "column-reverse",
  bottomRight: "column-reverse",
};

export default function PointerArrow({
  position,
  label,
  color = "#111827",
  size = 32,
  className,
  style,
}: PointerArrowProps) {
  const animName = `pointerArrowBob-${position}`;

  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        flexDirection: LAYOUT[position],
        alignItems: "center",
        gap: 6,
        pointerEvents: "none",
        ...style,
      }}
    >
      {label && (
        <span
          style={{
            color,
            fontSize: 14,
            fontWeight: 600,
            whiteSpace: "nowrap",
            textShadow: "0 1px 2px rgba(0,0,0,0.15)",
          }}
        >
          {label}
        </span>
      )}

      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        style={{
          transform: `rotate(${ROTATION[position]}deg)`,
          animation: `${animName} 1s ease-in-out infinite`,
        }}
      >
        <path
          d="M12 3v14M12 17l-6-6M12 17l6-6"
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <style jsx>{`
        @keyframes ${animName} {
          0%,
          100% {
            transform: rotate(${ROTATION[position]}deg)
              ${BOB_TRANSFORM[position].a};
          }
          50% {
            transform: rotate(${ROTATION[position]}deg)
              ${BOB_TRANSFORM[position].b};
          }
        }
      `}</style>
    </div>
  );
}
