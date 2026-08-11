"use client";

import { useState } from "react";
import TopicModalShell from "@/components/article/TopicModalShell";
import type { TopicModalContent } from "@/types/interface/topic-interface";

// 1. Paste the object the content prompt gives you here.
//    This is the ONLY thing that changes per topic — everything else
//    on this page (the modal open/close logic, the shell) stays the same
//    for Sea, Soil, Cars, etc.
const sunContent: TopicModalContent = {
  topicName: "Sun",
  intro: "The Sun is a giant ball of burning gas. It gives off light and heat.",

  whatComesIn: {
    body: "Nothing comes into the Sun from Earth.",
    condensed: true,
    condensedReason:
      "The Sun doesn't need anything from Earth to keep shining.",
  },

  whatGoesOut: {
    body: "The Sun sends out light and heat. This energy travels through space to Earth. Light helps plants grow. Plants use sunlight to make food. This is called photosynthesis. Heat from the Sun warms the air, land, and oceans. Heat also causes water to evaporate. That means water turns from liquid into gas and rises into the sky. This is how rain clouds form.",
  },

  climateEffect: {
    body: "The Sun does not cause climate change. Its heat has stayed about the same for billions of years. The real problem is on Earth, not the Sun. Gases like carbon dioxide build up in our air. These gases trap heat close to Earth, like a blanket. That's what makes the planet warmer.",
    condensed: true,
    condensedReason:
      "The Sun isn't changing. The extra heat comes from gases trapping it on Earth.",
  },

  alsoDoes: {
    body: "The Sun creates seasons. As Earth moves around the Sun, different parts of the planet get more or less sunlight at different times of the year. The Sun powers ocean currents. It heats different parts of the ocean by different amounts. This makes warm and cold water move around the world. The Sun also drives the water cycle. Its heat lifts water into the sky. That water later falls back down as rain. The Sun is the base of almost all food chains. Plants use its energy to grow. Animals eat plants. Other animals eat those animals.",
  },
};

export default function SunPage() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-lg">
        <TopicModalShell content={sunContent} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}
