import ButtonBig from "../custom/button-big";
import survey from "@/lib/questions.json";
import { BaseSurvey } from "@/types/interface";

interface Props {
  data: BaseSurvey;
  setData: React.Dispatch<React.SetStateAction<BaseSurvey>>;
}

export default function FoodPage({ data, setData }: Props) {
  const page = survey?.pages[3];
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
        {buttonOptions &&
          buttonOptions.map((option) => (
            <ButtonBig
              key={option.value}
              text={option.label}
              // icon={option.icon}
            />
          ))}
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
