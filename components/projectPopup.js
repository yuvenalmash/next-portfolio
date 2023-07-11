import { AiOutlineLink, AiOutlineCloseCircle } from "react-icons/ai";
import { TbSourceCode } from "react-icons/tb";
import Image from "next/image";

const ProjectPopup = ({ project, closePopup }) => {
  return (
    <div className="project-popup fixed z-20 top-2 left-0 w-full min-h-screen overflow-auto flex justify-center items-center backdrop-blur-md">
      <div className="project-popup-inner absolute opacity-90 m-7 w-fit  h-fit backdrop-blur-xl rounded-lg shadow-lg pt-6">
        <button onClick={closePopup} className="absolute top-6 right-0 mt-4 mr-4 text-cyan-500 hover:text-teal-600 hover:scale-110 p-1 backdrop-blur-3xl rounded-md">
          <AiOutlineCloseCircle className="text-3xl" />
        </button>
        <div className="flex justify-center items-center p-6 pt-5 pb-5 gap-3 flex-wrap">
          <Image src={project.image} alt={project.name} width={500} height={300} />

          <div className="flex flex-col space-y-3">
            <h3 className="text-3xl font-bold mb-2 text-cyan-500">{project.name}</h3>
            <p className=" mb-4 max-w-md">
              {project.description}
            </p>
            <div className="flex space-x-4 mt-2 mb-2">
              <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-600 hover:scale-110">
                <TbSourceCode className="text-3xl" />
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-600 hover:scale-110">
                <AiOutlineLink className="text-3xl" />
              </a>
            </div>
            <div className="flex flex-wrap gap-3 items-start">
              {project.techStack.map((tech, index) => (
                <span key={index} className="bg-cyan-900 px-2 py-1 rounded">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPopup;
