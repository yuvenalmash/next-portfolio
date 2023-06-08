'use client'
import { TypeAnimation } from "react-type-animation";

const Headline = () => {
  return (
    <div className="headline text-center space-y-4">
      <h1 className="text-4xl font-bold text-white animate-fade-in">Yuvenal Njoroge</h1>
      <TypeAnimation
        cursor={true}
        sequence={[
          "Python",
          700,
          "Ruby",
          700,
          "JavaScript",
          700,
          "Full Stack Developer"
        ]}
        wrapper="h2"
        className="text-2xl font-bold text-white animate-fade-in"
      />
      <p className="text-lg text-white">
        I'm a Full Stack Developer with a passion for building web applications, and learning new technologies.
      </p>
    </div>

  )
}

export default Headline
