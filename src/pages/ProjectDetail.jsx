import React from "react";
import { useParams } from "react-router-dom";

const dummyProjects = [
  {
    title: "Talk-A-Tive – MERN Stack Chat App",
    description:
      "Full real-time chat with group chats, socket.io, MongoDB, profile editing, and auth.",
  },
  {
    title: "MERN Stack API Project",
    description: "Backend API with user handling, CRUD, RESTful routes and frontend integration.",
  },
  {
    title: "WordPress Websites",
    description: "Professional eCommerce and service websites using Elementor & custom plugins.",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = dummyProjects[id];

  if (!project) return <div className="text-white p-10">Project Not Found</div>;

  return (
    <div className="bg-[#0e1117] min-h-screen text-white px-6 md:px-20 py-16">
      <h1 className="text-3xl font-bold text-blue-400">{project.title}</h1>
      <p className="mt-6 text-gray-300">{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
