"use client";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineLink } from "react-icons/ai";
import { TbSourceCode } from "react-icons/tb";
import ProjectPopup from "./projectPopup";
import { projectsList } from "./portfolioData";
import SectionTitle from "./sectionTitle";

const Projects = () => {
  const [popup, setPopup] = useState(false);
  const [project, setProject] = useState(null);

  const openPopup = (project) => {
    setPopup(true);
    setProject(project);
  };

  const closePopup = () => {
    setPopup(false);
    setProject(null);
  };

  if (popup) {
    return <ProjectPopup project={project} closePopup={closePopup} />;
  }

  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center pt-20"
    >
      <SectionTitle title="Projects" />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsList.map((project, index) => (
            <div
              key={index}
              className="project shadow shadow-cyan-400 max-w-sm hover:shadow-md hover:shadow-cyan-400  transition-all duration-300 ease-in-out"
            >
              <div className="relative rounded-t-lg h-36 w-full bg-black">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="100%"
                />
              </div>
              <div className="px-4 py-3">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className=" mb-4 line-clamp-3">{project.description}</p>
                <div className="flex justify-between mt-2">
                  <div className="flex space-x-4">
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white shadow hover:text-cyan-500 hover:scale-110 hover:shadow-cyan-400 transition-all duration-300 ease-in-out"
                    >
                      <TbSourceCode className="text-3xl" />
                    </a>
                    {/* <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white shadow hover:text-cyan-500 hover:scale-110 hover:shadow-cyan-400 transition-all duration-300 ease-in-out">
                      <AiOutlineLink className="text-3xl" />
                    </a> */}
                  </div>
                  <button
                    onClick={() => openPopup(project)}
                    className="underline px-1 shadow hover:text-cyan-500 hover:scale-110 hover:shadow-cyan-400 transition-all duration-300 ease-in-out"
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
