import type { MapElement } from "@/types/interface/topic-interface";
// import { seaContent } from "@/components/article/content/sea";
// import { riversContent } from "@/components/article/content/rivers";
// import { forestsContent } from "@/components/article/content/forests";
// import { soilContent } from "@/components/article/content/soil";
// import { deepEarthContent } from "@/components/article/content/deepEarth"; // GatewayModalContent
// import { humanConsumptionContent } from "@/components/article/content/humanConsumption"; // GatewayModalContent
// import { factoriesContent } from "@/components/article/content/factories";
// import { agricultureContent } from "@/components/article/content/agriculture";
// import { energyContent } from "@/components/article/content/energy";
// import { transportationContent } from "@/components/article/content/transportation";

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
    content: null, // seaContent
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
    content: null, // riversContent
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
    content: null, // forestsContent
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
    content: null, // soilContent
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
    content: null, // deepEarthContent — GatewayModalContent, routes to Level 1A
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
    content: null, // humanConsumptionContent — GatewayModalContent, routes to Level 3
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
    content: null, // factoriesContent
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
    content: null, // agricultureContent
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
    content: null, // energyContent
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
    content: null, // transportationContent
  },
];
