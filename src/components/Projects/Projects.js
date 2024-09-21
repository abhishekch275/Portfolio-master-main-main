import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Studynotion from "../../Assets/Projects/Studynotion.png";
import Dashboard from "../../Assets/Projects/Dashboard.png";

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
              imgPath={Studynotion}
              isBlog={false}
              title="Study-Notion"
              description="A web application facilitating seamless user authentication role-based access control and course management
functionalities for both students and instructor added Razorpay integration enabling users to securely purchases courses boosting monetization"
              ghLink="https://github.com/abhishekch275/Study-Notion"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dashboard}
              isBlog={false}
              title="E-Commerce Admin Dashboard "
              description="A web application where users can sign up, log in, and add products. It requires a combination of secure authentication, a database for storing user and product data, and a user-friendly interface to ensure smooth interaction with user"
              ghLink="https://github.com/abhishekch275/Ecommerce"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
