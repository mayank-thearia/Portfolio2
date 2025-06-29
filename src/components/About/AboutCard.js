import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mayank Theria</span> from <span className="purple">Punjab, India.</span>
            <br />
            I am 20 years old and hold a 6-month certificate in Digital Marketing, as well as certifications in Social Media Marketing and Graphic Designing.
            <br />
            I help brands increase their reach, build a strong social presence, and create a unique brand identity.
            <br />
            <br />
            Apart from my professional work, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mayank Theria</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
