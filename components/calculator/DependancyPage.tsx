import { useState } from "react";
import { HandPointingIcon } from "@phosphor-icons/react";
import data from "@/lib/questions.json";
import Slider from "rc-slider";

export default function DependancyPage() {
  const [childrenValue, setChildrenValue] = useState<number>(0);
  const [petsValue, setPetsValue] = useState<number>(0);

  const page = data?.pages[1];
  const questionCountry = page?.questions?.[0];
  const questionDependancy = page?.questions?.[1];
  const dropdownOptions =
    questionCountry?.type === "dropdown" && "options" in questionCountry
      ? questionCountry.options
      : null;
  const sliderOptions =
    questionDependancy?.type === "slider" && "sliders" in questionDependancy
      ? questionDependancy.sliders
      : null;

  return (
    <section className="calc-page paper">
      {/* Progress Bar */}
      <div className="w-full">
        <div className="progress-bar flex-center">
          <div
            className="progress-fill"
            style={{
              width: `${page?.progress?.current / page?.progress?.total}%`,
            }}
          ></div>
        </div>
        <div className="flex items-center justify-end">
          <div>
            <p className="progress-text">
              Progress: {page?.progress?.current} of {page?.progress?.total}
            </p>
            {/* Running Result */}
            {page?.feedback && (
              <p className="text-sm">Result: {page?.feedback?.result}</p>
            )}
          </div>
          <div></div>
        </div>
      </div>

      <div className="category-intro">
        <p className="text-lg">{page?.categoryIntro}</p>
      </div>

      {/* First Question - Dropdown */}
      <div className="calc-question flex-center">
        <h2 className="text-xl">{questionCountry?.question ?? "Error"}</h2>
      </div>

      {/* Second Question - Sliders */}
      <div className="calc-question flex-center mt-8">
        <h2 className="text-xl">{questionDependancy?.question ?? "Error"}</h2>
      </div>

      <div className="calc-answer">
        {sliderOptions && (
          <div className="flex space-x-8 h-full">
            {sliderOptions.map((slider) => (
              <div
                key={slider.id}
                className="relative flex flex-col items-center w-10 h-10/12"
              >
                <p className="text-center mb-3">
                  {slider.id === "children" ? childrenValue : petsValue}
                </p>
                <Slider
                  min={slider.min}
                  max={slider.max}
                  value={slider.id === "children" ? childrenValue : petsValue}
                  vertical={true}
                  onChange={(value) => {
                    if (slider.id === "children") {
                      setChildrenValue(value as number);
                    } else {
                      setPetsValue(value as number);
                    }
                  }}
                  className="flex-1 mt-7"
                />
                <HandPointingIcon
                  size={32}
                  color="#454545"
                  className="icon absolute -bottom-9 left-1/2 -translate-x-1/2 z-1"
                />
                <p className="text-center text-sm mt-3">{slider.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6">
        <p>Tip: {page?.tip ?? "Error"}</p>
        <div className="flex-center space-x-3 my-4">
          <button className="btn">Back</button>
          <button className="btn">Next</button>
        </div>
      </div>
    </section>
  );
}
