import { DailyPicks } from "@/components/homepage/DailyPicks";
import { PopularTopics } from "@/components/homepage/PopularTopics";
import { LearnCard } from "@/components/homepage/LearnCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="paper-light bg-content w-full h-full">
      <div className="grid grid-cols-3 gap-3 mb-8">
        <PopularTopics />
        <DailyPicks />
      </div>
      <div className="flex flex-col">
        <h1 className="mb-6 text-lg text-center font-medium">
          Learn Something Today
        </h1>
        <div className="grid grid-cols-4 gap-3">
          <LearnCard />
          <LearnCard />
          <LearnCard />
          <LearnCard />
        </div>
      </div>
    </div>
  );
}
