import { GatewayModalContent } from "@/types/interface/topic-interface";

export const humanConsumptionContent: GatewayModalContent = {
  topicName: "Human Consumption",
  intro:
    "Human consumption is everything people use and buy in daily life. It isn't one single thing. It's a whole category, covering what we eat, wear, own, and use to get around. Every choice people make, from what's for dinner to how they travel, adds up to a huge effect on the planet. Explore below to see the different parts.",
  links: [
    { label: "Food", target: "food" },
    { label: "Household Goods", target: "household_goods" },
    { label: "Fashion", target: "fashion" },
    { label: "Electronics", target: "electronics" },
    { label: "Home / Energy Use", target: "home_energy_use" },
    { label: "Personal Transportation", target: "personal_transportation" },
  ],
};
