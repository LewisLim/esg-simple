"use client";

import { ArticleSection } from "@/components/article/ArticleSection";
import { InfoBox } from "@/components/article/InfoBox";
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
              Carbon is a basic building block found in everything alive. It's
              in your body, the food you eat, and the air you breathe out.
            </p>
            <p>
              Think of carbon like LEGO blocks. The same blocks can build
              completely different things. Carbon joins with other building
              blocks to make different materials.
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
                Stuff cannot be created or destroyed. It only changes form. All
                the carbon on Earth has been here since the planet formed
                billions of years ago. It just moves around and changes shape.
              </p>
            </InfoBox>

            <h3>Carbon takes three forms:</h3>
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
                <p>Oil, mixed in ocean water</p>
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
              <strong>Here's the key:</strong> When we talk about "reducing
              carbon," we don't make it vanish. We just keep it from moving from
              underground (where it was safely locked away) into the air (where
              it traps heat).
            </p>
          </ArticleSection>

          {/* 3. Natural Carbon Cycle */}
          <ArticleSection
            icon={RecycleIcon}
            iconColor="text-primary"
            title="How Carbon Moves Through Nature: Earth's Recycling System"
            variant="highlight"
          >
            <p>
              For millions of years, carbon moved through nature in a balanced
              circle:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <LeafIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Plants pull CO2 from the air</strong>
                  <p>They use sunlight to turn CO2 and water into food</p>
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
                  <strong>When plants and animals die, they break down</strong>
                  <p>
                    Tiny living things break them down. Carbon returns to the
                    soil and air.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <WavesIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Oceans soak up and release CO2</strong>
                  <p>
                    The ocean acts like a giant sponge. It soaks up CO2 from the
                    air and releases some back.
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
                matched the amount absorbed. Earth stayed at a stable
                temperature. Life thrived.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* 4. Carbon Sinks (Condensed) */}
          <ArticleSection variant="card">
            <h2>Nature's Carbon Storage: Like Warehouses for Carbon</h2>
            <p>
              Some natural places absorb more carbon than they release. Think of
              them as nature's carbon warehouses:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TreeIcon className="w-5 h-5 text-primary" />
                  <strong>Forests</strong>
                </div>
                <p>
                  Trees pull CO2 from air. They store carbon in their wood,
                  branches, and roots for decades or centuries.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <WavesIcon className="w-5 h-5 text-secondary" />
                  <strong>Oceans</strong>
                </div>
                <p>
                  The ocean has absorbed about 30% of human CO2. But it's
                  becoming more acidic because of this.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <GlobeIcon className="w-5 h-5 text-primary" />
                  <strong>Soil</strong>
                </div>
                <p>
                  Healthy soil holds huge amounts of carbon from dead plants and
                  animals.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <LeafIcon className="w-5 h-5 text-secondary" />
                  <strong>Wetlands and swamps</strong>
                </div>
                <p>
                  These waterlogged areas stop things from breaking down. Carbon
                  gets locked away for thousands of years.
                </p>
              </div>
            </div>

            <InfoBox icon={XCircleIcon} title="The Problem" variant="danger">
              <p>We're creating a double crisis:</p>
              <ol className="list-decimal list-inside space-y-1 mt-2">
                <li>
                  Destroying carbon storage (cutting forests, warming oceans,
                  draining wetlands)
                </li>
                <li>Adding more carbon than the remaining storage can hold</li>
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
              Millions of years ago, dead plants and animals got buried
              underground. Over time, heat and pressure turned them into coal,
              oil, and gas. This carbon was{" "}
              <strong>locked away underground</strong>. It was completely
              removed from nature's circle.
            </p>
            <p>
              Then, about 200 years ago, humans discovered we could burn these
              fuels for energy. We started digging up this ancient carbon. We
              released it into the air.
            </p>
            <InfoBox
              icon={WarningIcon}
              title="The Scale of the Problem"
              variant="warning"
            >
              <p>
                Nature spent millions of years slowly storing this carbon
                underground. We're releasing it all in just a few centuries.
                It's like fast-forwarding through millions of years in the blink
                of an eye.
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
                Remember: Carbon cannot be destroyed. When we burn coal, oil,
                and gas, we don't make carbon disappear. We move it from
                underground into the air. In the air, it traps heat like a
                blanket around Earth.
              </p>
            </InfoBox>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <XCircleIcon className="w-5 h-5 text-red-600" />
                <strong>The crisis in simple terms:</strong>
              </div>
              <p>
                We're releasing carbon faster than Earth's natural systems can
                absorb it back. Forests, oceans, and soil can't keep up.
              </p>
              <p>
                It's like filling a bathtub faster than the drain can empty it.
                The water level keeps rising.
              </p>
              <div className="flex items-start gap-2 mt-3">
                <TrendUpIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <p>
                  <strong>What happens:</strong> Carbon piles up in the air.
                  More carbon in the air means more heat gets trapped. This
                  makes our planet warmer. This is causing climate change.
                </p>
              </div>
            </div>
          </ArticleSection>

          {/* 7. Different Types of Carbon */}
          <ArticleSection
            icon={RecycleIcon}
            iconColor="text-primary"
            title="Two Types of Carbon: The Circle vs. The Problem"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-5 rounded-xl border-2 border-green-200">
                <div className="flex items-center gap-2 mb-3">
                  <LeafIcon className="w-5 h-5 text-green-600" />
                  <h3 className="text-green-900">
                    Carbon in the Natural Circle
                  </h3>
                </div>
                <p className="text-green-800 mb-3">
                  Carbon moving through living things (okay if balanced)
                </p>
                <p className="text-green-700">
                  <strong>How it works:</strong> Plant grows and pulls in CO2.
                  Animal eats plant. Animal breathes out CO2 or dies and breaks
                  down. New plant absorbs that same CO2. The circle repeats.
                </p>
                <p className="text-green-700 mt-2">
                  <strong>Why it's okay:</strong> The same carbon just moves
                  around in a circle. No new carbon gets added to the air.
                </p>
              </div>

              <div className="bg-amber-50 p-5 rounded-xl border-2 border-amber-200">
                <div className="flex items-center gap-2 mb-3">
                  <FlameIcon className="w-5 h-5 text-amber-600" />
                  <h3 className="text-amber-900">
                    Ancient Carbon from Underground
                  </h3>
                </div>
                <p className="text-amber-800 mb-3">
                  Ancient carbon that was locked underground (BIG PROBLEM when
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
                    • <strong>Adds NEW carbon</strong> to the circle. This
                    increases the total amount in the air.
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
                This explains why burning wood <em>can</em> be okay (if we plant
                new trees that absorb the same amount). But burning coal is{" "}
                <em>never</em> okay. Coal adds ancient carbon that wasn't part
                of today's circle.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* 8. Feedback Loops */}
          <ArticleSection
            icon={TrendUpIcon}
            iconColor="text-red-600"
            title="The Spiral Problem: When Warming Causes More Warming"
            variant="card"
          >
            <p>
              Carbon doesn't just pile up. It can trigger other problems that
              release even more carbon. This creates a dangerous spiral.
            </p>

            <InfoBox
              icon={WarningIcon}
              title="How These Spirals Work"
              variant="danger"
            >
              <div className="space-y-4">
                <div>
                  <strong>Example 1: Melting Frozen Ground</strong>
                  <p>→ Warming melts frozen Arctic soil</p>
                  <p>
                    → This releases a gas called methane (it traps 25 times more
                    heat than CO2)
                  </p>
                  <p>→ More methane causes more warming</p>
                  <p>→ Which melts more frozen ground...</p>
                </div>

                <div>
                  <strong>Example 2: Dying Forests</strong>
                  <p>→ Warming causes droughts and more fires</p>
                  <p>
                    → Forests burn or die. They release their stored carbon.
                  </p>
                  <p>→ Fewer trees mean less CO2 gets absorbed</p>
                  <p>→ More warming kills more forests...</p>
                </div>

                <div>
                  <strong>Example 3: Warming Oceans</strong>
                  <p>→ Warm water can't hold as much CO2 as cold water</p>
                  <p>→ Oceans absorb less carbon from the air</p>
                  <p>→ More CO2 stays in the air</p>
                  <p>→ More warming makes oceans even warmer...</p>
                </div>
              </div>
            </InfoBox>

            <p>
              These spirals can make warming feed on itself. This is why
              scientists worry about reaching certain temperature levels. Once
              these spirals really start, they're extremely hard to stop.
            </p>
          </ArticleSection>

          {/* 9. Interesting Facts */}
          <ArticleSection
            icon={SparkleIcon}
            iconColor="text-secondary"
            title="Amazing Carbon Facts"
            variant="card"
          >
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg">
                <SparkleIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <p>
                  Every carbon piece in your body was once part of a dinosaur, a
                  tree, or mixed in the ocean. You're made of recycled star
                  dust!
                </p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg">
                <TreeIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>
                  One big tree can absorb about 22 kilograms (48 pounds) of CO2
                  per year. That's like taking a car off the road for a few
                  weeks.
                </p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg">
                <WavesIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <p>
                  The ocean has absorbed about 30% of all the CO2 humans have
                  released. Without the ocean doing this, climate change would
                  be much worse already.
                </p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg">
                <CloudIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>
                  Your breath has about 100 times more CO2 than the air around
                  you!
                </p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg">
                <LeafIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <p>
                  Most oxygen you breathe comes from tiny ocean plants, not from
                  trees. These tiny living things also absorb huge amounts of
                  CO2.
                </p>
              </div>
            </div>
          </ArticleSection>

          {/* Now What Section */}
          <ArticleSection
            icon={LightbulbIcon}
            iconColor="text-primary"
            title="Now That You Understand Carbon..."
            variant="gradient"
          >
            <h3>What you can do this week:</h3>
            <div className="space-y-2 mb-4">
              <p>
                • Turn off lights when you leave a room (uses less energy from
                burning fuels)
              </p>
              <p>• Walk or bike for short trips instead of driving</p>
              <p>
                • Eat one or two plant-based meals this week (less carbon than
                meat)
              </p>
            </div>

            <h3>Learn more:</h3>
            <div className="space-y-2 mb-4">
              <p>
                •{" "}
                <a href="#" className="text-primary hover:underline">
                  Take the Carbon Quiz
                </a>{" "}
                - Test what you learned
              </p>
              <p>
                •{" "}
                <a href="#" className="text-primary hover:underline">
                  Read: Greenhouse Gases
                </a>{" "}
                - Learn about CO2 and other heat-trapping gases
              </p>
              <p>
                •{" "}
                <a href="#" className="text-primary hover:underline">
                  Read: Climate Impacts
                </a>{" "}
                - See what happens if we don't reduce carbon
              </p>
            </div>

            <h3>The big picture:</h3>
            <p>
              You now understand that carbon can't be destroyed. It only moves
              around. The problem isn't carbon itself - it's that we're moving
              too much of it from underground into the air too fast. Nature's
              storage systems can't keep up. This is why we need to stop burning
              fossil fuels and protect forests and oceans.
            </p>
          </ArticleSection>
        </div>
      </ArticleWrapper>
    </div>
  );
}
