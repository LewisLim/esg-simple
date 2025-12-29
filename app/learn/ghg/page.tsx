"use client";

import { ArticleSection } from "@/components/article/ArticleSection";
import { InfoBox } from "@/components/article/InfoBox";
import { StatCard } from "@/components/article/StatCard";
import ArticleWrapper from "@/components/layout/ArticleWrapper";
import {
  CloudIcon,
  ThermometerIcon,
  FactoryIcon,
  CowIcon,
  PlantIcon,
  SnowflakeIcon,
  SunIcon,
  TrendUpIcon,
  WarningIcon,
  LightbulbIcon,
  ArrowRightIcon,
  ClockIcon,
  FlameIcon,
} from "@phosphor-icons/react";

export default function GreenhouseGasesPage() {
  return (
    <div className="article paper-light w-full h-full relative">
      <ArticleWrapper title="Greenhouse Gases">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
          {/* Introduction */}
          <ArticleSection
            icon={CloudIcon}
            iconColor="text-primary"
            title="What Are Greenhouse Gases?"
            variant="card"
          >
            <p>
              Greenhouse gases are gases in our atmosphere that trap heat, like
              a blanket wrapped around Earth. They let sunlight in but stop heat
              from escaping back into space.
            </p>

            <InfoBox icon={SunIcon} title="How It Works" variant="info">
              <div className="space-y-2">
                <p>1. Sunlight reaches Earth and warms the surface</p>
                <p>2. Earth releases this heat back toward space</p>
                <p>
                  3. Greenhouse gases catch some of this heat and hold it in the
                  atmosphere
                </p>
                <p>4. This trapped heat keeps our planet warm</p>
              </div>
            </InfoBox>

            <p>
              We actually <strong>need</strong> some greenhouse gases - without
              them, Earth would be frozen at around -18°C (0°F), too cold for
              life as we know it. The greenhouse effect is natural and
              essential.
            </p>

            <InfoBox icon={WarningIcon} title="The Problem" variant="warning">
              <p>
                Humans are adding greenhouse gases to the atmosphere much faster
                than natural processes can remove them. It's like turning up the
                heat on Earth's thermostat - we're making the blanket thicker
                and thicker, trapping more heat than the planet can handle.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* The Main GHGs Overview */}
          <ArticleSection
            icon={ThermometerIcon}
            iconColor="text-red-600"
            title="The Main Greenhouse Gases Causing Climate Change"
            variant="gradient"
          >
            <p>
              Not all greenhouse gases are equal. Some trap more heat than
              others, and some last longer in the atmosphere. Here's how much
              each one contributes to global warming:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <StatCard
                icon={FactoryIcon}
                title="Carbon Dioxide (CO2)"
                value="75% of warming"
                iconColor="text-red-600"
              />
              <StatCard
                icon={CowIcon}
                title="Methane (CH4)"
                value="17% of warming"
                iconColor="text-orange-600"
              />
              <StatCard
                icon={PlantIcon}
                title="Nitrous Oxide (N2O)"
                value="6% of warming"
                iconColor="text-amber-600"
              />
              <StatCard
                icon={SnowflakeIcon}
                title="Fluorinated Gases"
                value="2% of warming"
                iconColor="text-blue-600"
              />
            </div>
          </ArticleSection>

          {/* Carbon Dioxide */}
          <ArticleSection
            icon={FactoryIcon}
            iconColor="text-red-600"
            title="Carbon Dioxide (CO2) - The Biggest Problem"
            variant="card"
          >
            <InfoBox
              icon={TrendUpIcon}
              title="75% of Global Warming"
              variant="danger"
            >
              <p>
                CO2 is responsible for three-quarters of human-caused climate
                change. It's the main villain in the climate story.
              </p>
            </InfoBox>

            <h3>Where it comes from:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FactoryIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Burning fossil fuels (coal, oil, gas)</strong>
                  <p>
                    For electricity, heating, transportation, and manufacturing.
                    This is by far the biggest source.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PlantIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Cutting down forests (deforestation)</strong>
                  <p>
                    Trees absorb CO2. When we cut them down or burn them, that
                    stored carbon is released back into the air.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FactoryIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Making cement and other industrial processes</strong>
                  <p>
                    Some manufacturing processes release CO2 as a byproduct.
                  </p>
                </div>
              </div>
            </div>

            <h3>Why it's so problematic:</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>It lasts for centuries</strong>
                  <p>
                    CO2 stays in the atmosphere for hundreds to thousands of
                    years. The CO2 we release today will be warming the planet
                    for generations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendUpIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>We produce enormous amounts</strong>
                  <p>
                    Humans release about 40 billion tons of CO2 every year - and
                    it's still increasing.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <a
                href="#"
                className="flex items-center gap-2 text-red-900 font-medium hover:text-red-700"
              >
                Learn more about Carbon and CO2
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </ArticleSection>

          {/* Methane */}
          <ArticleSection
            icon={CowIcon}
            iconColor="text-orange-600"
            title="Methane (CH4) - The Powerful Short-Termer"
            variant="highlight"
          >
            <InfoBox
              icon={FlameIcon}
              title="17% of Global Warming"
              variant="warning"
            >
              <p>
                Methane is the second-biggest contributor to climate change.
                It's much more powerful than CO2 at trapping heat, but it
                doesn't last as long in the atmosphere.
              </p>
            </InfoBox>

            <h3>Where it comes from:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CowIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Livestock farming (especially cattle)</strong>
                  <p>
                    Cows and other ruminant animals produce methane in their
                    digestive systems. This is the biggest source of
                    human-caused methane.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PlantIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Rice farming</strong>
                  <p>
                    Flooded rice paddies create conditions where bacteria
                    produce methane.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FactoryIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Oil and gas operations</strong>
                  <p>
                    Methane leaks from drilling, pipelines, and processing
                    facilities. Natural gas is mostly methane.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CloudIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Landfills</strong>
                  <p>
                    When organic waste decomposes without oxygen (like in
                    landfills), it produces methane.
                  </p>
                </div>
              </div>
            </div>

            <h3>Why it matters:</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <ThermometerIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>It's extremely powerful</strong>
                  <p>
                    Methane traps about 25-30 times more heat than CO2 over a
                    100-year period. Over 20 years, it's even worse - about 80
                    times more powerful.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>But it breaks down faster</strong>
                  <p>
                    Methane only lasts about 12 years in the atmosphere
                    (compared to centuries for CO2). This means cutting methane
                    emissions has a fast impact on slowing warming.
                  </p>
                </div>
              </div>
            </div>

            <InfoBox
              icon={LightbulbIcon}
              title="Why This Is Good News"
              variant="success"
            >
              <p>
                Because methane is so powerful but short-lived, reducing methane
                emissions is one of the fastest ways to slow climate change.
                Cutting methane now would have a noticeable impact within a
                decade.
              </p>
            </InfoBox>

            <div className="mt-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <a
                href="#"
                className="flex items-center gap-2 text-orange-900 font-medium hover:text-orange-700"
              >
                Learn more about Methane
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </ArticleSection>

          {/* Nitrous Oxide */}
          <ArticleSection
            icon={PlantIcon}
            iconColor="text-amber-600"
            title="Nitrous Oxide (N2O) - The Agricultural Problem"
            variant="card"
          >
            <InfoBox
              icon={TrendUpIcon}
              title="6% of Global Warming"
              variant="warning"
            >
              <p>
                Nitrous oxide might seem minor at 6%, but it's an incredibly
                powerful greenhouse gas and very long-lasting.
              </p>
            </InfoBox>

            <h3>Where it comes from:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <PlantIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Synthetic fertilizers in agriculture</strong>
                  <p>
                    This is the biggest source. When farmers use nitrogen-based
                    fertilizers, bacteria in the soil convert some of that
                    nitrogen into nitrous oxide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FactoryIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Industrial processes</strong>
                  <p>
                    Manufacturing of certain chemicals and materials releases
                    N2O.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CowIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Livestock manure</strong>
                  <p>Animal waste produces nitrous oxide as it breaks down.</p>
                </div>
              </div>
            </div>

            <h3>Why it's concerning:</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <ThermometerIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Extremely powerful heat-trapper</strong>
                  <p>
                    N2O traps about 300 times more heat than CO2 - that's even
                    more powerful than methane.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>It sticks around for over a century</strong>
                  <p>
                    N2O stays in the atmosphere for about 120 years, so the
                    effects of today's emissions will last for generations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
              <a
                href="#"
                className="flex items-center gap-2 text-amber-900 font-medium hover:text-amber-700"
              >
                Learn more about Nitrous Oxide
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </ArticleSection>

          {/* Fluorinated Gases */}
          <ArticleSection
            icon={SnowflakeIcon}
            iconColor="text-blue-600"
            title="Fluorinated Gases (F-gases) - Small Amount, Big Punch"
            variant="highlight"
          >
            <InfoBox
              icon={WarningIcon}
              title="2% of Global Warming"
              variant="info"
            >
              <p>
                F-gases contribute only 2% to global warming, but that's because
                we produce much smaller amounts. Pound for pound, they're the
                most powerful greenhouse gases.
              </p>
            </InfoBox>

            <h3>Where they come from:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <SnowflakeIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Refrigeration and air conditioning</strong>
                  <p>
                    Most F-gases are used as coolants in fridges, freezers, and
                    air conditioners. When these appliances leak or are
                    improperly disposed of, the gases escape.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FactoryIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Industrial applications</strong>
                  <p>
                    Some manufacturing processes, electronics production, and
                    specialized equipment use F-gases.
                  </p>
                </div>
              </div>
            </div>

            <h3>Why they're unique:</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <WarningIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Entirely human-made</strong>
                  <p>
                    Unlike the other greenhouse gases, F-gases don't occur
                    naturally at all. They only exist because we created them.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ThermometerIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Incredibly powerful</strong>
                  <p>
                    Some F-gases can trap thousands of times more heat than CO2.
                    A tiny amount goes a long way.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Last for decades to centuries</strong>
                  <p>
                    Different F-gases have different lifespans, but many last
                    for thousands of years in the atmosphere.
                  </p>
                </div>
              </div>
            </div>

            <InfoBox
              icon={LightbulbIcon}
              title="The Good News"
              variant="success"
            >
              <p>
                Many countries are phasing out the most harmful F-gases and
                replacing them with alternatives that don't warm the planet. The
                Montreal Protocol (originally created to protect the ozone
                layer) now also regulates F-gases.
              </p>
            </InfoBox>

            <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <a
                href="#"
                className="flex items-center gap-2 text-blue-900 font-medium hover:text-blue-700"
              >
                Learn more about Fluorinated Gases
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </ArticleSection>

          {/* Summary */}
          <ArticleSection variant="card">
            <h2>The Bottom Line</h2>
            <p>
              All greenhouse gases trap heat, but they work in different ways
              and have different impacts:
            </p>

            <div className="space-y-3 mt-4">
              <div className="p-3 bg-red-50 rounded-lg">
                <strong className="text-red-900">CO2 (75%):</strong> The biggest
                problem. Lasts for centuries. Mainly from burning fossil fuels.
              </div>

              <div className="p-3 bg-orange-50 rounded-lg">
                <strong className="text-orange-900">Methane (17%):</strong> Very
                powerful but short-lived. Mainly from agriculture and fossil
                fuels. Cutting methane gives fast results.
              </div>

              <div className="p-3 bg-amber-50 rounded-lg">
                <strong className="text-amber-900">Nitrous Oxide (6%):</strong>{" "}
                Extremely powerful and long-lasting. Mainly from fertilizers.
              </div>

              <div className="p-3 bg-blue-50 rounded-lg">
                <strong className="text-blue-900">F-gases (2%):</strong> The
                most powerful per molecule, but we make less of them. Human-made
                chemicals mainly in cooling systems.
              </div>
            </div>

            <InfoBox
              icon={TrendUpIcon}
              title="Why This Matters"
              variant="warning"
            >
              <p>
                To stop climate change, we need to reduce all of these gases -
                but especially CO2 and methane. CO2 requires a complete
                transformation of our energy systems. Methane can be reduced
                more quickly with changes to agriculture and fossil fuel
                operations.
              </p>
            </InfoBox>
          </ArticleSection>
        </div>
      </ArticleWrapper>
    </div>
  );
}
