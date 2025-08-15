import ButtonBig from "../custom/button-big";

export default function CalculatorPage() {
  return (
    <section className="w-full h-[calc(100vh-170px)] paper flex flex-col justify-start items-center p-6">
      {/* Question */}
      <div className="p-5 h-[110px] flex-col flex-center space-y-2">
        <p className="text-lg">Let's start with transport</p>
        <h2 className="text-xl">How do you travel?</h2>
      </div>

      {/* Answers */}
      <div className="p-5 min-h-[350px] w-full flex flex-col items-center justify-start space-y-3 bg-blue-100">
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
