import React, { useState } from "react";
import { data } from "../data/data.jsx";
import live from "../assets/live.svg";
import eye from "../assets/eye.svg";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = data;

  const openModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentProject(null);
    setModalOpen(false);
  };

  return (
    <div
      name="projects"
      className="w-full sm:h-screen bg-[#11161f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="sm:text-center pb-8 pl-4 bg-[#11161f] flex justify-center">
          <p className="text-2xl font-bold inline border-b-2 border-[#f00]">
            SOME THINGS I'VE BUILT
          </p>
        </div>
        <div className="bg-[#11161f] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center py-8 sm:px-14">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg border border-[#700000] mx-auto max-w-xs sm:max-w-md lg:max-w-full group"
            >
              <div className="relative">
                <img
                  className="w-full object-contain cursor-pointer"
                  src={project.image}
                  alt={project.title}
                  onClick={() => openModal(project)}
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-80 bg-[#3d0000] flex flex-row justify-center items-center">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={eye}
                      alt="Live"
                      className="w-16 p-2 zoom"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={live}
                      alt="Live"
                      className="w-16 p-2 zoom"
                      loading="lazy"
                    />
                  </a>
                  {project.qrCode && (
                    <img
                      src={project.qrCode}
                      alt={`${project.title} QR`}
                      className="w-14 p-2 cursor-pointer zoom"
                      onClick={() => openModal(project)}
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
              <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">
                  {project.title}
                </h1>
                <p className="mt-2 text-gray-300">{project.description}</p>
                <p className="font-semibold pt-2 tracking-widest">
                  {project.techStack}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && currentProject && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
          <div className="bg-[#11161f] p-8 rounded-lg">
            <img
              src={currentProject.qrCode}
              alt={`${currentProject.title} QR`}
              className="w-44 mx-auto"
            />
            <div className="flex justify-center mt-4">
              <button
                onClick={closeModal}
                className="bg-[#700000] text-white px-4 py-2 rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
