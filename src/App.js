import React from "react";
//import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Section, WorkExperience } from "./custom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon icon={faInstagram} />
        <h1 className="nameID">Nádia Dias</h1>
        <p>Front-end Developer</p>
      </header>
      <Section
        title="Personal Summary"
        text="  Highly skilled software development professional with expertise in
        software design and development. Demonstrates a creative problem-solving
        approach and meticulous attention to detail. Known for exceptional
        organization and dedication to delivering quality work. Collaborative
        team player committed to contributing to company success. Resourceful
        professional with successful track record in developing innovative web
        designs and features. Possesses solid knowledge of HTML, CSS, JavaScript
        and Bootstrap with ability to quickly learn new technologies.
        Demonstrated success in identifying and resolving complex code issues
      "
      />

      <WorkExperience
        title="Frontend developer at Mov.Ai"
        worktitle="Frontend developer"
        date="07/2023 to date"
        place="Mov.Ai - Lisbon, Portugal"
        environment="React, Storybook, Node.js, Bootstrap, CSS, Python, Ruby, Vue.js, Typescript"
        tools="GitLab, GitHub, Atlassian (Jira and Confluence), Docker, Jenkins; Visual Studio Code"
        description="• Created components and tests in Storybook React;
• Mentored and guided team members in React;
• Developed comprehensive component library in React;
• Mentored and guided team members on Frontend subjects.
"
      />

      <WorkExperience
        title="Frontend developer at Tyson Food Service"
        worktitle="Frontend developer"
        date="04/2022 to 06/2023"
        place="Tyson Food Service - Lisbon, Portugal"
        environment="React, Storybook, Node.js, Bootstrap, CSS, Angular, JavaScript, Java, Maven, JSON"
        tools="GitLab, GitHub, Atlassian (Jira and Confluence), Docker, Jenkins; Visual Studio Code, Adobe
Experience Manager (AEM)."
        description=" Played key in developing site using AEM IDE.
• Developed comprehensive component library in React and Angular.
• Mentored and guided team members for both AEM and Frontend subjects
"
      />

      <WorkExperience
        title="Software Developer at RichFish,Lda"
        worktitle="Software Developer"
        date="04/2022 to 06/2023"
        place="RichFish,Lda - Sesimbra, Portugal"
        environment="React, Node.js, Bootstrap, CSS, Angular, JavaScript, Python, C#, MySQL"
        tools="GitLab, GitHub, Atlassian (Jira and Confluence), Docker, Jenkins; Visual Studio Code, Canva,
Figma."
        description=" Created E-commerce website using Angular v12.
• Conducted thorough testing of website.
• Created Figma and Canva docs with UI/Ux ideas.
• Actively participated in marketing meetings.
• Developed software for inventory and orders management.
"
      />
    </div>
  );
}

export default App;
