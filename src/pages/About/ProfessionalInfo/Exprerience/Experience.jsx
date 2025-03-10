import {  FaGraduationCap } from "react-icons/fa";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Experience = () => {
  return (
    <div className="text-s1">
      <VerticalTimeline layout="1-column-left">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  #1E2D3D" }}
          date="2024(sep) - present"
          iconStyle={{ background: "#011627", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            FrontEnd<strong>(Full-Time)</strong>
          </h3>
          <br />
          <h4 className="vertical-timeline-element-subtitle">
            Appeneure <strong>(FrontEnd)</strong>
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  #1E2D3D" }}
          date="2023(nov) - 2024(feb)"
          iconStyle={{ background: "#011627", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            FrontEnd <strong>(Intern)</strong>
          </h3>
          <br />
          <h4 className="vertical-timeline-element-subtitle">
            Own Technologies <strong>(FrontEnd)</strong>
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  #1E2D3D" }}
          date="2023(jun) - 2024(sep)"
          iconStyle={{ background: "#011627", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            React.js <strong>(Intern)</strong>
          </h3>
          <br />
          <h4 className="vertical-timeline-element-subtitle">
            Lipijobs <strong>(FrontEnd)</strong>
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
