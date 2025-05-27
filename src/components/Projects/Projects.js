import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
            
              isBlog={false}
              title="Course-Registration-Platform"
              description="A robust Course Registration System developed using React.js for the frontend and Spring Boot for the backend. Designed to simplify and streamline the course enrollment process in academic institutions."
              ghLink="https://github.com/Varshi000/Course-Registration-Platform.git"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             
              isBlog={false}
              title="Server and Project Portfolio Management"
              description="A full-stack web application designed to manage servers and track project portfolios within an organization. Built using React.js for a dynamic frontend and Node.js + MongoDB for a scalable backend."
              ghLink="https://github.com/Varshi000/Server-and-Project-Portfolio-Management-.git"
              
            />
          </Col>

     

          <Col md={4} className="project-card">
            <ProjectCard
            
              isBlog={false}
              title="VMC Website"
              description="A dynamic, fully responsive website developed for VMC IT Department, designed to showcase institutional information, updates, and services for students, faculty, and visitors. Built with React.js and styled using modern UI components for a sleek user experience"
              ghLink="https://github.com/Varshi000/vmc-it-website.git"
             
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
           
              isBlog={false}
              title="Snake Game"
              description="A retro-style Snake Game recreated using HTML, CSS, and JavaScript. 
              Built as a beginner-friendly game project to understand key concepts like DOM manipulation, keyboard events, collision detection, and game loops."
              ghLink="https://github.com/Varshi000/Snake-Game.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
           
              isBlog={false}
              title="Smart Video Feed and Stream Interact"
              description="This project helped me explore the full-stack integration of AI services with video processing. 
              I learned how to extract audio using FFmpeg, run real-time transcription models, and sync translated audio back into videos."
              ghLink="https://github.com/Varshi000"
              
            />
          </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
