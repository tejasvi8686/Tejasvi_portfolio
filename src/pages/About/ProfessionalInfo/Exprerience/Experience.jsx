import { FaGraduationCap } from "react-icons/fa";
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaGitAlt,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Experience = () => {
  return (
    <div className="text-s1 overflow-y-auto h-[calc(100vh-10rem)]">
      <VerticalTimeline layout="1-column-left">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  #1E2D3D" }}
          date="2024(sep) - present"
          iconStyle={{ background: "#011627", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title text-lg ">
            FrontEnd<strong>(Full-Time)</strong>
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-base text-gray-400">
            Appeneure <strong>(FrontEnd)</strong>
          </h4>
          <div className="mt-4 text-gray-300 bg-gray-800/50 rounded-lg p-3 backdrop-blur-sm border border-gray-700/50">
            <ul className="space-y-3">
              <li className="flex items-start gap-3 p-2 hover:bg-gray-700/30 rounded-md transition-all duration-200">
                <div className="flex gap-2 mt-1">
                  <SiNextdotjs className="text-blue-500 text-lg" />
                  <SiRedux className="text-purple-500 text-lg" />
                </div>
                <span className="text-sm leading-relaxed">
                  Developed a dynamic Job Management System and Analytics
                  Dashboard
                </span>
              </li>
              <li className="flex items-start gap-3 p-2 hover:bg-gray-700/30 rounded-md transition-all duration-200">
                <div className="flex gap-2 mt-1">
                  <FaMobileAlt className="text-green-500 text-lg" />
                  <SiTypescript className="text-blue-400 text-lg" />
                </div>
                <span className="text-sm leading-relaxed">
                  Built a cross-platform AI Travel App with OpenAI-powered
                  Itinerary Generator
                </span>
              </li>
              <li className="flex items-start gap-3 p-2 hover:bg-gray-700/30 rounded-md transition-all duration-200">
                <div className="flex gap-2 mt-1">
                  <FaGitAlt className="text-orange-500 text-lg" />
                  <FaLaptopCode className="text-blue-400 text-lg" />
                </div>
                <span className="text-sm leading-relaxed">
                  Published apps on Play Store and App Store with focus on UI/UX
                  optimization
                </span>
              </li>
              <li className="flex items-start gap-3 p-2 hover:bg-gray-700/30 rounded-md transition-all duration-200">
                <div className="flex gap-2 mt-1">
                  <FaMobileAlt className="text-green-500 text-lg" />
                  <FaLaptopCode className="text-blue-400 text-lg" />
                </div>
                <span className="text-sm leading-relaxed">
                  Implemented CI/CD pipeline for faster and more reliable
                  releases
                </span>
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  #1E2D3D" }}
          date="2023(nov) - 2024(feb)"
          iconStyle={{ background: "#011627", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title text-lg">
            FrontEnd <strong>(Intern)</strong>
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-base text-gray-400">
            Own Technologies <strong>(FrontEnd)</strong>
          </h4>
          <div className="mt-4 text-gray-300 bg-gray-800/50 rounded-lg p-3 backdrop-blur-sm border border-gray-700/50">
            <ul className="space-y-3">
              <li className="flex items-start gap-3 p-2 hover:bg-gray-700/30 rounded-md transition-all duration-200">
                <div className="flex gap-2 mt-1">
                  <FaReact className="text-blue-400 text-lg" />
                  <SiRedux className="text-purple-500 text-lg" />
                </div>
                <span className="text-sm leading-relaxed">
                  Developed and deployed Given Academy website with 95% code
                  coverage
                </span>
              </li>
              <li className="flex items-start gap-3 p-2 hover:bg-gray-700/30 rounded-md transition-all duration-200">
                <div className="flex gap-2 mt-1">
                  <FaLaptopCode className="text-blue-400 text-lg" />
                  <SiTailwindcss className="text-cyan-400 text-lg" />
                </div>
                <span className="text-sm leading-relaxed">
                  Implemented responsive design across devices for superior user
                  experience
                </span>
              </li>
              <li className="flex items-start gap-3 p-2 hover:bg-gray-700/30 rounded-md transition-all duration-200">
                <div className="flex gap-2 mt-1">
                  <FaCode className="text-green-500 text-lg" />
                  <FaGitAlt className="text-orange-500 text-lg" />
                </div>
                <span className="text-sm leading-relaxed">
                  Developed and maintained 5 new features enhancing website
                  functionality
                </span>
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  #1E2D3D" }}
          date="2023(jun) - 2024(sep)"
          iconStyle={{ background: "#011627", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title text-lg ">
            React.js <strong>(Intern)</strong>
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-base text-gray-400">
            Lipijobs <strong>(FrontEnd)</strong>
          </h4>
          <div className="mt-4 text-gray-300 bg-gray-800/50 rounded-lg p-3 backdrop-blur-sm border border-gray-700/50">
            <ul className="space-y-3">
              <li className="flex items-start gap-3 p-2 hover:bg-gray-700/30 rounded-md transition-all duration-200">
                <div className="flex gap-2 mt-1">
                  <FaHtml5 className="text-orange-500 text-lg" />
                  <FaCode className="text-yellow-500 text-lg" />
                </div>
                <span className="text-sm leading-relaxed">
                  Developed and maintained user interfaces with focus on
                  performance
                </span>
              </li>
              <li className="flex items-start gap-3 p-2 hover:bg-gray-700/30 rounded-md transition-all duration-200">
                <div className="flex gap-2 mt-1">
                  <FaLaptopCode className="text-blue-400 text-lg" />
                  <FaBootstrap className="text-purple-500 text-lg" />
                </div>
                <span className="text-sm leading-relaxed">
                  Participated in agile development workflows and team stand-ups
                </span>
              </li>
              <li className="flex items-start gap-3 p-2 hover:bg-gray-700/30 rounded-md transition-all duration-200">
                <div className="flex gap-2 mt-1">
                  <FaGitAlt className="text-orange-500 text-lg" />
                  <FaCode className="text-green-500 text-lg" />
                </div>
                <span className="text-sm leading-relaxed">
                  Utilized Git and GitHub for version control and collaborative
                  coding
                </span>
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
