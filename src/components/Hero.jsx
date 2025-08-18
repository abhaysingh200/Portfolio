import React from "react";
import MyPhoto from "../assets/myphoto.jpg";
import "../styles/hero.css";
import resume from "../assets/Resume.pdf"; 

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
       
       
        <div className="hero-text">
          <h1 className="hero-title">Abhay Singh Shekhawat</h1>
          <p className="hero-role">Blockchain & Software Developer | Java + Backend Enthusiast</p>
          <p className="hero-description">
            Aspiring Blockchain Developer with strong skills in Java, backend systems, and full-stack web development. Experienced in building smart contracts, decentralized apps, scalable APIs, and robust software solutions. Currently pursuing BCA and open to opportunities in blockchain, backend, and software development roles.
          </p>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className="hero-button">Download Resume</button>
          </a>
        </div>

    
        <div className="hero-image-wrapper">
          <img
            src={MyPhoto}
            alt="Abhay"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
