import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiFacebook,
  SiInstagram,
  SiTwitter,
  SiLinkedin,
  SiYoutube,
  SiSlack
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFacebook />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiInstagram />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTwitter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinkedin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiYoutube />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
    </Row>
  );
}

export default Toolstack;
