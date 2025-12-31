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
  LightbulbIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function ClimateImpacts() {
  return (
    <div className="article paper-light w-full h-full relative">
      <ArticleWrapper title="How Climate Change Affects Us">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
          <ArticleSection variant="card">
            <p>
              When we add too much carbon to the air, it traps more heat around
              Earth. This extra heat doesn&apos;t just make things warmer. It changes
              weather, ocean currents, and natural systems that all life depends
              on. Here&apos;s how it affects our world:
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
                  <strong>Heatwaves getting worse and lasting longer</strong>
                  <p>
                    Cities reach temperatures dangerous for humans to survive
                    outside. In 2023, some areas hit above 50°C (122°F).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CloudRainIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Stronger storms and hurricanes</strong>
                  <p>
                    Warmer oceans power stronger storms. Hurricane winds and
                    rain are getting more intense.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PlantIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Longer and worse droughts</strong>
                  <p>
                    Some places get too much rain. Others get almost none.
                    Droughts can last years. They destroy crops and dry up water
                    supplies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <WavesIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Flooding from huge rainstorms</strong>
                  <p>
                    When rain does come, it often comes all at once in massive
                    storms. This floods drainage systems and causes terrible
                    damage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FlameIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Wildfires burning huge areas</strong>
                  <p>
                    Hotter, drier conditions create perfect conditions for
                    massive fires. These can burn for months.
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
                These aren&apos;t just small problems. Extreme weather kills people.
                It destroys homes. It ruins crops. It costs billions in damage
                every year. And it&apos;s getting worse.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* Ocean & Ecosystem Impacts */}
          <ArticleSection
            icon={FishIcon}
            iconColor="text-blue-600"
            title="Damage to Nature"
            variant="card"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <WavesIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Seas getting higher</strong>
                  <p>
                    As ice melts and warm water expands, oceans are rising. Many
                    coastal cities and islands will be underwater within
                    decades. By 2100, seas could rise 1-2 meters (3-6 feet).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FishIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Ocean becoming more acidic and coral dying</strong>
                  <p>
                    The ocean absorbs CO2. This makes it more acidic (like
                    adding vinegar to water). This dissolves coral reefs and
                    shells of sea creatures. Over 50% of coral reefs have
                    already died.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PlantIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Animals and plants going extinct</strong>
                  <p>
                    Plants and animals can&apos;t adapt fast enough to rapid
                    temperature changes. We&apos;re losing species 1,000 times faster
                    than normal. Polar bears, many insects, frogs and toads, and
                    countless others are disappearing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendUpIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Growing seasons disrupted and crops failing</strong>
                  <p>
                    Plants and insects have timing matched to the seasons. As
                    temperatures shift, this timing breaks. Flowers bloom before
                    bees arrive. Crops fail in extreme heat.
                  </p>
                </div>
              </div>
            </div>

            <InfoBox icon={FishIcon} title="The Chain Reaction" variant="info">
              <p>
                When one species disappears or a natural system collapses, it
                affects everything connected to it. Coral reefs support 25% of
                all ocean life. Bees and other insects are essential for 75% of
                our crops. These systems took millions of years to develop. We
                can&apos;t rebuild them.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* Human Impacts */}
          <ArticleSection
            icon={UsersIcon}
            iconColor="text-red-600"
            title="How It Affects People"
            variant="gradient"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <PlantIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Food shortages and higher prices</strong>
                  <p>
                    Droughts, floods, and changing weather reduce how much food
                    we can grow. As food becomes scarcer, prices rise. The
                    poorest people (who spend most of their money on food)
                    suffer most.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <WavesIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Not enough water</strong>
                  <p>
                    Ice and snow that provide fresh water to billions of people
                    are melting. Rivers are drying up. By 2050, half the world
                    could face severe water shortages.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HeartIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Health problems</strong>
                  <p>
                    Heat kills thousands during heatwaves. Smoke from wildfires
                    causes breathing diseases. Warmer temperatures spread
                    tropical diseases like malaria to new areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HouseIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>People forced to leave their homes</strong>
                  <p>
                    When land becomes too dangerous to live on (from drought,
                    flooding, or extreme heat), people have no choice but to
                    leave. Experts estimate 200 million people will be forced to
                    move by 2050.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <UsersIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Money damage and making inequality worse</strong>
                  <p>
                    Climate disasters cost trillions in damage. Poor countries
                    and communities suffer most. Yet they contributed least to
                    the problem. This makes the gap between rich and poor even
                    bigger.
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
                Climate change hits hardest where people have the least money
                and resources. Small islands, low coastal areas, dry regions in
                Africa and Asia. These places often added almost nothing to
                climate change. But they face the worst effects.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* The Bottom Line */}
          <ArticleSection variant="card">
            <h2>Summary</h2>
            <p>
              Climate change isn&apos;t just about temperature. It&apos;s about the
              stability of systems that keep us alive. Food, water, safe places
              to live, clean air, predictable weather. All of these depend on a
              stable climate.
            </p>
            <p>
              The longer we wait to reduce carbon, the worse these impacts
              become. And the harder they are to fix. Some changes (like species
              going extinct and ice melting completely) are permanent once they
              happen.
            </p>
            <p>
              But there&apos;s still time to prevent the worst outcomes. If we act
              now.
            </p>
          </ArticleSection>

          {/* Now What Section */}
          <ArticleSection
            icon={LightbulbIcon}
            iconColor="text-primary"
            title="Now That You Understand the Impacts..."
            variant="gradient"
          >
            <h3>What you can do this week:</h3>
            <div className="space-y-2 mb-4">
              <p>• Reduce food waste (less strain on food systems)</p>
              <p>• Use less water (take shorter showers, fix leaks)</p>
              <p>
                • Support organizations helping people affected by climate
                change
              </p>
            </div>

            <h3>Learn more:</h3>
            <div className="space-y-2 mb-4">
              <p>
                •{" "}
                <Link href="#" className="text-primary hover:underline">
                  Read: Carbon
                </Link>{" "}
                - Understand what&apos;s causing these impacts
              </p>
              <p>
                •{" "}
                <Link href="#" className="text-primary hover:underline">
                  Read: Climate Science & The Future
                </Link>{" "}
                - See what happens if we don&apos;t act
              </p>
              <p>
                •{" "}
                <Link href="#" className="text-primary hover:underline">
                  Read: What You Can Do
                </Link>{" "}
                - Concrete actions to help
              </p>
            </div>

            <h3>The big picture:</h3>
            <p>
              These impacts aren&apos;t distant future problems. They&apos;re happening
              now. And they&apos;ll get much worse if we don&apos;t act. But understanding
              the problem is the first step. Now you know what&apos;s at stake. Every
              action to reduce carbon helps prevent these impacts from getting
              worse.
            </p>
          </ArticleSection>
        </div>
      </ArticleWrapper>
    </div>
  );
}
