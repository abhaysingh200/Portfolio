import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Footer from "../components/Footer";

const Home = () => (
  <>
    
    <Hero />
    <Skills/>
    <Projects />
    <Certificates />
    <Footer />
  </>
);

export default Home;
