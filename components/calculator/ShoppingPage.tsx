import { useEffect, useState } from "react";
import survey from "@/lib/calculator/questions.json";
import { BaseSurvey } from "@/types/interface/calculator-interface";
import ProgressBar from "@/components/custom/ProgressBar";
import {
  convertUsdToLocal,
  ConvertedAmount,
} from "@/lib/utils/currency-convert";

interface Props {
  pageNum: number;
  data: BaseSurvey;
  setData: React.Dispatch<React.SetStateAction<BaseSurvey>>;
  onNext: () => void;
  onPrevious: () => void;
}

// USD thresholds matching ASSUMED_MONTHLY_SPEND_USD bucket boundaries
// in shopping-emissions.ts (the bucket EDGES, not the midpoints used
// for the calc itself - these are what the label text needs to show).
const BUCKET_THRESHOLDS_USD = {
  low: 100,
  medium: 1000,
  high: 5000,
};

export default function ShoppingPage({
  pageNum,
  data,
  setData,
  onNext,
  onPrevious,
}: Props) {
  const page = survey?.pages[pageNum];
  const question = page?.questions?.[0];
  const buttonOptions =
    question?.type === "buttons" && "options" in question
      ? question.options
      : null;

  const [converted, setConverted] = useState<{
    low: ConvertedAmount;
    medium: ConvertedAmount;
    high: ConvertedAmount;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadConversions() {
      const [low, medium, high] = await Promise.all([
        convertUsdToLocal(BUCKET_THRESHOLDS_USD.low, data.country),
        convertUsdToLocal(BUCKET_THRESHOLDS_USD.medium, data.country),
        convertUsdToLocal(BUCKET_THRESHOLDS_USD.high, data.country),
      ]);
      if (!cancelled) {
        setConverted({ low, medium, high });
      }
    }

    loadConversions();
    return () => {
      cancelled = true;
    };
  }, [data.country]);

  function handleSelect(value: string) {
    setData((prev) => ({ ...prev, shopping: value }));
    onNext();
  }

  function getLabel(optionValue: string, fallbackLabel: string): string {
    if (!converted) return fallbackLabel; // show static label while loading

    const { low, medium, high } = converted;
    const symbol = low.symbol; // same currency across all three

    switch (optionValue) {
      case "low":
        return `Spend < ${symbol} ${low.amount} a month`;
      case "medium":
        return `Spend ${symbol} ${low.amount} - ${symbol} ${medium.amount} a month`;
      case "high":
        return `Spend ${symbol} ${medium.amount} - ${symbol} ${high.amount} a month`;
      case "very_high":
        return `Spend > ${symbol} ${high.amount} a month`;
      default:
        return fallbackLabel;
    }
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

      {converted && !converted.low.isConverted && (
        <p className="px-3 text-xs text-gray-400 text-center mb-2">
          Showing amounts in USD — live currency conversion unavailable
        </p>
      )}

      {/* Answer */}
      <div className="calc-answer">
        {buttonOptions &&
          buttonOptions.map((option, index) => {
            const isSelected = data.shopping === option.value;
            const label = getLabel(option.value, option.label ?? "N/A");
            return (
              <div
                key={option.value ?? index}
                onClick={() => handleSelect(option.value)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleSelect(option.value);
                  }
                }}
                className={`
                  px-4 py-3 cursor-pointer transition-all duration-200
                  hover:shadow-md hover:scale-[1.02] active:scale-[0.98]
                  border rounded-lg shadow-sm
                  ${
                    isSelected
                      ? "bg-emerald-50 border-emerald-400 ring-2 ring-emerald-300"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }
                `}
              >
                <div className="flex items-center justify-between w-[260px] sm:w-[320px] md:w-[550px]">
                  <span className="text-gray-700">{label}</span>
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${
                      isSelected
                        ? "bg-emerald-400 border-emerald-400"
                        : "border-gray-300"
                    }`}
                  />
                </div>
              </div>
            );
          })}
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
        </div>
      </div>
    </section>
  );
}
