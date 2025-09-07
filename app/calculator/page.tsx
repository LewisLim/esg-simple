"use client";

import { useState } from "react";
import DependencyPage from "@/components/calculator/DependencyPage";
import FoodPage from "@/components/calculator/FoodPage";
import HouseAgePage from "@/components/calculator/HouseAgePage";
import HousePeoplePage from "@/components/calculator/HousePeoplePage";
import HouseSizePage from "@/components/calculator/HouseSizePage";
import ShoppingPage from "@/components/calculator/ShoppingPage";
import TransportPage from "@/components/calculator/TransportPage";
import TravelPage from "@/components/calculator/TravelPage";
import WelcomePage from "@/components/calculator/WelcomePage";
import { BaseSurvey } from "@/types/interface";

export default function Calculator() {
  const [baseSurveyData, setBaseSurveyData] = useState<BaseSurvey>({
    country: "",
    dependency: 0,
    pets: 0,
    transport: "",
    travel: "",
    diet: "",
    homePeople: 1, // Default to 1 person (themselves)
    homeSize: "",
    homeAge: "",
    shopping: "",
  });

  return (
    <div className="w-full flex-col flex-center">
      <WelcomePage />
      <DependencyPage data={baseSurveyData} setData={setBaseSurveyData} />
      <TransportPage data={baseSurveyData} setData={setBaseSurveyData} />
      <TravelPage data={baseSurveyData} setData={setBaseSurveyData} />
      <FoodPage data={baseSurveyData} setData={setBaseSurveyData} />
      <HousePeoplePage data={baseSurveyData} setData={setBaseSurveyData} />
      <HouseSizePage data={baseSurveyData} setData={setBaseSurveyData} />
      <HouseAgePage data={baseSurveyData} setData={setBaseSurveyData} />
      <ShoppingPage data={baseSurveyData} setData={setBaseSurveyData} />
    </div>
  );
}
