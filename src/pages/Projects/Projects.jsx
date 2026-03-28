import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiCloseFill,
  RiHtml5Fill,
  RiReactjsFill,
  RiStackFill,
} from "react-icons/ri";

import Sticky from "react-stickynode";
import ProjectCard from "./ProjectCard";
import Project from "./Project";

const Projects = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [allProjects, setAllProjects] = useState([]); // Store all projects
  const [filteredProjects, setFilteredProjects] = useState([]); // Store filtered projects
  const [selectedCategory, setSelectedCategory] = useState("all"); // Store selected category
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch("./projectsData.json");
      const data = await response.json();
      setAllProjects(data);
      setFilteredProjects(data);
    } catch (error) {
      console.error("Error fetching project data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "all") {
      setFilteredProjects(allProjects); // Show all projects when "all" is selected
    } else {
      const filtered = allProjects.filter((project) =>
        project.category.includes(category)
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <>
      <Helmet>
        <title>Projects | Tejasvi Raj</title>
        <meta name="description" content="Browse 18+ projects by Tejasvi Raj built with React, Next.js, and modern web technologies. Each project includes live demos and source code." />
        <meta property="og:title" content="Projects | Tejasvi Raj" />
        <meta property="og:description" content="18+ web projects built with React, Next.js, and modern technologies." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="lg:h-full w-full text-s1 lg:flex">
        {windowWidth > 800 ? (
          <div
            className={`min-w-[21%] border-r border-p4 ${
              selectedCategory === "all"
                ? "all"
                : selectedCategory === "react"
                ? "react"
                : selectedCategory === "nextjs"
                ? "nextjs"
                : ""
            }`}
          >
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
                    <input
                      type="checkbox"
                      value="all"
                      onChange={() => handleCategoryChange("all")}
                      checked={selectedCategory === "all"}
                    />
                    <RiHtml5Fill size={28} /> <label htmlFor="all">All</label>
                  </p>
                  <p className="flex gap-3 items-center text-lg">
                    <input
                      type="checkbox"
                      value="react"
                      onChange={() => handleCategoryChange("react")}
                      checked={selectedCategory === "react"}
                    />
                    <RiReactjsFill size={28} />{" "}
                    <label htmlFor="react">React</label>
                  </p>
                  <p className="flex gap-3 items-center text-lg">
                    <input
                      type="checkbox"
                      value="nextjs"
                      onChange={() => handleCategoryChange("nextjs")}
                      checked={selectedCategory === "nextjs"}
                    />
                    <RiStackFill size={28} />{" "}
                    <label htmlFor="nextjs">Next.js</label>
                  </p>
                  {/* <p className="flex gap-3 items-center text-lg">
                    <input
                      type="checkbox"
                      value="react-native"
                      onChange={() => handleCategoryChange("react-native")}
                      checked={selectedCategory === "react-native"}
                    />
                    <RiSmartphoneFill size={28} />{" "}
                    <label htmlFor="react-native">React Native</label>
                  </p> */}
                </div>
              ) : (
                ""
              )}
            </Sticky>
          </div>
        ) : (
          <div
            data-aos="fade-down"
            className=" pl-4 border-b border-p4 w-full h-10 flex gap-1 items-center px-3 cursor-pointer"
          >
            projects
          </div>
        )}

        {windowWidth > 800 ? (
          <div className="lg:min-w-[calc(100vw-0)]  text-s1">
            <div className={`border-b  border-p4 w-full h-11`}>
              <span className="border-r border-p4  h-full flex gap-1 items-center px-3 cursor-pointer w-fit">
                _projects-all
                <RiCloseFill size={20} />
              </span>
            </div>
            <div className="md:border-r border-p4  md:mr-6 md:min-h-[calc(100%-40px)] md:pb-0 pb-20">
              <div
                className="pt-10 pb-20 lg:px-10 px-5  md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:space-y-0 space-y-6"
                style={{ alignItems: "baseline" }}
              >
                {loading
                  ? Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="animate-pulse">
                        <div className="flex text-sm my-3 items-center">
                          <div className="h-4 w-16 bg-p3 rounded mr-3"></div>
                          <div className="h-4 w-24 bg-p3 rounded"></div>
                        </div>
                        <div className="h-[20rem] rounded-2xl border border-p4 bg-p3">
                          <div className="w-full h-32 rounded-t-2xl border-b border-p4 bg-p4 bg-opacity-30"></div>
                          <div className="mx-8 mt-6 space-y-3">
                            <div className="h-4 bg-p4 bg-opacity-30 rounded w-full"></div>
                            <div className="h-4 bg-p4 bg-opacity-30 rounded w-3/4"></div>
                            <div className="h-10 bg-p4 bg-opacity-30 rounded w-28 mt-4 mb-8"></div>
                          </div>
                        </div>
                      </div>
                    ))
                  : filteredProjects.map((project) => (
                      <Project key={project._id} project={project} />
                    ))}
              </div>
            </div>
          </div>
        ) : loading ? (
          <div className="p-5 space-y-4 w-full">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse h-20 rounded-xl border border-p4 bg-p3"></div>
            ))}
          </div>
        ) : (
          <ProjectCard />
        )}
      </div>
    </>
  );
};

export default Projects;
