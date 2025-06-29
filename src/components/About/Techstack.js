import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCanva,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiGoogleanalytics,
  SiMailchimp,
  SiHootsuite,
  SiBuffer,
  SiTrello
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleanalytics />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMailchimp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHootsuite />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBuffer />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
      </Col>
    </Row>
  );
}

export default Techstack;
