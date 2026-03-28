import { useState } from "react";
import { Link } from "react-router-dom";

import ModalProject from "./ModalProject";

const slugify = (name) =>
  name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const Project = ({ project }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { projectNo, name, image, category, description } = project;

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="">
      <p className="flex text-sm my-3 items-center">
        <span className="font-semibold text-s3 mr-3 text-[16px]">{projectNo}</span>{" "}
        <span className="font-fira_retina text-menu-text text-[14px]" >{`//_${name}`}</span>
      </p>
      <div className="h-[20rem] relative rounded-2xl border border-p4 bg-p3">
        <img
          src={category}
          alt={`${name} category icon`}
          className="absolute right-4 top-4 w-6 h-6 mx-1 hover:opacity-75"
        />
        <figure className=" w-full h-32 rounded-t-2xl border-b border-p4 overflow-hidden">
          <img src={image} alt={`${name} project screenshot`} className="h-full w-full" loading="lazy" />
        </figure>

        <div className="mx-8">
          <p className="text-lg my-6  text-justify">
            {description.slice(0, 39)}...
          </p>
          <div className="flex gap-2 mb-8">
            <button
              onClick={openModal}
              className="bg-[#1C2B3A] hover:bg-[#263B50] text-white px-3 py-2 rounded-lg transition-all"
            >
              view-project
            </button>
            <Link
              to={`/projects/${slugify(name)}`}
              className="bg-[#1C2B3A] hover:bg-[#263B50] text-white px-3 py-2 rounded-lg transition-all"
            >
              case-study
            </Link>
          </div>
          <ModalProject
            isOpen={isModalOpen}
            closeModal={closeModal}
            content={project}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
