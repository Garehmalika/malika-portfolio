import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Malika Gareh</span>, a third-year engineering student at <span className="purple">Centrale Lyon</span>, specializing in computer science and data science.
            <br />
            <br />I am a third-year engineering student at Centrale Lyon, specializing in computer science and data science, and I am looking for an internship starting in September 2025. My international dual background and hands-on experience in AI optimization have enabled me to develop an approach that combines technical excellence with an understanding of business challenges. Capable of transforming complex data into high-value solutions, I aim to apply my skills to innovative projects within a large company.
            <br />
            <br />Feel free to explore my portfolio to discover my projects, experiences, and skills in data science and AI.
          </p>

          <p style={{ color: "rgb(96, 136, 224)" }}>
            "The only way to do great work is to love what you do."{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
