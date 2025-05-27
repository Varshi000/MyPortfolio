import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hema Varshini Kommoju </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am recently graduated with a B.Tech degree from Aditya Engineering College, Andhra Pradesh.
            <br />
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 👨‍👩‍👧‍👦 Spending quality time with my family
            </li>
            <li className="about-activity">
              <ImPointRight /> 🧠 Exploring new things and learning beyond the screen
            </li>
            <li className="about-activity">
              <ImPointRight /> 🎮 playing games when i need a brain break
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Varshini</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
