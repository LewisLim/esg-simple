"use client";

import { useState } from "react";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import TopicModalShell from "@/components/article/TopicModalShell";
import { sunContent } from "@/components/article/content/sun";
import { atmosphereContent } from "@/components/article/content/atmosphere";
import { moonContent } from "@/components/article/content/moon";
import type { TopicModalContent } from "@/types/interface/topic-interface";

const ELEMENTS = [
  {
    id: "earth",
    src: "/map/earth.svg",
    alt: "Earth",
    left: "22%",
    top: "55%",
    width: "22%",
    imgWidth: 240,
    imgHeight: 240,
    content: null, // no Earth content yet — clicking does nothing until you write it
  },
  {
    id: "sun",
    src: "/map/sun.svg",
    alt: "The Sun",
    left: "78%",
    top: "18%",
    width: "16%",
    imgWidth: 240,
    imgHeight: 240,
    content: sunContent,
  },
  {
    id: "atmosphere",
    src: "/map/atmosphere.svg",
    alt: "Atmosphere",
    left: "34%",
    top: "48%",
    width: "26%",
    imgWidth: 240,
    imgHeight: 240,
    content: atmosphereContent,
  },
  {
    id: "moon",
    src: "/map/moon.svg", // adjust path once the moon SVG is in /public/map
    alt: "Moon",
    left: "45%",
    top: "80%",
    width: "6%",
    imgWidth: 240,
    imgHeight: 240,
    content: moonContent,
  },
] as const;

type ElementId = (typeof ELEMENTS)[number]["id"];

export default function ClimateMapZoom0() {
  const [selected, setSelected] = useState<ElementId | null>(null);
  const [modalOpened, { open, close }] = useDisclosure(false);

  const activeContent: TopicModalContent | null =
    ELEMENTS.find((el) => el.id === selected)?.content ?? null;

  const handleSelect = (id: ElementId, content: TopicModalContent | null) => {
    setSelected(id);
    if (content) {
      open();
    }
    // If content is null (e.g. Earth not written yet), the click just
    // highlights the element without opening a modal — avoids opening
    // an empty modal for topics you haven't authored content for.
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="relative w-full min-w-[640px] aspect-video bg-gradient-to-b from-slate-950 to-slate-900 rounded-lg overflow-hidden">
        {ELEMENTS.map((el) => {
          const isSelected = selected === el.id;
          return (
            <button
              key={el.id}
              type="button"
              onClick={() => handleSelect(el.id, el.content)}
              aria-label={el.alt}
              className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-105 focus:outline-none cursor-pointer"
              style={{
                left: el.left,
                top: el.top,
                width: el.width,
              }}
            >
              <Image
                src={el.src}
                alt={el.alt}
                width={el.imgWidth}
                height={el.imgHeight}
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

      <TopicModalShell
        content={activeContent}
        opened={modalOpened}
        onClose={close}
      />
    </div>
  );
}
