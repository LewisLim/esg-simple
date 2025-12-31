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
  LightbulbIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function ClimateScience() {
  return (
    <div className="article paper-light w-full h-full relative">
      <ArticleWrapper title="Climate Science & The Future">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
          <ArticleSection variant="card">
            <p>
              Scientists can predict how much Earth will warm based on how much
              carbon we release. Here&apos;s what science tells us about our future.
              And how much time we have to act.
            </p>
          </ArticleSection>

          {/* Carbon Budget */}
          <ArticleSection
            icon={ClockIcon}
            iconColor="text-red-600"
            title="Our Carbon Limit: How Much Time Do We Have?"
            variant="gradient"
          >
            <p>
              Think of our carbon limit like money in a bank account. Scientists
              have calculated the maximum amount of CO2 we can release before
              Earth gets too hot. Every ton of CO2 we release takes from this
              limit.
            </p>

            <InfoBox
              icon={WarningIcon}
              title="Critical Temperature Levels"
              variant="warning"
            >
              <p>World leaders agreed on two key temperature limits:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>
                  <strong>1.5°C warmer:</strong> The safe limit. Beyond this,
                  things get much worse.
                </li>
                <li>
                  <strong>2°C warmer:</strong> The danger zone. At this level,
                  some changes can&apos;t be undone.
                </li>
              </ul>
            </InfoBox>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <StatCard
                icon={ClockIcon}
                title="1.5°C Limit Reached"
                value="By early 2030s"
                iconColor="text-red-600"
              />
              <StatCard
                icon={ClockIcon}
                title="2°C Limit Reached"
                value="By mid-2050s"
                iconColor="text-orange-600"
              />
            </div>

            <p>
              At our current rate (about 40 billion tons of CO2 per year), we&apos;ll
              hit the 1.5°C limit in less than 10 years. To stay under it, we
              need to cut global CO2 by about 45% by 2030. And reach balance by
              2050.
            </p>

            <InfoBox
              icon={WarningIcon}
              title="What Does &apos;Balance&apos; Mean?"
              variant="info"
            >
              <p>
                Balance means the amount of carbon we release equals the amount
                we remove from the air. We can&apos;t stop all CO2 immediately. But
                we can balance what we release by protecting forests, restoring
                wetlands, and developing technology that pulls CO2 from the air.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* Future Projections Timeline */}
          <ArticleSection
            icon={CalendarIcon}
            iconColor="text-amber-600"
            title="What Happens If We Don&apos;t Act?"
            variant="card"
          >
            <p className="mb-4">
              If we continue business as usual - meaning no major changes to
              how we make energy or use resources - here&apos;s what scientists
              predict:
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <div className="flex-shrink-0 w-24">
                  <strong className="text-blue-900">Now (2024)</strong>
                </div>
                <div className="flex-1">
                  <p className="text-blue-800">
                    <strong>+1.1°C warmer</strong>
                  </p>
                  <p className="text-blue-700 text-sm mt-1">
                    We&apos;re already seeing more heatwaves, stronger storms,
                    melting ice, and rising seas. This is where we are today.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                <div className="flex-shrink-0 w-24">
                  <strong className="text-amber-900">2030</strong>
                </div>
                <div className="flex-1">
                  <p className="text-amber-800">
                    <strong>+1.5°C warmer</strong>
                  </p>
                  <p className="text-amber-700 text-sm mt-1">
                    More extreme weather. Coral reefs dying rapidly. Some small
                    islands becoming too dangerous to live on. Arctic summers
                    with no ice. More crop failures in poor regions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                <div className="flex-shrink-0 w-24">
                  <strong className="text-orange-900">2050</strong>
                </div>
                <div className="flex-1">
                  <p className="text-orange-800">
                    <strong>+2-2.5°C warmer</strong>
                  </p>
                  <p className="text-orange-700 text-sm mt-1">
                    Severe water shortages affecting billions of people. Major
                    coastal cities flooding regularly. Many species going
                    extinct. Large crop failures. Tens of millions of people
                    forced to leave their homes. Some points of no return may be
                    crossed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <div className="flex-shrink-0 w-24">
                  <strong className="text-red-900">2100</strong>
                </div>
                <div className="flex-1">
                  <p className="text-red-800">
                    <strong>+3-4°C warmer</strong>
                  </p>
                  <p className="text-red-700 text-sm mt-1">
                    Catastrophic impacts. Large parts of Earth too hot for
                    humans to live. Mass extinction of species. Complete
                    collapse of major natural systems. Seas rising enough to
                    displace hundreds of millions. Global food system breakdown.
                    Multiple points of no return crossed. Some changes can&apos;t be
                    reversed for thousands of years.
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
                    At this level, Earth would look completely different. Human
                    civilization would struggle to survive. Similar to past mass
                    extinction events in Earth&apos;s history.
                  </p>
                </div>
              </div>
            </div>

            <InfoBox
              icon={WarningIcon}
              title="These Aren&apos;t Predictions - They&apos;re Possible Paths"
              variant="danger"
            >
              <p>
                The future isn&apos;t decided yet. These show what happens if we
                don&apos;t change course. We still have time to choose a different
                path. But that time is running out fast.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* Tipping Points */}
          <ArticleSection
            icon={TrendUpIcon}
            iconColor="text-red-600"
            title="Points of No Return"
            variant="highlight"
          >
            <p>
              Some changes can&apos;t be undone once they start. Think of pushing a
              boulder off a cliff. Once it starts rolling, you can&apos;t stop it.
              These are called points of no return.
            </p>

            <h3>Major points of no return scientists worry about:</h3>
            <div className="space-y-3">
              <div>
                <strong>Amazon Rainforest Dying</strong>
                <p>
                  If we cut down too many trees and droughts get worse, the
                  Amazon could turn from rainforest to dry grassland. This would
                  release billions of tons of stored carbon. And we&apos;d lose a
                  major carbon storage system.
                </p>
              </div>

              <div>
                <strong>Greenland Ice Melting Completely</strong>
                <p>
                  Once melting reaches a certain point, the ice could disappear
                  completely over centuries. This would raise sea levels by 7
                  meters (23 feet). Enough to flood many major cities.
                </p>
              </div>

              <div>
                <strong>West Antarctica Ice Melting</strong>
                <p>
                  Similar to Greenland. But this would add another 3-5 meters
                  (10-16 feet) of sea level rise. Some scientists think this
                  might have already reached its point of no return.
                </p>
              </div>

              <div>
                <strong>Frozen Ground Releasing Gas</strong>
                <p>
                  Frozen Arctic soil holds huge amounts of methane. As it thaws,
                  methane gets released. This causes more warming. Which melts
                  more frozen ground. A spiral that feeds on itself.
                </p>
              </div>

              <div>
                <strong>Ocean Currents Slowing Down</strong>
                <p>
                  The system of ocean currents that moves heat around the planet
                  could weaken or stop. This would cause dramatic climate shifts
                  across Europe and North America.
                </p>
              </div>

              <div>
                <strong>Coral Reefs Dying</strong>
                <p>
                  At 1.5°C warmer, 70-90% of coral reefs will die. At 2°C
                  warmer, over 99% die. Since a quarter of all ocean species
                  depend on reefs, this causes a wave of extinction.
                </p>
              </div>
            </div>

            <InfoBox
              icon={WarningIcon}
              title="Why These Are So Dangerous"
              variant="danger"
            >
              <p>
                Once we cross these points, we lose control. Even if we stop all
                CO2 immediately, these processes would continue for decades,
                centuries, or thousands of years. This is why scientists say we
                must act before reaching these points.
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
              The scary future above assumes we don&apos;t change. But what if we do?
              What if governments, businesses, and individuals take serious
              action to cut CO2?
            </p>

            <h3>A different future is possible:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Fast CO2 cuts starting now</strong>
                  <p>
                    If we cut global CO2 by 45% by 2030 and reach balance by
                    2050, we can limit warming to 1.5°C. This prevents the worst
                    impacts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Protecting and restoring nature</strong>
                  <p>
                    Stopping forest cutting and restoring forests, wetlands, and
                    oceans could absorb 30% of the CO2 we need to eliminate.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Clean energy everywhere</strong>
                  <p>
                    Solar and wind are already cheaper than coal, oil, and gas
                    in many places. Using them everywhere could eliminate most
                    energy CO2 within decades.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>New technology</strong>
                  <p>
                    Better batteries, ways to capture CO2, and sustainable
                    materials could speed up the change.
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
                The technology exists. The solutions are known. What&apos;s missing
                is the will to act at large scale. Every bit of warming we
                prevent matters. 1.5°C is much better than 2°C. And 2°C is much
                better than 3°C. The sooner we act, the more we can save.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* The Bottom Line */}
          <ArticleSection variant="card">
            <h2>Summary</h2>
            <p>
              We&apos;re at a turning point. The path we&apos;re on leads to a very
              different, dangerous planet. But we can still choose a different
              path. One where we limit warming, protect nature, and build a
              livable future.
            </p>
            <p>
              The science is clear. Every year we wait makes the problem harder
              and more expensive to fix. Every bit of warming we prevent saves
              lives, protects nature, and preserves the world for our children.
            </p>
            <p>The future isn&apos;t written yet. What happens next is up to us.</p>
          </ArticleSection>

          {/* Now What Section */}
          <ArticleSection
            icon={LightbulbIcon}
            iconColor="text-primary"
            title="Now That You Understand the Future..."
            variant="gradient"
          >
            <h3>What you can do this week:</h3>
            <div className="space-y-2 mb-4">
              <p>• Talk to friends and family about what you learned</p>
              <p>
                • Support leaders who take climate seriously (vote, contact
                representatives)
              </p>
              <p>• Share this information with others who might not know</p>
            </div>

            <h3>Learn more:</h3>
            <div className="space-y-2 mb-4">
              <p>
                •{" "}
                <Link href="#" className="text-primary hover:underline">
                  Read: Climate Impacts
                </Link>{" "}
                - See the specific effects of warming
              </p>
              <p>
                •{" "}
                <Link href="#" className="text-primary hover:underline">
                  Read: What You Can Do
                </Link>{" "}
                - Concrete actions to reduce CO2
              </p>
              <p>
                •{" "}
                <Link href="#" className="text-primary hover:underline">
                  Read: Carbon
                </Link>{" "}
                - Understand the root cause
              </p>
            </div>

            <h3>The big picture:</h3>
            <p>
              You now understand we&apos;re running out of time. But you also know
              solutions exist. The challenge isn&apos;t technology. It&apos;s action. We
              need governments, businesses, and individuals all working
              together. Fast. Every action matters. Every voice counts. The
              future depends on choices we make today.
            </p>
          </ArticleSection>
        </div>
      </ArticleWrapper>
    </div>
  );
}
