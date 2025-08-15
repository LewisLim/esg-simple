import TransportPage from "@/components/calculator/TransportPage";
import WelcomePage from "@/components/calculator/WelcomePage";

export default function Calculator() {
  return (
    <div className="w-full flex-col flex-center">
      <h1 className="mb-4">Travel</h1>
      <WelcomePage />
      <TransportPage />
    </div>
  );
}
