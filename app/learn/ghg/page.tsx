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
import Link from "next/link";

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
              Greenhouse gases are gases in our air that trap heat. They work
              like a blanket wrapped around Earth. They let sunlight in but stop
              heat from escaping back into space.
            </p>

            <InfoBox icon={SunIcon} title="How It Works" variant="info">
              <div className="space-y-2">
                <p>1. Sunlight reaches Earth and warms the surface</p>
                <p>2. Earth releases this heat back toward space</p>
                <p>3. These gases catch some heat and hold it in the air</p>
                <p>4. This trapped heat keeps our planet warm</p>
              </div>
            </InfoBox>

            <p>
              We actually <strong>need</strong> some of these gases. Without
              them, Earth would be frozen at around -18°C (0°F). That&apos;s too cold
              for life as we know it. Trapping some heat is natural and
              necessary.
            </p>

            <InfoBox icon={WarningIcon} title="The Problem" variant="warning">
              <p>
                Humans are adding these gases to the air much faster than nature
                can remove them. It&apos;s like turning up the heat. We&apos;re making the
                blanket thicker and thicker. This traps more heat than the
                planet can handle.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* The Main GHGs Overview */}
          <ArticleSection
            icon={ThermometerIcon}
            iconColor="text-red-600"
            title="The Main Heat-Trapping Gases Causing Climate Change"
            variant="gradient"
          >
            <p>
              Not all of these gases are equal. Some trap more heat than others.
              Some last longer in the air. Here&apos;s how much each one causes
              warming:
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
                title="Methane"
                value="17% of warming"
                iconColor="text-orange-600"
              />
              <StatCard
                icon={PlantIcon}
                title="Nitrous Oxide"
                value="6% of warming"
                iconColor="text-amber-600"
              />
              <StatCard
                icon={SnowflakeIcon}
                title="F-gases (cooling chemicals)"
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
                CO2 causes three-quarters of human-made climate change. It&apos;s the
                main problem in the climate story.
              </p>
            </InfoBox>

            <h3>Where it comes from:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FactoryIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Burning coal, oil, and gas</strong>
                  <p>
                    For electricity, heating, cars, and factories. This is by
                    far the biggest source.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PlantIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Cutting down forests</strong>
                  <p>
                    Trees absorb CO2. When we cut them down or burn them, that
                    stored carbon goes back into the air.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FactoryIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Making cement and other products</strong>
                  <p>Some manufacturing releases CO2 as a side effect.</p>
                </div>
              </div>
            </div>

            <h3>Why it&apos;s such a big problem:</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>It lasts for centuries</strong>
                  <p>
                    CO2 stays in the air for hundreds to thousands of years. The
                    CO2 we release today will be warming the planet for
                    generations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendUpIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>We produce huge amounts</strong>
                  <p>
                    Humans release about 40 billion tons of CO2 every year. And
                    it&apos;s still increasing.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <Link
                href="#"
                className="flex items-center gap-2 text-red-900 font-medium hover:text-red-700"
              >
                Learn more about Carbon and CO2
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </ArticleSection>

          {/* Methane */}
          <ArticleSection
            icon={CowIcon}
            iconColor="text-orange-600"
            title="Methane - Very Powerful but Doesn&apos;t Last Long"
            variant="highlight"
          >
            <InfoBox
              icon={FlameIcon}
              title="17% of Global Warming"
              variant="warning"
            >
              <p>
                Methane is the second-biggest cause of climate change. It&apos;s much
                more powerful than CO2 at trapping heat. But it doesn&apos;t last as
                long in the air.
              </p>
            </InfoBox>

            <h3>Where it comes from:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CowIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Farm animals (especially cows)</strong>
                  <p>
                    Cows and similar animals produce methane in their stomachs
                    when they digest food. This is the biggest source of
                    human-caused methane.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PlantIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Rice farming</strong>
                  <p>
                    Flooded rice fields create conditions where tiny living
                    things produce methane.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FactoryIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Oil and gas operations</strong>
                  <p>
                    Methane leaks from drilling, pipes, and processing places.
                    Natural gas is mostly methane.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CloudIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Garbage dumps</strong>
                  <p>
                    When waste breaks down without air (like in garbage dumps),
                    it produces methane.
                  </p>
                </div>
              </div>
            </div>

            <h3>Why it matters:</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <ThermometerIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>It&apos;s extremely powerful</strong>
                  <p>
                    Methane traps about 25-30 times more heat than CO2 over 100
                    years. Over 20 years, it&apos;s even worse - about 80 times more
                    powerful.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>But it breaks down faster</strong>
                  <p>
                    Methane only lasts about 12 years in the air (compared to
                    centuries for CO2). This means cutting methane has a fast
                    impact on slowing warming.
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
                Because methane is so powerful but doesn&apos;t last long, reducing
                it is one of the fastest ways to slow climate change. Cutting
                methane now would have a clear impact within 10 years.
              </p>
            </InfoBox>

            <div className="mt-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <Link
                href="#"
                className="flex items-center gap-2 text-orange-900 font-medium hover:text-orange-700"
              >
                Learn more about Methane
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </ArticleSection>

          {/* Nitrous Oxide */}
          <ArticleSection
            icon={PlantIcon}
            iconColor="text-amber-600"
            title="Nitrous Oxide - The Farming Problem"
            variant="card"
          >
            <InfoBox
              icon={TrendUpIcon}
              title="6% of Global Warming"
              variant="warning"
            >
              <p>
                Nitrous oxide might seem small at 6%. But it&apos;s incredibly
                powerful at trapping heat. And it lasts a very long time.
              </p>
            </InfoBox>

            <h3>Where it comes from:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <PlantIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Farm fertilizers</strong>
                  <p>
                    This is the biggest source. When farmers use fertilizers
                    with nitrogen, tiny living things in the soil turn some into
                    nitrous oxide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FactoryIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Making certain products</strong>
                  <p>
                    Manufacturing some chemicals and materials releases nitrous
                    oxide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CowIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Animal waste</strong>
                  <p>Animal waste produces nitrous oxide as it breaks down.</p>
                </div>
              </div>
            </div>

            <h3>Why it&apos;s concerning:</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <ThermometerIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Extremely powerful</strong>
                  <p>
                    Nitrous oxide traps about 300 times more heat than CO2.
                    That&apos;s even more powerful than methane.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>It stays around for over 100 years</strong>
                  <p>
                    Nitrous oxide stays in the air for about 120 years. The
                    effects of what we release today will last for generations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
              <Link
                href="#"
                className="flex items-center gap-2 text-amber-900 font-medium hover:text-amber-700"
              >
                Learn more about Nitrous Oxide
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </ArticleSection>

          {/* Fluorinated Gases */}
          <ArticleSection
            icon={SnowflakeIcon}
            iconColor="text-blue-600"
            title="F-gases (Cooling Chemicals) - Small Amount, Big Power"
            variant="highlight"
          >
            <InfoBox
              icon={WarningIcon}
              title="2% of Global Warming"
              variant="info"
            >
              <p>
                F-gases cause only 2% of warming. That&apos;s because we produce much
                smaller amounts. But they&apos;re the most powerful heat-trappers.
              </p>
            </InfoBox>

            <h3>Where they come from:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <SnowflakeIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Fridges and air conditioners</strong>
                  <p>
                    Most F-gases are used as coolants in fridges, freezers, and
                    air conditioners. When these machines leak or get thrown
                    away improperly, the gases escape.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FactoryIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Making electronics and other products</strong>
                  <p>
                    Some factories use F-gases to make electronics and other
                    specialized products.
                  </p>
                </div>
              </div>
            </div>

            <h3>What makes them special:</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <WarningIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Completely human-made</strong>
                  <p>
                    Unlike the other gases, F-gases don&apos;t exist in nature at
                    all. They only exist because we created them.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ThermometerIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Incredibly powerful</strong>
                  <p>
                    Some F-gases can trap thousands of times more heat than CO2.
                    A tiny amount has a huge effect.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Last for decades or centuries</strong>
                  <p>
                    Different F-gases last different amounts of time. But many
                    last for thousands of years in the air.
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
                Many countries are stopping the use of the most harmful F-gases.
                They&apos;re replacing them with alternatives that don&apos;t warm the
                planet.
              </p>
            </InfoBox>

            <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <Link
                href="#"
                className="flex items-center gap-2 text-blue-900 font-medium hover:text-blue-700"
              >
                Learn more about F-gases
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </ArticleSection>

          {/* Summary */}
          <ArticleSection variant="card">
            <h2>Summary</h2>
            <p>
              All these gases trap heat. But they work in different ways and
              have different impacts:
            </p>

            <div className="space-y-3 mt-4">
              <div className="p-3 bg-red-50 rounded-lg">
                <strong className="text-red-900">CO2 (75%):</strong> The biggest
                problem. Lasts for centuries. Mainly from burning coal, oil, and
                gas.
              </div>

              <div className="p-3 bg-orange-50 rounded-lg">
                <strong className="text-orange-900">Methane (17%):</strong> Very
                powerful but doesn&apos;t last long. Mainly from farms and oil/gas.
                Cutting methane gives fast results.
              </div>

              <div className="p-3 bg-amber-50 rounded-lg">
                <strong className="text-amber-900">Nitrous Oxide (6%):</strong>{" "}
                Extremely powerful and lasts long. Mainly from farm fertilizers.
              </div>

              <div className="p-3 bg-blue-50 rounded-lg">
                <strong className="text-blue-900">F-gases (2%):</strong> The
                most powerful. But we make less of them. Human-made chemicals
                mainly in cooling systems.
              </div>
            </div>

            <InfoBox
              icon={TrendUpIcon}
              title="Why This Matters"
              variant="warning"
            >
              <p>
                To stop climate change, we need to reduce all these gases. But
                especially CO2 and methane. CO2 requires changing our entire
                energy system. Methane can be reduced more quickly with changes
                to farming and oil/gas operations.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* Now What Section */}
          <ArticleSection
            icon={LightbulbIcon}
            iconColor="text-primary"
            title="Now That You Understand Heat-Trapping Gases..."
            variant="gradient"
          >
            <h3>What you can do this week:</h3>
            <div className="space-y-2 mb-4">
              <p>
                • Check if your energy company offers renewable energy plans
                (reduces CO2)
              </p>
              <p>
                • Try 2-3 plant-based meals this week (reduces methane from farm
                animals)
              </p>
              <p>
                • If you have old fridges or AC units, make sure they&apos;re
                disposed of properly (prevents F-gas leaks)
              </p>
            </div>

            <h3>Learn more:</h3>
            <div className="space-y-2 mb-4">
              <p>
                •{" "}
                <Link href="#" className="text-primary hover:underline">
                  Take the Greenhouse Gas Quiz
                </Link>{" "}
                - Test what you learned
              </p>
              <p>
                •{" "}
                <Link href="#" className="text-primary hover:underline">
                  Calculate Your Carbon Footprint
                </Link>{" "}
                - See which gases you produce most
              </p>
              <p>
                •{" "}
                <Link href="#" className="text-primary hover:underline">
                  Read: Carbon
                </Link>{" "}
                - Learn more about CO2 (the biggest contributor)
              </p>
              <p>
                •{" "}
                <Link href="#" className="text-primary hover:underline">
                  Read: Climate Impacts
                </Link>{" "}
                - See what happens if we don&apos;t reduce these gases
              </p>
            </div>

            <h3>The big picture:</h3>
            <p>
              Different gases have different impacts. This means solutions need
              to be targeted. Cutting methane gives fast results. Stopping CO2
              requires transforming our energy systems. Both matter.
              Understanding which gas comes from where helps you make better
              choices about what to reduce.
            </p>
          </ArticleSection>
        </div>
      </ArticleWrapper>
    </div>
  );
}
