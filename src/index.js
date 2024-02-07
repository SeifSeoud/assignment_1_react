//  import React from "react";
import React, { useState } from "react";

import ReactDOM from "react-dom/client";
import image from "./Seif.jpg";
import "./index.css";
const skills = [
  {
    skill: "Html+CSS",
    level: "advanced",
    color: "#2662EA",
    check: true,
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
    check: true,
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
    check: true,
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84f33",
    check: false,
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
    check: true,
  },
  {
    skill: "Svelte",
    level: "advanced",
    color: "#ff3d00",
    check: false,
  },
];
function App() {
  return <Card />;
}

function Color(props) {
  const { num, skillsObj } = props;
  return (
    <div>
      <div className={`box box${num + 1}`}>
        {skillsObj.check ? `${skillsObj.skill} 💪` : `${skillsObj.skill} 👍`}
      </div>
    </div>
  );
}

function Card() {
  const skilles = skills;

  return (
    <div className="container">
      <img src={image} alt="seif" className="image" />
      <h1 className="name">Seif Seoud</h1>
      <p className="description">
        Full-stack web developer and teacher at udemy. when not coding or
        parparing a course, , i like to play board games, to cook (and eat), or
        to just enjoy the Portuguese sun at beach
      </p>
      <div className="colors">
        {skilles.map((skil, index) => (
          <Color skillsObj={skil} key={skil.skill} num={index} />
        ))}
        {/* <div className="box box1">HTML+CSS 💪</div>
        <div className="box box2">JavaScript 💪</div>
        <div className="box box3">Web Design 💪</div>
        <div className="box box4">Git and GitHub 👍</div>
        <div className="box box5">React 💪</div>
        <div className="box box6">Svelte 👩‍🦲</div> */}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
