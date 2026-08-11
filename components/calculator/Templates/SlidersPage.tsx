import survey from "@/lib/calculator/questions.json";
import { BaseSurvey } from "@/types/interface/calculator-interface";
import ProgressBar from "@/components/custom/ProgressBar";
import Slider from "rc-slider";

interface Props {
  pageNum: number;
  data: BaseSurvey;
  setData: React.Dispatch<React.SetStateAction<BaseSurvey>>;
  onNext: () => void;
  onPrevious: () => void;
}

export default function SlidersPage({
  pageNum,
  data,
  setData,
  onNext,
  onPrevious,
}: Props) {
  const page = survey?.pages[pageNum];
  const question = page?.questions?.[0];
  const sliders =
    question?.type === "sliders" && "sliders" in question
      ? question.sliders
      : null;

  function handleSliderChange(sliderId: string, value: number) {
    const fieldKey = sliderId as keyof BaseSurvey;
    setData((prev) => ({ ...prev, [fieldKey]: value }));
  }

  function getCurrentValue(sliderId: string, fallback: number): number {
    const fieldKey = sliderId as keyof BaseSurvey;
    const value = data[fieldKey];
    return typeof value === "number" ? value : fallback;
  }

  return (
    <section className="calc-page paper">
      {/* Progress Bar */}
      <div className="w-full">
        <div className="progress-bar flex-center">
          <ProgressBar
            current={page?.progress?.current || 0}
            total={page?.progress?.total || 1}
          />
        </div>
      </div>

      {/* Question */}
      <div className="calc-question flex-center">
        <h2 className="text-lg">{question?.question ?? "Error"}</h2>
      </div>

      <div className="category-intro text-sm font-muted">
        <p className="text-base">{page?.categoryIntro}</p>
      </div>

      {/* Answer - Sliders Section */}
      <div className="calc-answer">
        {sliders ? (
          <div className="space-x-12 h-full flex-center">
            {sliders.map((slider, index) => {
              const currentValue = getCurrentValue(
                slider.id,
                slider.default ?? slider.min,
              );
              return (
                <div
                  key={slider.id || index}
                  className="flex justify-center h-full"
                >
                  <div className="relative flex-center flex-col h-full">
                    <p className="text-center font-medium">{currentValue}</p>
                    <label
                      htmlFor={slider.id}
                      className="text-center text-xs sm:text-sm"
                    >
                      {slider.label}
                    </label>
                    <div className="w-[16px] h-full mt-[32px] min-h-[190px]">
                      <Slider
                        id={slider.id}
                        min={slider.min}
                        max={slider.max}
                        value={currentValue}
                        onChange={(val) => {
                          const numeric = Array.isArray(val) ? val[0] : val;
                          handleSliderChange(slider.id, numeric);
                        }}
                        vertical={true}
                        className="flex-1 min-h-[150px]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          "Error"
        )}
      </div>

      <div className="mt-2 mx-auto">
        <div className="flex items-center justify-center my-2 sm:my-4 space-x-3">
          <button
            onClick={onPrevious}
            className="
              px-4 py-2
              bg-slate-200 hover:bg-slate-300 hover:scale-[1.02]
              rounded-md font-medium text-gray-600
              transition-all duration-200
              cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            Previous Question
          </button>
          <button
            onClick={onNext}
            className="
              px-4 py-2
              bg-emerald-300 hover:bg-teal-300 hover:scale-[1.02]
              rounded-md font-medium text-gray-600
              transition-all duration-200
              cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
