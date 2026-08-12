import type { MapElement } from "@/types/interface/topic-interface";
// import { fossilFuelsContent } from "@/components/article/content/fossilFuels";
// import { mineralsContent } from "@/components/article/content/minerals";
// import { foodContent } from "@/components/article/content/food";
// import { householdGoodsContent } from "@/components/article/content/householdGoods";
// import { fashionContent } from "@/components/article/content/fashion";
// import { electronicsContent } from "@/components/article/content/electronics";
// import { homeEnergyContent } from "@/components/article/content/homeEnergy";
// import { personalTransportationContent } from "@/components/article/content/personalTransportation";
// import { wasteContent } from "@/components/article/content/waste"; // GatewayModalContent, routes to Level 4A

export const zoomn1Elements: readonly MapElement[] = [
  {
    id: "fossil-fuels",
    src: "/map/fossil-fuels.svg",
    alt: "Fossil Fuels",
    left: "30%",
    top: "50%",
    width: "20%",
    imgWidth: 240,
    imgHeight: 240,
    content: null, // fossilFuelsContent
  },
  {
    id: "minerals",
    src: "/map/minerals.svg",
    alt: "Minerals",
    left: "65%",
    top: "50%",
    width: "20%",
    imgWidth: 240,
    imgHeight: 240,
    content: null, // mineralsContent
  },
  {
    id: "food",
    src: "/map/food.svg",
    alt: "Food",
    left: "15%",
    top: "30%",
    width: "16%",
    imgWidth: 240,
    imgHeight: 240,
    content: null, // foodContent
  },
  {
    id: "household-goods",
    src: "/map/household-goods.svg",
    alt: "Household Goods",
    left: "35%",
    top: "55%",
    width: "16%",
    imgWidth: 240,
    imgHeight: 240,
    content: null, // householdGoodsContent
  },
  {
    id: "fashion",
    src: "/map/fashion.svg",
    alt: "Fashion",
    left: "55%",
    top: "25%",
    width: "16%",
    imgWidth: 240,
    imgHeight: 240,
    content: null, // fashionContent
  },
  {
    id: "electronics",
    src: "/map/electronics.svg",
    alt: "Electronics",
    left: "70%",
    top: "55%",
    width: "16%",
    imgWidth: 240,
    imgHeight: 240,
    content: null, // electronicsContent
  },
  {
    id: "home-energy",
    src: "/map/home-energy.svg",
    alt: "Home / Energy Use",
    left: "20%",
    top: "75%",
    width: "16%",
    imgWidth: 240,
    imgHeight: 240,
    content: null, // homeEnergyContent
  },
  {
    id: "personal-transportation",
    src: "/map/personal-transportation.svg",
    alt: "Personal Transportation",
    left: "85%",
    top: "30%",
    width: "14%",
    imgWidth: 240,
    imgHeight: 240,
    content: null, // personalTransportationContent
  },
  {
    id: "waste",
    src: "/map/waste.svg",
    alt: "Waste",
    left: "45%",
    top: "85%",
    width: "14%",
    imgWidth: 240,
    imgHeight: 240,
    content: null, // wasteContent — GatewayModalContent, routes to Level 4A
  },
];
