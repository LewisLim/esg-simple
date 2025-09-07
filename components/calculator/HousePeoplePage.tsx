import { useState } from "react";
import { HandPointingIcon } from "@phosphor-icons/react";
import survey from "@/lib/questions.json";
import Slider from "rc-slider";
import { BaseSurvey } from "@/types/interface";

interface Props {
  data: BaseSurvey;
  setData: React.Dispatch<React.SetStateAction<BaseSurvey>>;
}

export default function HousePeoplePage({ data, setData }: Props) {
  const [sliderValue, setSliderValue] = useState<number>(1);

  const page = survey?.pages[4];
  const question = page?.questions?.[0];
  const sliderOptions =
    question?.type === "slider" && "min" in question && "max" in question
      ? question
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

      {/* First Question */}
      <div className="calc-question flex-center">
        <h2 className="text-xl">{question?.question ?? "Error"}</h2>
      </div>

      <div className="calc-answer">
        {sliderOptions && (
          <div className="flex justify-center h-full">
            <div className="relative flex-center flex-col w-10 h-10/12">
              <p className="text-center mb-3">{sliderValue}</p>
              <Slider
                id="people"
                min={sliderOptions.min}
                max={sliderOptions.max}
                value={sliderValue}
                vertical={true}
                onChange={(value) => setSliderValue(value as number)}
                className="flex-1 mt-7"
              />
              <HandPointingIcon
                size={30}
                color="#454545"
                className="icon absolute -bottom-9 left-1/2 -translate-x-1/2 z-1"
              />
              <label
                htmlFor="people"
                className="text-center text-xs sm:text-sm mt-3"
              >
                People
              </label>
            </div>
          </div>
        )}
      </div>

      <div className="mt-2">
        <p className="tip">Tip: {page?.tip ?? "Error"}</p>
        <div className="flex items-center justify-around my-2 sm:my-4">
          <button className="btn">Back</button>
          <button className="btn">Next</button>
        </div>
      </div>
    </section>
  );
}
