import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import alumni from "../../Assets/Projects/web scraping.png";
import churn from "../../Assets/Projects/churn.png";
import gan from "../../Assets/Projects/cover.jpg";
import graph from "../../Assets/Projects/graph.png";
import ibm from "../../Assets/Projects/falcon.jpg";
import intent from "../../Assets/Projects/crowd.jpg";
import MLOps from "../../Assets/Projects/stochast.png";
import movies from "../../Assets/Projects/recomm.png";
import Mentoriny from "../../Assets/Projects/mentorat.png";
import robotics from "../../Assets/Projects/robotics.png";
import stoch from "../../Assets/Projects/stoch.jpg";
import weld from "../../Assets/Projects/bitcoin.jpeg"; 
import dior from "../../Assets/Projects/carbon.jpg";
import diore from "../../Assets/Projects/fraud.webp";
import jailbreak from "../../Assets/Projects/flux.jpeg";
import lid from "../../Assets/Projects/analyse.jpg";
import mas from "../../Assets/Projects/cobot.jpg";
import visual from "../../Assets/Projects/compture vision.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          In this section you'll find some of the projects I've worked on recently.

        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        

        < Col md={4} className="project-card">
            <ProjectCard
              imgPath={jailbreak}
              isBlog={false}
              title="ETA-Modelling-and-Optimizing-Last-Mile-Logistics"
              description="This project implements an end-to-end optimization system for GoLogistics to improve last-mile delivery efficiency using Business Intelligence and Machine Learning techniques. The project addressed rising delivery costs, traffic-related delays, and suboptimal partner allocation through data-driven solutions.

Key Results:

97% prediction accuracy for delivery time estimation
15% reduction in operational costs
22% improvement in customer satisfaction
18-minute decrease in average delivery time
35% increase in daily processing capacity

Successfully deployed the production system, enabling data-driven logistics optimization and significantly improving overall delivery operations efficiency."
              ghLink="https://github.com/Garehmalika/Last-mile-delivery"
              />
          </Col>

        
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lid}
              isBlog={false}
              title="Advanced NLP Project - Hybrid Methodology for Sentiment Analysis"
              description="
Implemented a hybrid methodology for text classification combining semi-supervised learning with Large Language Models (LLMs) to improve sentiment analysis accuracy. The project addressed the challenge of limited labeled data in natural language processing tasks.
Approach
Hybrid Methodology: Developed an innovative approach combining semi-supervised learning techniques with LLM capabilities for enhanced text classification performance.
Data Annotation: Utilized LLMs to automatically annotate unlabeled data subsets, creating a larger training dataset for improved model performance.
Transformer Fine-tuning: Fine-tuned state-of-the-art transformer encoders including BERT and RoBERTa on the augmented dataset for optimal classification results.
Key Results

Successfully implemented semi-supervised learning pipeline
Enhanced classification accuracy through LLM-assisted data annotation
Improved sentiment analysis performance using fine-tuned BERT and RoBERTa models
Demonstrated effective handling of limited labeled data scenarios"
              ghLink="https://github.com/Garehmalika/Movie-Reviews-Sentiment-Analysis"
            />
          </Col>
          

          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={visual}
            isBlog={false}
            title="Computer Vision for Industrial Security|Centrale Casablanca × Coca-Cola"
            
            description="Developed an intelligent surveillance solution using computer vision and artificial intelligence to enhance industrial security and optimize workplace organization. The system provides real-time monitoring of safety compliance and security threats in industrial environments.
Key Results

93% accuracy in real-time risk detection
Successful identification of intrusions and PPE compliance violations
Enhanced workplace safety through automated monitoring
Improved industrial security protocols and response times"
            ghLink="https://github.com/Garehmalika/Computer-Vision"
          />
        </Col>

        
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mas}
              isBlog={false}
              title="Predicting Protective Stops for UR3 Cobot using Machine Learning and Deep Learning"
              description="This project focuses on predicting protective stops of a UR3 cobot in an industrial environment using machine learning and deep learning models. By leveraging sensor data such as currents, temperatures, and joint speeds, the goal is to predict if a protective stop will occur within the next 10 time units. The project is part of a predictive maintenance initiative to reduce unplanned downtimes. Various models, including LSTM, GRU, RNN, SVM, and Transformer, are trained and compared to predict these stops. The best-performing model, LSTM, captures long-term dependencies despite being computationally intensive. The models are deployed via a Flask API and containerized using Docker for production use."
              ghLink="https://github.com/Garehmalika/Prediction-of-Protection-Stops-for-a-Cobot"
            />
          </Col>

          < Col md={4} className="project-card">
            <ProjectCard
              imgPath={dior}
              isBlog={false}
              title="Carbon Capture, Utilization, and Storage (CCUS) with Machine Learning
"
              description="In this collaborative scientific project, we focused on optimizing the use of nanomaterials in Carbon Capture, Utilization, and Storage (CCUS) technologies by leveraging machine learning. The goal of the project was to develop predictive models to analyze and simulate the performance of nanomaterials, aiming to enhance their efficiency in capturing and storing carbon. This project combines advanced nanotechnology and machine learning techniques to provide innovative solutions to global carbon emission reduction efforts."
              ghLink="https://github.com/Garehmalika/scientifique"
              />
          </Col>
          < Col md={4} className="project-card">
            <ProjectCard
              imgPath={diore}
              isBlog={false}
              title="Real-time-fraud-detection
"
              description="This project focuses on real-time fraud detection in financial transactions using machine learning (LightGBM) and deep learning (MLP) models, trained on a credit card fraud dataset. It includes a Flask-based REST API for predicting fraud on new transactions and a real-time fraud detection visualization system displayed on an interactive map using WebSocket and amCharts. Key functionalities include loading and preprocessing the imbalanced fraud dataset, training the LightGBM model, providing predictions through the API, and visualizing detected frauds in real-time. The system also includes simple load testing to evaluate API performance. Technologies used include Python, LightGBM, MLP, Flask, SQLite, JavaScript, and amCharts."
              ghLink="https://github.com/Garehmalika/Real-time-fraud-detection"
              />
          </Col>

          
        < Col md={4} className="project-card">
            <ProjectCard
              imgPath={intent}
              isBlog={false}
              title="CrowdFunding"
              description="This project is a CrowdFunding Web App developed using the Django Framework that enables users to sign up, log in, and manage their profiles, including creating, modifying, or deleting their accounts. Users can create and delete funding projects, view detailed project information, and interact with projects by donating, rating, reporting, or commenting. The app is built with Django, MySQL for the database, and HTML, CSS, JavaScript, and Bootstrap for the frontend."
              ghLink="https://github.com/Garehmalika/Growdfunding"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gan}
              isBlog={false}
              title="cover letter generator"
              description="This project is an AI-powered tool designed to generate customized cover letters by analyzing a candidate's resume and job postings. The tool offers PDF resume parsing, automatic job posting analysis, and parallel processing for faster results. It generates personalized cover letters and provides an easy-to-use web interface. Additionally, an AI agent assists with resume screening, scoring candidates based on job descriptions. Built with Python 3.9+, Streamlit, and OpenAI, the app follows the black code style and is licensed under MIT. The application leverages AI to process resumes and job descriptions, generating custom email templates for candidates."
              ghLink="https://github.com/Garehmalika/cover-letter-generator"
              />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MLOps}
              isBlog={false}
              title="Stochastic Optimization and Linear Regression with Noisy Data"
              description="This project focuses on the study of stochastic optimization methods applied to a fundamental problem: linear regression with noisy data. The main objective is to estimate the parameters of a linear model by minimizing the mean squared error while accounting for uncertainties inherent in the data."
              ghLink="https://github.com/Garehmalika/optimisation-stochastique"
              />
          </Col>


                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weld}
              isBlog={false}
              title=" Analyzing and Predicting Bitcoin Market"
              description="This project leverages both supervised and unsupervised machine learning models to provide forecasts on market trends and the future prices of Bitcoin. By analyzing historical data, market patterns, and various influencing factors, the project aims to develop models that can predict the price fluctuations and trends of Bitcoin, helping traders, investors, and analysts make informed decisions."  
              ghLink="https://github.com/Garehmalika/Bitcoin_BTC"
              />
          </Col>
            
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={churn}
              isBlog={false}
              title="BCG - Predicting and Mitigating Customer Churn in the SME Energy Market"
              description="This project focuses on addressing customer churn in the SME segment of a gas and electricity utility company, where market liberalization has led to significant losses in customer retention. The goal is to analyze customer behavior, particularly their sensitivity to price changes, to develop a predictive model that identifies those most likely to switch providers. By utilizing historical customer and pricing data, the project will test key hypotheses, perform exploratory data analysis, and engineer features to improve churn prediction accuracy. The insights from this model will support the development of strategies such as offering targeted discounts to retain at-risk customers, ultimately improving business outcomes."
              demoLink="https://github.com/Garehmalika/Analyse-du-Churn-Client-pour-PowerCo-Analytics"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ibm}
              isBlog={false}
              title="IBM - SpaceX Falcon9 Landing Prediction"
              description="In this project, I worked on different Data Science stages in order to predict if the SpaceX Falcon 9 first stage will land successfully. By predicting if the first stage will land, we can determine the cost of a launch. This information can be used if an alternate company wants to bid against SpaceX for a rocket launch."  
              ghLink="https://github.com/Garehmalika/IBM-SpaceX-Falcon9-Landing-Prediction"
              />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title="Movies Recommendation"
              description="In This project focuses on building a movie recommendation system using collaborative filtering techniques. The primary goal is to predict the preferences of users based on their past behaviors and interactions with content, providing personalized movie recommendations."  
              ghLink="https://github.com/Garehmalika/recommandation_films"
              />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alumni}
              isBlog={false}
              title="Web Scraping and Data Extraction"
              description="This project involves multiple tasks aimed at scraping and extracting data from various sources, including the NATRUE website and INCI database. The tasks include scraping data for products, raw materials, and brands, structuring raw materials in a specific format, and identifying relevant business contacts. The project also includes the use of low-code tools to create workflows for mapping out business development managers."  
              ghLink="https://github.com/Garehmalika/Tasks_Nature_scrap"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mentoriny}
              isBlog={false}
              title="Mentoriny"
              description="Our team has worked diligently on Mentoriny, a platform designed to connect students with mentors from the same academic field. The primary goal of the platform is to facilitate knowledge exchange and provide peer support to foster collective success.

Mentoriny is built to create an environment where students can receive guidance, advice, and academic support from more experienced peers within the same course or program. By fostering a sense of community and shared learning, the platform aims to enhance the academic experience and help students achieve their full potential."  
              ghLink="https://github.com/Garehmalika/mentorat"
              />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stoch}
              isBlog={false}
              title="Stochastic Optimization Algorithms"
              description="In this project, I developed a stochastic approach to optimize functions that exhibit non-convexity, multimodality, discontinuity, or non-differentiability. The project focused on implementing various stochastic optimization algorithms, such as Simulated Annealing, Genetic Algorithms, and Particle Swarm Optimization, to solve complex optimization problems. By comparing the performance of these algorithms on different test functions, the project aimed to identify the most effective approach for optimizing challenging functions."  
              ghLink="https://github.com/Garehmalika/Stochastic-Optimization"
              />
          </Col>
          
      
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graph}
              isBlog={false}
              title="Graph Theory Project : Social Networks Analysis"
              description="This project explores the analysis of social networks using key graph theory concepts such as Edge Centrality, Betweenness Centrality, and Closeness Centrality. By examining various types of networks, the project highlights the influence and importance of nodes within these interconnected systems."  
              ghLink="https://github.com/Garehmalika/Analyse-des-R-seaux-Sociaux-et-Centralit-"
              />
          </Col>
        

  
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robotics}
              isBlog={false}
              title="Robotics Project : Waste Collecting Robot"
              description="In this project, we designed and built a waste-collecting line-following robot. We assembled the basic robot, delved into programming principles, and achieved objectives like line following, intersection handling, PID controller implementation, and integrating a robotic arm for efficient collection."  
              ghLink="https://github.com/Garehmalika/Waste-Collecting-Robot"
              />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
