import type { MapElement } from "@/types/interface/topic-interface";
import { seaContent } from "@/components/article/content/zoom1/sea";
import { riversContent } from "@/components/article/content/zoom1/rivers";
import { forestsContent } from "@/components/article/content/zoom1/forests";
import { soilContent } from "@/components/article/content/zoom1/soil";
import { deepEarthContent } from "@/components/article/content/zoom1/deep-earth"; // GatewayModalContent
import { humanConsumptionContent } from "@/components/article/content/zoom1/human-consumption"; // GatewayModalContent
import { factoriesContent } from "@/components/article/content/zoom1/factories";
import { agricultureContent } from "@/components/article/content/zoom1/agriculture";
import { energyContent } from "@/components/article/content/zoom1/energy";
import { transportationContent } from "@/components/article/content/zoom1/transportation";

export const zoom0Elements: readonly MapElement[] = [
  {
    id: "sea",
    src: "/map/sea.svg",
    alt: "Sea",
    left: "70%",
    top: "60%",
    width: "26%",
    imgWidth: 240,
    imgHeight: 240,
    content: seaContent,
  },
  {
    id: "rivers",
    src: "/map/rivers.svg",
    alt: "Rivers",
    left: "45%",
    top: "45%",
    width: "10%",
    imgWidth: 240,
    imgHeight: 240,
    content: riversContent,
  },
  {
    id: "forests",
    src: "/map/forests.svg",
    alt: "Forests",
    left: "18%",
    top: "35%",
    width: "18%",
    imgWidth: 240,
    imgHeight: 240,
    content: forestsContent,
  },
  {
    id: "soil",
    src: "/map/soil.svg",
    alt: "Soil",
    left: "30%",
    top: "70%",
    width: "20%",
    imgWidth: 240,
    imgHeight: 240,
    content: soilContent,
  },
  {
    id: "deep-earth",
    src: "/map/deep-earth.svg",
    alt: "Deep Earth",
    left: "60%",
    top: "82%",
    width: "12%",
    imgWidth: 240,
    imgHeight: 240,
    content: deepEarthContent,
  },
  {
    id: "human-consumption",
    src: "/map/human-consumption.svg",
    alt: "Human Consumption",
    left: "85%",
    top: "20%",
    width: "12%",
    imgWidth: 240,
    imgHeight: 240,
    content: humanConsumptionContent,
  },
  {
    id: "factories",
    src: "/map/factories.svg",
    alt: "Factories / Manufacturing",
    left: "62%",
    top: "30%",
    width: "14%",
    imgWidth: 240,
    imgHeight: 240,
    content: factoriesContent,
  },
  {
    id: "agriculture",
    src: "/map/agriculture.svg",
    alt: "Agriculture / Farms",
    left: "10%",
    top: "60%",
    width: "16%",
    imgWidth: 240,
    imgHeight: 240,
    content: agricultureContent,
  },
  {
    id: "energy",
    src: "/map/energy.svg",
    alt: "Energy / Power Generation",
    left: "78%",
    top: "45%",
    width: "12%",
    imgWidth: 240,
    imgHeight: 240,
    content: energyContent,
  },
  {
    id: "transportation",
    src: "/map/transportation.svg",
    alt: "Transportation",
    left: "50%",
    top: "10%",
    width: "14%",
    imgWidth: 240,
    imgHeight: 240,
    content: transportationContent,
  },
];
