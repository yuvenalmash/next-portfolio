'use client'
import { TypeAnimation } from "react-type-animation";
import Carousel from "./carousel";

const headline = () => {
  return (
    <div className="headline w-screen text-center space-y-8 min-h-screen px-5 mt-20 sm:mt-0 flex flex-col justify-center items-center">
      <h1 className="text-4xl sm:text-5xl font-bold animate-fade-in">Hi, I&apos;m <span className="text-cyan-500">Yuvenal Njoroge</span></h1>
      <TypeAnimation
        cursor={true}
        sequence={[
          // "> Python",
          // 700,
          // "> Ruby",
          // 700,
          // "> JavaScript",
          // 700,
          "> Full Stack Developer",
        ]}
        wrapper="h2"
        className="text-3xl text-slate-500 dark:text-slate-400 font-boxpixies"
      />
      <Carousel />
    </div>
  );
};

export default headline;
