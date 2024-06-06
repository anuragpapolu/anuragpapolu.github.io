import React from "react";
import {
  IoHammerOutline,
  IoBulbOutline,
  IoTelescopeOutline,
} from "react-icons/io5";
import workExperiences from "../data/work";
import educationExperiences from "../data/education";
import projectExperiences from "../data/projects";
import "../scss/Experiences.scss";

// Display a list of experiences
function ExperiencesList({ icon, experiences }) {
  return (
    <div className="experiences">
      <div className="experiences-list">
        {icon}
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
        <hr />
      </div>
    </div>
  );
}

// Display information on a specific experience
function ExperienceCard({ experience }) {
  const { title, startDate, endDate, notes } = experience;
  return (
    <div className="experience-item">
      <p className="title">{title}</p>
      <small>
        {role} | {startDate} - {endDate}
      </small>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

// Display work experience
export function Work() {
  return (
    <ExperiencesList icon={<IoHammerOutline />} experiences={workExperiences} />
  );
}

// Display education
export function Education() {
  return (
    <ExperiencesList
      icon={<IoBulbOutline />}
      experiences={educationExperiences}
    />
  );
}

// Display side project experience
export function Projects() {
  return (
    <ExperiencesList
      icon={<IoTelescopeOutline />}
      experiences={projectExperiences}
    />
  );
}
