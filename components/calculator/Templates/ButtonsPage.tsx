import survey from "@/lib/calculator/questions.json";
import { BaseSurvey } from "@/types/interface/calculator-interface";
import ProgressBar from "@/components/custom/ProgressBar";

interface Props {
  pageNum: number;
  data: BaseSurvey;
  setData: React.Dispatch<React.SetStateAction<BaseSurvey>>;
  onNext: () => void;
  onPrevious: () => void;
}

export default function ButtonsPage({
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

  // question.id matches a BaseSurvey key directly (e.g. "transport", "diet")
  const fieldKey = question?.id as keyof BaseSurvey | undefined;
  const currentValue = fieldKey ? data[fieldKey] : undefined;

  function handleSelect(value: string) {
    if (!fieldKey) return;
    setData((prev) => ({ ...prev, [fieldKey]: value }));
    // auto-advance on selection, per single-click-then-next UX
    onNext();
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

      <div className="category-intro font-muted">
        <p className="text-sm">{page?.categoryIntro}</p>
      </div>

      {/* Answer */}
      <div className="calc-answer">
        {buttonOptions &&
          buttonOptions.map((option, index) => {
            const isSelected = currentValue === option.value;
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
                  <div>
                    <span className="text-gray-700">
                      {option?.label ?? "N/A"}
                    </span>
                    {(() => {
                      const description: string | undefined = (
                        option as { description?: string }
                      ).description;
                      return description ? (
                        <p className="text-xs text-gray-400 mt-0.5">
                          {description}
                        </p>
                      ) : null;
                    })()}
                  </div>
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
