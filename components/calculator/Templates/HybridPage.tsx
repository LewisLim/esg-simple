import { useEffect, useState } from "react";
import survey from "@/lib/calculator/questions.json";
import { BaseSurvey } from "@/types/interface";
import ProgressBar from "@/components/custom/ProgressBar";
import Slider from "rc-slider";
import { detectUserCountryCode } from "@/lib/utils/detect-country";

interface Props {
  pageNum: number;
  data: BaseSurvey;
  setData: React.Dispatch<React.SetStateAction<BaseSurvey>>;
  onNext: () => void;
  onPrevious: () => void;
}

export default function HybridPage({
  pageNum,
  data,
  setData,
  onNext,
  onPrevious,
}: Props) {
  const page = survey?.pages[pageNum];
  const [wasAutoDetected, setWasAutoDetected] = useState(false);

  // Auto-detect country on mount, only if not already set — never
  // overwrites a value the user (or a previous visit) already chose.
  // The dropdown remains fully editable; this only pre-fills the guess.
  useEffect(() => {
    if (data.country === "") {
      const detected = detectUserCountryCode();
      if (detected) {
        setData((prev) => ({ ...prev, country: detected }));
        setWasAutoDetected(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleCountryChange(value: string) {
    setData((prev) => ({ ...prev, country: value }));
    setWasAutoDetected(false); // user took over — no longer "just a guess"
  }

  function handleSliderChange(sliderId: string, value: number) {
    const fieldKey = sliderId as keyof BaseSurvey;
    setData((prev) => ({ ...prev, [fieldKey]: value }));
  }

  function getCurrentValue(sliderId: string, fallback: number): number {
    const fieldKey = sliderId as keyof BaseSurvey;
    const value = data[fieldKey];
    return typeof value === "number" ? value : fallback;
  }

  // "Next" only enabled once a country is actually selected — the
  // sliders always have a valid value (default 0), so country is the
  // only real gate on this page.
  const canProceed = data.country !== "";

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

      <div className="category-intro text-sm font-muted">
        <p className="text-base">{page?.categoryIntro}</p>
      </div>

      {/* Question and Answer - Hybrid Section */}
      <div className="calc-answer-full">
        {page?.questions?.map((question, questionIndex) => (
          <div key={question.id || questionIndex} className="mb-5">
            {/* Question Title */}
            <div className="calc-question flex-center mb-4">
              <h2 className="text-lg">{question?.question ?? "Error"}</h2>
            </div>

            {/* Dropdown Question (country) */}
            {question?.type === "dropdown" &&
              (() => {
                const dropdownQuestion = question as {
                  id: string;
                  type: string;
                  question: string;
                  placeholder?: string;
                  fallbackPlaceholder?: string;
                  options: { value: string; label: string }[];
                  required?: boolean;
                };
                return (
                  <div className="flex-col flex-center">
                    {wasAutoDetected && (
                      <p className="text-xs text-gray-400 mb-2">
                        Detected automatically — change it if this isn&apos;t
                        right
                      </p>
                    )}
                    <select
                      name="country"
                      id="country"
                      value={data.country}
                      onChange={(e) => handleCountryChange(e.target.value)}
                      className="
                        px-4 py-2 rounded-md border border-gray-300
                        bg-white text-gray-700
                        focus:outline-none focus:ring-2 focus:ring-emerald-300
                        w-[260px] sm:w-[320px]
                      "
                    >
                      <option value="" disabled>
                        {dropdownQuestion.fallbackPlaceholder ??
                          "Select your country"}
                      </option>
                      {dropdownQuestion.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              })()}

            {/* Sliders Question (dependency, pets) */}
            {question?.type === "sliders" &&
              (() => {
                const sliderQuestion = question as {
                  id: string;
                  type: string;
                  question: string;
                  sliders: {
                    id: string;
                    label: string;
                    min: number;
                    max: number;
                    default?: number;
                    icon?: string;
                    description?: string;
                  }[];
                };
                return (
                  <div className="space-x-12 flex-center min-h-[190px] flex-1">
                    {sliderQuestion.sliders.map((slider, index) => {
                      const currentValue = getCurrentValue(
                        slider.id,
                        slider.default ?? slider.min,
                      );
                      return (
                        <div
                          key={slider.id || index}
                          className="flex justify-center h-full"
                        >
                          <div className="relative flex flex-col items-center justify-between h-full w-10 min-h-[190px]">
                            <p className="text-center font-medium">
                              {currentValue}
                            </p>
                            <label
                              htmlFor={slider.id}
                              className="text-center text-xs sm:text-sm"
                            >
                              {slider.label}
                            </label>
                            <div className="w-[16px] h-full mt-[16px]">
                              <Slider
                                id={slider.id}
                                min={slider.min}
                                max={slider.max}
                                value={currentValue}
                                onChange={(val) => {
                                  const numeric = Array.isArray(val)
                                    ? val[0]
                                    : val;
                                  handleSliderChange(slider.id, numeric);
                                }}
                                vertical={true}
                                className="flex-1 my-3 min-h-[150px]"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })()}
          </div>
        ))}
      </div>

      <div className="mt-2 mx-auto">
        <div className="flex items-center justify-around my-2 sm:my-4 space-x-3">
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
            disabled={!canProceed}
            className="
              px-4 py-2
              bg-emerald-300 hover:bg-teal-300 hover:scale-[1.02]
              rounded-md font-medium text-gray-600
              transition-all duration-200
              cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-300 disabled:hover:scale-100
            "
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
