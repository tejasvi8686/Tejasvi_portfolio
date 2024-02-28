import { useState } from "react";
import { Helmet } from "react-helmet";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiReactjsFill,
  RiStackFill,
} from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import Sticky from "react-stickynode";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  const [showInfo, setShowInfo] = useState(true);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCategories((prevSelectedCategories) => {
      if (checked) {
        return [...prevSelectedCategories, value];
      } else {
        return prevSelectedCategories.filter((category) => category !== value);
      }
    });
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
                  <input
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="html"
                  />
                  <RiHtml5Fill size={28} /> <label htmlFor="html">HTML</label>
                </p>
                <p className="flex gap-3 items-center text-lg">
                  <input
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="css"
                  />
                  <RiCss3Fill size={28} /> <label htmlFor="css">CSS</label>
                </p>
                <p className="flex gap-3 items-center text-lg">
                  <input
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="bootstrap"
                  />
                  <BsFillBootstrapFill size={28} />{" "}
                  <label htmlFor="bootstrap">Bootstrap</label>
                </p>
                <p className="flex gap-3 items-center text-lg">
                  <input
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="tailwind"
                  />
                  <SiTailwindcss size={28} />{" "}
                  <label htmlFor="tailwind">Tailwind</label>
                </p>
                <p className="flex gap-3 items-center text-lg">
                  <input
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="react"
                  />
                  <RiReactjsFill size={28} />{" "}
                  <label htmlFor="react">React</label>
                </p>
                <p className="flex gap-3 items-center text-lg">
                  <input
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    value="fullStack"
                  />
                  <RiStackFill size={28} />{" "}
                  <label htmlFor="fullStack">Full Stack</label>
                </p>
              </div>
            ) : (
              ""
            )}
          </Sticky>
        </div>

        <ProjectCard />
      </div>
    </>
  );
};

export default Projects;
