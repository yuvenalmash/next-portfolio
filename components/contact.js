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
    <div id="contact" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-10">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gradient-to-l from-transparent to-cyan-800 rounded-lg shadow-lg">
            <div className="flex p-4">
              <a href={`mailto:${socialLinks.Email}`} className="text-white flex w-full justify-center gap-2 transition-all duration-300 ease-in-out hover:scale-125 hover:text-orange-500">
                <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
                <AiOutlineMail className="text-4xl" />
              </a>
            </div>
          </div>

          {Object.keys(socialsMap).map((key, index) => (
            <div key={index} className="bg-gradient-to-l from-transparent to-cyan-800 rounded-lg shadow-lg">
              <div className="flex p-4">
                <a href={socialLinks[key]} target="_blank" rel="noopener noreferrer" className="text-white flex w-full  justify-center gap-2 transition-all duration-300 ease-in-out hover:scale-125 hover:text-orange-500 ">
                  <h3 className="text-2xl font-bold text-white mb-4">{key}</h3>
                  {React.createElement(socialsMap[key], { className: "text-4xl" })}
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
