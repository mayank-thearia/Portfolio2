import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import resumeImg from "../../Assets/pd.jpg";
import pdf from "../../Assets/pd.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            download
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume" style={{ justifyContent: "center", marginTop: 40 }}>
          <img
            src={resumeImg}
            alt="Mayank Theria Resume"
            style={{ width: "100%", maxWidth: 800, borderRadius: 12, boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}
          />
        </Row>
        <Row style={{ justifyContent: "center", position: "relative", marginTop: 40 }}>
          <Button
            variant="primary"
            href={pdf}
            download
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
