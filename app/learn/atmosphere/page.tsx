"use client";

import { useState } from "react";
import TopicModalShell from "@/components/article/TopicModalShell";
import type { TopicModalContent } from "@/types/interface/topic-interface";

// 1. Paste the object the content prompt gives you here.
//    This is the ONLY thing that changes per topic — everything else
//    on this page (the modal open/close logic, the shell) stays the same
//    for Sea, Soil, Cars, etc.
const atmosphereContent: TopicModalContent = {
  topicName: "Atmosphere",
  intro:
    "The atmosphere is the layer of gas that wraps around Earth. It is the air we breathe.",

  whatComesIn: {
    body: "Gases go into the atmosphere all the time. Volcanoes send out gases. Plants and animals breathe out gases. Factories and cars also add gases. Most of the atmosphere is nitrogen and oxygen, but small amounts of other gases matter a lot too.",
  },

  whatGoesOut: {
    body: "The atmosphere lets most sunlight pass through to Earth. It also holds in some heat, like a blanket. This keeps Earth warm enough for life. Without it, Earth would be freezing cold. The atmosphere also blocks harmful rays from the Sun, called UV rays, using a part of it called the ozone layer.",
  },

  climateEffect: {
    body: "The atmosphere is at the center of climate change. Gases like carbon dioxide and methane trap heat close to Earth. This is called the greenhouse effect. It happens naturally, and it's a good thing in small amounts — it keeps Earth warm enough to live on. The problem is that humans have added too much of these gases. This traps too much heat, and Earth's temperature rises.",
  },

  alsoDoes: {
    body: "The atmosphere protects us from space. It burns up small rocks called meteors before they hit the ground. It carries weather around the world — wind, rain, and storms all happen inside it. It also carries sound, which is why we can hear things. Without an atmosphere, Earth would be silent and airless, like the Moon.",
  },
};

export default function AtmospherePage() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-lg">
        <TopicModalShell
          content={atmosphereContent}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
}
