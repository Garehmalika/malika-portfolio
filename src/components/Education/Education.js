import React from "react";
import VerticalTimeline from "./VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimelineElement";
import './VerticalTimeline.css';
import './VerticalTimelineElement.css';
import { IoMdSchool } from "react-icons/io";

function Education() {
  return (
    <VerticalTimeline>
<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
  date="Today – September 2025"
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  icon={<IoMdSchool />}
>
  <h3 className="vertical-timeline-element-title">Centrale Lyon | Data Science and Digitalization</h3>
  <h4 className="vertical-timeline-element-subtitle">Lyon, France</h4>
  <p>
    Degree in Data Science and Digitalization - International Exchange Program.<br />
    <strong>Courses:</strong> Deep Learning, LLM, Machine Learning, Project Management, Data Collection, Big Data, NLP.
  </p>
</VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Ecole Centrale Casablanca | Systems Engineering </h3>
    <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4>
    <p>
    Engineer's degree in General Engineering with a focus on Data Science.
    <br /><strong>Included courses</strong>  : Probability, Statistics, Optimization, Algorithms, Data Structures, Object-Oriented Programming, Operations Research. etc.
    <br />
    
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Septembre 2021 – Septembre 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">CPGE Omar Ibn Abd-el-Aziz | MPSI/MP</h3>
    <h4 className="vertical-timeline-element-subtitle">Oujda, Maroc</h4>
    <p>
     MPSI/MP Preparatory Class Program
    </p>
  </VerticalTimelineElement>
 
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2019 - 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title"> Lycée AL Hassan DAKHIL| Baccalaureate Diploma  </h3>
    <h4 className="vertical-timeline-element-subtitle">GUERCIF, Morocco</h4>
    <p>
    High School Diploma (Scientific Track) with a focus on Mathematics (Sciences Math A).
    <br /> <strong>Grade</strong> : Graduated With Highest Honors (Bien).
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  );
}

export default Education;
