import React from "react";
import "../styles/skills.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGit } from "react-icons/fa";
import { SiMongodb, SiPostman, SiSolidity, SiExpress, SiWordpress, SiApollographql } from "react-icons/si";
import { MdOutlineTerminal } from "react-icons/md";
import { SiBlockchaindotcom } from "react-icons/si";
import {FaPuzzlePiece } from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";

const skills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "REST API", icon: <SiApollographql /> },
  { name: "Blockchain", icon: <SiBlockchaindotcom /> },
  { name: "Solidity", icon: <SiSolidity /> },
  { name: "DSA", icon: <TbBinaryTree  /> },
  { name: "Problem Solving", icon: <FaPuzzlePiece  /> },
  { name: "WordPress", icon: <SiWordpress /> },
  { name: "Git", icon: <FaGit /> },
  { name: "Postman", icon: <SiPostman /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-heading">Skills</h2>
        <div className="skills-grid">
  {skills.map((skill, index) => (
    <div key={index} className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <p className="skill-text">{skill.name}</p>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Skills;
