import React from "react";
import "../styles/projects.css";
import sampleImage from "../assets/realChatApp.jpg";
import gdriveimge from "../assets/gdriveimg.png";
import ecommerce from "../assets/ecommerce.png";
import nftmarketplace from "../assets/NftMarketPlace.png";
import rentRental from "../assets/SmartRentalBlockchain.PNG";
import JavaMedical from "../assets/JavaMedicalProject.PNG";
import Criminal from "../assets/CriminalRecordManagement.PNG";
import FlowAutomation from "../assets/FlowAutomation.PNG";
const categorizedProjects = {
  Blockchain: [
    {
      title: "GDrive 3.0",
      description: "A decentralized file storage dApp leveraging IPFS for data storage, MetaMask for authentication, and Ethereum smart contracts for security.",
      image: gdriveimge,
      github: "https://github.com/abhaysingh200/Web3FileUpload",
    },
    {
      title: "NFT-Marketplace",
      description: "Blockchain-based marketplace to mint, buy, and sell NFTs with IPFS storage and MetaMask integration.",
      image: nftmarketplace,
      github: "https://github.com/abhaysingh200/NFT-Marketplace",
    },
    {
      title: "Rent-Rental Project",
      description: "Smart contract powered rental system ensuring transparent agreements and secure payments on blockchain.",
      image: rentRental,
      github: "https://github.com/abhaysingh200/Rent-Rental-Blockchain",
    },
  ],
  Fullstack: [
    {
      title: "Real-Time Live Chat App",
      description: "Full-stack chat application with real-time messaging, file sharing, and voice notes using WebSockets and secure authentication.",
      image: sampleImage,
      github: "https://github.com/abhaysingh200/LiveChatApp",
    },
    {
      title: "Full-Stack eCommerce Platform",
      description: "MERN-based eCommerce system featuring product management, seller/buyer dashboards, JWT authentication, and Tailwind CSS UI.",
      image: ecommerce,
      github: "https://github.com/abhaysingh200/Ecommerce",
    },
  ],
  Java: [
    {
      title: "Criminal Record Management",
      description: "Java + MySQL project for managing criminal records with CRUD operations, search functionality, and data persistence.",
      image: Criminal,
      github: "https://github.com/abhaysingh200/CriminalRecordSystem",
    },
    {
      title: "Hospital Management System",
      description: "Java-based CLI project applying OOP concepts to manage patients, doctors, and appointments efficiently.",
      image: JavaMedical,
      github: "https://github.com/abhaysingh200/UpgradMedicalProjectJava",
    },
  ],
  Automation: [
    {
      title: "Make Automation-Workflow",
      description: "Automated workflow to generate invoices from WooCommerce orders, reducing manual work and ensuring accuracy.",
      image: FlowAutomation
    },
  ],
};


const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">Projects</h2>

        {Object.entries(categorizedProjects).map(([category, projects]) => (
          <div key={category} className="category-section">
            <h3 className="category-title">{category}</h3>

            <div className="project-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-buttons">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
