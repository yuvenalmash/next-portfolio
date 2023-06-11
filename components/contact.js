import React from "react";
import { socialLinks } from "./portfolioData";
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineMedium } from "react-icons/ai";
import { SiAngellist } from "react-icons/si";

const Contact = () => {
  const socialsMap = {
    GitHub: AiOutlineGithub,
    LinkedIn: AiOutlineLinkedin,
    Twitter: AiOutlineTwitter,
    Wellfound: SiAngellist,
    Medium: AiOutlineMedium
  };
  return (
    <div id="contact" className="py-20 flex flex-col justify-center items-center">
      <h2 className="flex text-6xl font-boxpixies group text-center mb-16 py-3 px-5 border border-slate-400 rounded">
        <span className="text-cyan-500 inline-block transition duration-300 ease-in-out group-hover:scale-110">C</span>
        ontact
      </h2>
      <div className="container mx-auto w-fit">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="contact-item rounded shadow-lg w-fit pl-3">
            <div className="flex">
              <a href={`mailto:${socialLinks.Email}`} className="flex w-full justify-center gap-2 transition-all duration-300 ease-in-out hover:scale-125 hover:text-teal-500">
                <h3 className="text-2xl">Email</h3>
                <AiOutlineMail className="text-3xl" />
              </a>
            </div>
          </div>

          {Object.keys(socialsMap).map((key, index) => (
            <div key={index} className="contact-item rounded shadow-lg w-fit px-3">
              <div className="flex">
                <a href={socialLinks[key]} target="_blank" rel="noopener noreferrer" className="flex w-full  justify-center gap-2 transition-all duration-300 ease-in-out hover:scale-125 hover:text-teal-500">
                  <h3 className="text-2xl">{key}</h3>
                  {React.createElement(socialsMap[key], { className: "text-3xl" })}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
