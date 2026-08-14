import { sunContent } from "@/components/article/content/zoom0/sun";
import { atmosphereContent } from "@/components/article/content/zoom0/atmosphere";
import { moonContent } from "@/components/article/content/zoom0/moon";
import { earthContent } from "@/components/article/content/zoom0/earth";
import type { MapElement } from "@/types/interface/topic-interface";

export const zoom1Elements: readonly MapElement[] = [
  {
    id: "earth",
    src: "/map/earth.png",
    alt: "Earth",
    left: "30%",
    top: "55%",
    width: "40%",
    imgWidth: 700,
    imgHeight: 700,
    zIndex: 2,
    clipPath: "circle(50%)",
    content: earthContent,
  },
  {
    id: "sun",
    src: "/map/sun.png",
    alt: "The Sun",
    left: "78%",
    top: "25%",
    width: "20%",
    imgWidth: 700,
    imgHeight: 700,
    clipPath: "circle(50%)",
    content: sunContent,
  },
  {
    id: "atmosphere",
    src: "/map/atmosphere.png",
    alt: "Atmosphere",
    left: "31%",
    top: "54%",
    width: "41%",
    imgWidth: 700,
    imgHeight: 700,
    zIndex: 1,
    clipPath: "circle(50%)",
    content: atmosphereContent,
  },
  {
    id: "moon",
    src: "/map/moon.png",
    alt: "Moon",
    left: "58%",
    top: "80%",
    width: "12%",
    imgWidth: 700,
    imgHeight: 700,
    clipPath: "circle(50%)",
    content: moonContent,
  },
];
