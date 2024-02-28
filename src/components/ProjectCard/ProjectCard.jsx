import React from 'react'
import data from "../../../src/data/data.json"
import { Link } from "react-router-dom";
import { MdViewInAr } from "react-icons/md";
import { RiCodeSSlashFill } from "react-icons/ri";
const ProjectCard = () => {
  return (
    <div className="border-b  border-p4 w-full h-11">
    <div className="md:min-h-[calc(100%-40px)] md:pb-20 pb-20 mt-10 lg:mt-0 relative">
      {/* <h1 className="text-3xl text-center mt-20 lg:mt-15">React.js</h1> */}
      <main
        className="border-none lg:pt-10 pt-10 lg:px-10 px-5 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:space-y-0 space-y-6 mt-16 lg:mt-15"
        style={{ alignItems: "baseline" }}
      >
        {data.map((item, index) => (
          <div key={index}>
            <span className="flex text-sm my-3 items-center">
              <h3 className="font-semibold text-s3 mr-3 text-xl ">
                {item.projectno}
              </h3>
              <h4 className="font-fira_retina text-menu-text text-[18px]">
                //{item.title}
              </h4>
            </span>
            <div className="h-[20rem] relative rounded-2xl border border-p4 bg-p3">
              <img
                className="absolute right-4 top-4 w-6 h-6 mx-1 hover:opacity-75"
                src={item.image}
                alt="img"
              />
              <figure className=" w-full h-32 rounded-t-2xl border-b border-p4 overflow-hidden">
                <img src={item.url} className="h-full w-full" alt="url" />
              </figure>
              <div className="mx-5 my-2">
                <p className="text-lg my-3 ">
                  <span className="font-extrabold">Tech Stack :</span>{" "}
                  {item.description}
                </p>
                <div className="flex gap-5 mt-8">
                  <Link
                    to={item.liveLink}
                    target="_blank"
                    className="bg-[#1C2B3A] hover:bg-[#263B50] text-white px-3 py-2 rounded-lg mb-8 transition-all flex justify-center items-center gap-2"
                  >
                    <MdViewInAr size={24} /> preview
                  </Link>
                  <Link
                    to={item.codeLink}
                    target="_blank"
                    className="bg-[#1C2B3A] hover:bg-[#263B50] text-white px-2 py-1 rounded-lg mb-8 transition-all flex justify-center items-center gap-2"
                  >
                    <RiCodeSSlashFill size={24} /> Code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  </div>
  )
}

export default ProjectCard
