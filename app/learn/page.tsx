"use client";

import { useState } from "react";
import Image from "next/image";

// Each element's position is a percentage of the container, not pixels —
// this is what keeps them aligned at any screen size (see conversation notes).
// left/top = position of the element's center. width = element size as a
// percentage of container width, so it scales proportionally with everything else.
const ELEMENTS = [
  {
    id: "earth",
    src: "/map/earth.svg",
    alt: "Earth",
    left: "22%",
    top: "55%",
    width: "22%",
  },
  {
    id: "sun",
    src: "/map/sun.svg",
    alt: "The Sun",
    left: "78%",
    top: "18%",
    width: "16%",
  },
  {
    id: "atmosphere",
    src: "/map/atmosphere.svg",
    alt: "Atmosphere",
    left: "34%",
    top: "48%",
    width: "26%",
  },
] as const;

type ElementId = (typeof ELEMENTS)[number]["id"];

export default function ClimateMapZoom0() {
  const [selected, setSelected] = useState<ElementId | null>(null);

  return (
    // Outer wrapper: lets mobile scroll horizontally later without
    // affecting desktop/tablet, which just render at full width.
    <div className="w-full overflow-x-auto">
      {/*
        Fixed-ratio container (16:9 home base — see earlier discussion on
        aspect ratio). This is what guarantees every hotspot stays visible
        and clickable at any screen size: the whole composition scales as
        one block rather than being cropped (object-fit: cover) or
        stretched. On mismatched screen ratios this leaves empty space
        above/below or left/right rather than cutting anything off.
      */}
      <div className="relative w-full min-w-[640px] aspect-video bg-gradient-to-b from-slate-950 to-slate-900 rounded-lg overflow-hidden">
        {ELEMENTS.map((el) => {
          const isSelected = selected === el.id;
          return (
            <button
              key={el.id}
              type="button"
              onClick={() => setSelected(el.id)}
              aria-label={el.alt}
              className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-105 focus:outline-none"
              style={{
                left: el.left,
                top: el.top,
                width: el.width,
              }}
            >
              <Image
                src={el.src}
                alt={el.alt}
                width={200}
                height={200}
                className={`w-full h-auto transition-all duration-300 ${
                  isSelected
                    ? "drop-shadow-[0_0_25px_rgba(255,220,120,0.85)]"
                    : "drop-shadow-none"
                }`}
                priority
              />
            </button>
          );
        })}
      </div>

      {/*
        Placeholder for the modal — swap this for <TopicModalShell /> once
        content per element exists. Left minimal on purpose since this
        request was just "the div with these," not the modal wiring.
      */}
      {selected && (
        <div className="mt-3 text-sm text-muted-foreground">
          Selected: {selected}
        </div>
      )}
    </div>
  );
}
