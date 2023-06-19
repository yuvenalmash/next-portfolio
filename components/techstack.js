import { techStackList } from "./portfolioData";
import { DiPython, DiRuby, DiJavascript1, DiHtml5, DiCss3, DiDjango, DiReact, DiPostgresql, DiMysql, DiMongodb, DiGit, DiGithubBadge, DiHeroku } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiSqlite, SiRuby, SiRubyonrails, SiVercel, SiJest, SiSelenium, SiNetlify, SiPostman} from "react-icons/si";
import { GiCapybara } from "react-icons/gi";
import { FcBriefcase } from "react-icons/fc";



const Techstack = () => {
  const techStackIcons = {
    Python: <DiPython className="text-3xl" />,
    Ruby: <DiRuby className="text-2xl" />,
    JavaScript: <DiJavascript1 className="text-3xl" />,
    HTML: <DiHtml5 className="text-3xl" />,
    CSS: <DiCss3 className="text-3xl" />,
    Django: <DiDjango className="text-3xl" />,
    "Ruby on Rails": <SiRubyonrails className="text-3xl" />,
    React: <DiReact className="text-3xl" />,
    "Next.js": <TbBrandNextjs className="text-3xl" />,
    "Tailwind CSS": <SiTailwindcss className="text-3xl" />,
    PostgreSQL: <DiPostgresql className="text-4xl" />,
    MySQL: <DiMysql className="text-3xl" />,
    SQLite: <SiSqlite className="text-2xl" />,
    MongoDB: <DiMongodb className="text-2xl" />,
    Jest: <SiJest className="text-2xl" />,
    RSpec: <SiRuby className="text-2xl" />,
    Capybara: <GiCapybara className="text-3xl" />,
    Selenium: <SiSelenium className="text-2xl" />,
    Git: <DiGit className="text-3xl" />,
    GitHub: <DiGithubBadge className="text-3xl" />,
    Heroku: <DiHeroku className="text-2xl" />,
    Netlify: <SiNetlify className="text-2xl" />,
    Vercel: <SiVercel className="text-2xl" />,
    Postman: <SiPostman className="text-2xl" />,
    Professional: <FcBriefcase className="text-2xl" />
  };

  return (
    <div id="tech-stack" className="py-20 flex flex-col justify-center items-center">
      <h2 className="text-6xl font-boxpixies group text-center mb-16 py-3 px-5 border border-slate-400 rounded">
        <span className="text-cyan-500 inline-block transition duration-300 ease-in-out group-hover:scale-110">T</span>
        ech Stack
      </h2>
      <p className="text-xl text-center mb-16 max-w-3xl">
        I have worked with a variety of technologies in my career as a developer. Here are some of the technologies I have worked with and I'm skilled at:
      </p>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {Object.keys(techStackList).map((key, index) => (
            <div key={index} className="tech-category rounded shadow-lg">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{key}</h3>
                <div className="flex flex-wrap gap-2 max-w-sm">
                  {techStackList[key].map((tech, index) => (
                    <div key={index} className="flex justify-center">
                      <span className="techStackItem text-slate-200 bg-cyan-950 px-2 py-1 rounded hover:scale-110 hover:bg-cyan-900 transition-colors duration-300 ease-in-out flex items-center space-x-2 gap-2">
                        <span className="techStachIcon inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                          {techStackIcons[tech] ? techStackIcons[tech] : techStackIcons["Professional"]}
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
