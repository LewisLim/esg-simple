"use client";

import { useState } from "react";
import { BaseSurvey } from "@/types/interface";
import ButtonsPage from "@/components/calculator/Templates/ButtonsPage";
import WelcomePage from "@/components/calculator/WelcomePage";
import SlidersPage from "@/components/calculator/Templates/SlidersPage";
import HybridPage from "@/components/calculator/Templates/HybridPage";

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
      {/* Starting Page */}
      <WelcomePage />
      {/* Dependencies */}
      <HybridPage pageNum={0} data={baseSurveyData} setData={setBaseSurveyData} hasNextButton={true} />       
      {/* Transport */}
      <ButtonsPage pageNum={1} data={baseSurveyData} setData={setBaseSurveyData} /> 
      {/* Trip */}
      <ButtonsPage pageNum={2} data={baseSurveyData} setData={setBaseSurveyData} /> 
      {/* Trip */}      
      <ButtonsPage pageNum={3} data={baseSurveyData} setData={setBaseSurveyData} /> 
      {/* Living Space People */}
      <SlidersPage pageNum={4} data={baseSurveyData} setData={setBaseSurveyData} hasNextButton={true} /> 
      {/* Living Space Size */}
      <ButtonsPage pageNum={5} data={baseSurveyData} setData={setBaseSurveyData} /> 
      {/* Living Space Age */}
      <ButtonsPage pageNum={6} data={baseSurveyData} setData={setBaseSurveyData} /> 
      {/* Shopping Habits */}
      <ButtonsPage pageNum={7} data={baseSurveyData} setData={setBaseSurveyData} /> 
    </div>
  );
}
