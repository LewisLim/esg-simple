"use client";

import { useState } from "react";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import TopicModalShell from "@/components/article/TopicModalShell";
import GatewayModalShell from "@/components/article/GatewayModalShell";
import type {
  GatewayModalContent,
  TopicModalContent,
} from "@/types/interface/topic-interface";
import type { MapElement } from "@/types/interface/topic-interface";

interface MapZoomTemplateProps {
  /** The set of clickable elements for this zoom level. Pass a different
   *  array per level (Zoom 0: Sun/Moon/Atmosphere, Zoom -1: Sea/Rivers/
   *  Forests/Soil, etc.) — everything else in this component is shared. */
  elements: readonly MapElement[];
  /** Called when a gateway node's link is clicked (e.g. Earth -> "See
   *  what's on the surface"). Wire this to your actual zoom-navigation
   *  state — this component doesn't own that state itself, so the same
   *  MapZoom instance can be used regardless of how navigation works. */
  onGatewayNavigate: (target: string) => void;
  bgColor: string;
}

export default function MapZoomTemplate({
  elements,
  onGatewayNavigate,
  bgColor,
}: MapZoomTemplateProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [modalOpened, { open, close }] = useDisclosure(false);

  const activeContent: TopicModalContent | GatewayModalContent | null =
    elements.find((el) => el.id === selectedId)?.content ?? null;

  const handleSelect = (id: string, content: MapElement["content"]) => {
    setSelectedId(id);
    if (content) {
      open();
    }
    // If content is null (topic not authored yet), the click just
    // highlights the element without opening an empty modal.
  };

  return (
    <div className="w-full overflow-x-auto">
      <div
        className={`${bgColor} relative w-full min-w-[640px] aspect-[4/3] rounded-lg overflow-hidden`}
      >
        {elements.map((el) => {
          const isSelected = selectedId === el.id;
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
                zIndex: el.zIndex,
                clipPath: el.clipPath,
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

      {activeContent && "links" in activeContent ? (
        <GatewayModalShell
          content={activeContent}
          opened={modalOpened}
          onClose={close}
          onNavigate={onGatewayNavigate}
        />
      ) : (
        <TopicModalShell
          content={activeContent}
          opened={modalOpened}
          onClose={close}
        />
      )}
    </div>
  );
}
