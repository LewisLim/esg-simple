import ButtonBig from "../custom/button-big";

export default function TemplatePage() {
  return (
    <section className="calc-page paper">
      {/* Question */}
      <div className="calc-question flex-center">
        <p className="text-lg">Let's start with transport</p>
        <h2 className="text-xl">How do you travel?</h2>
      </div>

      {/* Answers */}
      <div className="calc-answer">
        <ButtonBig text="Answer 1" />
        <ButtonBig text="Answer 2" />
        <ButtonBig text="Answer 3" />
        <ButtonBig text="Answer 4" />
        <ButtonBig text="Answer 5" />
        <ButtonBig text="Answer 6" />
      </div>
    </section>
  );
}
