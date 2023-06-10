import React from "react";
import { socialLinks } from "./portfolioData";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  const socialsMap = {
    Github: AiOutlineGithub,
    LinkedIn: AiOutlineLinkedin
  };

  return (
    <footer className="w-screen h-12 bg-transparent flex justify-center items-center">
      <div className="flex justify-between items-center w-11/12">
        <div className="flex justify-center items-center">
          <div className="border rounded-full border-white hover:scale-110 hover:animate-pulse">
            <img src="/images/logo.svg" alt="logo" className="h-8 w-8 p-1" />
          </div>
          <p className="text-white text-lg font-bold ml-2">Yuvenal Njoroge</p>
        </div>
        <div className="flex justify-center items-center">
          {Object.keys(socialsMap).map((key, index) => (
            <a key={index} href={socialLinks[key]} target="_blank" rel="noopener noreferrer">
              {React.createElement(socialsMap[key], { className: "text-white text-2xl mr-4 transition-colors duration-300 ease-in-out hover:text-cyan-500" })}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
