"use client";

import ArticleWrapper from "@/components/layout/ArticleWrapper";

export default function LearnEnvironment() {
  return (
    <div className="paper-light calc-page w-full h-full relative">
      <ArticleWrapper title="Environment">
        <p>
          Environment: Everything in the world around us - the air, water, land,
          plants, and animals.
        </p>
        <p>How our activities affect the world?</p>
        <p>Insert general diagram</p>
        Level 1: Natural Resources
        <h2>Energy sources (sun, wind, water, fossil fuels etc)</h2>
        <h2>Water (rivers, oceans, groundwater)</h2>
        <h2>Land (soil, forests, minerals )</h2>
        <h2>Living Things (plants,animals)</h2>
        <h3>Resource Depletion as a topic to talk for each component</h3>
        Level 2: Processing(Businesses - Carbon emitted)
        <h2>Collection</h2>
        <h2>Processing</h2>
        <h2>Services (offices, digital, finance)</h2>
        <h2>Transportation (cargo ships/trucks)</h2>
        Level 3: Consumption (Consumers - Carbon emitted)
        <h2>Food/Drinks</h2>
        <h2>Home</h2>
        <h2>Leisure</h2>
        <h2>Travel (cars/flights)</h2>
        Level 4: Waste (Return to Earth)
        <h2>To Air → Burned/decomposed (CO2, methane)</h2>
        <h2>To Land → Buried (landfills, soil)</h2>
        <h2>To Water → Polluted (oceans, rivers)</h2>
        <h3>
          Pollution Buildup crisis as a topic to talk in each component
          (plastic, chemicals, toxic waste)
        </h3>
        Level A: Planetary Health
        <h2>
          Climate Change (temperature, emissions, sea level, extreme weather,
          natural disasters)
        </h2>
        <h2>Biodiversity Loss (species extinction, habitat destruction)</h2>
        <h2>Ecosystem Degradation (forests, oceans, coral reefs)</h2>
        <h2>Land & Soil (degradation, deforestation, desertification)</h2>
      </ArticleWrapper>
    </div>
  );
}
