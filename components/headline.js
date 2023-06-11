'use client'
import { TypeAnimation } from "react-type-animation";
import { aboutMe } from "./portfolioData";

const headline = () => {
  const { name, description } = aboutMe;
  return (
    <div className="headline w-screen text-center space-y-8 min-h-screen px-5 flex flex-col justify-center items-center">
      <h1 className="text-4xl sm:text-5xl font-bold animate-fade-in">Hi, I&apos;m <span className="text-cyan-500">{name}</span></h1>
      <TypeAnimation
        cursor={true}
        sequence={[
          "Python",
          700,
          "Ruby",
          700,
          "JavaScript",
          700,
          "Full Stack Developer",
        ]}
        wrapper="h2"
        className="text-3xl text-slate-500 dark:text-slate-400 font-boxpixies"
      />
      <p className="text-lg max-w-2xl">
        {description}
      </p>
    </div>
  );
};

export default headline;
