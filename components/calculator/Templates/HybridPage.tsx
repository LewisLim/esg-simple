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

export default function HybridPage({
  pageNum,
  data,
  setData,
  hasNextButton = false,
}: Props) {
  const page = survey?.pages[pageNum];

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

      <div className="category-intro text-sm font-muted">
        <p className="text-base">{page?.categoryIntro}</p>
      </div>

      {/* Question and Answer - Hybrid Section */}
      <div className="calc-answer-full">
        {page?.questions?.map((question, questionIndex) => (
          <div key={question.id || questionIndex} className="mb-8">
            {/* Question Title */}
            <div className="calc-question flex-center mb-4">
              <h2 className="text-lg">{question?.question ?? "Error"}</h2>
            </div>

            {/* Dropdown Question */}
            {question?.type === "dropdown" && (
              <div className="flex-col flex-center">
                <select name="country" id="country">
                  <option value="singapore">Singapore</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                </select>
              </div>
            )}

            {/* Sliders Question */}
            {question?.type === "sliders" && (question as any).sliders && (
              <div className="space-x-12 flex-center min-h-[190px] flex-1">
                {(question as any).sliders.map((slider: any, index: number) => (
                  <div
                    key={slider.id || index}
                    className="flex justify-center h-full"
                  >
                    <div className="relative flex flex-col items-center justify-between h-full w-10 min-h-[190px]">
                      <p className="text-center">{slider.default || 0}</p>
                      <label
                        htmlFor={slider.id}
                        className="text-center text-xs sm:text-sm"
                      >
                        {slider.label}
                      </label>
                      <Slider
                        id={slider.id}
                        min={slider.min}
                        max={slider.max}
                        value={slider.default || 0}
                        vertical={true}
                        className="flex-1 my-3 min-h-[140px]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-2">
        <div className="flex items-center justify-around my-2 sm:my-4 space-x-3">
          <button
            className={`
              px-4 py-2 
              bg-slate-200 hover:bg-slate-300 hover:scale-[1.02]  
              rounded-md 
              font-medium 
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
              bg-teal-200 hover:bg-teal-300 hover:scale-[1.02]  
              rounded-md 
              font-medium 
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
