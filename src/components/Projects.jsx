import React from "react";
import sampleImage from "../assets/sample-project.jpg";
import gdriveimge from "../assets/gdriveimg.png"
import ecommerce from "../assets/ecommerce.png"
import { Link } from "react-router-dom";

const projects = [
    {
        title: "GDrive 3.0",
        description:
            "Developed a decentralized file uploader dApp with secure IPFS storage via Pinata. Integrated MetaMask for wallet authentication and smart contracts for access control and file sharing.",
        image: gdriveimge,
        link: "https://github.com/abhaysingh200/Web3FileUpload",
    },
    {
        title: "Real-Time Live Chat App",
        description:
            "Built a real-time chat app with room-based messaging, MetaMask wallet connection, file sharing, and voice note features. Mobile-responsive UI and public tunneling enabled via Ngrok.",
        image: sampleImage,
        link: "https://github.com/abhaysingh200/LiveChatApp",
    },
    {
        title: "Full-Stack eCommerce Platform",
        description:
            "Developed a full-featured eCommerce web app with separate dashboards for sellers and buyers, product management, and secure user authentication (JWT). Sellers can add/edit/delete products, while buyers can browse and place orders. Clean, responsive UI built with TailwindCSS.",
        image: ecommerce,
        link: "https://github.com/abhaysingh200/Ecommerce",
    },
];


const Projects = () => {
    return (
        <section className="bg-[#0e1117] px-6 md:px-16 py-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-white">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#161b22] rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                            <p className="text-gray-300 mt-2 flex-1">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 text-sm text-blue-300 hover:underline self-start"
                            >
                                View Project on GitHub
                            </a>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
