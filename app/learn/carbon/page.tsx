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
  ClockIcon,
  LightningIcon,
  UsersIcon,
  BuildingIcon,
  MapPinAreaIcon,
  SparkleIcon,
  LightbulbIcon,
  ThermometerIcon,
  WindIcon,
  FishIcon,
  PlantIcon,
  HandshakeIcon,
  PersonSimpleBikeIcon,
  ShoppingBagIcon,
  LinkIcon,
  ChartBarIcon,
  CalendarIcon,
  CowIcon,
  BatteryHighIcon,
} from "@phosphor-icons/react";

export default function LearnEnvironment() {
  return (
    <div className="article paper-light w-full h-full relative">
      <ArticleWrapper title="Carbon">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
          {/* Introduction */}
          <ArticleSection
            icon={LeafIcon}
            iconColor="text-primary"
            title="What is Carbon?"
            variant="card"
          >
            <p>
              Carbon is the building block of all living things - it&apos;s in
              your DNA, proteins, the food you eat, and the CO2 you breathe out.
            </p>
          </ArticleSection>

          {/* Fundamental Law */}
          <ArticleSection
            icon={RecycleIcon}
            iconColor="text-secondary"
            title="The Fundamental Law: Carbon Never Disappears"
            variant="gradient"
          >
            <InfoBox icon={WarningIcon} title="Universal Law" variant="warning">
              <p>
                Matter is neither created nor destroyed, only transformed. This
                means carbon on Earth has been here since the planet formed. It
                just changes form.
              </p>
            </InfoBox>

            <div className="space-y-3 mt-4">
              <h3>Can carbon change form? Yes! It cycles between:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-card p-4 rounded-lg border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <TreeIcon className="w-5 h-5 text-primary" />
                    <strong>Solid</strong>
                  </div>
                  <p className="text-muted-foreground">
                    coal, trees, your body
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <WavesIcon className="w-5 h-5 text-secondary" />
                    <strong>Liquid</strong>
                  </div>
                  <p className="text-muted-foreground">
                    oil, dissolved in oceans
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <CloudIcon className="w-5 h-5 text-primary" />
                    <strong>Gas</strong>
                  </div>
                  <p className="text-muted-foreground">CO2 in the atmosphere</p>
                </div>
              </div>
            </div>
          </ArticleSection>

          {/* Statistics */}
          <ArticleSection
            icon={GlobeIcon}
            iconColor="text-primary"
            title="Carbon on Earth - The Numbers"
          >
            <div className="grid md:grid-cols-3 gap-4">
              <StatCard
                icon={GlobeIcon}
                title="Surface Carbon"
                value="43,500 gigatons"
                iconColor="text-primary"
              />
              <StatCard
                icon={TrendUpIcon}
                title="Inside Earth"
                value="1.85 billion gigatons"
                iconColor="text-secondary"
              />
              <StatCard
                icon={CloudIcon}
                title="In Atmosphere"
                value="850 gigatons (rising)"
                iconColor="text-amber-600"
              />
            </div>
          </ArticleSection>

          {/* Natural Carbon Cycle */}
          <ArticleSection
            icon={RecycleIcon}
            iconColor="text-primary"
            title="The Natural Carbon Cycle (How Earth Recycles Carbon)"
            variant="highlight"
          >
            <p>For millions of years, carbon cycled naturally:</p>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <LeafIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Plants absorb CO2 from air (photosynthesis)</p>
              </div>
              <div className="flex items-start gap-3">
                <CloudIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <p>Animals eat plants, breathe out CO2</p>
              </div>
              <div className="flex items-start gap-3">
                <RecycleIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Dead organisms decompose, return carbon to soil</p>
              </div>
              <div className="flex items-start gap-3">
                <WavesIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <p>Oceans absorb and release CO2</p>
              </div>
              <div className="flex items-start gap-3">
                <FlameIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Volcanic activity releases some back</p>
              </div>
            </div>
            <InfoBox
              icon={CheckCircleIcon}
              title="Balance Achieved"
              variant="success"
            >
              <p>This cycle was balanced for millions of years</p>
            </InfoBox>
          </ArticleSection>

          {/* Carbon Sinks */}
          <ArticleSection variant="card">
            <h3>Carbon Sinks: Nature&apos;s Carbon Capture</h3>
            <p>
              Carbon sinks are natural systems that absorb more carbon than they
              release:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-[var(--background2)] p-4 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <TreeIcon className="w-5 h-5 text-primary" />
                  <strong>Forests</strong>
                </div>
                <p className="text-muted-foreground">
                  Especially tropical rainforests
                </p>
              </div>
              <div className="bg-[var(--background2)] p-4 rounded-lg border border-secondary/20">
                <div className="flex items-center gap-2 mb-2">
                  <WavesIcon className="w-5 h-5 text-secondary" />
                  <strong>Oceans</strong>
                </div>
                <p className="text-muted-foreground">
                  Becoming saturated and acidifying
                </p>
              </div>
              <div className="bg-[var(--background2)] p-4 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <GlobeIcon className="w-5 h-5 text-primary" />
                  <strong>Soil</strong>
                </div>
                <p className="text-muted-foreground">
                  Healthy soil stores massive amounts
                </p>
              </div>
              <div className="bg-[var(--background2)] p-4 rounded-lg border border-secondary/20">
                <div className="flex items-center gap-2 mb-2">
                  <LeafIcon className="w-5 h-5 text-secondary" />
                  <strong>Wetlands</strong>
                </div>
                <p className="text-muted-foreground">And peatlands</p>
              </div>
            </div>

            <InfoBox icon={XCircleIcon} title="The Problem" variant="danger">
              <p>We&apos;re both:</p>
              <ol className="list-decimal list-inside space-y-1 mt-2">
                <li>Destroying carbon sinks (deforestation, ocean warming)</li>
                <li>Adding more carbon than remaining sinks can absorb</li>
              </ol>
            </InfoBox>
          </ArticleSection>

          <div>
            <h2>Dangerous Feedback Loops</h2>
            <p>
              Carbon doesn't just accumulate - it creates a spiral process that
              release even more carbon:
            </p>
            <p>
              <h3>Permafrost feedback:</h3>
            </p>
            <p>→ Warming melts Arctic permafrost</p>
            <p>→ Releases methane (25x stronger than CO2)</p>
            <p>→ Causes more warming</p>
            <p>→ Melts more permafrost...</p>
            <p>
              <h3>Forest feedback:</h3>
            </p>
            <p>→ Warming causes droughts and fires</p>
            <p>→ Forests die, release stored carbon</p>
            <p>→ Less trees to absorb CO2</p>
            <p>→ More warming...</p>
            <p>
              <h3>Ocean feedback:</h3>
            </p>
            <p>→ Warm water holds less CO2</p>
            <p>→ Oceans absorb less carbon</p>
            <p>→ More stays in atmosphere</p>
            <p>→ More warming...</p>
            <p>These feedback loops can make warming self-reinforcing!</p>
          </div>

          {/* How Humans Changed */}
          <ArticleSection
            icon={FactoryIcon}
            iconColor="text-amber-600"
            title="How Humans Changed the Cycle"
            variant="gradient"
          >
            <p>
              For millions of years, dead plants and animals were buried and
              compressed into fossil fuels (coal, oil, gas). This carbon was{" "}
              <strong>LOCKED UNDERGROUND</strong>.
            </p>
            <p>
              Then humans discovered these fossil fuels and started burning them
              - releasing millions of years of stored carbon in just 200 years.
            </p>
          </ArticleSection>

          {/* Carbon Release Sources */}
          <ArticleSection
            icon={FlameIcon}
            iconColor="text-primary"
            title="How Carbon is Released Today"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-primary" />
                  <h3>Natural sources (balanced cycle)</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Plant and animal respiration
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Decomposition</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Volcanic activity</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <XCircleIcon className="w-5 h-5 text-red-600" />
                  <h3>Human sources (creating imbalance)</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Electricity generation (coal, gas)
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Transportation (cars, planes, ships)
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Manufacturing and industry
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Deforestation (removes absorbers)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ArticleSection>

          {/* Different Types of Carbon */}
          <ArticleSection
            icon={RecycleIcon}
            iconColor="text-primary"
            title="Different Types of Carbon"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-5 rounded-xl border border-green-200">
                <div className="flex items-center gap-2 mb-3">
                  <PlantIcon className="w-5 h-5 text-green-600" />
                  <h3 className="text-green-900">Biogenic carbon</h3>
                </div>
                <p className="text-green-800 mb-3">
                  Carbon cycling through living systems (neutral if balanced)
                </p>
                <div className="flex items-start gap-2">
                  <ArrowRightIcon className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-green-700">
                    Plant growth → animals eat → decompose → plants regrow
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
                <div className="flex items-center gap-2 mb-3">
                  <FlameIcon className="w-5 h-5 text-amber-600" />
                  <h3 className="text-amber-900">Fossil carbon</h3>
                </div>
                <p className="text-amber-800 mb-3">
                  Ancient carbon locked underground (PROBLEM when released)
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <p className="text-amber-700">
                      Took millions of years to store
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <p className="text-amber-700">We release in centuries</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <p className="text-amber-700">
                      Adds NEW carbon to the active cycle
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <InfoBox icon={LightbulbIcon} title="Key Insight" variant="info">
              <p>
                This is why burning wood CAN be carbon-neutral (if trees regrow)
                but burning coal is NEVER neutral (adding ancient carbon).
              </p>
            </InfoBox>
          </ArticleSection>

          {/* The Problem */}
          <ArticleSection
            icon={WarningIcon}
            iconColor="text-red-600"
            title="The Problem: Too Much, Too Fast"
            variant="card"
          >
            <InfoBox icon={WarningIcon} title="Critical Issue" variant="danger">
              <p>
                Remember: Carbon cannot be destroyed. When we burn fossil fuels,
                we&apos;re NOT making carbon disappear - we&apos;re MOVING it
                from underground into the atmosphere.
              </p>
            </InfoBox>

            <div className="bg-[var(--background2)] p-5 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center gap-2 mb-2">
                <XCircleIcon className="w-5 h-5 text-red-600" />
                <strong>The crisis:</strong>
              </div>
              <p className="text-muted-foreground mb-3">
                We release carbon FASTER than Earth&apos;s natural systems can
                absorb it back.
              </p>
              <div className="flex items-start gap-2 mt-3">
                <TrendUpIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <p>
                  <strong>Result:</strong> Carbon accumulates in atmosphere →
                  traps heat → climate change
                </p>
              </div>
            </div>
          </ArticleSection>

          {/* Future Projections */}
          <ArticleSection
            icon={CalendarIcon}
            iconColor="text-amber-600"
            title="Future Projections"
          >
            <p className="mb-4">
              Estimated atmospheric carbon and global temperature if we
              continue:
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                <span className="text-blue-900">Now (2024)</span>
                <span className="text-blue-700">Current baseline levels</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg border border-amber-200">
                <span className="text-amber-900">2030</span>
                <span className="text-amber-700">+1.5°C warming</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200">
                <span className="text-orange-900">2050</span>
                <span className="text-orange-700">+2-2.5°C warming</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                <span className="text-red-900">2100</span>
                <span className="text-red-700">+3-4°C warming</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-red-100 rounded-lg border border-red-300">
                <span className="text-red-900">2200</span>
                <span className="text-red-800">
                  Potentially catastrophic levels
                </span>
              </div>
            </div>
          </ArticleSection>

          {/* Carbon Budget */}
          <ArticleSection
            icon={ClockIcon}
            iconColor="text-red-600"
            title="The Carbon Budget: How Much Time Do We Have?"
            variant="gradient"
          >
            <p>
              Scientists have calculated a &quot;carbon budget&quot; - the
              maximum amount of CO2 we can emit before exceeding 1.5°C or 2°C
              warming.
            </p>

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

            <InfoBox icon={WarningIcon} title="Tipping Points" variant="danger">
              <p>
                Beyond certain thresholds, Earth&apos;s systems hit
                &quot;tipping points&quot; - irreversible changes like Amazon
                rainforest die-off or Greenland ice sheet collapse.
              </p>
            </InfoBox>
          </ArticleSection>

          {/* How Carbon Affects Us */}
          <ArticleSection
            icon={ThermometerIcon}
            iconColor="text-red-600"
            title="How Carbon Affects Us"
          >
            <div className="space-y-6">
              <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                <div className="flex items-center gap-2 mb-3">
                  <ThermometerIcon className="w-5 h-5 text-red-600" />
                  <h3 className="text-red-900">Climate impacts</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <p className="text-red-800">
                      Rising temperatures → heatwaves, droughts
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <p className="text-red-800">
                      Extreme weather → stronger hurricanes, floods
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <p className="text-red-800">
                      Sea level rise → coastal cities threatened
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-5 rounded-xl border border-orange-200">
                <div className="flex items-center gap-2 mb-3">
                  <FishIcon className="w-5 h-5 text-orange-600" />
                  <h3 className="text-orange-900">Ecosystem impacts</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                    <p className="text-orange-800">
                      Coral reef bleaching (ocean acidification)
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                    <p className="text-orange-800">Species extinction</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                    <p className="text-orange-800">Agricultural disruption</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
                <div className="flex items-center gap-2 mb-3">
                  <UsersIcon className="w-5 h-5 text-amber-600" />
                  <h3 className="text-amber-900">Human impacts</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <p className="text-amber-800">Food and water scarcity</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <p className="text-amber-800">
                      Climate refugees and displacement
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <p className="text-amber-800">
                      Health problems (heat stress, air quality)
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRightIcon className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <p className="text-amber-800">Economic damage</p>
                  </div>
                </div>
              </div>
            </div>
          </ArticleSection>

          {/* What Can We Do - Individuals */}
          <ArticleSection
            icon={UsersIcon}
            iconColor="text-primary"
            title="What Can We Do? (Individuals)"
            variant="card"
          >
            <p className="mb-4">
              Since carbon cannot be destroyed, we must manage the flows:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <LightningIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Reduce energy consumption</p>
              </div>
              <div className="flex items-start gap-2">
                <BatteryHighIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Choose renewable energy when possible</p>
              </div>
              <div className="flex items-start gap-2">
                <CowIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Reduce meat consumption (livestock = major emissions)</p>
              </div>
              <div className="flex items-start gap-2">
                <PersonSimpleBikeIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Use public transport, bike, walk</p>
              </div>
              <div className="flex items-start gap-2">
                <ShoppingBagIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Buy less stuff (manufacturing = emissions)</p>
              </div>
            </div>
          </ArticleSection>

          {/* What Businesses Can Do */}
          <ArticleSection
            icon={BuildingIcon}
            iconColor="text-secondary"
            title="What Businesses Can Do"
          >
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <WindIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <p>Switch to renewable energy</p>
              </div>
              <div className="flex items-start gap-2">
                <LightningIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <p>Improve energy efficiency</p>
              </div>
              <div className="flex items-start gap-2">
                <ChartBarIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <p>Measure and report carbon emissions</p>
              </div>
              <div className="flex items-start gap-2">
                <FactoryIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <p>Invest in carbon capture technology</p>
              </div>
              <div className="flex items-start gap-2">
                <GlobeIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <p>Support sustainable supply chains</p>
              </div>
            </div>
          </ArticleSection>

          {/* What Society Can Do */}
          <ArticleSection
            icon={MapPinAreaIcon}
            iconColor="text-primary"
            title="What Society Can Do"
            variant="highlight"
          >
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <ChartBarIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Government policies (carbon pricing, regulations)</p>
              </div>
              <div className="flex items-start gap-2">
                <WindIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Invest in clean technology (solar, wind, nuclear)</p>
              </div>
              <div className="flex items-start gap-2">
                <TreeIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Protect and restore forests (carbon sinks)</p>
              </div>
              <div className="flex items-start gap-2">
                <GlobeIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>International cooperation (Paris Agreement)</p>
              </div>
              <div className="flex items-start gap-2">
                <LightbulbIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Innovation in carbon removal</p>
              </div>
            </div>
          </ArticleSection>

          {/* Hope & Progress */}
          <ArticleSection
            icon={HandshakeIcon}
            iconColor="text-primary"
            title="Hope & Progress"
            variant="gradient"
          >
            <div className="relative h-[200px] rounded-xl overflow-hidden mb-4">
              <img
                src="https://images.unsplash.com/photo-1760425701471-d90374f6114d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGhvcGUlMjBuYXR1cmUlMjBncm93dGh8ZW58MXx8fHwxNzY1MTkwMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hope and Progress"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>
                  Renewable energy is now cheaper than fossil fuels in many
                  places
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Global CO2 emissions growth is slowing</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Reforestation projects are capturing carbon</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Every action matters - the cycle can be rebalanced</p>
              </div>
            </div>
          </ArticleSection>

          {/* Interesting Facts */}
          <ArticleSection
            icon={SparkleIcon}
            iconColor="text-secondary"
            title="Interesting Facts"
            variant="card"
          >
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-[var(--background2)] rounded-lg">
                <SparkleIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <p>
                  Every carbon atom in your body was once in a dinosaur, a tree,
                  or the ocean
                </p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-[var(--background2)] rounded-lg">
                <TreeIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>A single tree can absorb 48 pounds of CO2 per year</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-[var(--background2)] rounded-lg">
                <WavesIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <p>The oceans have absorbed 30% of human CO2 emissions</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-[var(--background2)] rounded-lg">
                <CloudIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>
                  Your breath contains about 40,000 parts per million of CO2 -
                  100x more than the air!
                </p>
              </div>
            </div>
          </ArticleSection>

          {/* Related Links */}
          <ArticleSection
            icon={LinkIcon}
            iconColor="text-primary"
            title="What else is related to this?"
          >
            <div className="grid md:grid-cols-2 gap-3">
              <a
                href="#"
                className="flex items-center gap-2 p-4 bg-card rounded-lg border border-border/50 hover:border-primary/50 hover:bg-[var(--background-hover)] transition-colors"
              >
                <ThermometerIcon className="w-5 h-5 text-primary" />
                <span>Climate Change</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 p-4 bg-card rounded-lg border border-border/50 hover:border-primary/50 hover:bg-[var(--background-hover)] transition-colors"
              >
                <CloudIcon className="w-5 h-5 text-secondary" />
                <span>Greenhouse Gases</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 p-4 bg-card rounded-lg border border-border/50 hover:border-primary/50 hover:bg-[var(--background-hover)] transition-colors"
              >
                <WindIcon className="w-5 h-5 text-primary" />
                <span>Renewable Energy Solutions</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 p-4 bg-card rounded-lg border border-border/50 hover:border-primary/50 hover:bg-[var(--background-hover)] transition-colors"
              >
                <TreeIcon className="w-5 h-5 text-secondary" />
                <span>Forests and Biodiversity</span>
              </a>
            </div>
          </ArticleSection>
        </div>
      </ArticleWrapper>
    </div>
  );
}
