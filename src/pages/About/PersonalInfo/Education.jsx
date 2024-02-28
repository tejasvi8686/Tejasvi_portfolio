import { FaFortAwesome, FaGraduationCap } from "react-icons/fa";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Education = () => {
  return (
    <div className="text-s1">
      <VerticalTimeline layout="1-column-left">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  #1E2D3D" }}
          date="2024 - present"
          iconStyle={{ background: "#011627", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            B.Tech. In <strong>(CSE)</strong>
          </h3>
          <br />
          <h4 className="vertical-timeline-element-subtitle">
            Dr. K. N. Modi Institute of Engineering & Technology{" "}
            <strong>(KNMIET)</strong>
          </h4>
        </VerticalTimelineElement>
   
      </VerticalTimeline>
    </div>
  );
};

export default Education;
