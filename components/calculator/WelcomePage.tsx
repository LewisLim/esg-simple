import ButtonBig from "../custom/button-big";

interface Props {
  onStart: () => void;
}

export default function WelcomePage({ onStart }: Props) {
  return (
    <section className="calc-page-center paper">
      <div className="flex-col flex-center space-y-4">
        <h2 className="text-xl font-medium text-center">
          Find out your carbon impact in 2 minutes
        </h2>
        <p className="mb-4 font-muted text-center">Free and Anonymous</p>
        <div className="w-full text-lg flex-center flex-col p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200/50 rounded-lg space-y-2">
          <p className="border-b border-dotted border-black me-2 pb-2">
            Average Person Globally
          </p>
          <div className="text-xl font-medium text-gray-800">
            4.73 tonnes CO₂ a year
          </div>
        </div>
      </div>
      <div className="h-[100px]"></div>
      <div className="text-sm md:text-base flex-col flex-center space-y-4 text-center">
        <div className="w-75">
          <ButtonBig text="Let's go!" onClick={onStart} />
        </div>
        <p className="text-xs mt-6">
          If you are a child/dependent, you shouldn&apos;t take this survey -
          your emissions are attributed to the adults responsible for you.
        </p>
      </div>
    </section>
  );
}
