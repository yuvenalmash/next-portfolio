import { techStackList } from "./portfolioData";
import { DiPython, DiRuby, DiJavascript1, DiHtml5, DiCss3, DiDjango, DiReact, DiPostgresql, DiMysql, DiMongodb, DiGit, DiGithubBadge, DiHeroku } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiSqlite, SiRuby, SiRubyonrails, SiVercel, SiJest, SiSelenium, SiNetlify, SiPostman} from "react-icons/si";
import { GiCapybara } from "react-icons/gi";



const Techstack = () => {
  const techStackIcons = {
    Python: <DiPython className="text-4xl" />,
    Ruby: <DiRuby className="text-4xl" />,
    JavaScript: <DiJavascript1 className="text-4xl" />,
    HTML: <DiHtml5 className="text-4xl" />,
    CSS: <DiCss3 className="text-4xl" />,
    Django: <DiDjango className="text-4xl" />,
    "Ruby on Rails": <SiRubyonrails className="text-4xl" />,
    React: <DiReact className="text-4xl" />,
    "Next.js": <TbBrandNextjs className="text-4xl" />,
    "Tailwind CSS": <SiTailwindcss className="text-4xl" />,
    PostgreSQL: <DiPostgresql className="text-5xl" />,
    MySQL: <DiMysql className="text-4xl" />,
    SQLite: <SiSqlite className="text-4xl" />,
    MongoDB: <DiMongodb className="text-4xl" />,
    Jest: <SiJest className="text-4xl" />,
    RSpec: <SiRuby className="text-4xl" />,
    Capybara: <GiCapybara className="text-4xl" />,
    Selenium: <SiSelenium className="text-4xl" />,
    Git: <DiGit className="text-4xl" />,
    GitHub: <DiGithubBadge className="text-4xl" />,
    Heroku: <DiHeroku className="text-3xl" />,
    Netlify: <SiNetlify className="text-3xl" />,
    Vercel: <SiVercel className="text-3xl" />,
    Postman: <SiPostman className="text-3xl" />
  };

  return (
    <div id="tech-stack" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-10">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.keys(techStackList).map((key, index) => (
            <div key={index} className="bg-gradient-to-b from-transparent to-cyan-950 rounded-lg shadow-lg">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{key}</h3>
                <div className="flex flex-wrap gap-2">
                  {techStackList[key].map((tech, index) => (
                    <div key={index} className="flex justify-center">
                      <span className="techStackItem text-white bg-cyan-950 px-2 py-1 rounded-lg hover:scale-110 hover:bg-cyan-900 transition-colors duration-300 ease-in-out flex items-center space-x-2 gap-2">
                        <span className="techStachIcon inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                          {techStackIcons[tech]}
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