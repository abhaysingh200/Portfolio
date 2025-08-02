import React from "react";

const skills = [
  "React.js", "HTML", "CSS", "JavaScript",
  "Node.js", "Express.js", "MongoDB", "REST Api","Blockchain", "Solidity","DSA","Problem-Solving",
  "WordPress", "Git", "Postman"
];

const Skills = () => {
  return (
    <section className="bg-[#0e1117] px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-800 text-white px-6 py-2 rounded-full text-md hover:bg-blue-500 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
    