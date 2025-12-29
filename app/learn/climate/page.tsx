"use client";

import { ArticleSection } from "@/components/article/ArticleSection";
import { InfoBox } from "@/components/article/InfoBox";
import ArticleWrapper from "@/components/layout/ArticleWrapper";
import {
  ThermometerIcon,
  FishIcon,
  UsersIcon,
  ArrowRightIcon,
  WarningIcon,
  CloudRainIcon,
  FlameIcon,
  WavesIcon,
  HeartIcon,
  HouseIcon,
  PlantIcon,
  TrendUpIcon,
} from "@phosphor-icons/react";

export default function ClimateImpacts() {
  return (
    <div className="article paper-light w-full h-full relative">
      <ArticleWrapper title="How Climate Change Affects Us">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
          <ArticleSection variant="card">
            <p>
              When we add too much carbon to the atmosphere, it traps more heat
              around Earth. This extra heat doesn't just make things warmer - it
              changes weather patterns, ocean currents, and the natural systems
              that all life depends on. Here's how it affects our world:
            </p>
          </ArticleSection>

          {/* Weather & Climate Impacts */}
          <ArticleSection
            icon={ThermometerIcon}
            iconColor="text-red-600"
            title="Extreme Weather and Temperature Changes"
            variant="highlight"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FlameIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Heatwaves becoming more intense and longer</strong>
                  <p>
                    Cities reach temperatures that are dangerous for humans to
                    survive outside. In 2023, some areas hit temperatures above
                    50°C (122°F).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CloudRainIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>More powerful storms and hurricanes</strong>
                  <p>
                    Warmer oceans fuel stronger storms. Hurricane wind speeds
                    and rainfall amounts are increasing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PlantIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Longer and more severe droughts</strong>
                  <p>
                    Some regions get too much rain while others get almost none.
                    Droughts can last years, destroying crops and drying up
                    water supplies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <WavesIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Flooding from extreme rainfall</strong>
                  <p>
                    When rain does come, it often comes all at once in massive
                    storms, overwhelming drainage systems and causing
                    devastating floods.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FlameIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Wildfires burning larger areas</strong>
                  <p>
                    Hotter, drier conditions create perfect conditions for
                    massive wildfires that can burn for months.
                  </p>
                </div>
              </div>
            </div>

            <InfoBox
              icon={WarningIcon}
              title="Why This Matters"
              variant="warning"
            >
              <p>
                These aren't just inconveniences - extreme weather kills people,
                destroys homes, ruins crops, and costs billions in damage every
                year. And it's getting worse.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* Ocean & Ecosystem Impacts */}
          <ArticleSection
            icon={FishIcon}
            iconColor="text-blue-600"
            title="Damage to Nature and Ecosystems"
            variant="card"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <WavesIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Rising sea levels</strong>
                  <p>
                    As ice melts and warm water expands, oceans are rising. Many
                    coastal cities and island nations will be underwater within
                    decades. By 2100, sea levels could rise 1-2 meters (3-6
                    feet).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FishIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Ocean acidification and coral reef death</strong>
                  <p>
                    The ocean absorbs CO2, which makes it more acidic (like
                    adding vinegar to water). This is dissolving coral reefs and
                    the shells of sea creatures. Over 50% of coral reefs have
                    already died.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PlantIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Species going extinct</strong>
                  <p>
                    Plants and animals can't adapt fast enough to rapid
                    temperature changes. We're losing species 1,000 times faster
                    than the natural rate. Polar bears, many insects,
                    amphibians, and countless others are disappearing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendUpIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Disrupted growing seasons and crop failures</strong>
                  <p>
                    Plants and insects have evolved to time their life cycles
                    with the seasons. As temperatures shift, this timing gets
                    disrupted - flowers bloom before pollinators arrive, crops
                    fail in extreme heat.
                  </p>
                </div>
              </div>
            </div>

            <InfoBox icon={FishIcon} title="The Ripple Effect" variant="info">
              <p>
                When one species disappears or an ecosystem collapses, it
                affects everything connected to it. Coral reefs support 25% of
                all ocean life. Pollinators are essential for 75% of our crops.
                These systems took millions of years to develop - we can't
                rebuild them.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* Human Impacts */}
          <ArticleSection
            icon={UsersIcon}
            iconColor="text-red-600"
            title="Direct Impacts on People"
            variant="gradient"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <PlantIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Food shortages and rising prices</strong>
                  <p>
                    Droughts, floods, and changing weather patterns reduce crop
                    yields. As food becomes scarcer, prices rise. The poorest
                    people - who spend most of their money on food - suffer
                    most.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <WavesIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Water scarcity</strong>
                  <p>
                    Glaciers and snowpack that provide fresh water to billions
                    of people are melting. Rivers are drying up. By 2050, half
                    the world's population could face severe water shortages.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HeartIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Health problems</strong>
                  <p>
                    Heat stress kills thousands during heatwaves. Air pollution
                    from wildfires causes respiratory diseases. Warmer
                    temperatures spread tropical diseases like malaria and
                    dengue fever to new areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HouseIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Climate refugees and displacement</strong>
                  <p>
                    When land becomes uninhabitable due to drought, flooding, or
                    extreme heat, people have no choice but to leave their
                    homes. The UN estimates 200 million climate refugees by
                    2050.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <UsersIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Economic damage and inequality</strong>
                  <p>
                    Climate disasters cost trillions in damage. Poor countries
                    and communities suffer most despite contributing least to
                    the problem. This widens the gap between rich and poor.
                  </p>
                </div>
              </div>
            </div>

            <InfoBox
              icon={WarningIcon}
              title="Who Suffers Most?"
              variant="danger"
            >
              <p>
                Climate change hits hardest where people have the fewest
                resources to adapt. Small island nations, low-lying coastal
                areas, drought-prone regions in Africa and Asia - these places
                often contributed almost nothing to climate change but face the
                worst consequences.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* The Bottom Line */}
          <ArticleSection variant="card">
            <h2>The Bottom Line</h2>
            <p>
              Climate change isn't just about temperature - it's about the
              stability of the systems that keep us alive. Food, water, safe
              places to live, breathable air, predictable weather - all of these
              depend on a stable climate.
            </p>
            <p>
              The longer we wait to reduce carbon emissions, the worse these
              impacts become, and the harder they are to reverse. Some changes,
              like species extinction and ice sheet collapse, are permanent once
              they happen.
            </p>
            <p>
              But there's still time to prevent the worst outcomes - if we act
              now.
            </p>
          </ArticleSection>
        </div>
      </ArticleWrapper>
    </div>
  );
}
