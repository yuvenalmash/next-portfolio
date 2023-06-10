'use client'
import { TypeAnimation } from "react-type-animation";
import { aboutMe } from "./portfolioData";

const headline = () => {
  const { name, description } = aboutMe;
  return (
    <div className="headline text-center space-y-8 h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-white animate-fade-in">Hi, I&apos;m <span className="text-cyan-500">{name}</span></h1>
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
        className="text-2xl text-white font-retro_computer"
      />
      <p className="text-lg text-white max-w-md">
        {description}
      </p>
    </div>

  )
}

export default headline;
