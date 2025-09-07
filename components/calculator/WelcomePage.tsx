import ButtonBig from "../custom/button-big";
import questions from "@/lib/questions.json";

export default function WelcomePage() {
  return (
    <section className="calc-page-center paper">
      <div className="flex-col flex-center">
        <p className="text-lg">Hello!</p>
        <h2 className="text-xl">Find out your carbon impact in 2 minutes</h2>
        <p className="mb-4">Anonymous and Free</p>
        <div className="text-lg flex-center">
          <p className="border-b border-dotted border-black">
            Average USA Citizen
          </p>
          <p className="border-b border-dotted border-transparent">
            : 12 tonnes CO₂ a year
          </p>
        </div>
      </div>
      <div className="h-[120px]"></div>
      <div className="flex-col flex-center space-y-4">
        <p>We will show you how to reasonably reduce your emissions at the end</p>
        <ButtonBig text="Let's go!" />
        <p>
          If you are a child/dependent, you shouldn't take this survey - your
          emissions are attributed to the adults responsible for you.
        </p>
      </div>
    </section>
  );
}
