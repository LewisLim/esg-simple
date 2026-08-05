import { BaseSurvey } from "@/types/interface";
import { calculateTotalFootprint } from "./CalculateFootprint";
import { countryEnergyData } from "@/lib/calculator/constants";

interface Props {
  data: BaseSurvey;
  onPrevious: () => void;
}

const CATEGORY_LABELS: Record<string, string> = {
  transport: "Daily Transport",
  holidayTravel: "Holiday Travel",
  diet: "Food & Diet",
  homeEnergy: "Home Energy",
  shopping: "Shopping",
};

export default function ResultsPage({ data, onPrevious }: Props) {
  const result = calculateTotalFootprint(data);
  const countryData = countryEnergyData[data.country] ?? null;

  const categories = [
    { key: "transport", value: result.transport },
    { key: "holidayTravel", value: result.holidayTravel },
    { key: "diet", value: result.diet },
    { key: "homeEnergy", value: result.homeEnergy },
    { key: "shopping", value: result.shopping },
  ].sort((a, b) => b.value - a.value); // largest contributor first

  const benchmark = countryData?.co2PerCapitaTonnes ?? null;
  const diff = benchmark !== null ? result.total - benchmark : null;
  const isAboveBenchmark = diff !== null && diff > 0;

  return (
    <section className="calc-page-center paper">
      <div className="flex-col flex-center space-y-4 w-full">
        <p className="text-lg">Your Result</p>
        <h2 className="text-xl font-medium text-center">
          Your Annual Carbon Footprint
        </h2>

        {/* Total */}
        <div className="w-full text-lg flex-center flex-col p-4 sm:p-6 bg-gradient-to-r from-emerald-50 to-white border-2 border-emerald-200/50 rounded-lg space-y-1">
          <div className="text-3xl font-semibold text-gray-800">
            {result.total.toFixed(1)} tonnes
          </div>
          <p className="text-sm text-gray-500">CO₂e per year</p>
        </div>

        {/* Benchmark comparison */}
        {benchmark !== null && diff !== null && (
          <div className="w-full text-sm text-center px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-gray-600">
              {countryData?.name ?? "Your country"}&apos;s average:{" "}
              <span className="font-medium">{benchmark.toFixed(1)} tonnes</span>
            </p>
            <p
              className={`mt-1 font-medium ${
                isAboveBenchmark ? "text-orange-600" : "text-emerald-600"
              }`}
            >
              {isAboveBenchmark
                ? `${Math.abs(diff).toFixed(1)} tonnes above average`
                : `${Math.abs(diff).toFixed(1)} tonnes below average`}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              National territorial emissions include industry and
              infrastructure, not just personal consumption — this comparison is
              a rough benchmark, not a like-for-like figure.
            </p>
          </div>
        )}

        {/* Category breakdown */}
        <div className="w-full space-y-2">
          <p className="text-sm font-medium text-gray-600 text-left">
            Breakdown by category
          </p>
          {categories.map(({ key, value }) => {
            const percentage =
              result.total > 0 ? (value / result.total) * 100 : 0;
            return (
              <div key={key} className="w-full">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-700">
                    {CATEGORY_LABELS[key] ?? key}
                  </span>
                  <span className="text-gray-500">{value.toFixed(2)} t</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-300 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-[60px] sm:h-[80px]"></div>

      <div className="mt-2 mx-auto">
        <button
          onClick={onPrevious}
          className="
            px-4 py-2
            bg-slate-200 hover:bg-slate-300 hover:scale-[1.02]
            rounded-md font-medium text-gray-600
            transition-all duration-200
            cursor-pointer
          "
        >
          Try Survey Again
        </button>
      </div>
    </section>
  );
}
