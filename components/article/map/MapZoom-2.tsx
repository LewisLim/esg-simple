import type { MapElement } from "@/types/interface/topic-interface";
// import { burnableWasteContent } from "@/components/article/content/burnableWaste";
// import { nonBurnableWasteContent } from "@/components/article/content/nonBurnableWaste";
// import { electronicWasteContent } from "@/components/article/content/electronicWaste";
// import { plasticWasteContent } from "@/components/article/content/plasticWaste";
// import { hazardousWasteContent } from "@/components/article/content/hazardousWaste";

export const zoomn2Elements: readonly MapElement[] = [
  {
    id: "burnable-waste",
    src: "/map/burnable-waste.svg",
    alt: "Burnable Waste",
    left: "15%",
    top: "50%",
    width: "16%",
    imgWidth: 240,
    imgHeight: 240,
    content: null, // burnableWasteContent
  },
  {
    id: "non-burnable-waste",
    src: "/map/non-burnable-waste.svg",
    alt: "Non-burnable Waste",
    left: "35%",
    top: "30%",
    width: "16%",
    imgWidth: 240,
    imgHeight: 240,
    content: null, // nonBurnableWasteContent
  },
  {
    id: "electronic-waste",
    src: "/map/electronic-waste.svg",
    alt: "Electronic Waste",
    left: "55%",
    top: "55%",
    width: "16%",
    imgWidth: 240,
    imgHeight: 240,
    content: null, // electronicWasteContent
  },
  {
    id: "plastic-waste",
    src: "/map/plastic-waste.svg",
    alt: "Plastic Waste",
    left: "75%",
    top: "30%",
    width: "16%",
    imgWidth: 240,
    imgHeight: 240,
    content: null, // plasticWasteContent
  },
  {
    id: "hazardous-waste",
    src: "/map/hazardous-waste.svg",
    alt: "Hazardous Waste",
    left: "90%",
    top: "60%",
    width: "14%",
    imgWidth: 240,
    imgHeight: 240,
    content: null, // hazardousWasteContent
  },
];
