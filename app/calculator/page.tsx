"use client"

import DependencyPage from "@/components/calculator/DependencyPage";
import FoodPage from "@/components/calculator/FoodPage";
import HouseAgePage from "@/components/calculator/HouseAgePage";
import HousePeoplePage from "@/components/calculator/HousePeoplePage";
import HouseSizePage from "@/components/calculator/HouseSizePage";
import ShoppingPage from "@/components/calculator/ShoppingPage";
import TransportPage from "@/components/calculator/TransportPage";
import TravelPage from "@/components/calculator/TravelPage";
import WelcomePage from "@/components/calculator/WelcomePage";

export default function Calculator() {
  return (
    <div className="w-full flex-col flex-center">
      <WelcomePage />
      <DependencyPage />
      <TransportPage />
      <TravelPage />
      <FoodPage />
      <HousePeoplePage />
      <HouseSizePage />
      <HouseAgePage />
      <ShoppingPage />
    </div>
  );
}
