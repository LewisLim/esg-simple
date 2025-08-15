import Button from "../custom/button";
import ButtonBig from "../custom/button-big";
import questions from "@/lib/questions.json";

export default function WelcomePage() {
  return (
    <section className="calc-page paper">
      {/* Question */}
      <div className="calc-question flex-center">
        <p className="text-lg">Hello!</p>
        <h2 className="text-xl">Find out your carbon impact in 2 minutes</h2>
        <p>Anonymous and Free</p>
      </div>

      {/* Answers */}
      <div className="calc-answer">
        <div className="flex-col flex-center">
          <p>
            Did you know your travel habits might outweigh your entire home
            energy use?
          </p>
          <Button text="Let's see my footprint" />
        </div>
        <div className="flex-col flex-center mt-4">
          <p>Skip calculator</p>
          <Button text="See your country's average" />
        </div>
      </div>
    </section>
  );
}
