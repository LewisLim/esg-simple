import { sunContent } from "@/components/article/content/sun";
import { atmosphereContent } from "@/components/article/content/atmosphere";
import { moonContent } from "@/components/article/content/moon";
import { earthContent } from "@/components/article/content/earth";
import type { MapElement } from "@/types/interface/topic-interface";

export const zoom1Elements: readonly MapElement[] = [
  {
    id: "earth",
    src: "/map/earth.svg",
    alt: "Earth",
    left: "22%",
    top: "55%",
    width: "22%",
    imgWidth: 240,
    imgHeight: 240,
    content: earthContent,
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
];
