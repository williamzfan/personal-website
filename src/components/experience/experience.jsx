import React from 'react'
import "./experience.scss"

import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
  

export default function experience() {

    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
    return (        
        <div class="timeline" id = "experience">
      <h1 className="title">Experience</h1>
      <VerticalTimeline lineColor="#06d6a0">
        <VerticalTimelineElement
              key="FNCE"
              iconStyle={{background: '#06D6A0'}}
              icon={<WorkIcon/>}
              contentStyle={{ background: '#ddccff', color: '#black' }}
            >
              <h3 className="vertical-timeline-element-title">
                Finance Research Assistant @ Wharton
              </h3>
              <h4>(Nov 2021 - Present)</h4>
              <h5 className="vertical-timeline-element-subtitle">
                Philadelphia, PA
              </h5>
              <span id="description">I'm currently working with Prof. Chaojun Wang on two different papers on price discrimination in
              over-the-counter markets and trading games. In particular, I create and validate trading models, write theoretical proofs,
              and program scripts to empirically evaluate theoretical insights.
              </span>
        </VerticalTimelineElement>
        <VerticalTimelineElement
              key="CIS121"
              iconStyle={{background: '#06D6A0'}}
              icon={<WorkIcon/>}
              contentStyle={{ background: '#ddccff', color: '#black' }}
            >
              <h3 className="vertical-timeline-element-title">
                Data Structures and Algorithms Teaching Assistant @ University of Pennsylvania
              </h3>
              <h4>August 2021 - Present</h4>
              <h5 className="vertical-timeline-element-subtitle">
                Philadelphia, PA
              </h5>
              <span id="description">
                I am currently a TA for CIS121: Data Structures and Algorithms at the University of Pennsylvania. My responsibilities
                include teaching a weekly recitation of 20 students, holding office hours, and writing and grading homeworks and exams.
              </span>
        </VerticalTimelineElement>
        <VerticalTimelineElement
              key="PHYS"
              iconStyle={{background: '#06D6A0'}}
              icon={<WorkIcon/>}
              contentStyle={{ background: '#ddccff', color: '#black' }}
            >
              <h3 className="vertical-timeline-element-title">
                Statistics and Data Science Intern @ MIT
              </h3>
              <h4>May 2021 - September 2021</h4>
              <h5 className="vertical-timeline-element-subtitle">
                Cambridge, MA
              </h5>
              <span id="description">This past summer, I worked directly with the Head of Physics at MIT, Prof. Peter Fisher on a project in
              Software Defined Radio for Passive Coherent Location (PCL). My responsibilites included creating the PCL hardware setup, collecting data,
              and creating and implementing a model to process the data.
              </span>
        </VerticalTimelineElement>
        <VerticalTimelineElement
              key="UPENN"
              iconStyle={{background: '#f9c74f'}}
              icon={<SchoolIcon/>}
              contentStyle={{ background: '#ddccff', color: '#black' }}
            >
              <h3 className="vertical-timeline-element-title">
                University of Pennsylvania
              </h3>
              <h4>Sept 2020 - Present</h4>
              <h5 className="vertical-timeline-element-subtitle">
                Philadelphia, PA
              </h5>
              <span id="description">I'm currently a sophomore in Networked and Social Systems Engineering (NETS)-- a specialized degree program
              which focues on the intersection of computer science, statistics, economics, and social science. I currently have a 3.97/4.00 GPA and 
              am a member of a quantitative investment team and the Penn Blockchain Trading Committee.
              </span>
        </VerticalTimelineElement>
        <VerticalTimelineElement
              key="DUKE"
              iconStyle={{background: '#06D6A0'}}
              icon={<WorkIcon/>}
              contentStyle={{ background: '#ddccff', color: '#black' }}
            >
              <h3 className="vertical-timeline-element-title">
                Economics and Computer Science Intern @ Duke
              </h3>
              <h4>May 2019 - Jan 2021</h4>
              <h5 className="vertical-timeline-element-subtitle">
                Durham, NC
              </h5>
              <span id="description">I worked directly with Prof. Kamesh Munagala and Prof. Brandon Fain on approximation algorithms
              for problems in applied economics.
              In particular, our research topics included computational social choice, algorithmic game theory, and fair resource allocation. 
              I worked on numerous projects and coauthored a paper published in IJCAI 2020, one of the world's top conferences on AI.
              </span>
        </VerticalTimelineElement>
        <VerticalTimelineElement
              key="NCSSM"
              iconStyle={{background: '#f9c74f'}}
              icon={<SchoolIcon/>}
              contentStyle={{ background: '#ddccff', color: '#black' }}
            >
              <h3 className="vertical-timeline-element-title">
                North Carolina School of Science and Mathematics (NCSSM)
              </h3>
              <h4>August 2018 - May 2020</h4>
              <h5 className="vertical-timeline-element-subtitle">
                Durham, NC
              </h5>
              <span id="description">At NCSSM, I had a 4.84/5.00 GPA and scored a 36/36 on all sections of the ACT.
              Additionally, I served as a mathematics teaching assisstant, senator in student government, and captain
              of a 100+ person cross country and track team.</span>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    )
}