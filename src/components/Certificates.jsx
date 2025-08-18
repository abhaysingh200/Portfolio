import React from "react";

import BackendDevelopment from "../assets/BackendDevelopment.png";
import BlockchainAndItsApplication from "../assets/BlockchainAndItsApplication.png";
import JavaBootcampWinner from "../assets/JavaBootcampWinner.png";
import hackathon from "../assets/hackathon.jpeg";
import internship from "../assets/internship.jpeg";
import "../styles/certificates.css";

const certificatesData = [
  {
    name: "Java Bootcamp Winner",
    org: "Upgrad-Bootcamp",
    image: JavaBootcampWinner,
    link: "https://certificate.givemycertificate.com/c/cadfd6b4-6869-4e30-976c-56ca1af0ccd7",
  },
  {
    name: "Blockchain Developer",
    org: "Upgrad-Campus",
    image: BlockchainAndItsApplication,
    link: "https://upgradcampus.certificate.givemycertificate.com/c/feebf47f-7ca9-4338-98a4-98197bf560e6",
  },
  {
    name: "Backend Developer",
    org: "Upgrad-Campus",
    image: BackendDevelopment,
    link: "https://upgradcampus.certificate.givemycertificate.com/c/733e9c25-bb60-4940-b9d0-943fe62664d6",
  },
  {
    name: "Modular Worlds Hackathon",
    org: "BlockseBlock",
    image: hackathon,
    link: hackathon,
  },
  {
    name: "Internship Certificate",
    org: "BlockseBlock",
    image: internship,
    link: internship,
  },
];

const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-container">
        <h2 className="certificates-heading">Certificates</h2>
        <div className="certificates-grid">
          {certificatesData.map((cert, index) => (
            <div key={index} className="certificate-card">
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.image}
                  alt={cert.name || "Certificate"}
                  className="certificate-image"
                />
              </a>
              <h3 className="certificate-title">{cert.name}</h3>
              <p className="certificate-org">Issued by: {cert.org}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
