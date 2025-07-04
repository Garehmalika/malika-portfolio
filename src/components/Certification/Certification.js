import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import gp from "../../Assets/Certification/HCJ.png";
import ibm from "../../Assets/Certification/IBM_DATA_science.png";
import sm from "../../Assets/Certification/google_project_management.png";
import bcg from "../../Assets/Certification/bcg.png";
import py from "../../Assets/Certification/powerBI.png";
import sql from "../../Assets/Certification/Laravel_PHP.png";
import uml from "../../Assets/Certification/uml.jpeg";
import cn from "../../Assets/Certification/data_engineering.png";
import kpmg from "../../Assets/Certification/datacamp.png";
import ml from "../../Assets/Certification/DL.jpeg";
import alx from "../../Assets/Certification/ALX.png";
import client from "../../Assets/Certification/clientneed.png";
import agil from "../../Assets/Certification/agil.png";
import matlab from "../../Assets/Certification/matlab.png";
import winter from "../../Assets/Certification/winter.png";
import gene from "../../Assets/Certification/generative.png";
import smm from "../../Assets/Certification/aws.png";
function Certification() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple"> Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          In this section you'll find certifications of courses and specializations that I enrolled.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sm}
              isBlog={false}
              title="Google Project Management"
              description={
                <>
              In this Certificate, I have
              completed six courses, developed by Google, that include hands-on,
              practice-based assessments and are designed to prepare them for
              introductory-level roles in Project Management. They are competent in
              initiating, planning and running both traditional and agile projects.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
                </>
              }
              courseraLink="https://www.coursera.org/account/accomplishments/specialization/Q5GEBKDD6ZEB"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ibm}
              isBlog={false}
              title="IBM Data Science"
              description=" 
              In this 12 courses Professional Certificate, I developed and honed hands-on 
              skills in Data Science and Machine Learning. I started with
              an orientation of Data Science and its Methodology, became familiar
              and used a variety of data science tools, learned Python, SQL, and R,
              performed Data Visualization and Analysis, and created Machine
              Learning models. In the process I completed several labs and
              assignments on the cloud including a Capstone Project at the end to
              apply and demonstrate my knowledge and skills.
              "
              courseraLink="https://www.coursera.org/account/accomplishments/specialization/7SI8XQGIVHSQ"
              />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gp}
              isBlog={false}
              title="HTML, CSS, and Javascript for Web Developers"
              description={
                <>
               This course provided me with a solid foundation in web development, covering the core technologies needed to create and manage websites: HTML, CSS, and JavaScript.

During the course, I gained practical experience in building responsive, interactive websites, learning how to structure web pages with HTML, style them with CSS, and make them dynamic with JavaScript. This certification reflects my commitment to expanding my skills in web development and my readiness to apply these techniques in future projects.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
                </>
              }
              courseraLink="https://www.coursera.org/account/accomplishments/verify/BQ7XX311BTFJ"
              />
          </Col>    
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bcg}
              isBlog={false}
              title="BCG X Data Science Job Simulation"
              description={
                <>
              In this Job Simulation, I worked on a project to create a customer
               churn analysis simulation using Python. This project built my data 
               science skills in a real-world context, as well as my presentation skills 
               through creating an executive summary of my findings for the team. 
              <br />
              <br />
              <br />
                </>
              } 
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cn}
              isBlog={false}
              title="introduction to data engineering"
              description="
              The Introduction to Data Engineering course, offered by IBM on Coursera, provides a comprehensive introduction to the field of data engineering. This course is designed for individuals who are looking to start their journey in data engineering, offering a deep dive into the fundamental concepts and tools that are essential for handling and processing large datasets.
              "
              courseraLink="https://www.coursera.org/account/accomplishments/verify/6K9LR7MYOP6D"
              />
          </Col>
             <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gene}
              isBlog={false}
              title="Generative IA "
              description="
              
              "
              courseraLink="https://www.coursera.org/account/accomplishments/verify/068LOF578DYR"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={client}
              isBlog={false}
              title="Client Needs and Software Requirements"
              description="
              In this course, I learned create clear requirements to drive effective software development,
              how to visualize client needs using low-fidelity prototypes, how to maximize the effectiveness 
              of client interactions and how to adapt to changing product requirements
              "
              courseraLink="https://www.coursera.org/account/accomplishments/verify/EQVPL8DEX7LW"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={winter}
              isBlog={false}
              title="
Winter school Generative IA"
              description="
             I participated in the Winter School on Generative AI organized by Ecole Centrale Casablanca, sponsored by OCP, with the support of EMINES – UM6P and Ecole Polytechnique. During the event, I learned about generative models, including GANs and VAEs, and their applications in various domains.
              "
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kpmg}
              isBlog={false}
              title=" Introduction to R "
              description="The Introduction to R course, offered by DataCamp, provides a comprehensive introduction to the R programming language, which is widely used for data analysis, statistical computing, and data visualization. This course is ideal for individuals who are new to R or programming in general and want to gain the foundational skills needed to work with data."
              courseraLink="https://www.datacamp.com/completed/statement-of-accomplishment/course/f3819ad03baea7d3d2008bb64f7a4895a2a7b5e0"
              />
          </Col>
          


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sql}
              isBlog={false}
              title="
Mastering Laravel Framework and PHP"
              description={
                <>
              In this specialization, I learned advanced PHP programming concepts, and worked on .
              <br />
              <br />
                </>
              }
              courseraLink="https://www.coursera.org/account/accomplishments/records/6A5FZ75BCRS5"
              />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uml}
              isBlog={false}
              title="Modeling Software Systems using UML"
              description={
                <>
              In this course, I learned how to create UML diagrams to model software systems.
                </>
              }
              courseraLink="https://www.coursera.org/account/accomplishments/records/DJ6LJHMB3WL7"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agil}
              isBlog={false}
              title="
Agile Project Management"
              description={
                <> 
              In this specialization, I learned how to manage agile projects effectively, including techniques for planning, execution, and monitoring.
              <br />
              <br />
              <br />
                </>
              }
              courseraLink="https://www.coursera.org/account/accomplishments/verify/DYCX8CG749UF"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={py}
              isBlog={false}
              title="
Data-Driven Decisions with Power BI"
              description={
                <>
              In this course, I learned how to build and evaluate machine learning models using Python and explored the Machine Learning concepts and basics.
              <br />
              <br />
              <br />
                </>
              }
              courseraLink="https://www.coursera.org/account/accomplishments/records/KZY3AV21KDFC"
              />
          </Col>
<Col md={4} className="project-card">
            <ProjectCard
              imgPath={smm}
              isBlog={false}
              title="machine learning on AWS"
              description={
                <> 
              In this course, I learned about the principles of machine learning on AWS, including model training, deployment, and monitoring.
                </>
              } 
              />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="Deep Learning"
              description={
                <> 
              In this course, I learned about the principles of deep learning, including neural networks, convolutional networks, and recurrent networks.
                </>
              } 
              />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matlab}
              isBlog={false}
              title="
Certified MATLAB Professional"
              description={
                <>
                  In this course, I learned how to use MATLAB for data analysis, visualization, and algorithm development.
                  <br />
                  <br />
                </>
              }
              />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Certification;
