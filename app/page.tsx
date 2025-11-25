import Image from "next/image";

export default function Home() {
  return (
    <div className="paper-light calc-page-center bg-content w-full h-full relative ">
      <h1 className="mb-8 text-lg text-center">Learn Something Today</h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-6xl px-4">
        <div className="grid grid-cols-2 sm:flex sm:flex-col gap-3 sm:gap-6 w-full lg:w-auto">
          <div className="paper-light text-center text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3">
            Global Warming
          </div>
          <div className="paper-light text-center text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3">
            Plastic Use
          </div>
          <div className="paper-light text-center text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3">
            Pollution
          </div>
        </div>

        <Image
          src="/images/gaia.png"
          alt="Welcome"
          width={300}
          height={300}
          className="w-48 sm:w-64 md:w-72 lg:w-80 flex-shrink-0"
        />

        <div className="grid grid-cols-2 sm:flex sm:flex-col gap-3 sm:gap-6 w-full lg:w-auto">
          <div className="paper-light text-center text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3">
            Society
          </div>
          <div className="paper-light text-center text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3">
            Businesses
          </div>
          <div className="paper-light text-center text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3">
            My Responsibility
          </div>
        </div>
      </div>
    </div>
  );
}
