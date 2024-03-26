import React from "react";
import { TbSourceCode } from "react-icons/tb";

const Footer = () => {

  const sourceCode = "https://github.com/yuvenalmash/next-portfolio";

  return (
    <footer className="h-12 bg-transparent flex justify-center items-center mt-10 md:mt-16">
      <div className="flex justify-between items-center w-11/12">
        <div>
          <p className="text-lg hidden sm:block">Built with React</p>
        </div>
        <div className="flex justify-center items-center">
          <a href={sourceCode} target="_blank" rel="noopener noreferrer" className="shadow hover:text-cyan-500 hover:scale-110 hover:shadow-cyan-400 transition-all duration-300 ease-in-out">
            <TbSourceCode className="text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
