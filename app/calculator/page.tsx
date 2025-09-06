import TransportPage from "@/components/calculator/TransportPage";
import TravelPage from "@/components/calculator/TravelPage";
import WelcomePage from "@/components/calculator/WelcomePage";

export default function Calculator() {
  return (
    <div className="w-full flex-col flex-center">
      <WelcomePage />
      <TransportPage />
      <TravelPage />
    </div>
  );
}
