"use client";

import ArticleWrapper from "@/components/layout/ArticleWrapper";

export default function DoMyPart() {
  return (
    <div className="paper-light calc-page w-full h-full relative">
      <ArticleWrapper title="Do My Part">
        <h2>
          1. Switch to Renewable Energy (Highest Impact - 70-80% of emissions)
        </h2>
        <ol type="a">
          <li>
            Transition from fossil fuels (coal, oil, gas) to clean energy
            (solar, wind, hydro)
          </li>
          <li>
            Individual: Install solar panels, choose green energy plans, buy
            electric vehicles
          </li>
          <li>
            Systemic: Advocate for grid-level renewable infrastructure and
            policy support
          </li>
        </ol>

        <h2>2. Reduce Excess Consumption (Highest Control)</h2>
        <ol type="a">
          <li>
            Cut wasteful consumption: unnecessary flights, overconsumption,
            waste
          </li>
          <li>Focus on eliminating excess, not extreme lifestyle sacrifice</li>
          <li>
            Advocate for sustainable infrastructure policies and systemic change
          </li>
        </ol>

        <h2>3. Carbon Sequestration (Supplementary - Remove Existing CO2)</h2>
        <ol type="a">
          <li>
            Biochar: Most effective but needs organizational scale—convert
            biomass to stable carbon, requires land access
          </li>
          <li>
            Kelp: Returns carbon to atmosphere unless specifically sunk to deep
            ocean (experimental)
          </li>
          <li>
            Trees: Vulnerable to fire, disease, decomposition—non-permanent
            storage
          </li>
          <li>
            Support large-scale removal programs rather than individual efforts
          </li>
        </ol>
      </ArticleWrapper>
    </div>
  );
}
