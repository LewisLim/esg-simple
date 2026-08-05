"use client";

import { useState } from "react";
import { BaseSurvey } from "@/types/interface";
import ButtonsPage from "@/components/calculator/Templates/ButtonsPage";
import WelcomePage from "@/components/calculator/WelcomePage";
import SlidersPage from "@/components/calculator/Templates/SlidersPage";
import HybridPage from "@/components/calculator/Templates/HybridPage";
import ResultsPage from "@/components/calculator/ResultsPage";
import survey from "@/lib/calculator/questions.json";

// pageId -> which template component renders it
const PAGE_TEMPLATES: Record<number, "hybrid" | "buttons" | "sliders"> = {
  0: "hybrid", // country + dependency/pets sliders
  1: "buttons", // transport
  2: "buttons", // travel
  3: "buttons", // diet
  4: "sliders", // homePeople
  5: "buttons", // homeSize
  6: "buttons", // homeAge
  7: "buttons", // shopping
};

const TOTAL_PAGES = survey.pages.length; // 8

// "welcome" before page 0, "results" after the last page
type Step = "welcome" | number | "results";

export default function Calculator() {
  const [step, setStep] = useState<Step>("welcome");
  const [baseSurveyData, setBaseSurveyData] = useState<BaseSurvey>({
    country: "",
    dependency: 0,
    pets: 0,
    transport: "",
    travel: "",
    diet: "",
    homePeople: 1,
    homeSize: "",
    homeAge: "",
    shopping: "",
  });

  function goNext() {
    if (step === "welcome") {
      setStep(0);
      return;
    }
    if (typeof step === "number") {
      if (step + 1 >= TOTAL_PAGES) {
        setStep("results");
      } else {
        setStep(step + 1);
      }
    }
  }

  function goPrevious() {
    if (typeof step === "number") {
      if (step === 0) {
        setStep("welcome");
      } else {
        setStep(step - 1);
      }
    } else if (step === "results") {
      setStep("welcome");
    }
  }

  return (
    <div className="w-full max-w-3xl flex-col flex-center rounded-lg mx-auto">
      {step === "welcome" && <WelcomePage onStart={goNext} />}

      {typeof step === "number" && PAGE_TEMPLATES[step] === "hybrid" && (
        <HybridPage
          pageNum={step}
          data={baseSurveyData}
          setData={setBaseSurveyData}
          onNext={goNext}
          onPrevious={goPrevious}
        />
      )}

      {typeof step === "number" && PAGE_TEMPLATES[step] === "buttons" && (
        <ButtonsPage
          pageNum={step}
          data={baseSurveyData}
          setData={setBaseSurveyData}
          onNext={goNext}
          onPrevious={goPrevious}
        />
      )}

      {typeof step === "number" && PAGE_TEMPLATES[step] === "sliders" && (
        <SlidersPage
          pageNum={step}
          data={baseSurveyData}
          setData={setBaseSurveyData}
          onNext={goNext}
          onPrevious={goPrevious}
        />
      )}

      {step === "results" && (
        <ResultsPage data={baseSurveyData} onPrevious={goPrevious} />
      )}
    </div>
  );
}
