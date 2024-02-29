import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiCloseFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiReactjsFill,
  RiStackFill,
} from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import Sticky from "react-stickynode";
import ProjectCard from "./ProjectCard";
import Project from "./Project";

const Projects = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [projects, setProjects] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("./projectsData.json");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Projects | Tejasvi Raj</title>
      </Helmet>
      <div className="lg:h-full w-full text-s1 lg:flex">
        <div className="min-w-[21%]  border-r border-p4 trt">
          <Sticky
            enabled={true}
            top={60}
            innerActiveClass="max-lg:!static max-lg:!transform-none max-lg:!w-auto"
          >
            <div
              data-aos="fade-down"
              onClick={() => setShowInfo(!showInfo)}
              className={`${
                showInfo ? "text-white" : ""
              } pl-4 border-b border-p4 w-full h-10 flex gap-1 items-center px-3 cursor-pointer`}
            >
              {showInfo ? (
                <RiArrowDownSFill size={24} />
              ) : (
                <RiArrowRightSFill size={24} />
              )}
              projects
            </div>

            {showInfo ? (
              <div
                data-aos="zoom-in"
                className={`pl-5 px-3 mt-4 space-y-4 category border-b lg:border-b-0 border-p4 pb-5`}
              >
                <p className="flex gap-3 items-center text-lg">
                  <input type="checkbox" value="html" />
                  <RiHtml5Fill size={28} /> <label htmlFor="html">HTML</label>
                </p>
                <p className="flex gap-3 items-center text-lg">
                  <input type="checkbox" value="css" />
                  <RiCss3Fill size={28} /> <label htmlFor="css">CSS</label>
                </p>
                <p className="flex gap-3 items-center text-lg">
                  <input type="checkbox" value="bootstrap" />
                  <BsFillBootstrapFill size={28} />{" "}
                  <label htmlFor="bootstrap">Bootstrap</label>
                </p>
                <p className="flex gap-3 items-center text-lg">
                  <input type="checkbox" value="tailwind" />
                  <SiTailwindcss size={28} />{" "}
                  <label htmlFor="tailwind">Tailwind</label>
                </p>
                <p className="flex gap-3 items-center text-lg">
                  <input type="checkbox" value="react" />
                  <RiReactjsFill size={28} />{" "}
                  <label htmlFor="react">React</label>
                </p>
                <p className="flex gap-3 items-center text-lg">
                  <input type="checkbox" value="fullStack" />
                  <RiStackFill size={28} />{" "}
                  <label htmlFor="fullStack">Full Stack</label>
                </p>
              </div>
            ) : (
              ""
            )}
          </Sticky>
        </div>

        {windowWidth > 800 ? (
          <div className="lg:min-w-[calc(100vw-0)]  text-s1">
            <div className={`border-b  border-p4 w-full h-11`}>
              <span className="border-r border-p4  h-full flex gap-1 items-center px-3 cursor-pointer w-fit">
                _projects-all
                <RiCloseFill size={20} />
              </span>
            </div>
            <div className="md:border-r border-p4  md:mr-6 md:min-h-[calc(100%-40px)] md:pb-0 pb-20">
              <div className="pt-10 pb-20 lg:px-10 px-5  md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:space-y-0 space-y-6" 
             
             
              style={{ alignItems: "baseline" }}>
                {projects.map((project) => (
                  <Project key={project._id} project={project} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <ProjectCard />
        )}
      </div>
    </>
  );
};

export default Projects;
