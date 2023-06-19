"use client";
import Image from "next/image";
import { projectsList } from "./portfolioData";
import React, { useState } from "react";
import ProjectPopup from "./projectPopup";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const Projects = () => {
  const [popup, setPopup] = useState(false);
  const [project, setProject] = useState(null);

  const openPopup = (project) => {
    setPopup(true);
    setProject(project);
  }

  const closePopup = () => {
    setPopup(false);
    setProject(null);
  }

  if (popup) {
    return <ProjectPopup project={project} closePopup={closePopup} />
  }

  return (
    <div id="projects" className="py-20 flex flex-col justify-center items-center">
      <h2 className="flex text-6xl font-boxpixies group text-center mb-16 py-3 px-5 border border-slate-400 rounded">
        <span className="text-cyan-500 inline-block transition duration-300 ease-in-out group-hover:scale-110">P</span>
        rojects
      </h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsList.map((project, index) => (
            <div key={index} className="project rounded shadow shadow-cyan-400">
              <Image src={project.image} alt={project.name} className="rounded-t-lg" width={500} height={300} />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className=" mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex justify-between mt-2 mb-4">
                  <div className="flex space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-600 hover:scale-110">
                      <AiOutlineGithub className="text-2xl" />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-600 hover:scale-110">
                      <AiOutlineLink className="text-3xl" />
                    </a>
                  </div>
                  <button onClick={() => openPopup(project)} className="border rounded-md px-1 border-cyan-700 hover:text-teal-600 hover:scale-105">More Details</button>
                </div>
                <div className="flex flex-wrap gap-3 items-start">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="bg-cyan-900 px-2 py-1 rounded">{tech}</span>
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

export default Projects;
