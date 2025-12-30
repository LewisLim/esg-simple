"use client";

import { ArticleSection } from "@/components/article/ArticleSection";
import { InfoBox } from "@/components/article/InfoBox";
import ArticleWrapper from "@/components/layout/ArticleWrapper";
import {
  SunIcon,
  ThermometerIcon,
  WarningIcon,
  LeafIcon,
  WavesIcon,
  CloudIcon,
  RecycleIcon,
  LightbulbIcon,
} from "@phosphor-icons/react";

export default function SunPage() {
  return (
    <div className="paper-light calc-page w-full h-full relative">
      <ArticleWrapper title="The Sun">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
          <ArticleSection
            icon={SunIcon}
            iconColor="text-amber-500"
            title="What if the Sun disappeared?"
            variant="card"
          >
            <p>
              Without the Sun, Earth would become a frozen, dead world. Here's
              what would happen:
            </p>
            <ul className="space-y-2">
              <li>
                The temperature would drop to around -200°C to -240°C. That's
                colder than anywhere on Earth today.
              </li>
              <li>
                All the oceans would freeze into solid ice. All the way to the
                bottom.
              </li>
              <li>
                Weather would stop completely. No wind. No rain. No clouds.
                Nothing moving.
              </li>
              <li>All life would die.</li>
            </ul>
          </ArticleSection>

          <ArticleSection
            icon={SunIcon}
            iconColor="text-amber-500"
            title="What the Sun Gives Us"
            variant="gradient"
          >
            <h3>Sunlight - Energy for Life</h3>
            <p>
              Plants capture sunlight and turn it into food. This is incredibly
              important because:
            </p>
            <ul className="space-y-2">
              <li>
                Plants are Earth's biggest absorbers of carbon from the air
              </li>
              <li>
                Different colors of sunlight help plants in different ways. Red
                and blue light are especially important for growth.
              </li>
              <li>
                Plants form the base of the food chain. They feed insects.
                Insects feed birds. Birds might feed foxes. And so on. Almost
                every living thing depends on plants.
              </li>
            </ul>
          </ArticleSection>

          <ArticleSection
            icon={ThermometerIcon}
            iconColor="text-red-500"
            title="Heat - Keeping Earth Warm and Moving"
            variant="highlight"
          >
            <p>The Sun's heat does much more than just warm us up:</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <ThermometerIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>It warms the soil and air</strong>
                  <p>So life can exist</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <WavesIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>It powers the water cycle</strong>
                  <p>
                    It makes water turn from liquid into invisible gas (this is
                    called evaporation). Water from oceans, lakes, rivers, and
                    soil goes into the air. This water later falls as rain.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CloudIcon className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>It creates all our weather</strong>
                  <p>
                    Wind, storms, clouds. All created by the Sun heating air
                    unevenly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <RecycleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>It helps nature recycle</strong>
                  <p>
                    It helps tiny living things in soil break down dead plants
                    and animals. These are nature's recycling system. They turn
                    waste back into nutrients that new plants can use.
                  </p>
                </div>
              </div>
            </div>
          </ArticleSection>

          <ArticleSection
            icon={WavesIcon}
            iconColor="text-blue-500"
            title="Energy That Keeps Everything Moving"
            variant="card"
          >
            <p>
              The Sun's energy doesn't just sit still. It moves things around on
              a massive scale:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <WavesIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Ocean currents flow</strong>
                  <p>
                    The Sun heats different parts of the ocean differently. Warm
                    water moves one way. Cold water moves another.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CloudIcon className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Air moves around Earth</strong>
                  <p>
                    The Sun heats air unevenly. Warm air rises. Cool air sinks.
                    This creates wind.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <LeafIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Seasons change</strong>
                  <p>
                    As Earth orbits (goes around) the Sun, different parts of
                    the planet get more or less sunlight. This creates seasons.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <SunIcon className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Climate patterns form</strong>
                  <p>
                    Long-term weather patterns come from how the Sun's energy
                    spreads around the globe.
                  </p>
                </div>
              </div>
            </div>
          </ArticleSection>

          <ArticleSection variant="card">
            <h2>Summary</h2>
            <p>
              The Sun is Earth's engine. Almost every movement, every living
              thing, and every weather event comes from energy from the Sun.
              We're all living on solar power.
            </p>
          </ArticleSection>

          {/* Now What Section */}
          <ArticleSection
            icon={LightbulbIcon}
            iconColor="text-primary"
            title="Now That You Understand the Sun..."
            variant="gradient"
          >
            <h3>Why this matters for climate:</h3>
            <div className="space-y-2 mb-4">
              <p>
                • The Sun gives us all our energy - but we need to use it wisely
              </p>
              <p>
                • Solar panels capture the Sun's energy directly (clean,
                unlimited power)
              </p>
              <p>
                • Fossil fuels are just ancient solar energy stored underground
                - but burning them releases too much carbon too fast
              </p>
            </div>

            <h3>Learn more:</h3>
            <div className="space-y-2 mb-4">
              <p>
                •{" "}
                <a href="#" className="text-primary hover:underline">
                  Read: Carbon
                </a>{" "}
                - Understand how energy connects to carbon
              </p>
              <p>
                •{" "}
                <a href="#" className="text-primary hover:underline">
                  Read: What You Can Do
                </a>{" "}
                - Learn about switching to solar power
              </p>
            </div>

            <h3>The big picture:</h3>
            <p>
              Everything on Earth runs on the Sun's energy. Understanding this
              helps you see why solar and wind power make sense. They use the
              Sun's energy directly. No digging up ancient carbon. No adding
              extra CO2 to the air. Just using what the Sun gives us every day.
            </p>
          </ArticleSection>
        </div>
      </ArticleWrapper>
    </div>
  );
}
