import survey from "@/lib/questions.json";
import { BaseSurvey } from "@/types/interface";
import ProgressBar from "@/components/custom/ProgressBar";
import Slider from "rc-slider";

interface Props {
  pageNum: number;
  data: BaseSurvey;
  setData: React.Dispatch<React.SetStateAction<BaseSurvey>>;
  hasNextButton?: boolean;
}

export default function SlidersPage({
  pageNum,
  data,
  setData,
  hasNextButton = false,
}: Props) {
  const page = survey?.pages[pageNum];
  const question = page?.questions?.[0];

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
        <div className="flex items-center justify-end">
          <div>
            {/* Running Result */}
            {page?.feedback && (
              <p className="text-sm">Result: {page?.feedback?.result}</p>
            )}
          </div>
          <div></div>
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
        {question?.type === "sliders" && (question as any).sliders ? (
          <div className="space-x-12 h-full flex-center">
            {(question as any).sliders.map((slider: any, index: number) => (
              <div
                key={slider.id || index}
                className="flex justify-center h-full"
              >
                <div className="relative flex-center flex-col h-full">
                  <p className="text-center">{slider.default || 0}</p>
                  <label
                    htmlFor={slider.id}
                    className="text-center text-xs sm:text-sm"
                  >
                    {slider.label}
                  </label>
                  <div className="w-[16px] h-full mt-[32px]">
                    <Slider
                      id={slider.id}
                      min={slider.min}
                      max={slider.max}
                      // value={slider.default || 0}
                      vertical={true}
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          "Error"
        )}
      </div>

      <div className="mt-2">
        <div className="flex items-center justify-around my-2 sm:my-4 space-x-3">
          <button
            className={`
              px-4 py-2 
              bg-slate-200 hover:bg-slate-300 hover:scale-[1.02]  
              rounded-md 
              font-medium
              text-gray-600 
              transition-all duration-200 
              cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200
            `}
          >
            Previous Question
          </button>
          {hasNextButton && (
            <button
              className={`
              px-4 py-2 
              bg-emerald-300 hover:bg-teal-300 hover:scale-[1.02]  
              rounded-md 
              font-medium 
              text-gray-600
              transition-all duration-200 
              cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200
            `}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
