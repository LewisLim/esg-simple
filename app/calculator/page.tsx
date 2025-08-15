import CalculatorPage from "@/components/calculator/CalculatorPage";
import questions from "@/lib/questions.json"

export default function Calculator() {
  return (
    <div className="w-full flex-col flex-center">
      <h1 className="mb-4">Travel</h1>
      <CalculatorPage  />
    </div>
  );
}
