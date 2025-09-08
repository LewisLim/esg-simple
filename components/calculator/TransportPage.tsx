import ButtonBig from "@/components/custom/button-big";
import survey from "@/lib/questions.json";
import { BaseSurvey } from "@/types/interface";
import ProgressBar from "@/components/custom/ProgressBar";

interface Props {
  data: BaseSurvey;
  setData: React.Dispatch<React.SetStateAction<BaseSurvey>>;
  hasNextButton?: boolean;
}

export default function TransportPage({
  data,
  setData,
  hasNextButton = false,
}: Props) {
  const page = survey?.pages[1];
  const question = page?.questions?.[0];
  const buttonOptions =
    question?.type === "buttons" && "options" in question
      ? question.options
      : null;

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

      {/* Answer */}
      <div className="calc-answer">
        {buttonOptions &&
          buttonOptions.map((option, index) => (
            <div
              key={index}
              className="px-4 py-3 cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-[1.02] bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-300 active:scale-[0.98]"
            >
              <div className="flex items-center justify-between w-[260px] sm:w-[320px] md:w-[550px]">
                <span className="text-gray-700">{option?.label ?? "N/A"}</span>
                <div className="w-3 h-3 rounded-full border-2 border-gray-300" />
              </div>
            </div>
          ))}
      </div>

      <div className="mt-2">
        <div className="flex items-center justify-around my-2 sm:my-4 space-x-3">
          <button
            // onClick={onClick}
            // disabled={disabled}
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
              // onClick={onClick}
              // disabled={disabled}
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
