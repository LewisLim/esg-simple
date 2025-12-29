"use client";

import { ArticleSection } from "@/components/article/ArticleSection";
import { InfoBox } from "@/components/article/InfoBox";
import { StatCard } from "@/components/article/StatCard";
import ArticleWrapper from "@/components/layout/ArticleWrapper";
import {
  LeafIcon,
  RecycleIcon,
  FlameIcon,
  TrendUpIcon,
  GlobeIcon,
  FactoryIcon,
  TreeIcon,
  WavesIcon,
  CloudIcon,
  WarningIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowRightIcon,
  LightbulbIcon,
  SparkleIcon,
} from "@phosphor-icons/react";

export default function LearnEnvironment() {
  return (
    <div className="article paper-light w-full h-full relative">
      <ArticleWrapper title="Carbon">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
          {/* 1. What is Carbon? */}
          <ArticleSection
            icon={LeafIcon}
            iconColor="text-primary"
            title="What is Carbon?"
            variant="card"
          >
            <p>
              Carbon is an element (a basic building block) that's in everything
              alive. It's in your DNA, your muscles, the food you eat, and even
              the air you breathe out.
            </p>
            <p>
              Think of carbon like LEGO blocks - the same blocks can be built
              into completely different things. Carbon atoms connect with other
              atoms to form different substances.
            </p>
          </ArticleSection>

          {/* 2. Fundamental Law */}
          <ArticleSection
            icon={RecycleIcon}
            iconColor="text-secondary"
            title="The Most Important Rule: Carbon Never Disappears"
            variant="gradient"
          >
            <InfoBox icon={WarningIcon} title="Universal Law" variant="warning">
              <p>
                Matter (stuff) cannot be created or destroyed - it only changes
                form. This means all the carbon on Earth has been here since the
                planet formed billions of years ago. It just moves around and
                changes shape.
              </p>
            </InfoBox>

            <h3>Carbon changes between three forms:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TreeIcon className="w-5 h-5 text-primary" />
                  <strong>Solid</strong>
                </div>
                <p>Coal, trees, your body, rocks</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <WavesIcon className="w-5 h-5 text-secondary" />
                  <strong>Liquid</strong>
                </div>
                <p>Oil, dissolved in ocean water</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CloudIcon className="w-5 h-5 text-primary" />
                  <strong>Gas</strong>
                </div>
                <p>CO2 (carbon dioxide) in the air</p>
              </div>
            </div>

            <p>
              <strong>Key insight:</strong> When we "reduce carbon emissions,"
              we're not making carbon vanish. We're just keeping it from moving
              from underground (where it was locked away) into the atmosphere
              (where it traps heat).
            </p>
          </ArticleSection>

          {/* 3. Natural Carbon Cycle */}
          <ArticleSection
            icon={RecycleIcon}
            iconColor="text-primary"
            title="The Natural Carbon Cycle: Earth's Recycling System"
            variant="highlight"
          >
            <p>
              For millions of years, carbon moved through nature in a balanced
              cycle:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <LeafIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Plants absorb CO2 from the air</strong>
                  <p>
                    They use sunlight to turn CO2 and water into food (this
                    process is called photosynthesis)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRightIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Animals eat plants</strong>
                  <p>The carbon in plants becomes part of animal bodies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CloudIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Animals breathe out CO2</strong>
                  <p>
                    When animals use energy, they release CO2 back into the air
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RecycleIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>When plants and animals die, they decompose</strong>
                  <p>
                    Bacteria and fungi break them down, returning carbon to the
                    soil and air
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <WavesIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Oceans absorb and release CO2</strong>
                  <p>
                    The ocean acts like a giant sponge, soaking up CO2 from the
                    air and releasing it back
                  </p>
                </div>
              </div>
            </div>
            <InfoBox
              icon={CheckCircleIcon}
              title="This System Was Balanced"
              variant="success"
            >
              <p>
                For millions of years, the amount of CO2 released roughly
                equaled the amount absorbed. Earth maintained a stable
                temperature, and life thrived.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* 4. Carbon Sinks (Condensed) */}
          <ArticleSection variant="card">
            <h2>Carbon Sinks: Nature's Carbon Storage Systems</h2>
            <p>
              Some natural systems absorb more carbon than they release. These
              are called "carbon sinks" - think of them as nature's carbon
              warehouses:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TreeIcon className="w-5 h-5 text-primary" />
                  <strong>Forests</strong>
                </div>
                <p>
                  Trees absorb CO2 and store carbon in their trunks, branches,
                  and roots for decades or centuries
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <WavesIcon className="w-5 h-5 text-secondary" />
                  <strong>Oceans</strong>
                </div>
                <p>
                  The ocean has absorbed about 30% of human CO2 emissions, but
                  it's becoming more acidic as a result
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <GlobeIcon className="w-5 h-5 text-primary" />
                  <strong>Soil</strong>
                </div>
                <p>
                  Healthy soil holds massive amounts of carbon from decomposed
                  plants and animals
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <LeafIcon className="w-5 h-5 text-secondary" />
                  <strong>Wetlands and peatlands</strong>
                </div>
                <p>
                  These waterlogged areas prevent decomposition, locking carbon
                  away for thousands of years
                </p>
              </div>
            </div>

            <InfoBox icon={XCircleIcon} title="The Problem" variant="danger">
              <p>We're creating a double crisis:</p>
              <ol className="list-decimal list-inside space-y-1 mt-2">
                <li>
                  Destroying carbon sinks (cutting down forests, warming oceans,
                  draining wetlands)
                </li>
                <li>
                  Adding more carbon than the remaining sinks can possibly
                  absorb
                </li>
              </ol>
            </InfoBox>
          </ArticleSection>

          {/* 5. How Humans Changed the Cycle */}
          <ArticleSection
            icon={FactoryIcon}
            iconColor="text-amber-600"
            title="How Humans Broke the Balance"
            variant="gradient"
          >
            <p>
              Millions of years ago, dead plants and animals were buried
              underground. Over time, heat and pressure turned them into fossil
              fuels - coal, oil, and natural gas. This carbon was{" "}
              <strong>locked away underground</strong>, completely removed from
              the natural cycle.
            </p>
            <p>
              Then, about 200 years ago, humans discovered we could burn these
              fossil fuels for energy. We started digging up this ancient carbon
              and releasing it into the atmosphere.
            </p>
            <InfoBox
              icon={WarningIcon}
              title="The Scale of the Problem"
              variant="warning"
            >
              <p>
                Nature spent millions of years slowly storing this carbon
                underground. We're releasing it all in just a few centuries -
                like fast-forwarding through millions of years in the blink of
                an eye.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* 6. The Problem: Too Much, Too Fast */}
          <ArticleSection
            icon={WarningIcon}
            iconColor="text-red-600"
            title="The Problem: Too Much, Too Fast"
            variant="card"
          >
            <InfoBox icon={WarningIcon} title="Critical Issue" variant="danger">
              <p>
                Remember: Carbon cannot be destroyed. When we burn fossil fuels,
                we're not making carbon disappear - we're moving it from
                underground into the atmosphere, where it traps heat like a
                blanket around Earth.
              </p>
            </InfoBox>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <XCircleIcon className="w-5 h-5 text-red-600" />
                <strong>The crisis in simple terms:</strong>
              </div>
              <p>
                We're releasing carbon faster than Earth's natural systems
                (forests, oceans, soil) can absorb it back. It's like filling a
                bathtub faster than the drain can empty it - the water level
                keeps rising.
              </p>
              <div className="flex items-start gap-2 mt-3">
                <TrendUpIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <p>
                  <strong>Result:</strong> Carbon accumulates in the atmosphere.
                  More carbon in the air means more heat gets trapped, which
                  makes our planet warmer. This is causing climate change.
                </p>
              </div>
            </div>
          </ArticleSection>

          {/* 7. Different Types of Carbon */}
          <ArticleSection
            icon={RecycleIcon}
            iconColor="text-primary"
            title="Two Types of Carbon: Good Cycle vs. Bad Addition"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-5 rounded-xl border-2 border-green-200">
                <div className="flex items-center gap-2 mb-3">
                  <LeafIcon className="w-5 h-5 text-green-600" />
                  <h3 className="text-green-900">Biogenic Carbon</h3>
                </div>
                <p className="text-green-800 mb-3">
                  Carbon that cycles through living things (neutral if balanced)
                </p>
                <p className="text-green-700">
                  <strong>The cycle:</strong> Plant grows and absorbs CO2 →
                  animal eats plant → animal breathes out CO2 or dies and
                  decomposes → new plant absorbs that CO2 → cycle repeats
                </p>
                <p className="text-green-700 mt-2">
                  <strong>Why it's okay:</strong> The same carbon just moves
                  around in a circle. No new carbon is being added to the
                  atmosphere.
                </p>
              </div>

              <div className="bg-amber-50 p-5 rounded-xl border-2 border-amber-200">
                <div className="flex items-center gap-2 mb-3">
                  <FlameIcon className="w-5 h-5 text-amber-600" />
                  <h3 className="text-amber-900">Fossil Carbon</h3>
                </div>
                <p className="text-amber-800 mb-3">
                  Ancient carbon that was locked underground (PROBLEM when
                  released)
                </p>
                <div className="space-y-2">
                  <p className="text-amber-700">
                    • Took millions of years to store underground
                  </p>
                  <p className="text-amber-700">
                    • We're releasing it in just centuries
                  </p>
                  <p className="text-amber-700">
                    • <strong>Adds NEW carbon</strong> to the active cycle,
                    increasing the total amount in the atmosphere
                  </p>
                </div>
              </div>
            </div>

            <InfoBox
              icon={LightbulbIcon}
              title="Why This Matters"
              variant="info"
            >
              <p>
                This explains why burning wood <em>can</em> be carbon-neutral
                (if we plant new trees that absorb the same amount of CO2) but
                burning coal is <em>never</em> neutral (we're adding ancient
                carbon that wasn't part of today's cycle).
              </p>
            </InfoBox>
          </ArticleSection>

          {/* 8. Feedback Loops */}
          <ArticleSection
            icon={TrendUpIcon}
            iconColor="text-red-600"
            title="Dangerous Feedback Loops: When Warming Creates More Warming"
            variant="card"
          >
            <p>
              Carbon doesn't just accumulate - it can trigger processes that
              release even more carbon, creating a dangerous spiral:
            </p>

            <InfoBox
              icon={WarningIcon}
              title="How Feedback Loops Work"
              variant="danger"
            >
              <div className="space-y-4">
                <div>
                  <strong>Example 1: Melting Permafrost</strong>
                  <p>→ Warming melts frozen Arctic soil (permafrost)</p>
                  <p>
                    → This releases methane (a gas 25 times stronger than CO2 at
                    trapping heat)
                  </p>
                  <p>→ More methane causes more warming</p>
                  <p>→ Which melts more permafrost...</p>
                </div>

                <div>
                  <strong>Example 2: Dying Forests</strong>
                  <p>→ Warming causes droughts and more wildfires</p>
                  <p>→ Forests burn or die, releasing their stored carbon</p>
                  <p>→ Fewer trees mean less CO2 gets absorbed</p>
                  <p>→ More warming causes more forests to die...</p>
                </div>

                <div>
                  <strong>Example 3: Warming Oceans</strong>
                  <p>→ Warm water can't hold as much CO2 as cold water</p>
                  <p>→ Oceans absorb less carbon from the air</p>
                  <p>→ More CO2 stays in the atmosphere</p>
                  <p>→ More warming makes oceans even warmer...</p>
                </div>
              </div>
            </InfoBox>

            <p>
              These feedback loops can make warming self-reinforcing, which is
              why scientists are so concerned about reaching certain temperature
              thresholds. Once these loops really get going, they're extremely
              hard to stop.
            </p>
          </ArticleSection>

          {/* 9. Interesting Facts */}
          <ArticleSection
            icon={SparkleIcon}
            iconColor="text-secondary"
            title="Fascinating Carbon Facts"
            variant="card"
          >
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg">
                <SparkleIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <p>
                  Every carbon atom in your body was once part of a dinosaur, a
                  tree, or dissolved in the ocean. You're made of recycled star
                  dust!
                </p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg">
                <TreeIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>
                  A single mature tree can absorb about 22 kilograms (48 pounds)
                  of CO2 per year - that's like taking a car off the road for a
                  few weeks.
                </p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg">
                <WavesIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <p>
                  The ocean has absorbed about 30% of all the CO2 that humans
                  have released. Without the ocean doing this, climate change
                  would be much worse already.
                </p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg">
                <CloudIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>
                  Your breath contains about 40,000 parts per million of CO2 -
                  that's 100 times more concentrated than the air around you!
                </p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg">
                <LeafIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <p>
                  Most of the oxygen you breathe comes from tiny ocean plants
                  called phytoplankton, not from trees. These microscopic
                  organisms also absorb massive amounts of CO2.
                </p>
              </div>
            </div>
          </ArticleSection>
        </div>
      </ArticleWrapper>
    </div>
  );
}
