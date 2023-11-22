import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerceApp from "../../Assets/Projects/ecommerceApp.jpg";
import chatApp from "../../Assets/Projects/chatApp.jpg";
import restaurantReservationApp from "../../Assets/Projects/restaurantReservationApp.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerceApp}
              title="Ecommerce Application"
              description="A full fledge ecommerce application having login, authentication, products, search logic, order management, cart, payment and admin interface. This application is built with MERN Stack (MongoDB, Express, React, Node)."
              ghLink="https://github.com/hasanjessa/ecommerce-application-with-mern"
              // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurantReservationApp}
              title="Periodic Tables"
              description="This application represents a Reservation System for a restaurant called Periodic Tables. It gives users the ability to create/edit reservations, seat a reservation at a table, create tables, and search for a reservation by phone number. This application is built with PERN stack (PostgreSQL, Express, React, and Node)."
              ghLink="https://github.com/hasanjessa/periodic-tables"
              // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              title="Chat Application"
              description="Chat Application project using React and Socket.io for WebSocket (client and server)."
              ghLink="https://github.com/hasanjessa/chat-app"
              // demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
