import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCards from "./BlogCards";
import Particle from "../Particle";

import AngvsReact from "../../Assets/Projects/AngvsReact.png";
import redux from "../../Assets/Projects/redux.png";
import aiml from "../../Assets/Projects/aiml.png";
import unittesting from "../../Assets/Projects/unittesting.jpg";
import sqlvsnosql from "../../Assets/Projects/sqlvsnosql.png";

function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few blogs I've written recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <BlogCards
              imgPath={AngvsReact}
              title="Angular vs React"
              description="Angular vs. React: A Comprehensive Comparison for Frontend Development."
              link="https://medium.com/@hnjessa/angular-vs-react-a-comprehensive-comparison-for-frontend-development-7c7e82fa9218"
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogCards
              imgPath={redux}
              title="Redux Toolkit & State Management"
              description="Harnessing the Power of State Management with Redux Toolkit: Benefits and Best Practices."
              link="https://medium.com/@hnjessa/harnessing-the-power-of-state-management-with-redux-toolkit-benefits-and-best-practices-36665e5bfd07"
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogCards
              imgPath={unittesting}
              title="Unit Testing"
              description="The Crucial Role of Unit Testing: Writing Testable Code with Small Functions."
              link="https://medium.com/@hnjessa/the-crucial-role-of-unit-testing-writing-testable-code-with-small-functions-4181c1d25004"
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogCards
              imgPath={aiml}
              title="Artificial Intelligence/Machine Learning"
              description="The Transformative Impact of Artificial Intelligence and Machine Learning on the Programming World."
              link="https://medium.com/@hnjessa/the-transformative-impact-of-artificial-intelligence-and-machine-learning-on-the-programming-world-d3060248d13a"
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogCards
              imgPath={sqlvsnosql}
              title="SQL vs NoSQL"
              description="SQL vs. NoSQL: Unraveling the Differences in Database Management."
              link="https://medium.com/@hnjessa/sql-vs-nosql-unraveling-the-differences-in-database-management-97e5b115557a"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Blogs