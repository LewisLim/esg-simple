"use client";

import { ArticleSection } from "@/components/article/ArticleSection";
import { InfoBox } from "@/components/article/InfoBox";
import { StatCard } from "@/components/article/StatCard";
import ArticleWrapper from "@/components/layout/ArticleWrapper";
import {
  CalendarIcon,
  ClockIcon,
  ThermometerIcon,
  TrendUpIcon,
  WarningIcon,
  GlobeIcon,
  CloudIcon,
  CheckCircleIcon,
  ChartBarIcon,
} from "@phosphor-icons/react";

export default function ClimateScience() {
  return (
    <div className="article paper-light w-full h-full relative">
      <ArticleWrapper title="Climate Science & The Future">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
          <ArticleSection variant="card">
            <p>
              Scientists can predict how much the Earth will warm based on how
              much carbon we release. Here's what the science tells us about our
              future - and how much time we have to act.
            </p>
          </ArticleSection>

          {/* Carbon Budget */}
          <ArticleSection
            icon={ClockIcon}
            iconColor="text-red-600"
            title="The Carbon Budget: How Much Time Do We Have?"
            variant="gradient"
          >
            <p>
              Think of the carbon budget like a bank account. Scientists have
              calculated the maximum amount of CO2 we can release into the
              atmosphere before we cross dangerous temperature thresholds. Every
              ton of CO2 we emit "withdraws" from this budget.
            </p>

            <InfoBox
              icon={WarningIcon}
              title="Critical Thresholds"
              variant="warning"
            >
              <p>The Paris Agreement set two key targets:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>
                  <strong>1.5°C warming:</strong> The "safe" limit. Beyond this,
                  impacts get much worse
                </li>
                <li>
                  <strong>2°C warming:</strong> The danger zone. At this level,
                  some changes become irreversible
                </li>
              </ul>
            </InfoBox>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <StatCard
                icon={ClockIcon}
                title="1.5°C Budget Exhausted"
                value="By early 2030s"
                iconColor="text-red-600"
              />
              <StatCard
                icon={ClockIcon}
                title="2°C Budget Exhausted"
                value="By mid-2050s"
                iconColor="text-orange-600"
              />
            </div>

            <p>
              At our current rate of emissions (about 40 billion tons of CO2 per
              year), we'll blow through the 1.5°C budget in less than a decade.
              To stay within it, we'd need to cut global emissions by about 45%
              by 2030 and reach net-zero by 2050.
            </p>

            <InfoBox
              icon={WarningIcon}
              title="What is Net-Zero?"
              variant="info"
            >
              <p>
                Net-zero means the amount of carbon we release equals the amount
                we remove from the atmosphere. We can't get to absolute zero
                emissions immediately, but we can balance what we emit by
                protecting forests, restoring wetlands, and developing carbon
                capture technology.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* Future Projections Timeline */}
          <ArticleSection
            icon={CalendarIcon}
            iconColor="text-amber-600"
            title="What Happens If We Don't Act?"
            variant="card"
          >
            <p className="mb-4">
              If we continue with "business as usual" - meaning no major changes
              to how we produce energy or use resources - here's what scientists
              predict:
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <div className="flex-shrink-0 w-24">
                  <strong className="text-blue-900">Now (2024)</strong>
                </div>
                <div className="flex-1">
                  <p className="text-blue-800">
                    <strong>+1.1°C warming</strong>
                  </p>
                  <p className="text-blue-700 text-sm mt-1">
                    We're already seeing increased heatwaves, stronger
                    hurricanes, melting ice, and rising seas. This is our
                    baseline.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                <div className="flex-shrink-0 w-24">
                  <strong className="text-amber-900">2030</strong>
                </div>
                <div className="flex-1">
                  <p className="text-amber-800">
                    <strong>+1.5°C warming</strong>
                  </p>
                  <p className="text-amber-700 text-sm mt-1">
                    More frequent extreme weather. Coral reefs declining
                    rapidly. Some small island nations becoming uninhabitable.
                    Arctic summers ice-free. More crop failures in vulnerable
                    regions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                <div className="flex-shrink-0 w-24">
                  <strong className="text-orange-900">2050</strong>
                </div>
                <div className="flex-1">
                  <p className="text-orange-800">
                    <strong>+2-2.5°C warming</strong>
                  </p>
                  <p className="text-orange-700 text-sm mt-1">
                    Severe water shortages affecting billions. Major coastal
                    cities dealing with regular flooding. Significant species
                    extinction. Large-scale crop failures. Climate refugees in
                    the tens of millions. Some tipping points may be crossed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <div className="flex-shrink-0 w-24">
                  <strong className="text-red-900">2100</strong>
                </div>
                <div className="flex-1">
                  <p className="text-red-800">
                    <strong>+3-4°C warming</strong>
                  </p>
                  <p className="text-red-700 text-sm mt-1">
                    Catastrophic impacts. Large parts of Earth becoming too hot
                    for human habitation. Mass extinction events. Complete
                    collapse of major ecosystems. Sea level rise displacing
                    hundreds of millions. Global food system breakdown. Multiple
                    tipping points passed, making some changes irreversible for
                    thousands of years.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-100 rounded-lg border-l-4 border-red-500">
                <div className="flex-shrink-0 w-24">
                  <strong className="text-red-900">Beyond 2100</strong>
                </div>
                <div className="flex-1">
                  <p className="text-red-800">
                    <strong>Potentially +5-6°C or more</strong>
                  </p>
                  <p className="text-red-700 text-sm mt-1">
                    At this level, Earth would be unrecognizable. Civilization
                    as we know it would struggle to survive. This scenario is
                    similar to mass extinction events in Earth's history.
                  </p>
                </div>
              </div>
            </div>

            <InfoBox
              icon={WarningIcon}
              title="These Aren't Predictions - They're Pathways"
              variant="danger"
            >
              <p>
                The future isn't set in stone. These projections show what
                happens if we don't change course. We still have time to choose
                a different path - but that window is closing fast.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* Tipping Points */}
          <ArticleSection
            icon={TrendUpIcon}
            iconColor="text-red-600"
            title="Tipping Points: The Point of No Return"
            variant="highlight"
          >
            <p>
              Tipping points are thresholds where small changes trigger big,
              irreversible transformations. Once crossed, these changes become
              self-sustaining and extremely difficult or impossible to reverse.
            </p>

            <h3>Major tipping points scientists are worried about:</h3>
            <div className="space-y-3">
              <div>
                <strong>Amazon Rainforest Die-Off</strong>
                <p>
                  If deforestation and drought reach a critical point, the
                  Amazon could transform from rainforest to savanna. This would
                  release billions of tons of stored carbon and eliminate a
                  major carbon sink.
                </p>
              </div>

              <div>
                <strong>Greenland Ice Sheet Collapse</strong>
                <p>
                  Once melting passes a certain threshold, the ice sheet could
                  completely disappear over centuries, raising sea levels by 7
                  meters (23 feet) - enough to submerge many major cities.
                </p>
              </div>

              <div>
                <strong>West Antarctic Ice Sheet Collapse</strong>
                <p>
                  Similar to Greenland, but this would add another 3-5 meters
                  (10-16 feet) of sea level rise. Some scientists think this may
                  have already passed its tipping point.
                </p>
              </div>

              <div>
                <strong>Permafrost Methane Release</strong>
                <p>
                  Frozen Arctic soil contains enormous amounts of methane. As it
                  thaws, this methane is released, causing more warming, which
                  melts more permafrost - a self-reinforcing cycle.
                </p>
              </div>

              <div>
                <strong>Atlantic Ocean Circulation Slowdown</strong>
                <p>
                  The system of ocean currents that distributes heat around the
                  planet (including the Gulf Stream) could weaken or collapse,
                  causing dramatic climate shifts across Europe and North
                  America.
                </p>
              </div>

              <div>
                <strong>Coral Reef Extinction</strong>
                <p>
                  At 1.5°C warming, 70-90% of coral reefs will die. At 2°C, over
                  99% die. Since a quarter of all ocean species depend on reefs,
                  this triggers a cascade of extinction.
                </p>
              </div>
            </div>

            <InfoBox
              icon={WarningIcon}
              title="Why Tipping Points Are So Dangerous"
              variant="danger"
            >
              <p>
                Once a tipping point is crossed, we lose control. Even if we
                stop all emissions immediately, these processes would continue
                for decades, centuries, or even millennia. This is why
                scientists emphasize acting before we reach these thresholds.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* What If We Act? */}
          <ArticleSection
            icon={CheckCircleIcon}
            iconColor="text-green-600"
            title="What If We Act?"
            variant="gradient"
          >
            <p>
              The projections above assume we don't change course. But what if
              we do? What if governments, businesses, and individuals take
              serious action to cut emissions?
            </p>

            <h3>A different future is possible:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Rapid emissions cuts starting now</strong>
                  <p>
                    If we cut global emissions by 45% by 2030 and reach net-zero
                    by 2050, we can limit warming to 1.5°C. This prevents the
                    worst impacts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Protecting and restoring nature</strong>
                  <p>
                    Stopping deforestation and restoring forests, wetlands, and
                    oceans could absorb 30% of the emissions we need to
                    eliminate.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Clean energy revolution</strong>
                  <p>
                    Solar and wind are already cheaper than fossil fuels in many
                    places. Scaling them up globally could eliminate most
                    energy-related emissions within decades.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Technology innovation</strong>
                  <p>
                    Breakthroughs in batteries, carbon capture, sustainable
                    materials, and other technologies could accelerate the
                    transition.
                  </p>
                </div>
              </div>
            </div>

            <InfoBox
              icon={CheckCircleIcon}
              title="We Have What We Need"
              variant="success"
            >
              <p>
                The technology exists. The solutions are known. What's missing
                is political will and urgent action at scale. Every fraction of
                a degree matters - 1.5°C is dramatically better than 2°C, which
                is dramatically better than 3°C. The sooner we act, the more we
                can save.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* The Bottom Line */}
          <ArticleSection variant="card">
            <h2>The Bottom Line</h2>
            <p>
              We're at a crossroads. The path we're on leads to a
              catastrophically different planet. But we can still choose a
              different path - one where we limit warming, protect nature, and
              build a sustainable civilization.
            </p>
            <p>
              The science is clear: every year of delay makes the problem harder
              and more expensive to solve. Every fraction of a degree of warming
              we prevent saves lives, protects ecosystems, and preserves the
              world for future generations.
            </p>
            <p>The future is not yet written. What happens next is up to us.</p>
          </ArticleSection>
        </div>
      </ArticleWrapper>
    </div>
  );
}
