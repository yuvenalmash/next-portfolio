import React from "react";
import ContactForm from "./contactForm";
import { socialLinks } from "./portfolioData";
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineMedium } from "react-icons/ai";

const Contact = () => {
  const socialsMap = {
    GitHub: AiOutlineGithub,
    LinkedIn: AiOutlineLinkedin,
    Twitter: AiOutlineTwitter,
    Medium: AiOutlineMedium
  };
  return (
    <div id="contact" className="py-20 flex flex-col justify-center items-center w-full">
      <h2 className="flex text-6xl font-boxpixies group text-center mb-16 py-3 px-5 border border-slate-400 shadow shadow-white">
        <span className="text-cyan-500 inline-block transition duration-300 ease-in-out group-hover:scale-110">C</span>
        ontact
      </h2>
      <p className="text-xl text-center mb-16 max-w-2xl">
        I&apos;m currently looking for new opportunities. If you have a project or an idea you&apos;d like to discuss, please feel free to reach out to me:
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full">
        <ContactForm />

        {/* line divider */}
        <div className="hidden md:block w-1 h-64  bg-slate-400"></div>
        <div className="md:hidden h-1 w-3/4 bg-slate-400"></div>

        <div className="container mx-auto w-fit">
          <div className="flex flex-row flex-wrap justify-center items-center gap-3">
            <div className="contact-item shadow shadow-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300 ease-in-out w-fit px-1">
              <div className="flex">
                <a href={`mailto:${socialLinks.Email}`} className="flex w-full justify-center gap-2 transition-all duration-300 ease-in-out hover:scale-125 hover:text-cyan-600">
                  <AiOutlineMail className="text-3xl" />
                </a>
              </div>
            </div>

            {Object.keys(socialsMap).map((key, index) => (
              <div key={index} className="contact-item shadow shadow-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300 ease-in-out w-fit px-1">
                <div className="flex">
                  <a href={socialLinks[key]} target="_blank" rel="noopener noreferrer" className="flex w-full  justify-center gap-2 transition-all duration-300 ease-in-out hover:scale-125 hover:text-cyan-600">
                    {React.createElement(socialsMap[key], { className: "text-3xl" })}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
