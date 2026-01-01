"use client";

import { LearnCard } from "@/components/homepage/LearnCard";
import ArticleWrapper from "@/components/layout/ArticleWrapper";
import { learnCards } from "@/lib/learnModules";
import { NavLink } from "@mantine/core";

const tempAvailableLinks = [
  { label: "Sun", link: "/learn/sun" },
  { label: "GHG", link: "/learn/ghg" },
  { label: "GHG - Carbon", link: "/learn/ghg/carbon" },
  { label: "Climate", link: "/learn/climate" },
  { label: "Future", link: "/learn/future" },
  { label: "Do", link: "/learn/do" },
];

export default function LearnEnvironment() {
  return (
    <div className="paper-light calc-page w-full h-full relative">
      <ArticleWrapper title="Earth">
        <div className="flex flex-col">
          <h2>Available Article Links Now</h2>
          {tempAvailableLinks.map((page) => (
            <NavLink
              href={page?.link}
              key={page?.link}
              label={page.label}
              className="bg-nav"
            />
          ))}
        </div>
        <p>The Complete Picture: How Everything Connects on Earth</p>
        <p>How our activities affect the world?</p>
        <p>Insert general diagram</p>
        Level 0:
        <h2>The Sun (The energy that drives the cycle)</h2>
        <p>Everything loops from Level 1 to 4</p>
        <p>
          Level A is the health of our planet from how we operate Levels 1-4
        </p>
        Level 1: Natural Resources
        <h2>Energy Resources</h2>
        <h3>Renewable: Solar, wind, hydro, geothermal</h3>
        <h3>Non-renewable: Fossil fuels (coal, oil, gas)</h3>
        <h2>Material Resources</h2>
        <h3>
          Renewable: Forests (timber), agriculture (crops), fish, animals (meat)
        </h3>
        <h3>Non-renewable: Minerals, metals</h3>
        <h2>Essential Systems</h2>
        <h3>Water (for drinking, agriculture, industry)</h3>
        <h3>Soil (for growing food)</h3>
        <h3>Biodiversity (pollinators, seed dispersal, pest control)</h3>
        <section>
          Resource Depletion - when we use faster than nature can replenish - as
          a topic to talk for each component
        </section>
        Level 2: Processing(Businesses - Carbon emitted)
        <h2>Collection</h2>
        <h2>Manufacturing/Processing</h2>
        <h2>Services (offices, digital, finance)</h2>
        <h2>Transportation (cargo ships/trucks)</h2>
        Level 3: Consumption (Consumers - Carbon emitted)
        <h2>Food/Drinks</h2>
        <h2>Home</h2>
        <h2>Leisure</h2>
        <h2>Travel (cars/flights)</h2>
        Level 4: Waste (Return to Earth)
        <h2>Reuse/Recycle (Goes to Level 2)</h2>
        <h2>To Air → Burned/decomposed (CO2, methane emissions)</h2>
        <h2>To Land → Buried (landfills, soil)</h2>
        <h2>To Water → (discharge, pollution to oceans and rivers)</h2>
        <h3>
          Pollution Buildup crisis as a topic to talk in each component
          (plastic, chemicals, toxic waste)
        </h3>
        <p>
          Air and Water are mostly problematic. Land it depends on what we put
          underneath, plastic? biodegradables?
        </p>
        <p>
          Energy does not cycle - it flows one-way from the Sun, through
          Earth&apos;s systems, and radiates back to space as heat. This is why
          we need the Sun&apos;s continuous input to sustain life.
        </p>
        Level A: Planetary Health
        <h2>Climate Systems</h2>
        <h3>
          Temperature rise, sea level rise, extreme weather, natural disasters
        </h3>
        <h2>Living Systems (Biodiversity)</h2>
        <h3>Species extinction, habitat loss, ecosystem collapse</h3>
        <h2>Land Systems</h2>
        <h3>Soil degradation, deforestation, desertification</h3>
        <h2>Water Systems</h2>
        <h3>Ocean acidification, freshwater depletion, coral reef die-off</h3>
        ☀️ THE SUN: Level 0 (shining down on Everything) ↓
        ┌─────────────────────────────────┬──────────────┐ │ THE CYCLE (circular
        flow) │ LEVEL A │ │ │ │ │ Level 1 (Resources) │ Climate │ │ ↓ │ Systems
        │ │ Level 2 (Processing) │ │ │ ↓ │ Living │ │ Level 3 (Consumption) │
        Systems │ │ ↓ │ │ │ Level 4 (Waste) │ Land │ │ ↑ │ Systems │ │ └──(loops
        back) │ │ │ │ Water │ │ │ Systems │
        └──────────────────────────────────┴──────────────┘
        <p>
          Wide Screen version: Simplified Circular system, hover on 1 for
          animated effects like animated dotted lines, and click for popup
          details{" "}
        </p>
        <p>
          Mobile version: Simplified Circular system, tap on 1 for popup details{" "}
        </p>
        <p>
          4 levels color-coded: Green (nature) → Grey (industry) → Blue
          (consumers) → Brown (waste) → back to Green
        </p>
        <p>Level A: warning indicators - like gauges or thermometers</p>
        <p>
          Interactive version: Speed up the cycle on 1 level(overconsumption):
          see Level A indicators change, Remove sun → everything stops (shows
          dependency), Add recycling → watch cycle become more efficient, Level
          A improves{" "}
        </p>
        <div className="grid grid-cols-4 gap-3">
          {learnCards.map((card) => (
            <LearnCard key={card.id} {...card} />
          ))}
        </div>
      </ArticleWrapper>
    </div>
  );
}
