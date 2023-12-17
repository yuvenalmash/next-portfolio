'use client'
import { useEffect } from 'react';
import { TypeAnimation } from "react-type-animation";
import dynamic from 'next/dynamic';
import { snowflakeCursor } from 'cursor-effects';
import Carousel from "./carousel";

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

const Headline = () => {
  useEffect(() => {
    // Initialize Cursor only on the client side
    new snowflakeCursor();
  }, []); // Empty dependency array ensures the effect runs only once after mount

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: '2px solid var(--cursor-color)'
        }}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
      />
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
    </>
  );
};

export default Headline;
