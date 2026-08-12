import { TopicModalContent } from "@/types/interface/topic-interface";

export const moonContent: TopicModalContent = {
  topicName: "Moon",
  intro: "The Moon is a large rock that orbits Earth. It is Earth's only natural satellite.",

  whatComesIn: {
    body: "Nothing goes into the Moon from Earth in a meaningful way.",
    condensed: true,
    condensedReason: "The Moon doesn't take anything from Earth. It just orbits nearby.",
  },

  whatGoesOut: {
    body: "The Moon's gravity pulls on Earth's oceans. This makes the tides go up and down. The Moon also helps keep Earth's tilt steady. This tilt is why we have seasons. Without the Moon, Earth's tilt could wobble a lot over a very long time.",
  },

  climateEffect: {
    body: "The Moon does not cause climate change and does not drive weather. Its job is different — it helps keep Earth's tilt steady over millions of years. A steady tilt means steady seasons. This is a slow, long-term effect, not something that changes climate day to day.",
    condensed: true,
    condensedReason: "The Moon doesn't heat or cool the Earth. It just helps keep Earth's tilt from wobbling over very long periods of time.",
  },

  alsoDoes: {
    body: "The Moon's pull mixes ocean water through the tides. This helps move nutrients and oxygen through the sea, which helps ocean life. The Moon also lights up the night sky. Before electric lights, animals and people used moonlight to know when to move, hunt, or rest.",
  },
};
