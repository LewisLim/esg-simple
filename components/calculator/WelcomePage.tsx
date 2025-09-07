import ButtonBig from "../custom/button-big";
import questions from "@/lib/questions.json";

export default function WelcomePage() {
  return (
    <section className="calc-page-center paper">
      <div className="flex-col flex-center">
        <p className="text-lg">Hey There!</p>
        <h2 className="text-xl text-center">
          Find out your carbon impact in 2 minutes
        </h2>
        <p className="mb-4 text-center">Free and Anonymous</p>
        <div className="text-lg flex-center flex-col sm:flex-row">
          <p className="border-b border-dotted border-black">
            Average USA Citizen :
          </p>
          <p className="border-b border-dotted border-transparent">
            12 tonnes CO₂ a year
          </p>
        </div>
      </div>
      <div className="h-[100px] sm:h-[120px]"></div>
      <div className="flex-col flex-center space-y-4 text-center">
        <p>
          We will show you how to reasonably reduce your emissions
        </p>
        <div className="w-75">
          <ButtonBig text="Let's go!" />
        </div>
        <p className="text-xs mt-12">
          If you are a child/dependent, you shouldn't take this survey - your
          emissions are attributed to the adults responsible for you.
        </p>
      </div>
    </section>
  );
}
