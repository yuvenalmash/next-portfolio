import { techStackList } from "./portfolioData";
import {
  DiPython,
  DiRuby,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiDjango,
  DiReact,
  DiPostgresql,
  DiMysql,
  DiMongodb,
  DiGit,
  DiGithubBadge,
} from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiSqlite,
  SiRuby,
  SiRubyonrails,
  SiExpress,
  SiJest,
  SiSelenium,
  SiFlask,
  SiRedux,
  SiMocha,
  SiDocker,
  SiGithubactions,
  SiKubernetes,
  SiJenkins,
  SiPortainer,
} from "react-icons/si";
import { FcBriefcase } from "react-icons/fc";
import SectionTitle from "./sectionTitle";

const Techstack = () => {
  const techStackIcons = {
    Python: <DiPython className="text-3xl" />,
    Ruby: <DiRuby className="text-2xl" />,
    JavaScript: <DiJavascript1 className="text-3xl" />,
    HTML: <DiHtml5 className="text-3xl" />,
    CSS: <DiCss3 className="text-3xl" />,
    "Node.js": <DiNodejsSmall className="text-3xl" />,
    "Express.js": <SiExpress className="text-2xl" />,
    Django: <DiDjango className="text-3xl" />,
    Flask: <SiFlask className="text-3xl" />,
    "Ruby on Rails": <SiRubyonrails className="text-3xl" />,
    React: <DiReact className="text-3xl" />,
    "Next.js": <TbBrandNextjs className="text-3xl" />,
    "Tailwind CSS": <SiTailwindcss className="text-3xl" />,
    PostgreSQL: <DiPostgresql className="text-4xl" />,
    MySQL: <DiMysql className="text-3xl" />,
    SQLite: <SiSqlite className="text-2xl" />,
    MongoDB: <DiMongodb className="text-2xl" />,
    Jest: <SiJest className="text-2xl" />,
    Mocha: <SiMocha className="text-2xl" />,
    Redux: <SiRedux className="text-2xl" />,
    RSpec: <SiRuby className="text-2xl" />,
    Selenium: <SiSelenium className="text-2xl" />,
    Git: <DiGit className="text-3xl" />,
    GitHub: <DiGithubBadge className="text-3xl" />,
    Docker: <SiDocker className="text-2xl" />,
    "GitHub Actions": <SiGithubactions className="text-2xl" />,
    Kubernetes: <SiKubernetes className="text-2xl" />,
    Jenkins: <SiJenkins className="text-2xl" />,
    Portainer: <SiPortainer className="text-3xl" />,
    Professional: <FcBriefcase className="text-2xl" />,
  };

  return (
    <div
      id="tech-stack"
      className="flex flex-col justify-center items-center pt-20"
    >
      <SectionTitle title="Tech Stack" />
      <p className="text-xl text-center mb-16 max-w-3xl">
        I have worked with a variety of technologies in my career as a
        developer. Here are some of the technologies I have worked with and
        I&apos;m skilled at:
      </p>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {Object.keys(techStackList).map((key, index) => (
            <div
              key={index}
              className="tech-category shadow shadow-cyan-400 max-w-md hover:shadow-md hover:shadow-cyan-400  transition-all duration-300 ease-out"
            >
              <div className="px-4 py-3">
                <h3 className="text-2xl font-bold mb-4">{key}</h3>
                <div className="flex flex-wrap gap-2 max-w-sm">
                  {techStackList[key].map((tech, index) => (
                    <div key={index} className="flex justify-center">
                      <span className="techStackItem text-slate-200 bg-cyan-950 px-2 py-1 rounded hover:scale-110 hover:bg-cyan-900 transition-colors duration-300 ease-in-out flex items-center space-x-2 gap-2">
                        <span className="techStachIcon inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                          {techStackIcons[tech]
                            ? techStackIcons[tech]
                            : techStackIcons["Professional"]}
                        </span>
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techstack;
