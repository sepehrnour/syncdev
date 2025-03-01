import { ThreeDCardDemo } from "../components/card-demo";
import { ThreeDCardDemoSep } from "../components/card-demo copy";

export default function About() {
  return (
    <>
      <div className="pt-25">
        <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
          We build software for anyone
        </h2>
        <div className="justify-center flex gap-x-36 flex-row">
          <ThreeDCardDemo />
          <ThreeDCardDemoSep />
        </div>
      </div>
    </>
  );
}
