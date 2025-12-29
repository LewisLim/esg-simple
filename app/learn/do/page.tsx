"use client";

import { ArticleSection } from "@/components/article/ArticleSection";
import { InfoBox } from "@/components/article/InfoBox";
import ArticleWrapper from "@/components/layout/ArticleWrapper";
import {
  LightningIcon,
  SunIcon,
  CarIcon,
  HouseIcon,
  ShoppingBagIcon,
  CowIcon,
  PersonSimpleBikeIcon,
  RecycleIcon,
  TreeIcon,
  UsersIcon,
  MegaphoneIcon,
  CheckCircleIcon,
  WarningIcon,
  ChartBarIcon,
  LeafIcon,
} from "@phosphor-icons/react";

export default function DoMyPart() {
  return (
    <div className="paper-light calc-page w-full h-full relative">
      <ArticleWrapper title="Do My Part">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
          <ArticleSection variant="card">
            <p>
              Not all actions have equal impact. Some changes make a huge
              difference, while others are mostly symbolic. Here's what actually
              matters, ranked by impact.
            </p>
          </ArticleSection>

          <InfoBox
            icon={ChartBarIcon}
            title="Focus on High-Impact Actions"
            variant="info"
          >
            <p>
              You don't need to do everything perfectly. Focus your energy on
              the actions that make the biggest difference. Small changes add
              up, but big changes transform.
            </p>
          </InfoBox>

          {/* 1. Renewable Energy - HIGHEST IMPACT */}
          <ArticleSection
            icon={SunIcon}
            iconColor="text-amber-500"
            title="1. Switch to Renewable Energy"
            variant="gradient"
          >
            <InfoBox
              icon={LightningIcon}
              title="Highest Impact"
              variant="warning"
            >
              <p>
                <strong>This is the big one.</strong> Energy production
                (electricity, heating, transportation) accounts for 70-80% of
                global carbon emissions. Switching from fossil fuels to clean
                energy is the single most impactful thing we can do.
              </p>
            </InfoBox>

            <h3>What you can do:</h3>

            <h4>At Home</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <SunIcon className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Install solar panels if you can</strong>
                  <p>
                    Upfront cost is high, but they pay for themselves over time
                    and eliminate your electricity emissions. Many places offer
                    incentives or financing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <LightningIcon className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Switch to a green energy plan</strong>
                  <p>
                    Many energy providers offer renewable energy options. It's
                    often as simple as calling your provider or checking their
                    website. Sometimes it costs a bit more, sometimes it's the
                    same price.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HouseIcon className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Make your home more energy-efficient</strong>
                  <p>
                    Better insulation, double-glazed windows, LED bulbs,
                    energy-efficient appliances - these reduce how much energy
                    you need in the first place.
                  </p>
                </div>
              </div>
            </div>

            <h4>Transportation</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CarIcon className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Consider an electric vehicle (EV)</strong>
                  <p>
                    If you need a car, EVs produce zero emissions while driving
                    and are cheaper to run. As electricity grids get cleaner,
                    EVs automatically become cleaner too.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PersonSimpleBikeIcon className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>
                    Use public transport, bike, or walk when possible
                  </strong>
                  <p>
                    For short trips, skip the car entirely. Even replacing one
                    car trip per day makes a significant difference.
                  </p>
                </div>
              </div>
            </div>

            <h4>Support System Change</h4>
            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <MegaphoneIcon className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Advocate for renewable infrastructure</strong>
                  <p>
                    The biggest emissions reductions come from transitioning the
                    entire energy grid to renewables. Vote for politicians who
                    support clean energy. Contact your representatives. Support
                    policies that accelerate the transition.
                  </p>
                </div>
              </div>
            </div>
          </ArticleSection>

          {/* 2. Reduce Excess Consumption - HIGHEST CONTROL */}
          <ArticleSection
            icon={ShoppingBagIcon}
            iconColor="text-primary"
            title="2. Reduce Excess Consumption"
            variant="highlight"
          >
            <InfoBox
              icon={CheckCircleIcon}
              title="Highest Control"
              variant="success"
            >
              <p>
                <strong>You have the most direct control here.</strong> Every
                product manufactured, shipped, and eventually discarded creates
                emissions. The less we consume, the less we need to produce.
              </p>
            </InfoBox>

            <h3>The key principle: Cut waste, not necessities</h3>
            <p>
              This isn't about extreme sacrifice or living like a monk. It's
              about eliminating wasteful consumption - the stuff you don't
              really need or use.
            </p>

            <h4>Transportation</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CarIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Fly less</strong>
                  <p>
                    Air travel is extremely carbon-intensive. A single long-haul
                    flight can equal months of driving. Choose trains or video
                    calls when possible. When you do fly, consider economy over
                    business class (which takes up more space per person).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PersonSimpleBikeIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Drive less</strong>
                  <p>
                    Combine errands into one trip. Carpool. Work from home when
                    possible. Each car trip avoided is emissions prevented.
                  </p>
                </div>
              </div>
            </div>

            <h4>Food</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CowIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Eat less meat, especially beef</strong>
                  <p>
                    Livestock farming - particularly beef - produces enormous
                    amounts of methane and requires huge amounts of land, water,
                    and feed. You don't need to go vegetarian, but reducing meat
                    consumption by even a few meals per week makes a real
                    difference.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <RecycleIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Waste less food</strong>
                  <p>
                    About one-third of all food is thrown away. Plan meals, use
                    leftovers, understand expiration dates. When food rots in
                    landfills, it releases methane.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <LeafIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Buy local and seasonal when you can</strong>
                  <p>
                    Food transported long distances has a bigger carbon
                    footprint. Local, seasonal produce is often fresher and
                    lower-emission.
                  </p>
                </div>
              </div>
            </div>

            <h4>Stuff</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <ShoppingBagIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Buy less, buy quality</strong>
                  <p>
                    Before buying something, ask: "Do I really need this?"
                    Manufacturing anything releases carbon. When you do buy,
                    choose quality items that last longer rather than cheap
                    things you'll replace soon.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <RecycleIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Repair, reuse, buy secondhand</strong>
                  <p>
                    Fix things instead of replacing them. Buy used when
                    possible. Reusing existing items has almost zero carbon
                    footprint compared to manufacturing new ones.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <RecycleIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Recycle properly</strong>
                  <p>
                    Recycling uses much less energy than making things from
                    scratch. Learn what can and can't be recycled in your area
                    and do it right.
                  </p>
                </div>
              </div>
            </div>

            <InfoBox
              icon={CheckCircleIcon}
              title="The Goal: Eliminate Excess"
              variant="success"
            >
              <p>
                Focus on cutting wasteful consumption - unnecessary flights,
                impulse purchases, food waste. You don't need to live an extreme
                minimalist lifestyle. Just be more intentional about what you
                consume.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* 3. Carbon Removal - SUPPLEMENTARY */}
          <ArticleSection
            icon={TreeIcon}
            iconColor="text-green-600"
            title="3. Carbon Removal and Offsetting"
            variant="card"
          >
            <InfoBox
              icon={WarningIcon}
              title="Supplementary - Not a Substitute"
              variant="warning"
            >
              <p>
                Carbon removal is important, but it's supplementary - it removes
                CO2 that's already in the atmosphere. It doesn't replace the
                need to stop adding new carbon in the first place. Think of it
                like bailing water from a sinking boat - yes, do it, but the
                priority is plugging the hole.
              </p>
            </InfoBox>

            <h3>Understanding carbon removal methods:</h3>

            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TreeIcon className="w-5 h-5 text-green-600" />
                  <strong>Planting Trees</strong>
                </div>
                <p className="mb-2">
                  <strong>The appeal:</strong> Everyone loves trees. They absorb
                  CO2 and create habitats.
                </p>
                <p className="mb-2">
                  <strong>The reality:</strong> Trees are vulnerable to fire,
                  disease, logging, and decomposition. When they die or burn,
                  the carbon goes back into the atmosphere. They're temporary
                  storage, not permanent removal.
                </p>
                <p>
                  <strong>Still worth it?</strong> Yes - forests are valuable
                  ecosystems beyond carbon. But don't count on them as a
                  long-term carbon solution.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <LeafIcon className="w-5 h-5 text-green-600" />
                  <strong>Biochar</strong>
                </div>
                <p className="mb-2">
                  <strong>What it is:</strong> Heating plant material without
                  oxygen to create a stable form of carbon that can be buried in
                  soil.
                </p>
                <p className="mb-2">
                  <strong>The good:</strong> Most effective method for long-term
                  carbon storage. Improves soil quality.
                </p>
                <p>
                  <strong>The challenge:</strong> Requires organizational scale
                  and land access. Not practical for individuals, but you can
                  support programs that do this.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <LeafIcon className="w-5 h-5 text-green-600" />
                  <strong>Ocean-based removal (like kelp farming)</strong>
                </div>
                <p className="mb-2">
                  <strong>What it is:</strong> Growing kelp or other sea plants
                  that absorb CO2.
                </p>
                <p className="mb-2">
                  <strong>The challenge:</strong> When kelp decomposes or is
                  eaten, the carbon goes back into the cycle. Only works for
                  permanent storage if specifically sunk to the deep ocean floor
                  - which is still experimental.
                </p>
                <p>
                  <strong>Still worth it?</strong> Maybe in the future, but it's
                  not a reliable solution yet.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <LightningIcon className="w-5 h-5 text-green-600" />
                  <strong>Direct Air Capture (technology)</strong>
                </div>
                <p className="mb-2">
                  <strong>What it is:</strong> Machines that filter CO2 directly
                  from the air and store it underground.
                </p>
                <p className="mb-2">
                  <strong>The good:</strong> Permanent removal if stored
                  properly.
                </p>
                <p>
                  <strong>The challenge:</strong> Very expensive and
                  energy-intensive. Not yet at scale. Needs much more
                  development.
                </p>
              </div>
            </div>

            <h3>What you should do:</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Support large-scale removal programs</strong>
                  <p>
                    Donate to or advocate for organizations working on carbon
                    removal at scale. Individual tree-planting is nice but has
                    minimal impact compared to protecting existing forests or
                    funding serious removal technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Be skeptical of "carbon offset" schemes</strong>
                  <p>
                    Many offset programs overstate their impact or don't deliver
                    permanent removal. If you buy offsets, research them
                    carefully - look for third-party verification and permanent
                    storage methods.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Protect existing forests and ecosystems</strong>
                  <p>
                    Preventing deforestation is more impactful than planting new
                    trees. Support indigenous land rights and conservation
                    efforts.
                  </p>
                </div>
              </div>
            </div>
          </ArticleSection>

          {/* 4. Use Your Voice */}
          <ArticleSection
            icon={MegaphoneIcon}
            iconColor="text-secondary"
            title="4. Use Your Voice for System Change"
            variant="gradient"
          >
            <InfoBox
              icon={UsersIcon}
              title="Individual Actions Need System Support"
              variant="info"
            >
              <p>
                Personal choices matter, but they're not enough. We need changes
                to infrastructure, policy, and corporate behavior. The good
                news? As an individual, you can push for these changes.
              </p>
            </InfoBox>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MegaphoneIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Vote for climate action</strong>
                  <p>
                    Support politicians who prioritize clean energy, climate
                    policy, and environmental protection. Contact your
                    representatives to demand action.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <UsersIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Talk about it</strong>
                  <p>
                    Discuss climate issues with friends and family. The more
                    people who understand and care, the more pressure for
                    change. You don't need to preach - just share what you're
                    learning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShoppingBagIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Support responsible businesses</strong>
                  <p>
                    Choose companies that are genuinely working to reduce
                    emissions. When businesses see that customers care, they
                    respond. Be skeptical of "greenwashing" - companies that
                    talk green but don't act green.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <UsersIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Join or support climate organizations</strong>
                  <p>
                    There are groups pushing for policy change, protecting
                    ecosystems, and developing solutions. Find ones aligned with
                    your values and support them with time or money.
                  </p>
                </div>
              </div>
            </div>
          </ArticleSection>

          {/* Summary */}
          <ArticleSection variant="card">
            <h2>Summary: What Actually Matters</h2>
            <div className="space-y-3">
              <p>
                <strong>1. Renewable Energy (Highest Impact):</strong> Switch
                your electricity, heating, and transportation to clean energy.
                Advocate for grid-level transition.
              </p>
              <p>
                <strong>2. Reduce Excess Consumption (Highest Control):</strong>{" "}
                Cut wasteful consumption - unnecessary flights, overconsumption,
                food waste, impulse purchases. Focus on eliminating excess, not
                extreme sacrifice.
              </p>
              <p>
                <strong>3. Carbon Removal (Supplementary):</strong> Support
                large-scale removal programs. Be skeptical of offsets. Protect
                existing forests.
              </p>
              <p>
                <strong>4. Use Your Voice (System Change):</strong> Vote,
                advocate, talk about it, support responsible businesses.
              </p>
            </div>

            <InfoBox
              icon={CheckCircleIcon}
              title="You Don't Have to Be Perfect"
              variant="success"
            >
              <p>
                Do what you can. Focus on high-impact actions. Keep improving.
                And remember - this isn't just about individual responsibility.
                We need systemic change, and you can be part of pushing for that
                change.
              </p>
            </InfoBox>
          </ArticleSection>
        </div>
      </ArticleWrapper>
    </div>
  );
}
