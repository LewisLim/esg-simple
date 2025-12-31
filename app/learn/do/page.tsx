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
              difference. Others are mostly symbolic. Here&apos;s what actually
              matters, ranked by impact.
            </p>
          </ArticleSection>

          <InfoBox
            icon={ChartBarIcon}
            title="Focus on High-Impact Actions"
            variant="info"
          >
            <p>
              You don&apos;t need to do everything perfectly. Focus your energy on
              actions that make the biggest difference. Small changes add up.
              But big changes transform.
            </p>
          </InfoBox>

          {/* 1. Renewable Energy - HIGHEST IMPACT */}
          <ArticleSection
            icon={SunIcon}
            iconColor="text-amber-500"
            title="1. Switch to Clean Energy"
            variant="gradient"
          >
            <InfoBox
              icon={LightningIcon}
              title="Highest Impact"
              variant="warning"
            >
              <p>
                <strong>This is the big one.</strong> Making energy
                (electricity, heating, cars) accounts for 70-80% of global
                carbon. Switching from coal, oil, and gas to clean energy is the
                single most impactful thing we can do.
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
                    Starting cost is high. But they pay for themselves over
                    time. And they eliminate your electricity carbon. Many
                    places offer help with costs or payment plans.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <LightningIcon className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Switch to a green energy plan</strong>
                  <p>
                    Many energy companies offer clean energy options. It&apos;s often
                    as simple as calling your company or checking their website.
                    Sometimes it costs a bit more. Sometimes it&apos;s the same
                    price.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HouseIcon className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Make your home use less energy</strong>
                  <p>
                    Better insulation, double-pane windows, LED bulbs,
                    energy-efficient appliances. These reduce how much energy
                    you need in the first place.
                  </p>
                </div>
              </div>
            </div>

            <h4>Getting Around</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CarIcon className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Consider an electric car</strong>
                  <p>
                    If you need a car, electric cars produce zero carbon while
                    driving. They&apos;re cheaper to run. As electricity gets
                    cleaner, electric cars automatically become cleaner too.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PersonSimpleBikeIcon className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>
                    Use buses, trains, bike, or walk when possible
                  </strong>
                  <p>
                    For short trips, skip the car entirely. Even replacing one
                    car trip per day makes a big difference.
                  </p>
                </div>
              </div>
            </div>

            <h4>Push for Bigger Changes</h4>
            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <MegaphoneIcon className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Support clean energy for everyone</strong>
                  <p>
                    The biggest carbon reductions come from changing the entire
                    energy system to clean energy. Vote for leaders who support
                    this. Contact your representatives. Support policies that
                    speed up the change.
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
                product made, shipped, and eventually thrown away creates
                carbon. The less we consume, the less we need to produce.
              </p>
            </InfoBox>

            <h3>The key idea: Cut waste, not necessities</h3>
            <p>
              This isn&apos;t about extreme sacrifice or living like a monk. It&apos;s
              about cutting wasteful consumption. The stuff you don&apos;t really
              need or use.
            </p>

            <h4>Getting Around</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CarIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Fly less</strong>
                  <p>
                    Flying releases huge amounts of carbon. A single long flight
                    can equal months of driving. Choose trains or video calls
                    when possible. When you do fly, economy class uses less
                    space per person than business class.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PersonSimpleBikeIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Drive less</strong>
                  <p>
                    Combine errands into one trip. Share rides. Work from home
                    when possible. Each car trip avoided prevents carbon.
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
                    Farm animals (especially cows) produce huge amounts of
                    methane. They need huge amounts of land, water, and feed.
                    You don&apos;t need to stop eating meat. But reducing it by even
                    a few meals per week makes a real difference.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <RecycleIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Waste less food</strong>
                  <p>
                    About one-third of all food gets thrown away. Plan meals.
                    Use leftovers. Understand expiration dates. When food rots
                    in garbage dumps, it releases methane.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <LeafIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Buy local and seasonal when you can</strong>
                  <p>
                    Food moved long distances has bigger carbon. Local, seasonal
                    food is often fresher and lower-carbon.
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
                    Before buying something, ask: &quot;Do I really need this?&quot;
                    Making anything releases carbon. When you do buy, choose
                    quality items that last longer. Not cheap things you&apos;ll
                    replace soon.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <RecycleIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Repair, reuse, buy used</strong>
                  <p>
                    Fix things instead of replacing them. Buy used when
                    possible. Reusing existing items has almost zero carbon
                    compared to making new ones.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <RecycleIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Recycle properly</strong>
                  <p>
                    Recycling uses much less energy than making things from
                    scratch. Learn what can and can&apos;t be recycled in your area.
                    Do it right.
                  </p>
                </div>
              </div>
            </div>

            <InfoBox
              icon={CheckCircleIcon}
              title="The Goal: Cut Excess"
              variant="success"
            >
              <p>
                Focus on cutting wasteful consumption. Unnecessary flights.
                Impulse purchases. Food waste. You don&apos;t need to live an extreme
                minimalist lifestyle. Just be more intentional about what you
                consume.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* 3. Carbon Removal - SUPPLEMENTARY */}
          <ArticleSection
            icon={TreeIcon}
            iconColor="text-green-600"
            title="3. Carbon Removal"
            variant="card"
          >
            <InfoBox
              icon={WarningIcon}
              title="Extra Help - Not a Substitute"
              variant="warning"
            >
              <p>
                Carbon removal is important. But it&apos;s extra help. It removes CO2
                already in the air. It doesn&apos;t replace stopping new carbon from
                getting added. Think of it like bailing water from a sinking
                boat. Yes, do it. But the priority is plugging the hole.
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
                  CO2. They create homes for animals.
                </p>
                <p className="mb-2">
                  <strong>The reality:</strong> Trees can burn in fires. Get
                  diseases. Get cut down. Break down after dying. When they die
                  or burn, the carbon goes back into the air. They&apos;re temporary
                  storage, not permanent removal.
                </p>
                <p>
                  <strong>Still worth it?</strong> Yes. Forests are valuable
                  beyond carbon. But don&apos;t count on them as a long-term carbon
                  solution.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <LeafIcon className="w-5 h-5 text-green-600" />
                  <strong>Biochar</strong>
                </div>
                <p className="mb-2">
                  <strong>What it is:</strong> Heating plant material without
                  air. This creates a stable form of carbon that can be buried
                  in soil.
                </p>
                <p className="mb-2">
                  <strong>The good:</strong> Best method for long-term carbon
                  storage. Makes soil better.
                </p>
                <p>
                  <strong>The challenge:</strong> Needs large-scale operations
                  and land. Not practical for individuals. But you can support
                  programs that do this.
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
                  <strong>The challenge:</strong> When kelp breaks down or gets
                  eaten, the carbon goes back. Only works for permanent storage
                  if sunk to the deep ocean floor. This is still being tested.
                </p>
                <p>
                  <strong>Still worth it?</strong> Maybe in the future. But it&apos;s
                  not reliable yet.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <LightningIcon className="w-5 h-5 text-green-600" />
                  <strong>Machines that pull CO2 from air</strong>
                </div>
                <p className="mb-2">
                  <strong>What it is:</strong> Machines that filter CO2 directly
                  from the air. Then store it underground.
                </p>
                <p className="mb-2">
                  <strong>The good:</strong> Permanent removal if stored
                  properly.
                </p>
                <p>
                  <strong>The challenge:</strong> Very expensive. Uses lots of
                  energy. Not working at large scale yet. Needs much more
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
                    Donate to or support organizations working on carbon removal
                    at large scale. Individual tree-planting is nice. But it has
                    small impact compared to protecting existing forests or
                    funding serious removal technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Be skeptical of &quot;carbon offset&quot; programs</strong>
                  <p>
                    Many offset programs claim more impact than they deliver. Or
                    don&apos;t permanently remove carbon. If you buy offsets,
                    research them carefully. Look for independent verification
                    and permanent storage methods.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Protect existing forests</strong>
                  <p>
                    Preventing forest cutting is more impactful than planting
                    new trees. Support indigenous land rights and conservation
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
                Personal choices matter. But they&apos;re not enough. We need changes
                to infrastructure, policy, and how companies operate. The good
                news? As an individual, you can push for these changes.
              </p>
            </InfoBox>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MegaphoneIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Vote for climate action</strong>
                  <p>
                    Support leaders who prioritize clean energy, climate policy,
                    and environmental protection. Contact your representatives
                    to demand action.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <UsersIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Talk about it</strong>
                  <p>
                    Discuss climate with friends and family. The more people who
                    understand and care, the more pressure for change. You don&apos;t
                    need to preach. Just share what you&apos;re learning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShoppingBagIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Support responsible businesses</strong>
                  <p>
                    Choose companies genuinely working to reduce carbon. When
                    businesses see customers care, they respond. Be skeptical of
                    companies that talk green but don&apos;t act green.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <UsersIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Join or support climate organizations</strong>
                  <p>
                    There are groups pushing for policy change, protecting
                    nature, and developing solutions. Find ones you agree with.
                    Support them with time or money.
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
                <strong>1. Clean Energy (Highest Impact):</strong> Switch your
                electricity, heating, and car to clean energy. Push for
                system-wide transition.
              </p>
              <p>
                <strong>2. Reduce Excess (Highest Control):</strong> Cut
                wasteful consumption. Unnecessary flights. Overconsumption. Food
                waste. Impulse purchases. Focus on cutting excess, not extreme
                sacrifice.
              </p>
              <p>
                <strong>3. Carbon Removal (Extra Help):</strong> Support
                large-scale removal programs. Be skeptical of offsets. Protect
                existing forests.
              </p>
              <p>
                <strong>4. Use Your Voice (System Change):</strong> Vote.
                Advocate. Talk about it. Support responsible businesses.
              </p>
            </div>

            <InfoBox
              icon={CheckCircleIcon}
              title="You Don&apos;t Have to Be Perfect"
              variant="success"
            >
              <p>
                Do what you can. Focus on high-impact actions. Keep improving.
                And remember - this isn&apos;t just about individual responsibility.
                We need system-wide change. And you can be part of pushing for
                that change.
              </p>
            </InfoBox>
          </ArticleSection>
        </div>
      </ArticleWrapper>
    </div>
  );
}
