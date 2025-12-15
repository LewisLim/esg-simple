"use client";

import ArticleWrapper from "@/components/layout/ArticleWrapper";

export default function SunPage() {
  return (
    <div className="paper-light calc-page w-full h-full relative">
      <ArticleWrapper title="The Sun">
        <h2>Without the Sun, Earth would freeze and become lifeless:</h2>
        <ul>
          <li>Temperatures would drop to around -200°C to -240°C</li>
          <li>Oceans would freeze completely solid</li>
          <li>No weather - no wind, no rain, nothing</li>
        </ul>

        <h2>What the Sun provides to Earth:</h2>

        <h3>Light:</h3>
        <ul>
          <li>
            Powers plant growth through photosynthesis (Major Carbon Absorber on
            Earth)
          </li>
          <li>
            Different colors of light help plants grow in different ways (red
            and blue light are most important)
          </li>
          <li>
            Supports the entire food chain since plants feed everything else
          </li>
        </ul>

        <h3>Heat:</h3>
        <ul>
          <li>Warms the soil and air</li>
          <li>
            Powers the water cycle (makes water evaporate from oceans, lakes,
            and soil)
          </li>
          <li>Creates weather patterns and wind</li>
          <li>
            Helps tiny organisms in soil break down dead plants, animals and
            wastes (Earth's recycling system)
          </li>
        </ul>

        <h3>Energy that drives Earth's natural systems:</h3>
        <ul>
          <li>
            Ocean currents (because different parts of the ocean heat up
            differently)
          </li>
          <li>Air circulation in the atmosphere</li>
          <li>Seasonal cycles</li>
          <li>Climate patterns</li>
        </ul>
      </ArticleWrapper>
    </div>
  );
}
