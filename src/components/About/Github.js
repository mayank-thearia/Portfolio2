import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">Digital Marketing</strong> Journey
      </h1>
      <p style={{ color: '#c084f5', fontSize: 18, textAlign: 'center', marginBottom: 0 }}>
        Consistently creating content, managing campaigns, and building brand presence online.
      </p>
    </Row>
  );
}

export default Github;
