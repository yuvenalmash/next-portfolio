import { socialLinks } from "./portfolioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const logo = "/logo.svg";
  return (
    <footer className="w-screen h-12 bg-transparent flex justify-center items-center">
      <div className="flex justify-between items-center w-11/12">
        <div className="flex justify-center items-center">
          <div className="border rounded-full border-white transition-colors duration-300 ease-in-out hover:text-red-500">
            <img src={logo} alt="logo" className="h-8 w-8 p-1" />
          </div>
          <p className="text-white text-lg font-bold ml-2">Yuvenal Njoroge</p>
        </div>
        <div className="flex justify-center items-center">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-white text-2xl mr-4" />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
