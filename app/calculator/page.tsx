"use client";

import { useState } from "react";
import { BaseSurvey } from "@/types/interface";
import ButtonsPage from "@/components/calculator/Templates/ButtonsPage";
import DependencyPage from "@/components/calculator/DependencyPage";
import HousePeoplePage from "@/components/calculator/HousePeoplePage";
import WelcomePage from "@/components/calculator/WelcomePage";

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
      {/* Transport */}
      <ButtonsPage pageNum={1} data={baseSurveyData} setData={setBaseSurveyData} /> 
      {/* Trip */}
      <ButtonsPage pageNum={2} data={baseSurveyData} setData={setBaseSurveyData} /> 
      {/* Trip */}      
      <ButtonsPage pageNum={3} data={baseSurveyData} setData={setBaseSurveyData} /> 

      <HousePeoplePage data={baseSurveyData} setData={setBaseSurveyData} />

      {/* Living Space Size */}
      <ButtonsPage pageNum={5} data={baseSurveyData} setData={setBaseSurveyData} /> 
      {/* Living Space Age */}
      <ButtonsPage pageNum={6} data={baseSurveyData} setData={setBaseSurveyData} /> 
      {/* Shopping Habits */}
      <ButtonsPage pageNum={7} data={baseSurveyData} setData={setBaseSurveyData} /> 
    </div>
  );
}
